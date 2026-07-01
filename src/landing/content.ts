/**
 * Configure external URLs when you deploy or publish the repository.
 */
export const GITHUB_REPO_URL = 'https://github.com/Agus-Delgado/Paradigm-.git'
/** Published or raw URL to docs/metrics.md (e.g. GitHub blob link). */
export const METRICS_DOC_URL =
  'https://github.com/Agus-Delgado/Paradigm-/blob/main/docs/metrics.md'
/** Published or raw URL to your architecture documentation. */
export const ARCHITECTURE_DOC_URL =
  'https://github.com/Agus-Delgado/Paradigm-/blob/main/docs/architecture.md'

export const DASHBOARD_IMAGE_SRC = '/assets/paradigm/powerbi_executive.png'
export const DEMO_GIF_SRC = '/assets/paradigm/paradigm-demo-loop.gif'

export const SCREENSHOTS_BASE = '/assets/screenshots'
export const HERO_SCREENSHOT_SRC = `${SCREENSHOTS_BASE}/landing_hero.png`

export const hero = {
  title: 'Paradigm',
  subtitle: 'Data & AI Project Ecosystem',
  description:
    'A portfolio hub connecting three complementary projects: Paradigm for governed analytics, ClarusFlow for Python data automation, and LumenVox for NLP feedback intelligence.',
  disclaimer:
    'Synthetic and portfolio-only projects. No real patients, customers or organizations are represented.',
  liveDemoBadge: 'Live Demo Available',
  screenshotAlt: 'Paradigm Streamlit app — landing hub on synthetic data',
  productPreviewLabel: 'Streamlit live demo preview',
} as const

export const liveFeatures = {
  title: 'En acción',
  intro:
    'Real screens from the Streamlit demo — guided analysis, SQL exploration, immersive data views, and explainable ML on the governed mart.',
  items: [
    {
      id: 'landing',
      title: 'Landing Experience',
      body: 'Unified entry hub to every Streamlit module: datasets, wizards, explorers, and ML — one governed workflow.',
      imageSrc: `${SCREENSHOTS_BASE}/landing_hero.png`,
      imageAlt: 'Paradigm Streamlit landing — module navigation on synthetic data',
    },
    {
      id: 'wizard',
      title: 'Wizard Inteligente (Root-Cause)',
      body: 'Contextual step-by-step questions that narrow where operational friction concentrates across your synthetic mart.',
      imageSrc: `${SCREENSHOTS_BASE}/wizard_questions.png`,
      imageAlt: 'Root-cause wizard — guided analytical questions',
    },
    {
      id: 'sql-explorer',
      title: 'SQL Explorer + NL→SQL',
      body: 'Query the governed mart with SQL or natural language — interactive, schema-aware exploration without leaving the demo.',
      imageSrc: `${SCREENSHOTS_BASE}/sql_explorer.png`,
      imageAlt: 'SQL Explorer with natural language to SQL on the governed mart',
    },
    {
      id: 'data-explorer',
      title: 'Data Explorer Inmersivo',
      body: 'Row-level inspection of synthetic outpatient records with filters, sorting, and drill-down tables.',
      imageSrc: `${SCREENSHOTS_BASE}/data_explorer.png`,
      imageAlt: 'Immersive data explorer — filtered outpatient records',
    },
    {
      id: 'analysis-results',
      title: 'Análisis Guiado + Recomendaciones',
      body: 'Guided KPI analysis with charts and actionable recommendations drawn from validated governed views.',
      imageSrc: `${SCREENSHOTS_BASE}/analysis_results.png`,
      imageAlt: 'Guided analysis results with KPI charts and recommendations',
    },
    {
      id: 'no-show-shap',
      title: 'No-Show ML + SHAP Explainability',
      body: 'Ranking experiment with SHAP beeswarm and local plots — auditable drivers, not a black-box score.',
      imageSrc: `${SCREENSHOTS_BASE}/no_show_shap.png`,
      imageAlt: 'No-show ML prioritization with SHAP explainability plots',
    },
  ],
} as const

