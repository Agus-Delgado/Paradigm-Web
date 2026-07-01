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

export const SCREENSHOTS_BASE = '/assets/screenshots'
export const DASHBOARD_IMAGE_SRC = `${SCREENSHOTS_BASE}/analysis_results.png`
export const DEMO_PREVIEW_IMAGE_SRC = `${SCREENSHOTS_BASE}/tabs_overview.png`

export const hero = {
  title: 'Data & AI Project Ecosystem',
  subtitle: 'Paradigm · ClarusFlow · LumenVox',
  description:
    'Three complementary portfolio projects covering analytics engineering, Python data automation, data quality, NLP, reporting and business insights.',
  subcopy:
    'Paradigm is the deepest case study in the ecosystem, while ClarusFlow and LumenVox extend the portfolio into Python automation and NLP feedback intelligence.',
  disclaimer:
    'Synthetic and portfolio-only projects. No real patients, customers or organizations are represented.',
  hubBadge: 'Portfolio hub',
  flowSteps: ['Raw data', 'Quality', 'Analytics', 'NLP insights'] as const,
} as const

export const heroEcosystemMap = {
  title: 'Ecosystem map',
  footer: 'From raw data and messy files to trusted analytics and AI-supported insight.',
  layers: [
    {
      project: 'Paradigm',
      tagline: 'Structured analytics',
      signals: 'Governed KPIs · BI · Healthcare analytics',
      accent: 'paradigm',
    },
    {
      project: 'ClarusFlow',
      tagline: 'Operational data automation',
      signals: 'Python · Data quality · ETL',
      accent: 'clarusflow',
    },
    {
      project: 'LumenVox',
      tagline: 'Text intelligence',
      signals: 'NLP · Feedback · Executive insights',
      accent: 'lumenvox',
    },
  ],
} as const

export const liveFeatures = {
  title: 'Paradigm in action',
  intro:
    'Static screenshots from the separate interactive demo — guided analysis, SQL exploration, immersive data views, and explainable ML on the governed mart.',
  disclaimer:
    'These are static screenshots from the separate interactive Paradigm demo. The live Streamlit portal is maintained separately from this landing.',
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
      title: 'Root-Cause Wizard',
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
      title: 'Immersive Data Explorer',
      body: 'Row-level inspection of synthetic outpatient records with filters, sorting, and drill-down tables.',
      imageSrc: `${SCREENSHOTS_BASE}/data_explorer.png`,
      imageAlt: 'Immersive data explorer — filtered outpatient records',
    },
    {
      id: 'analysis-results',
      title: 'Guided Analysis + Recommendations',
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

export const badges = ['Python', 'SQL', 'NLP', 'Synthetic Data', 'BI'] as const

export const ecosystem = {
  title: 'Three complementary Data & AI projects',
  intro:
    'Each project focuses on a different layer of applied data work: governed analytics, operational automation, and NLP-driven insight generation.',
  projects: [
    {
      id: 'paradigm',
      title: 'Paradigm',
      label: 'Analytics Engineering · BI · Healthcare Analytics',
      role: 'Governed analytics and BI layer',
      body: 'Governed analytics case study for outpatient operations, with synthetic data, analytical modeling, validated KPIs, BI-ready outputs and scoped ML experimentation.',
      signals: ['SQL', 'BI', 'KPI Governance', 'ML Experiment'],
      accent: 'paradigm',
    },
    {
      id: 'clarusflow',
      title: 'ClarusFlow',
      label: 'Python Data Automation · Data Quality · ETL',
      role: 'Operational automation and data quality layer',
      body: 'Python pipeline that transforms messy SaaS operational files into clean, validated and analysis-ready datasets with QA reports and operational summaries.',
      signals: ['Python', 'pandas', 'ETL', 'Data Quality'],
      accent: 'clarusflow',
    },
    {
      id: 'lumenvox',
      title: 'LumenVox',
      label: 'NLP · Feedback Intelligence · Executive Reporting',
      role: 'Text intelligence and executive insight layer',
      body: 'NLP project that converts unstructured feedback into sentiment, recurring themes, critical signals and executive insights.',
      signals: ['NLP', 'Sentiment', 'Themes', 'Reporting'],
      accent: 'lumenvox',
    },
  ],
} as const

export const complementarity = {
  title: 'Different layers, one portfolio narrative',
  intro:
    'The three projects are intentionally different. Together, they show how operational data, messy files and unstructured text can become trusted analytics and decision-ready insights.',
  closing:
    'Together, they demonstrate a practical Data/BI/AI profile across structured analytics, file automation and unstructured text intelligence.',
  layers: [
    {
      title: 'Data foundation and governed analytics',
      project: 'Paradigm',
      output: 'Governed mart & BI-ready KPIs',
      skills: ['SQL', 'BI', 'KPI governance', 'analytical modeling', 'ML experiment'],
      accent: 'paradigm',
    },
    {
      title: 'Operational automation and data quality',
      project: 'ClarusFlow',
      output: 'Validated datasets & QA reports',
      skills: ['Python', 'pandas', 'ingestion', 'cleaning', 'validation', 'ETL'],
      accent: 'clarusflow',
    },
    {
      title: 'Text intelligence and executive insight',
      project: 'LumenVox',
      output: 'Sentiment themes & executive briefs',
      skills: ['NLP', 'sentiment analysis', 'topic classification', 'reporting'],
      accent: 'lumenvox',
    },
  ],
} as const

export const paradigmDeepDive = {
  eyebrow: 'Deep Dive',
  title: 'Paradigm Deep Dive',
  subtitle: 'A complete analytics engineering case study for healthcare operations.',
  body: 'The following sections go deeper into Paradigm because it is the most developed case study in the ecosystem. It covers pipeline design, governed KPIs, dashboard evidence, scoped ML experimentation and reproducibility.',
  trioReminder:
    'Paradigm is the most developed case study; ClarusFlow and LumenVox are covered above.',
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
  disclaimer:
    'These are static screenshots from the separate interactive Paradigm demo. Not an embedded application.',
  screenshotAlt: 'Power BI executive dashboard — synthetic sample',
} as const

export const demoPreview = {
  title: 'Workflow preview',
  intro:
    'A static overview of how the Paradigm analytical modules connect — portfolio evidence from the separate interactive demo.',
  disclaimer: 'Static screenshot from the separate interactive demo. Not an embedded application.',
  imageAlt: 'Paradigm demo module overview — static portfolio screenshot on synthetic data',
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
  links: [
    { href: '#ecosystem', label: 'Projects' },
    { href: '#complementarity', label: 'Layers' },
    { href: '#paradigm-deep-dive', label: 'Deep Dive' },
  ],
} as const
