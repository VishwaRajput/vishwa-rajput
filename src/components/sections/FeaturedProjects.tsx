'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { Layers, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Server, Cpu, Database, Code2 } from 'lucide-react';
import styles from './FeaturedProjects.module.scss';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ['All', 'Data Engineering', 'GenAI & RAG', 'Machine Learning', 'Software Engineering'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(prev => (prev === id ? null : id));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Data Engineering': return <Database size={14} />;
      case 'GenAI & RAG': return <Cpu size={14} />;
      case 'Machine Learning': return <Server size={14} />;
      default: return <Code2 size={14} />;
    }
  };

  return (
    <section id="projects" className={styles.projectsSection} aria-label="Production Projects">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerTop}>
            <div className={styles.badge}>
              <Layers size={14} />
              <span>Production Systems &amp; Case Studies</span>
            </div>
            
            {/* Filter Pills */}
            <div className={styles.filterGroup}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.filterBtn} ${activeFilter === cat ? styles.activeFilter : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <h2 className={styles.title}>
            Engineered for <span className={styles.accentText}>Throughput, Precision,</span> and Scale.
          </h2>
          <p className={styles.subtitle}>
            Industrialized data pipelines, automated machine learning workflows, and enterprise architectures built for real operational environments.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className={styles.projectList}>
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.cardMain}>
                  
                  {/* Left Column: Organization & Identity */}
                  <div className={styles.cardMeta}>
                    <div className={styles.projectCategoryTag}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                    <div className={styles.orgTimeline}>
                      <span className={styles.orgName}>{project.organization}</span>
                      <span className={styles.dotSeparator}>•</span>
                      <span className={styles.timelineText}>{project.timeline}</span>
                    </div>
                    <div className={styles.projectRole}>{project.role}</div>
                  </div>

                  {/* Middle Column: Title & Narrative */}
                  <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                    <p className={styles.projectDescription}>{project.description}</p>

                    {/* Metrics Callouts */}
                    <div className={styles.metricsStrip}>
                      {project.impactMetrics.map((metric, mIdx) => (
                        <div key={mIdx} className={styles.metricItem}>
                          <span className={styles.metricVal}>{metric.value}</span>
                          <span className={styles.metricLbl}>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className={styles.techPills}>
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span key={tIdx} className={styles.techPill}>{tech}</span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className={styles.techPillMore}>+{project.technologies.length - 5}</span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Interaction Trigger */}
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.expandButton}
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isExpanded}
                      aria-label={`View architectural details for ${project.title}`}
                    >
                      <span>{isExpanded ? 'Hide Architecture' : 'View Architecture'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                </div>

                {/* Collapsible Architecture & Engineering Breakdown */}
                {isExpanded && (
                  <div className={styles.expandedDrawer}>
                    <div className={styles.drawerGrid}>
                      
                      {/* Challenge */}
                      <div className={styles.drawerBlock}>
                        <div className={styles.drawerLabel}>The Engineering Challenge</div>
                        <p className={styles.drawerText}>{project.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className={styles.drawerBlock}>
                        <div className={styles.drawerLabel}>Implemented Solution</div>
                        <p className={styles.drawerText}>{project.solution}</p>
                      </div>

                      {/* Architecture Highlights */}
                      <div className={`${styles.drawerBlock} ${styles.fullWidth}`}>
                        <div className={styles.drawerLabel}>Architecture &amp; Pipeline Highlights</div>
                        <ul className={styles.architectureList}>
                          {project.architecturePoints.map((point, ptIdx) => (
                            <li key={ptIdx}>
                              <CheckCircle2 size={15} className={styles.checkIcon} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
