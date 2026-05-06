# Paradigm Web

Landing page for **Paradigm**, a healthcare analytics engineering portfolio case study focused on outpatient operations, governed KPIs, reproducible analytics, BI-ready evidence, quality checks and a scoped ML prioritization experiment.

This repository contains the public-facing web presentation of the project.  
The analytical engine, pipeline scripts, documentation and source case study live in the main Paradigm repository.

## Live Purpose

Paradigm Web was built to present the project in a clear, visual and recruiter-friendly way.

The page explains:

- What Paradigm is
- Why the project exists
- How the analytical pipeline works
- How the governed SQLite mart powers BI, validation and ML outputs
- What metrics are included
- How the Power BI dashboard and workflow preview look
- Why the ML component is scoped as a methodology experiment, not a production prediction system

## Project Positioning

Paradigm is not a clinical product and does not use real patient data.

It is a synthetic healthcare analytics engineering case study designed to demonstrate:

- Data modeling
- SQL-based analytical layers
- KPI governance
- Data quality validation
- BI consumption
- Reproducibility
- Responsible ML framing

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
   Project introduction, positioning, GitHub link and synthetic data disclaimer.

2. **Why Paradigm exists**  
   Explanation of the operational and analytical problem the project addresses.

3. **How it works**  
   Three-phase pipeline:
   - Build the data foundation
   - Govern the analytics layer
   - Deliver decision support

4. **Architecture**  
   Visual explanation of the governed mart as a single source of truth.

5. **Dashboard preview**  
   Power BI screenshot showing the executive monitoring layer.

6. **Workflow preview**  
   GIF walkthrough of the analytical flow.

7. **Metrics you can trust**  
   Governed KPI definitions and analytical scope.

8. **Scoped ML experiment**  
   Explanation of the no-show prioritization experiment and its limitations.

9. **Run the pipeline**  
   Reproducibility commands from the main Paradigm project.

## Local Development

Install dependencies:

```bash
npm install

Run the development server:

npm run dev

Build for production:

npm run build

Preview the production build:

npm run preview
Assets

Main visual assets are stored in:

public/assets/paradigm/

Expected assets:

powerbi_executive.png
paradigm-demo-loop.gif
Related Repository

Main Paradigm repository:

https://github.com/Agus-Delgado/Paradigm-.git
Disclaimer

This project uses synthetic data only.
No real patients, providers, clinics or organizations are represented.

Paradigm Web is a portfolio presentation layer, not a healthcare software product.
