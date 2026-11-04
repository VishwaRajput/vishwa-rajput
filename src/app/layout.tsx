import type { Metadata, Viewport } from 'next';
import SmoothScroll from '@/components/common/SmoothScroll';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import Preloader from '@/components/common/Preloader';
import InteractiveCanvas from '@/components/sections/InteractiveCanvas';
import { generatePersonSchema, generateProfilePageSchema, generateCreativeWorkSchemas } from '@/utils/structuredData';
import { PERSONAL_DATA } from '@/data/portfolioData';
import '@/styles/globals.scss';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vishwarajput.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PERSONAL_DATA.name} — AI Engineer & Data Engineer`,
    template: `%s | ${PERSONAL_DATA.name}`,
  },
  description: `${PERSONAL_DATA.name} is an AI Engineer and Data Engineer specializing in Hybrid RAG, Knowledge Graphs, PySpark data pipelines, Airflow DAG orchestration, and production GenAI systems.`,
  keywords: [
    'Vishwa Rajput',
    'AI Engineer',
    'Data Engineer',
    'Hybrid RAG',
    'Graph RAG',
    'Vector Search',
    'Neo4j',
    'ChromaDB',
    'Qwen 2.5 VL',
    'PySpark',
    'Databricks',
    'Apache Airflow',
    'Decathlon Germany',
    'THWS Würzburg',
    'Machine Learning',
    'Generative AI'
  ],
  authors: [{ name: PERSONAL_DATA.name, url: siteUrl }],
  creator: PERSONAL_DATA.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: `${PERSONAL_DATA.name} — AI Engineer & Data Engineer`,
    description: `${PERSONAL_DATA.name} specializes in Hybrid Retrieval (Graph + Vector), PySpark pipelines, Airflow DAG orchestration, and production GenAI systems.`,
    siteName: `${PERSONAL_DATA.name} Portfolio`,
    images: [
      {
        url: '/images/profile.jpeg',
        width: 1200,
        height: 1200,
        alt: `${PERSONAL_DATA.name} Portrait`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_DATA.name} — AI Engineer & Data Engineer`,
    description: `Bridging enterprise data pipelines with hybrid retrieval architectures and generative intelligence.`,
    images: ['/images/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#090a0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = generatePersonSchema();
  const profilePageSchema = generateProfilePageSchema();
  const creativeWorkSchemas = generateCreativeWorkSchemas();

  return (
    <html lang="en">
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchemas) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <div className="grain-overlay" aria-hidden="true" />
          <InteractiveCanvas />
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