export const badges = [
  'Python',
  'SQL',
  'Governed Mart',
  'Power BI',
  'Tableau',
  'scikit-learn',
  'SHAP',
  'ARS Revenue Simulation',
  'Synthetic Data',
] as const

export const ecosystem = {
  title: 'Three projects. One Data & AI portfolio.',
  intro:
    'Each project focuses on a different layer of applied data work: governed analytics, operational data automation, and NLP-driven feedback intelligence.',
  closing:
    'Together, they show a practical path from raw operational data to trusted analytics, automation and AI-supported decision-making.',
  projects: [
    {
      id: 'paradigm',
      title: 'Paradigm',
      label: 'Analytics Engineering · BI · Healthcare Analytics',
      body: 'Governed analytics case study for outpatient operations. It builds a synthetic data foundation, a SQLite analytical mart, validated KPIs, BI-ready outputs and a scoped ML prioritization experiment.',
      signals: ['SQL', 'Power BI', 'Governed KPIs', 'ML Experiment'],
      accent: 'paradigm',
    },
    {
      id: 'clarusflow',
      title: 'ClarusFlow',
      label: 'Python Data Automation · Data Quality · ETL',
      body: 'Python pipeline that transforms messy SaaS operational files into clean, validated and analysis-ready datasets. It covers ingestion, normalization, cleaning, QA, master datasets, Markdown reports and Matplotlib charts.',
      signals: ['Python', 'pandas', 'Data Quality', 'ETL'],
      accent: 'clarusflow',
    },
    {
      id: 'lumenvox',
      title: 'LumenVox',
      label: 'NLP · Feedback Intelligence · Executive Reporting',
      body: 'NLP project that turns unstructured customer feedback into sentiment, recurring themes, critical signals and executive-level insights for business decision-making.',
      signals: ['NLP', 'Sentiment', 'Text Analytics', 'Insights'],
      accent: 'lumenvox',
    },
  ],
} as const

export const problem = {
  title: 'Why Paradigm exists',
  paragraphs: [
    'Outpatient operations generate friction: no-shows, late cancellations, schedule gaps and billing mismatches. Paradigm focuses on building a trusted analytical layer before insights are presented. It is the primary in-depth case study within this three-project Data & AI portfolio.',
  ],
} as const

export const problemHighlights = [
  {
    title: 'Operational friction',
    body: 'No-shows, late cancellations and schedule gaps.',
  },
  {
    title: 'Analytical trust',
    body: 'Definitions, validation and time anchoring before insights.',
  },
  {
    title: 'Reproducible outputs',
    body: 'BI, quality checks and ML experiments from the same governed mart.',
  },
] as const

export const pipelineSection = {
  title: 'How it works',
  eyebrow: 'Pipeline',
  intro:
    'Three phases from synthetic inputs to governed metrics and decision support — scripted, documented and reproducible.',
} as const

export const pipelinePhases = [
  {
    id: 'phase-1',
    title: 'Build the data foundation',
    accent: 'cyan' as const,
    chips: ['Synthetic CSVs', 'SQLite Mart', 'Quality Checks'] as const,
  },
  {
    id: 'phase-2',
    title: 'Govern the analytics layer',
    accent: 'blue' as const,
    chips: ['KPI Validation', 'Governed KPI Views', 'BI Exports'] as const,
  },
  {
    id: 'phase-3',
    title: 'Deliver decision support',
    accent: 'emerald' as const,
    chips: [
      'Power BI / Tableau',
      'Executive Dashboard',
      'ML Prioritization Experiment',
    ] as const,
  },
] as const

export const architectureHub = {
  headline: 'One governed mart. Multiple trusted outputs.',
  centerNode: 'Governed SQLite Mart',
  /** Linear flow after the mart (visual order). */
  flow: ['Power BI', 'Tableau', 'KPI Validation', 'ML Experiment'] as const,
} as const

