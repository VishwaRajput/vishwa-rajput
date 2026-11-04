import { PERSONAL_DATA, MASTER_THESIS, PROJECTS, EXPERIENCES, EDUCATION_DATA } from '@/data/portfolioData';

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_DATA.name,
    "jobTitle": PERSONAL_DATA.roleTitle,
    "description": PERSONAL_DATA.bio[0],
    "email": PERSONAL_DATA.email,
    "telephone": [PERSONAL_DATA.phoneGermany, PERSONAL_DATA.phoneIndia],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Würzburg",
      "addressCountry": "DE"
    },
    "sameAs": [
      PERSONAL_DATA.socials.linkedin,
      PERSONAL_DATA.socials.github
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models",
      "Retrieval Augmented Generation (RAG)",
      "Graph RAG",
      "Vector Search",
      "Data Engineering",
      "PySpark",
      "Apache Airflow",
      "Databricks",
      "AWS",
      "Computer Vision"
    ],
    "alumniOf": EDUCATION_DATA.map(edu => ({
      "@type": "CollegeOrUniversity",
      "name": edu.institution,
      "address": edu.location
    })),
    "worksFor": {
      "@type": "Organization",
      "name": "Decathlon Germany"
    }
  };
}

export function generateProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": PERSONAL_DATA.name,
      "alternateName": "Vishwa Rajput AI Engineer",
      "description": `${PERSONAL_DATA.name} is an AI Engineer and Data Engineer specializing in Hybrid RAG, PySpark pipelines, Airflow orchestration, and LLM systems.`
    }
  };
}

export function generateCreativeWorkSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": MASTER_THESIS.title,
      "author": {
        "@type": "Person",
        "name": PERSONAL_DATA.name
      },
      "description": MASTER_THESIS.abstract,
      "educationalLevel": MASTER_THESIS.degree,
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": MASTER_THESIS.institution
      }
    },
    ...PROJECTS.map(proj => ({
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "name": proj.title,
      "description": proj.description,
      "programmingLanguage": proj.technologies.join(", "),
      "creator": {
        "@type": "Person",
        "name": PERSONAL_DATA.name
      }
    }))
  ];
}
