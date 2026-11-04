'use client';

import React, { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/utils/animations';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (prefersReducedMotion() || ('ontouchstart' in window) || navigator.maxTouchPoints > 0) {
      return;
    }

    setIsTouchDevice(false);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') ||
        target.closest('[role="button"]')
      );
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth spring trailing ring
    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      <div 
        className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
        aria-hidden="true"
      />
      <div 
        className={`${styles.cursorRing} ${isHovering ? styles.hoveringRing : ''}`}
        style={{ transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)` }}
        aria-hidden="true"
      />
    </>
  );
}
