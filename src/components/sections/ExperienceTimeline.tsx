'use client';

import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION_DATA } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight, Download, FileText } from 'lucide-react';
import styles from './ExperienceTimeline.module.scss';

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className={styles.experienceSection} aria-label="Professional Experience & Education">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerRow}>
            <div className={styles.badge}>
              <Briefcase size={14} />
              <span>Career Trajectory &amp; Academic Foundation</span>
            </div>

            {/* Tab Switcher */}
            <div className={styles.tabSwitcher}>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'experience' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={14} />
                <span>Professional Roles</span>
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={14} />
                <span>Formal Education</span>
              </button>
            </div>
          </div>

          <h2 className={styles.title}>
            From Enterprise Systems to <span className={styles.accentText}>AI &amp; Data Engineering</span>.
          </h2>
          <p className={styles.subtitle}>
            A continuous progression combining enterprise software foundations with European cloud data workflows and advanced AI research.
          </p>
        </div>

        {/* Experience Timeline View */}
        {activeTab === 'experience' ? (
          <div className={styles.timelineList}>
            {EXPERIENCES.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineSidebar}>
                  <div className={styles.timelinePeriod}>{item.period}</div>
                  <div className={styles.timelineLocation}>
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                  <div className={styles.timelineType}>{item.type}</div>
                </div>

                <div className={styles.timelineContent}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.companyName}>@ {item.company}</div>
                  </div>

                  <p className={styles.summaryText}>{item.summary}</p>

                  <ul className={styles.highlightsList}>
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={15} className={styles.bulletIcon} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.techTags}>
                    {item.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Education View */
          <div className={styles.educationGrid}>
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.eduHeader}>
                  <div className={styles.eduIconWrapper}>
                    <GraduationCap size={20} />
                  </div>
                  <div className={styles.eduPeriod}>
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className={styles.degreeTitle}>{edu.degree}</h3>
                <div className={styles.institutionName}>{edu.institution}</div>
                <div className={styles.eduLocation}>
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                  <span className={styles.gradeBadge}>{edu.grade}</span>
                </div>

                <ul className={styles.eduDetailsList}>
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>
                      <ChevronRight size={14} className={styles.detailArrow} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Dedicated Resume Download Banner */}
        <div className={styles.resumeBanner}>
          <div className={styles.resumeInfo}>
            <div className={styles.resumeBadge}>
              <FileText size={14} />
              <span>Verified Comprehensive CV</span>
            </div>
            <h4 className={styles.resumeTitle}>Download Full Curriculum Vitae</h4>
            <p className={styles.resumeDesc}>
              Complete overview of production data pipelines, thesis benchmarks, engineering roles, and academic qualifications formatted for HR &amp; technical hiring teams.
            </p>
          </div>
          <div className={styles.resumeAction}>
            <a 
              href="/Vishwa_Rajput_Resume.pdf"
              download="Vishwa_Rajput_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
              title="Download Vishwa Rajput's verified Resume (PDF)"
            >
              <Download size={16} />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