export const architecture = {
  title: 'Architecture',
  intro:
    'Everything reads from one governed SQLite mart — so dashboards, validation scripts and the ML experiment share the same definitions instead of drifting apart.',
  cards: [
    {
      title: 'Synthetic Data Layer',
      body: 'Controlled synthetic generators produce CSV inputs with documented assumptions — not production PHI.',
    },
    {
      title: 'Dimensional Mart',
      body: 'A SQLite mart models visits, billing, and schedule events in a consistent star-oriented structure.',
    },
    {
      title: 'Governed KPI Views',
      body: 'SQL views encode definitions, time anchoring, and grain so dashboards read stable semantics.',
    },
    {
      title: 'Quality & Validation',
      body: 'Quality reports and KPI validation scripts catch drift and definition regressions early.',
    },
    {
      title: 'BI Consumption',
      body: 'Exports land in tool-ready shapes for executive monitoring and exploration.',
    },
    {
      title: 'ML Experiment',
      body: 'A scoped ranking experiment reads from the same mart features — not a parallel feature factory.',
    },
  ],
} as const

export const dashboardEvidence = {
  title: 'Dashboard preview',
  caption:
    'Executive-style monitoring on synthetic data: attendance, cancellations and revenue signals — for portfolio review only.',
  screenshotAlt: 'Power BI executive dashboard — synthetic sample',
} as const

export const demoPreview = {
  title: 'Workflow preview',
  intro:
    'A short recording of how the analytical flow fits together — same device frame as the screenshot above so both feel equally considered.',
  disclaimer: 'Demo GIF muestra versión temprana del pipeline.',
  gifAlt: 'Short screen capture of the Paradigm workflow — synthetic demonstration only',
} as const

export const governedKpis = {
  title: 'Metrics you can trust',
  intro:
    'Each KPI is defined with explicit rules and time anchoring. Numeric targets are not shown on this site.',
  metricsDocNote:
    'Authoritative definitions and time semantics are documented in docs/metrics.md in the repository.',
  items: [
    'Total appointments',
    'Attended appointments',
    'No-show rate',
    'Cancellation rate',
    'Late cancellation rate',
    'Billed revenue',
    'Revenue per attended appointment',
    'Reconciliation gaps',
  ],
} as const

export const analyticalQuestions = [
  {
    id: 'T1',
    title: 'Trends over time',
    body: 'How attendance, cancels, and revenue signals move across periods at a stable grain.',
  },
  {
    id: 'T2',
    title: 'Where friction concentrates',
    body: 'Which dimensions (e.g. sites, lines of business) concentrate operational leaks.',
  },
  {
    id: 'T3',
    title: 'Late cancellations',
    body: 'How late cancellations differ from other cancel paths and how they distort utilization.',
  },
  {
    id: 'T4',
    title: 'Billed revenue vs attended activity',
    body: 'Aligning financial signals with attended care without treating revenue as a clinical outcome.',
  },
  {
    id: 'T5',
    title: 'Reconciliation gaps',
    body: 'Where schedule, attendance, and billing narratives disagree — and how large the gap is.',
  },
  {
    id: 'T6',
    title: 'Prioritization support',
    body: 'A ranked list for outreach-style workflows — a decision support lens, not autonomous care.',
  },
] as const

