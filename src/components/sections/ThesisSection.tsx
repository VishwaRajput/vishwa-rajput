'use client';

import React, { useState } from 'react';
import { MASTER_THESIS } from '@/data/portfolioData';
import { Network, Database, Layers, CheckCircle2, ChevronRight, Binary, Cpu, FileSearch } from 'lucide-react';
import styles from './ThesisSection.module.scss';

export default function ThesisSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pipelineStages = [
    {
      title: "1. Multimodal Document Parsing & Chunking",
      icon: <FileSearch size={18} />,
      detail: "Regulatory documents contain complex visual hierarchies, tables, and citation structures. Standard naive splitting strips critical context. The pipeline employs layout-aware PDF parsing and semantic chunking to preserve hierarchical legal articles, definitions, and table relationships."
    },
    {
      title: "2. Dual Vector & Graph Knowledge Representation",
      icon: <Binary size={18} />,
      detail: "Chunks are embedded using Sentence Transformers into ChromaDB for dense semantic retrieval. In parallel, entities (regulations, obligations, compliance bodies) and cross-article references are mapped into Neo4j graph nodes and directional relationships."
    },
    {
      title: "3. Hybrid Query Routing & Cypher Synthesis",
      icon: <Network size={18} />,
      detail: "When a complex regulatory query arrives, the engine decomposes the intent. Dense vector similarity captures conceptual semantics, while Cypher queries traverse the knowledge graph to enforce factual compliance constraints and legal citation provenance."
    },
    {
      title: "4. Grounded Synthesis & RAGAS Benchmarking",
      icon: <Cpu size={18} />,
      detail: "Contexts retrieved from both graph paths and vector indices are fused and passed to Qwen 2.5 VL. The entire architecture was systematically benchmarked with the RAGAS evaluation framework, measuring faithfulness, answer relevancy, context recall, and LLM rating."
    }
  ];

  return (
    <section id="research" className={styles.thesisSection} aria-label="Master Thesis Research">
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <Network size={14} />
            <span>Master Thesis Research • THWS Würzburg</span>
          </div>
          <h2 className={styles.title}>
            Multi-Source Retrieval Using <br className={styles.hideMobile} />
            <span className={styles.accentText}>Graph &amp; Vector Hybrid Models</span>
          </h2>
          <p className={styles.subtitle}>
            Investigating and engineering hybrid architectures that eliminate hallucinations in dense regulatory and compliance retrieval-augmented generation.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className={styles.gridContainer}>
          
          {/* Left Column: Thesis Details & Benchmark Cards */}
          <div className={styles.leftCol}>
            <div className={styles.researchCard}>
              <div className={styles.cardTag}>Core Research Problem</div>
              <h3 className={styles.problemTitle}>
                The Failure of Pure Vector RAG in Complex Regulatory Frameworks
              </h3>
              <p className={styles.problemDesc}>
                Traditional dense vector retrieval relies solely on semantic similarity. In regulatory, legal, and financial domains, questions often involve multi-hop relationships, recursive definitions, and strict jurisdictional hierarchies. Vector proximity alone frequently conflates similar-sounding clauses from different regulatory acts, causing ungrounded answers.
              </p>

              {/* Verified Recall Benchmark Metrics */}
              <div className={styles.metricsRow}>
                {MASTER_THESIS.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metricBox}>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <div className={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Contributions List */}
            <div className={styles.contributionsCard}>
              <h4 className={styles.contributionsTitle}>Research Methodology &amp; Engineering</h4>
              <ul className={styles.contributionsList}>
                {MASTER_THESIS.breakdown.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Pipeline Architecture */}
          <div className={styles.rightCol}>
            <div className={styles.architectureViewer}>
              <div className={styles.viewerHeader}>
                <div className={styles.viewerTitleGroup}>
                  <Layers size={16} />
                  <span>Interactive Pipeline Architecture</span>
                </div>
                <span className={styles.statusLive}>RESEARCH BENCHMARK</span>
              </div>

              {/* Stage Selector Tabs */}
              <div className={styles.pipelineSteps}>
                {pipelineStages.map((stage, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.stepButton} ${activeTab === idx ? styles.activeStep : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <span className={styles.stepIcon}>{stage.icon}</span>
                    <span className={styles.stepTitle}>{stage.title}</span>
                    <ChevronRight size={16} className={styles.stepArrow} />
                  </button>
                ))}
              </div>

              {/* Stage Active Detail Box */}
              <div className={styles.stageDetailBox}>
                <div className={styles.stageDetailHeader}>
                  <span className={styles.stageNumber}>Phase 0{activeTab + 1}</span>
                  <span className={styles.stageName}>{pipelineStages[activeTab].title}</span>
                </div>
                <p className={styles.stageText}>
                  {pipelineStages[activeTab].detail}
                </p>
              </div>

              {/* Technologies Applied */}
              <div className={styles.techStackFooter}>
                <div className={styles.techFooterLabel}>Research Stack:</div>
                <div className={styles.techTags}>
                  {MASTER_THESIS.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
