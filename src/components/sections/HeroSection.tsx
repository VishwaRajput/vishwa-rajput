'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { PERSONAL_DATA, MASTER_THESIS } from '@/data/portfolioData';
import { useSmoothScroll } from '@/components/common/SmoothScroll';
import { scrollToAnchor, prefersReducedMotion } from '@/utils/animations';
import { ArrowDown, FileText, Database, Network, Cpu, ArrowUpRight, Download } from 'lucide-react';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const photoWrapperRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
      .fromTo(
        `.${styles.headlineLine}`,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo(
        `.${styles.heroBio}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        `.${styles.ctaGroup}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.5'
      )
      .fromTo(
        photoWrapperRef.current,
        { opacity: 0, scale: 0.96, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        `.${styles.techPill}`,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08 },
        '-=0.6'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToAnchor('#research', lenis);
  };

  return (
    <section id="hero" className={styles.heroSection} ref={heroRef} aria-label="Introduction">
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Left Column: Editorial Headline & Identity */}
          <div className={styles.textCol}>
            
            {/* Coordinates & Status Beacon */}
            <div className={styles.metaRow} ref={badgeRef}>
              <div className={styles.locationTag}>
                <span className={styles.coordDot} />
                <span>{PERSONAL_DATA.location} • {PERSONAL_DATA.coordinates}</span>
              </div>
              <div className={styles.thesisPill}>
                <span>M.Sc. AI (THWS)</span>
              </div>
            </div>

            {/* Deliberate Editorial Headline */}
            <h1 className={styles.heroHeadline} ref={headlineRef}>
              <span className={styles.headlineLine}>Building Reliable</span>
              <span className={styles.headlineLine}>
                <span className={styles.gradientHighlight}>Intelligence</span> &amp;
              </span>
              <span className={styles.headlineLine}>Enterprise Data Scale.</span>
            </h1>

            {/* Contextual Narrative Summary */}
            <p className={styles.heroBio}>
              I am <strong className={styles.authorName}>{PERSONAL_DATA.name}</strong>, an AI Engineer and Data Engineer. 
              I design and productionize end-to-end data pipelines with <span className={styles.techTerm}>PySpark</span>, 
              <span className={styles.techTerm}>Databricks</span>, and <span className={styles.techTerm}>Airflow</span>, 
              and research hybrid retrieval architectures bridging <span className={styles.techTerm}>Knowledge Graphs</span> with 
              <span className={styles.techTerm}>Vector Search</span>.
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a 
                href="#research" 
                onClick={handleExploreClick}
                className={styles.primaryButton}
              >
                <span>Explore Thesis &amp; Systems</span>
                <ArrowDown size={16} />
              </a>

              <a 
                href="/Vishwa_Rajput_Resume.pdf"
                download="Vishwa_Rajput_Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.secondaryButton}
                title="Download Vishwa Rajput's verified Resume (PDF)"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Micro Architecture Badges */}
            <div className={styles.techSpecs}>
              <div className={styles.techPill}>
                <Network size={14} />
                <span>Hybrid RAG (Neo4j + Chroma)</span>
              </div>
              <div className={styles.techPill}>
                <Database size={14} />
                <span>Delta Lake / PySpark ETL</span>
              </div>
              <div className={styles.techPill}>
                <Cpu size={14} />
                <span>Qwen 2.5 VL &amp; RAGAS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Portrait */}
          <div className={styles.photoCol}>
            <div className={styles.portraitWrapper} ref={photoWrapperRef}>
              <div className={styles.portraitGlow} />
              
              <div className={styles.imageContainer}>
                <Image
                  src="/images/profile.jpeg"
                  alt="Vishwa Rajput — AI and Data Engineer"
                  width={560}
                  height={560}
                  priority
                  className={styles.portraitImage}
                  quality={90}
                />
                
                {/* Floating Architectural Badge */}
                <div className={styles.floatingCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndicator} />
                    <span className={styles.cardLabel}>THESIS HIGHLIGHT</span>
                  </div>
                  <div className={styles.cardStat}>85% Recall</div>
                  <p className={styles.cardDesc}>
                    Hybrid Graph + Vector Model in Regulatory QA
                  </p>
                </div>

                {/* Floating Production Impact Badge */}
                <div className={styles.floatingCardSecondary}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIndicatorEmerald} />
                    <span className={styles.cardLabel}>DECATHLON GERMANY</span>
                  </div>
                  <div className={styles.cardStat}>10k+ / day</div>
                  <p className={styles.cardDesc}>
                    Automated marketplace product validation pipeline
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