export const mlSection = {
  title: 'Explainable No-Show Prioritization',
  intro:
    'A ranking experiment on the governed mart — SHAP explainability, ARS revenue simulation, and a Streamlit demo. Decision support, not production prediction.',
  badges: [
    { label: 'Governed Mart', variant: 'default' as const },
    { label: 'SHAP Explainability', variant: 'emerald' as const },
    { label: 'ARS Revenue Simulation', variant: 'emerald' as const },
    { label: 'Streamlit', variant: 'blue' as const },
    { label: 'scikit-learn', variant: 'default' as const },
  ],
  features: [
    {
      title: 'SHAP explainability',
      body: 'SHAP visualizations — global beeswarm summary and local force plots — surface no-show drivers from the governed mart. Auditable for technical and business stakeholders.',
      accent: 'emerald' as const,
      highlight: false as const,
      viz: 'shap' as const,
      vizCaption: 'SHAP beeswarm summary — illustrative',
    },
    {
      title: 'ARS revenue simulation',
      body: 'What-if scenarios on the ranked list: outreach on top-N patients, slots recovered, and revenue impact in Argentine pesos (ARS). Synthetic case study — not a clinical or financial guarantee.',
      accent: 'cyan' as const,
      highlight: true,
      viz: 'ars-simulator' as const,
      vizCaption: 'ARS revenue simulation — illustrative',
    },
    {
      title: 'Streamlit integration',
      body: 'One demo ties ranking output, SHAP explainability, and ARS revenue simulation — all reading from the governed mart. Reproducible via make demo.',
      accent: 'blue' as const,
      highlight: false as const,
    },
  ],
  calloutTitle: 'Documented limitation',
  callout:
    'Synthetic ROC-AUC remains modest — a documented property of the generator, not a hidden failure. The value here is methodology: leakage controls, temporal splits, ranking metrics, and honest explainability — not inflated performance claims.',
} as const

export const recentImprovements = {
  title: 'Recent Improvements',
  eyebrow: "What's new",
  intro:
    'Latest capabilities on the governed mart — SHAP explainability, ARS revenue simulation, and one-command reproducibility.',
  items: [
    {
      badge: 'SHAP',
      badgeVariant: 'emerald' as const,
      title: 'SHAP explainability',
      body: 'SHAP visualizations on governed mart features — global and local views make influence auditable, not a black-box score.',
      viz: 'shap' as const,
      vizCaption: 'SHAP summary plot',
    },
    {
      badge: 'ARS',
      badgeVariant: 'emerald' as const,
      title: 'ARS revenue simulation',
      body: 'Outreach scenarios with slots recovered and revenue impact in ARS — translating model output into business language.',
      viz: 'ars-simulator' as const,
      vizCaption: 'ARS scenario bars',
    },
    {
      badge: 'Demo',
      badgeVariant: 'blue' as const,
      title: 'Streamlit integration',
      body: 'Ranking, SHAP explainability, and ARS revenue simulation in one interactive workflow — all from the governed mart.',
    },
    {
      badge: 'make',
      badgeVariant: 'default' as const,
      title: 'make all / ml / demo',
      body: 'make all runs the full pipeline; make ml trains and explains; make demo launches Streamlit — no manual script chaining.',
    },
  ],
} as const

export const reproducibility = {
  title: 'Run the pipeline',
  intro:
    'Three commands cover the full analytics engineer workflow — from governed mart to ML explainability and live demo.',
  professionalPath: [
    {
      cmd: 'make all',
      desc: 'Full pipeline: synthetic data → governed mart → BI exports → validation',
      icon: 'terminal' as const,
      primary: true,
    },
    {
      cmd: 'make ml',
      desc: 'Training, SHAP explainability, and ranking artifacts from the governed mart',
      icon: 'sparkline' as const,
      primary: false,
    },
    {
      cmd: 'make demo',
      desc: 'Streamlit app: SHAP visualizations + ARS revenue simulation',
      icon: 'chart' as const,
      primary: false,
    },
  ],
  detailLabel: 'Under the hood',
  detailCommands: [
    'python scripts/generate_paradigm_v2_synthetic.py',
    'python scripts/build_sqlite_mart.py',
    'python scripts/run_data_quality.py',
    'python scripts/export_powerbi_source.py',
    'python scripts/export_tableau_source.py',
    'python scripts/validate_executive_kpis.py',
    'python scripts/train_no_show.py',
  ],
} as const

export const finalCta = {
  title: 'From data foundations to applied AI',
  body: 'Paradigm, ClarusFlow and LumenVox show three complementary layers of modern data work: governed analytics, Python automation, and NLP-driven business intelligence.',
} as const

export const footer = {
  line1: 'Paradigm · ClarusFlow · LumenVox — Data & AI portfolio ecosystem.',
  line2:
    'Synthetic portfolio projects only. No real patients, customers, providers or organizations are represented.',
} as const
