export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'GenAI & RAG' | 'Data Engineering' | 'Machine Learning' | 'Software Engineering';
  timeline: string;
  organization: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  architecturePoints: string[];
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string[];
}

export const PERSONAL_DATA = {
  name: "Vishwa Rajput",
  roleTitle: "AI Engineer & Data Engineer",
  tagline: "Bridging large-scale data engineering with hybrid retrieval architectures and generative intelligence.",
  location: "Würzburg, Germany",
  coordinates: "49.7913° N, 9.9534° E",
  email: "vishwarajput001@gmail.com",
  phone: "+49 177 6922843",
  phoneGermany: "+49 177 6922843",
  phoneIndia: "+91 9687807060",
  status: "Available for AI Engineering & Data Engineering roles",
  bio: [
    "I am an AI Engineer and Data Engineer who builds reliable, production-grade intelligence systems. My path combines deep software engineering roots with large-scale data pipelines and cutting-edge GenAI research.",
    "During my Master's at THWS Würzburg, I specialized in hybrid retrieval systems combining vector embeddings and knowledge graphs for complex regulatory domains. In enterprise environments like Decathlon, I engineered automated pipelines that process tens of thousands of products daily, industrialize machine learning workflows, and cut operational friction."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/vishwa-rajput/",
    github: "https://github.com/VishwaRajput"
  },
  languages: [
    { name: "English", level: "Fluent (C1)" },
    { name: "German", level: "Proficient (B1)" },
    { name: "Hindi", level: "Native" },
    { name: "Gujarati", level: "Native" }
  ],
  interests: ["Generative AI", "Knowledge Graphs", "Distributed Pipelines", "Yoga", "Badminton"]
};

