# Paradigm Web

Landing page and **Data & AI portfolio hub** for three complementary projects:

- **Paradigm** — Analytics Engineering · BI · Healthcare Analytics
- **ClarusFlow** — Python Data Automation · Data Quality · ETL
- **LumenVox** — NLP · Feedback Intelligence · Executive Reporting

This repository contains the public-facing web presentation only. The analytical engine, pipeline scripts, Streamlit portal and source case study for Paradigm live in the main Paradigm repository.

## What This Site Is

Paradigm Web is a **portfolio hub**, not an embedded application. It introduces the full Data & AI ecosystem, then goes deeper into **Paradigm** as the primary case study.

- **Overview & Projects** — ecosystem positioning for Paradigm, ClarusFlow and LumenVox
- **Layers** — how the three projects complement each other across structured analytics, file automation and NLP
- **Paradigm Deep Dive** — pipeline, architecture, demo screenshots, dashboard evidence, ML and reproducibility

The **live Streamlit portal is not embedded** in this repo or this landing. Demo sections use **static screenshots** from the separate interactive demo as portfolio evidence.

**ClarusFlow** and **LumenVox** are complementary portfolio projects that extend the hub beyond the Paradigm deep dive.

All projects use **synthetic / portfolio-only data**. No real patients, customers or organizations are represented.

## Live Purpose

Paradigm Web was built to present the portfolio in a clear, visual and recruiter-friendly way. **Paradigm remains the primary in-depth case study** on this landing; ClarusFlow and LumenVox demonstrate different layers of applied data work at the hub level.

The page explains:

- The Data & AI project ecosystem and how the three projects complement each other
- What Paradigm is and why it exists
- How the analytical pipeline works
- How the governed SQLite mart powers BI, validation and ML outputs
- What metrics are included
- How dashboard and workflow previews look (static screenshots)
- Why the ML component is scoped as a methodology experiment, not a production prediction system

## Project Positioning

These are **synthetic portfolio projects only**. They are not commercial products and do not use real patient, customer or organizational data.

**Paradigm** is a synthetic healthcare analytics engineering case study designed to demonstrate:

- Data modeling
- SQL-based analytical layers
- KPI governance
- Data quality validation
- BI consumption
- Reproducibility
- Responsible ML framing

**ClarusFlow** demonstrates Python data automation, ETL and data quality on messy operational files.

**LumenVox** demonstrates NLP, sentiment analysis, thematic classification and executive reporting from unstructured feedback.

## Tech Stack

- React
- Vite
- TypeScript
- CSS
- Static assets served from `public/`

No backend is required for this landing page. No React Router — single-page scroll with hash anchors.

## Main Sections

The landing includes:

1. **Overview**  
   Ecosystem hero, GitHub link, portfolio disclaimer and static demo preview (not an embedded app).

2. **Projects**  
   Three-project portfolio overview: Paradigm, ClarusFlow and LumenVox.

3. **Layers**  
   Complementarity matrix: governed analytics, operational automation and NLP intelligence.

4. **Paradigm Deep Dive**  
   Separator before Paradigm-specific technical sections.

5. **Why Paradigm exists**  
   Operational and analytical problem framing.

6. **Pipeline**  
   Three-phase flow: data foundation → governed analytics → decision support.

7. **Architecture**  
   Governed mart as a single source of truth.

8. **Demo**  
   Static screenshots from the separate Streamlit demo (not embedded).

9. **Evidence**  
   Dashboard / analysis preview screenshots.

10. **Scoped ML experiment**  
    No-show prioritization methodology and limitations.

11. **Run the pipeline**  
    Reproducibility commands from the main Paradigm project.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The landing is served at `http://localhost:5173/`.

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Assets

Visual assets live under `public/assets/screenshots/`:

- Streamlit demo screenshots used in the hero and demo sections
- `analysis_results.png` — dashboard / evidence preview
- `tabs_overview.png` — workflow module overview preview

Site icon: `public/icons.svg` (referenced from `index.html`).

Previously referenced assets (`powerbi_executive.png`, `paradigm-demo-loop.gif`, `favicon.svg`) are not in this repo; the landing uses existing screenshots instead.

## Related Repository

Main Paradigm repository:

https://github.com/Agus-Delgado/Paradigm-.git

## Disclaimer

This portfolio uses synthetic data only.  
No real patients, customers, providers, clinics or organizations are represented.

Paradigm Web is a portfolio presentation layer, not a healthcare or commercial software product. The Streamlit portal runs separately from this landing.
