'use client';

import React from 'react';
import { PERSONAL_DATA } from '@/data/portfolioData';
import { Compass, Sparkles, Terminal, Database, BrainCircuit, Heart } from 'lucide-react';
import styles from './NarrativeSection.module.scss';

export default function NarrativeSection() {
  const storyPillars = [
    {
      phase: "FOUNDATION",
      title: "Software Engineering Rigor",
      location: "India • Tatvasoft",
      icon: <Terminal size={18} />,
      narrative: "Before training neural networks or designing distributed DAGs, I spent years developing full-stack enterprise systems in C# and .NET with complex relational databases (MSSQL, Oracle, MySQL). This instilled an uncompromising respect for code maintainability, clean API design, and production reliability."
    },
    {
      phase: "SCALE",
      title: "Enterprise Data & Cloud Workflows",
      location: "Germany • Decathlon",
      icon: <Database size={18} />,
      narrative: "Transitioning to Germany, I joined Decathlon to build production-scale data solutions. Operating on tens of thousands of products daily in Delta Lake and AWS/GCP, I industrialized Data pipelines, automated marketplace governance with Facebook fastText, and orchestrated resilient Airflow DAGs that shrank deployment cycles from weeks to days."
    },
    {
      phase: "FRONTIER",
      title: "Generative AI & Hybrid Retrieval",
      location: "Würzburg • THWS",
      icon: <BrainCircuit size={18} />,
      narrative: "Completing my Master of Science in Artificial Intelligence at THWS, my research focused on hybrid retrieval architectures. By merging Neo4j knowledge graphs with Chroma vector spaces and vision-language models, I developed systematic methods to eliminate hallucinations in dense regulatory question-answering."
    }
  ];

  return (
    <section id="narrative" className={styles.narrativeSection} aria-label="Professional Narrative">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Compass size={14} />
            <span>The Trajectory</span>
          </div>
          <h2 className={styles.title}>
            Engineering AI that <span className={styles.accentText}>Works in the Real World</span>.
          </h2>
          <p className={styles.subtitle}>
            A synthesis of software craftsmanship, enterprise-scale data infrastructure, and advanced generative intelligence.
          </p>
        </div>

        {/* Narrative Flow Grid */}
        <div className={styles.pillarsGrid}>
          {storyPillars.map((pillar, idx) => (
            <div key={idx} className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <div className={styles.pillarMeta}>
                  <span className={styles.pillarPhase}>{pillar.phase}</span>
                  <span className={styles.pillarLocation}>{pillar.location}</span>
                </div>
                <div className={styles.pillarIconCircle}>
                  {pillar.icon}
                </div>
              </div>

              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.narrative}</p>

              <div className={styles.pillarStepNum}>0{idx + 1}</div>
            </div>
          ))}
        </div>

        {/* Philosophy Callout Quote */}
        <div className={styles.philosophyBlock}>
          <div className={styles.quoteAccent} />
          <blockquote className={styles.quoteText}>
            “I enjoy connecting AI capabilities with real applications, data platforms, APIs, and business processes rather than treating AI as an isolated technology.”
          </blockquote>
          <div className={styles.quoteAuthor}>
            — {PERSONAL_DATA.name} • Cover Letter &amp; Engineering Philosophy
          </div>
        </div>

      </div>
    </section>
  );
}
