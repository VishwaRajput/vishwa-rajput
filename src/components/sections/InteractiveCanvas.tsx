'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './InteractiveCanvas.module.scss';
import { prefersReducedMotion } from '@/utils/animations';

export default function InteractiveCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) {
      return;
    }

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Knowledge Graph & Vector Embedding Points
    const nodeCount = 65;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);

    const basePositions: THREE.Vector3[] = [];
    const colorCyan = new THREE.Color(0x38bdf8);
    const colorMuted = new THREE.Color(0x94a3b8);
    const colorEmerald = new THREE.Color(0x10b981);

    for (let i = 0; i < nodeCount; i++) {
      const radius = 9 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      basePositions.push(new THREE.Vector3(x, y, z));

      const col = (i % 5 === 0) ? colorEmerald : (i % 2 === 0 ? colorCyan : colorMuted);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circle texture for soft glowing points
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(56,189,248,0.8)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    const pointMaterial = new THREE.PointsMaterial({
      size: 0.85,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(geometry, pointMaterial);
    scene.add(pointCloud);

    // Vector Edges (Graph connections)
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = basePositions[i].distanceTo(basePositions[j]);
        if (dist < 4.2) {
          linePositions.push(
            basePositions[i].x, basePositions[i].y, basePositions[i].z,
            basePositions[j].x, basePositions[j].y, basePositions[j].z
          );
          lineColors.push(
            0.2, 0.4, 0.5,
            0.2, 0.4, 0.5
          );
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      opacity: 0.22,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let isVisible = true;

    // Pause animation when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      pointCloud.rotation.y = elapsed * 0.04 + mouseX;
      pointCloud.rotation.x = Math.sin(elapsed * 0.02) * 0.1 + mouseY;

      lines.rotation.y = pointCloud.rotation.y;
      lines.rotation.x = pointCloud.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      lineGeometry.dispose();
      pointMaterial.dispose();
      lineMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.canvasContainer} ref={containerRef} aria-hidden="true">
      {!hasWebGL && (
        <div className={styles.fallbackPattern} />
      )}
    </div>
  );
}
