'use client';

import React from 'react';
import { SKILL_CATEGORIES, PERSONAL_DATA } from '@/data/portfolioData';
import { Cpu, Terminal, Database, Languages, Sparkles } from 'lucide-react';
import styles from './CapabilitiesSection.module.scss';

export default function CapabilitiesSection() {
  const getCategoryIcon = (name: string) => {
    if (name.includes('Artificial Intelligence')) return <Cpu size={18} />;
    if (name.includes('Data Engineering')) return <Database size={18} />;
    return <Terminal size={18} />;
  };

  return (
    <section id="capabilities" className={styles.capabilitiesSection} aria-label="Technical Capabilities">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={styles.title}>
            The Engineering <span className={styles.accentText}>Matrix</span>.
          </h2>
          <p className={styles.subtitle}>
            A verified inventory of languages, frameworks, cloud infrastructure, and research tools used to build production AI and distributed pipelines.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className={styles.matrixGrid}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className={styles.capabilityCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  {getCategoryIcon(cat.name)}
                </div>
                <h3 className={styles.categoryName}>{cat.name}</h3>
              </div>

              <div className={styles.skillsList}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillRow}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Languages & International Collaboration Card */}
          <div className={`${styles.capabilityCard} ${styles.languagesCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircleEmerald}>
                <Languages size={18} />
              </div>
              <h3 className={styles.categoryName}>Languages &amp; Mobility</h3>
            </div>

            <div className={styles.languagesGrid}>
              {PERSONAL_DATA.languages.map((lang, lIdx) => (
                <div key={lIdx} className={styles.langItem}>
                  <div className={styles.langName}>{lang.name}</div>
                  <div className={styles.langProficiency}>{lang.level}</div>
                </div>
              ))}
            </div>

            <div className={styles.mobilityFooter}>
              <div className={styles.mobilityLabel}>Operating Base:</div>
              <div className={styles.mobilityText}>
                Würzburg / Munich / Remote (Germany &amp; EU)
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
