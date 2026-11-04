# Vishwa Rajput — Personal Portfolio Website

An editorial, cinematic digital portfolio for **Vishwa Rajput**, AI Engineer and Data Engineer.

## Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router)
- **Styling**: SCSS & SCSS Modules with custom design tokens
- **Motion & Interaction**: GSAP 3, ScrollTrigger, Lenis Smooth Scrolling, Framer Motion
- **3D & WebGL**: Three.js dynamic vector graph & knowledge embedding constellation with automatic CSS fallback
- **Typography**: Inter (sans) & JetBrains Mono (code/metadata)
- **SEO & AI Discoverability**: JSON-LD Structured Data (`Person`, `ProfilePage`, `ScholarlyArticle`), `sitemap.xml`, `robots.txt`, and `llms.txt`

## Getting Started

### Prerequisites

- Node.js 18+ (tested on Node.js v24)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The portfolio will be live at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

## Features

- **Master Thesis Spotlight**: Interactive architecture breakdown of *Multi-Source Retrieval Using Graph and Vector Hybrid Models in Regulatory Contexts* (THWS Würzburg).
- **Production Case Studies**: Detailed breakdowns of Decathlon Germany systems (*Marketplace Auto Rejector*, *Language Check*, *Message Classification*) with verified business impact metrics.
- **Experience Timeline**: Career trajectory spanning Software Engineering (Tatvasoft), Data & Systems Engineering (Decathlon), and Academic Foundations (THWS M.Sc. AI, GTU B.E.).
- **Smooth Lenis Scrolling**: Synchronized with GSAP ScrollTrigger for buttery 60fps transitions.
- **Accessibility**: Strict keyboard navigation, visible focus indicators, screen-reader markup, and full `prefers-reduced-motion` compliance.
- **Zero Fabricated Information**: All metrics, titles, dates, institutions, and project details are verified directly from Vishwa's CV and research papers.