export const MASTER_THESIS = {
  title: "Multi-Source Retrieval Using Graph and Vector Hybrid Models in Regulatory Contexts",
  institution: "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)",
  degree: "Master of Science in Computer Science (Artificial Intelligence)",
  period: "Mar 2023 – Mar 2026",
  abstract: "Investigated, designed, and systematically benchmarked hybrid retrieval architectures that combine high-dimensional dense vector embeddings with structured knowledge graphs to resolve ambiguities and hallucinations in complex regulatory question-answering systems.",
  technologies: [
    "Python", "LangChain", "Neo4j (Graph RAG)", "ChromaDB (Vector RAG)", 
    "Qwen 2.5 VL (Vision-Language)", "HuggingFace", "Sentence Transformers", 
    "RAGAS Evaluation", "Ollama", "Prompt Engineering"
  ],
  metrics: [
    { label: "Vector RAG Context Recall", value: "84%" },
    { label: "Graph RAG Context Recall", value: "83%" },
    { label: "Hybrid RAG Context Recall", value: "85%" },
    { label: "Multi-modal Chunk Ingestion", value: "End-to-End" }
  ],
  breakdown: [
    "Constructed end-to-end ingestion and parsing pipelines translating unstructured regulatory PDFs into multimodal chunks and interconnected knowledge graph entities.",
    "Integrated Qwen 2.5 Vision-Language Model with dense semantic embeddings to retain both visual layout context and semantic nuances.",
    "Engineered hybrid query routing combining Cypher graph queries with similarity vector search to navigate dense cross-references and legal citations.",
    "Formulated systematic evaluation using RAGAS, analyzing failure modes, edge cases, and hallucinations to quantify groundedness and answer correctness."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "hybrid-rag-thesis",
    title: "Multi-Source Hybrid RAG System",
    subtitle: "Master Thesis Research • Graph + Vector Retrieval Architecture",
    category: "GenAI & RAG",
    timeline: "2026",
    organization: "THWS Würzburg-Schweinfurt",
    role: "AI Research Engineer",
    description: "A research-grade retrieval system combining Neo4j knowledge graphs with dense vector search in ChromaDB, driven by Qwen 2.5 VL and evaluated with RAGAS.",
    challenge: "Traditional Vector RAG struggles with dense regulatory documents containing cross-references, strict definitions, and hierarchical constraints, causing hallucination and lost context.",
    solution: "Engineered a dual-branch retrieval architecture: vector embeddings capture semantic intent while knowledge graphs enforce factual relationships and structured provenance.",
    impactMetrics: [
      { label: "Hybrid Context Recall", value: "85%" },
      { label: "Vector Baseline Recall", value: "84%" },
      { label: "Knowledge Entities Extracted", value: "Structured" },
      { label: "Evaluated With", value: "RAGAS Framework" }
    ],
    technologies: ["Python", "LangChain", "Neo4j", "ChromaDB", "Qwen 2.5 VL", "HuggingFace", "RAGAS", "Ollama"],
    architecturePoints: [
      "Document parsing & semantic chunking with metadata preservation",
      "Entity and relationship extraction feeding into Neo4j graph schemas",
      "Vector embedding indexing using Sentence Transformers in ChromaDB",
      "Hybrid query synthesizer with prompt engineering for grounded responses"
    ],
    isFeatured: true
  },
  {
    id: "auto-rejector-decathlon",
    title: "Marketplace Auto Rejector",
    subtitle: "Decathlon Germany • Scalable Automated Quality Gate",
    category: "Data Engineering",
    timeline: "2024",
    organization: "Decathlon Germany",
    role: "Data Engineer",
    description: "Automated marketplace product validation pipeline processing 10k+ products daily in Delta Lake, validating catalog rules and synchronizing with Mirakl APIs.",
    challenge: "Manual and semi-automated product approval caused bottlenecks, invalid catalog entries, duplicate variants, and poor online publishing latency.",
    solution: "Built a high-throughput PySpark validation system on Databricks and GCP that performs multi-rule compliance checks, detects duplicate variants, and publishes decisions directly through Mirakl APIs.",
    impactMetrics: [
      { label: "Invalid Publications Reduction", value: "93%" },
      { label: "Daily Processing Volume", value: "10,000+ products" },
      { label: "Storage Engine", value: "Delta Lake" },
      { label: "Integration", value: "Mirakl REST API" }
    ],
    technologies: ["Python", "PySpark", "SQL", "REST API", "Databricks", "GCP", "Delta Lake"],
    architecturePoints: [
      "High-throughput Delta Lake ingestion from European marketplace feeds",
      "Vectorized PySpark rule evaluation and duplicate-variant detection algorithms",
      "Automated rejection and approval webhook dispatcher to Mirakl eCommerce APIs",
      "Full audit trail logging and monitoring metrics for marketplace compliance"
    ],
    isFeatured: true
  },
  {
    id: "language-check-pipeline",
    title: "Marketplace Language Check",
    subtitle: "Decathlon Germany • Automated Attribute Language Validation",
    category: "Data Engineering",
    timeline: "2025",
    organization: "Decathlon Germany",
    role: "Data Engineer",
    description: "Automated production data pipeline utilizing Facebook fastText to detect marketplace attribute languages and validate compliance against target European countries.",
    challenge: "Cross-border marketplace listings frequently contained mismatched attribute languages, violating regional compliance and degrading customer search experience.",
    solution: "Designed and productionized an automated data processing pipeline on AWS using Facebook fastText, PySpark, and Apache Airflow DAGs for scheduled daily execution.",
    impactMetrics: [
      { label: "Execution Cadence", value: "Daily Automated DAGs" },
      { label: "Model Architecture", value: "Facebook fastText" },
      { label: "Pipeline Infrastructure", value: "AWS + Databricks" },
      { label: "Deployment", value: "Git CI/CD Workflows" }
    ],
    technologies: ["Facebook fastText", "Python", "PySpark", "SQL", "Apache Airflow", "AWS", "Databricks", "Git CI/CD"],
    architecturePoints: [
      "Text extraction and normalization from multilingual marketplace product attributes",
      "FastText language identification scoring and thresholding",
      "Cross-validation against target country locale codes",
      "Airflow DAG orchestration with error alerting"
    ],
    isFeatured: true
  },
  {
    id: "message-classification",
    title: "Multilingual Query Routing",
    subtitle: "Decathlon Germany • Customer Query Classification Pipeline",
    category: "Data Engineering",
    timeline: "2025 – 2026",
    organization: "Decathlon Germany",
    role: "Data Engineer / Application Manager",
    description: "Industrialized an automated classification and query routing pipeline for incoming customer support messages across European departments.",
    challenge: "78% of incoming customer inquiries were initially unclassified or routed to incorrect departments, overburdening support teams and inflating resolution times.",
    solution: "Analyzed message datasets to engineer language-specific keyword features, intent patterns, and classification pipelines orchestrated with daily Airflow jobs.",
    impactMetrics: [
      { label: "Unclassified Message Rate", value: "Reduced 78% → 65%" },
      { label: "Automation Level", value: "Daily Scheduled" },
      { label: "Data Scale", value: "Enterprise European" },
      { label: "Routing Latency", value: "Automated" }
    ],
    technologies: ["Python", "PySpark", "SQL", "Apache Airflow", "Databricks", "AWS", "Git CI/CD"],
    architecturePoints: [
      "Text preprocessing and multilingual tokenization of incoming inquiries",
      "Automated pipeline deployment with Git CI/CD and Airflow monitoring"
    ],
    isFeatured: true
  },
  {
    id: "smart-darts",
    title: "Smart Darts Computer Vision",
    subtitle: "Computer Vision & Edge Detection • Automated Game Scoring",
    category: "Machine Learning",
    timeline: "Applied ML",
    organization: "Group Project",
    role: "Computer Vision Developer",
    description: "An automated real-time dart scoring system utilizing computer vision techniques to detect dart tip locations and calculate board points accurately.",
    challenge: "Manual scoring in dart games is prone to human error and interrupts game flow.",
    solution: "Implemented an image processing pipeline using OpenCV in Python that isolates the dartboard, detects the thrown dart tip coordinates, and computes the exact score zone.",
    impactMetrics: [
      { label: "Tip Detection", value: "Sub-pixel Precision" },
      { label: "Core Library", value: "OpenCV & Python" },
      { label: "Scoring Automation", value: "100% Automated" }
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing"],
    architecturePoints: [
      "Perspective transformation and board coordinate calibration",
      "Adaptive background subtraction to detect newly embedded darts",
      "Tip centroid localization and polar coordinate angle mapping to segment rings"
    ],
    isFeatured: false
  },
  {
    id: "amazon-review-sentiment",
    title: "Amazon Review Sentiment Analysis",
    subtitle: "Deep Learning & NLP Classification System",
    category: "Machine Learning",
    timeline: "Applied ML",
    organization: "Independent Engineering",
    role: "ML Engineer",
    description: "Trained and evaluated deep learning neural networks for sentiment classification of customer reviews with 95% accuracy.",
    challenge: "Extracting subtle sentiment signals and negation patterns across noisy, unstructured consumer reviews.",
    solution: "Built a tokenization and dense embedding pipeline paired with neural network architectures for classification.",
    impactMetrics: [
      { label: "Model Accuracy", value: "95%" },
      { label: "Task", value: "Sentiment Classification" },
      { label: "Modality", value: "NLP Text Embeddings" }
    ],
    technologies: ["Python", "NLP", "Neural Networks", "TensorFlow", "Pandas"],
    architecturePoints: [
      "Tokenization, stopword removal, and vocabulary frequency index construction",
      "Dense word embedding representations capturing semantic context",
      "Deep neural network evaluation and hyperparameter tuning"
    ],
    isFeatured: false
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction Engine",
    subtitle: "Machine Learning • Feature Engineering & Gradient Boosting",
    category: "Machine Learning",
    timeline: "Applied ML",
    organization: "Independent Engineering",
    role: "ML Engineer",
    description: "End-to-end regression model utilizing XGBoost with rigorous feature engineering to predict property valuations with 89% accuracy.",
    challenge: "Handling multi-collinear tabular features, skewed distributions, and missing categorical variables in housing datasets.",
    solution: "Engineered comprehensive data preprocessing pipelines, transformation steps, and trained an XGBoost Regressor model.",
    impactMetrics: [
      { label: "Prediction Accuracy", value: "89%" },
      { label: "Algorithm", value: "XGBoost Regressor" },
      { label: "Pipeline", value: "End-to-End Scikit-Learn" }
    ],
    technologies: ["Python", "XGBoost", "Scikit-Learn", "Feature Engineering", "Pandas"],
    architecturePoints: [
      "Outlier removal, log-transformations, and categorical one-hot encoding",
      "Cross-validated feature importance analysis",
      "Hyperparameter optimization for gradient boosting trees"
    ],
    isFeatured: false
  },
  {
    id: "health-questionnaire-system",
    title: "Enterprise Health & Temperature Verification",
    subtitle: "Tatvasoft • Full-Stack Automated Verification System",
    category: "Software Engineering",
    timeline: "2021 – 2022",
    organization: "Tatvasoft",
    role: "Software Engineer",
    description: "Developed enterprise web application generating dynamic QR codes via automated email workflows based on customer health questionnaires.",
    challenge: "Managing physical check-ins during health monitoring periods required frictionless, verifiable contactless verification.",
    solution: "Constructed high-performance .NET Core MVC application with Dapper, MySQL, and scheduled CRON email jobs delivering authenticated QR tokens.",
    impactMetrics: [
      { label: "Architecture", value: ".NET Core MVC + Dapper" },
      { label: "Database", value: "MySQL Optimized" },
      { label: "Scheduling", value: "Automated CRON" }
    ],
    technologies: [".NET Core MVC", "C#", "Dapper", "MySQL", "JavaScript", "HTML/CSS", "CRON Scheduling"],
    architecturePoints: [
      "Clean relational database schema design with high-speed Dapper ORM queries",
      "Dynamic cryptographic QR code token generation",
      "Background CRON job queue for reliable transaction email dispatch"
    ],
    isFeatured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Decathlon",
    role: "Working Student Data Engineer",
    location: "Germany",
    period: "May 2025 – Feb 2026",
    type: "Data & AI Engineering",
    summary: "Engineered and maintained production-grade data pipelines, automated quality-control processes, and industrialized AI/ML solutions in cloud workflows.",
    highlights: [
      "Developed and maintained large-scale data pipelines using Python, SQL, PySpark, Databricks, AWS, and Apache Airflow.",
      "Designed automated data validation, anomaly monitoring, and quality-control processes ensuring completeness of business-critical datasets.",
      "Implemented Git-based CI/CD, automated testing, and data quality workflows reducing deployment cycles from weeks to days on AWS infrastructure.",
      "Industrialized AI/ML use cases from development prototypes to production cloud environments."
    ],
    technologies: ["Python", "PySpark", "Databricks", "AWS", "Apache Airflow", "SQL", "Git CI/CD"]
  },
  {
    company: "Decathlon",
    role: "Intern Application Manager",
    location: "Germany",
    period: "Oct 2023 – Apr 2025",
    type: "Marketplace & Systems Engineering",
    summary: "Built automated marketplace solutions, analyzed enterprise datasets, and maintained high application reliability for European operations.",
    highlights: [
      "Developed marketplace automation solutions using Python, REST APIs, PySpark, and SQL to automate business processes and improve operational efficiency.",
      "Analyzed large-scale datasets and built business intelligence dashboards supporting strategic management decisions.",
      "Provided Tier-3 application support and troubleshooting, promptly resolving complex technical issues with cross-functional stakeholders."
    ],
    technologies: ["Python", "REST APIs", "PySpark", "SQL", "GCP", "Delta Lake", "Mirakl API"]
  },
  {
    company: "Tatvasoft",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: "Nov 2020 – Feb 2023",
    type: "Enterprise Software Engineering",
    summary: "Designed and developed full-stack enterprise applications and database-driven backend services for international client projects.",
    highlights: [
      "Designed and developed full-stack enterprise applications using C#, .NET Technologies, SQL, REST APIs, MSSQL, Oracle, and MySQL.",
      "Built resilient backend services and database-driven architectures supporting multiple enterprise projects.",
      "Collaborated in Agile development teams, leveraging Git and GitLab for structured version control and delivery pipelines."
    ],
    technologies: ["C#", ".NET Core", "REST APIs", "MSSQL", "Oracle", "MySQL", "Dapper", "GitLab"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Master of Computer Science (Artificial Intelligence)",
    field: "Artificial Intelligence & Advanced Systems",
    institution: "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)",
    location: "Würzburg, Germany",
    period: "Mar 2023 – Mar 2026",
    grade: "GPA: 2.55/5 (German Scale)",
    details: [
      "Thesis: Multi-source Retrieval Using Graph and Vector Hybrid Models in Regulatory Contexts",
      "Advanced coursework: Machine Learning, Deep Learning, Foundation Models, Multimodal AI, Distributed Systems"
    ]
  },
  {
    degree: "Bachelor of Engineering (Computer Engineering)",
    field: "Computer Engineering",
    institution: "Gujarat Technological University",
    location: "India",
    period: "Jul 2016 – Jun 2020",
    grade: "GPA: 8.53/10",
    details: [
      "Comprehensive curriculum in Data Structures, Algorithms, Database Systems, Computer Networks, and Software Engineering",
      "Graduated with First Class with Distinction"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Artificial Intelligence & LLMs",
    skills: [
      { name: "LangChain", level: "Advanced" },
      { name: "Graph RAG (Neo4j)", level: "Advanced" },
      { name: "Vector RAG (ChromaDB)", level: "Advanced" },
      { name: "Qwen 2.5 VL & VLMs", level: "Proficient" },
      { name: "Ollama", level: "Advanced" },
      { name: "Hugging Face", level: "Advanced" },
      { name: "RAGAS Framework", level: "Advanced" },
      { name: "Sentence Transformers", level: "Advanced" },
      { name: "Prompt Engineering", level: "Expert" }
    ]
  },
  {
    name: "Data Engineering & Cloud",
    skills: [
      { name: "Apache Airflow", level: "Advanced" },
      { name: "PySpark", level: "Advanced" },
      { name: "Databricks", level: "Advanced" },
      { name: "Delta Lake", level: "Proficient" },
      { name: "AWS", level: "Proficient" },
      { name: "GCP", level: "Working Knowledge" },
      { name: "SQL & Data Modeling", level: "Expert" },
      { name: "CI/CD & Git Workflows", level: "Advanced" }
    ]
  },
  {
    name: "Software & Machine Learning",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "C# & .NET Core", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "OpenCV", level: "Proficient" },
      { name: "TensorFlow & PyTorch", level: "Proficient" },
      { name: "MSSQL / MySQL / Oracle", level: "Advanced" },
      { name: "Linux & Bash", level: "Advanced" }
    ]
  }
];
