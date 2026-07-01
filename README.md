# Paradigm Web

Landing page and **Data & AI portfolio hub** for three complementary projects:

- **Paradigm** — Analytics Engineering · BI · Healthcare Analytics
- **ClarusFlow** — Python Data Automation · Data Quality · ETL
- **LumenVox** — NLP · Feedback Intelligence · Executive Reporting

This repository contains the public-facing web presentation. The analytical engine, pipeline scripts, documentation and source case study for Paradigm live in the main Paradigm repository.

## Live Purpose

Paradigm Web was built to present the portfolio in a clear, visual and recruiter-friendly way. **Paradigm remains the primary in-depth case study** on this landing; ClarusFlow and LumenVox are introduced as complementary portfolio projects that demonstrate different layers of applied data work.

The page explains:

- The Data & AI project ecosystem and how the three projects complement each other
- What Paradigm is and why it exists
- How the analytical pipeline works
- How the governed SQLite mart powers BI, validation and ML outputs
- What metrics are included
- How the Power BI dashboard and workflow preview look
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

No backend is required for this landing page.

## Main Sections

The landing includes:

1. **Overview**  
   Ecosystem introduction, Paradigm hero, GitHub link and synthetic data disclaimer.

2. **Ecosystem**  
   Three-project portfolio overview: Paradigm, ClarusFlow and LumenVox with complementary skills and signals.

3. **Why Paradigm exists**  
   Explanation of the operational and analytical problem the project addresses.

4. **How it works**  
   Three-phase pipeline:
   - Build the data foundation
   - Govern the analytics layer
   - Deliver decision support

5. **Architecture**  
   Visual explanation of the governed mart as a single source of truth.

6. **Dashboard preview**  
   Power BI screenshot showing the executive monitoring layer.

7. **Workflow preview**  
   GIF walkthrough of the analytical flow.

8. **Metrics you can trust**  
   Governed KPI definitions and analytical scope.

9. **Scoped ML experiment**  
   Explanation of the no-show prioritization experiment and its limitations.

10. **Run the pipeline**  
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

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Assets

Main visual assets are stored in:

```
public/assets/paradigm/
```

Expected assets:

- `powerbi_executive.png`
- `paradigm-demo-loop.gif`

## Related Repository

Main Paradigm repository:

https://github.com/Agus-Delgado/Paradigm-.git

## Disclaimer

This portfolio uses synthetic data only.  
No real patients, customers, providers, clinics or organizations are represented.

Paradigm Web is a portfolio presentation layer, not a healthcare or commercial software product.
