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

export const hero = {
  title: 'Paradigm',
  subtitle: 'Governed analytics for outpatient operations.',
  description:
    'A synthetic healthcare analytics project that turns operational activity into reproducible KPIs, BI-ready evidence, quality checks and a scoped ML prioritization experiment.',
  disclaimer:
    'Synthetic data only. No real patients, providers, or organizations.',
  commandCenterTitle: 'Data Command Center',
  commandCenterBadge: 'Preview',
} as const

/** Source / core / outputs for the hero command center (qualitative only). */
export const heroCommandLayers = [
  { label: 'Source', value: 'Synthetic CSVs' },
  { label: 'Core', value: 'Governed SQLite Mart' },
  { label: 'Outputs', value: 'Power BI, Tableau, ML Experiment' },
] as const

export const heroAssuranceChips = ['Quality Checks', 'KPI Validation'] as const

export const heroSqlSnippet = `SELECT period, no_show_rate, billed_revenue
FROM governed_kpi_views
WHERE data_source = 'synthetic';`

export const badges = [
  'Python',
  'SQL',
  'SQLite',
  'Power BI',
  'Tableau',
  'scikit-learn',
  'Synthetic Data',
] as const

export const problem = {
  title: 'Why Paradigm exists',
  paragraphs: [
    'Outpatient operations generate friction: no-shows, late cancellations, schedule gaps and billing mismatches. Paradigm focuses on building a trusted analytical layer before insights are presented.',
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
  title: 'Scoped ML experiment',
  paragraphs: [
    'Paradigm includes a methodology-focused no-show prioritization experiment. It demonstrates target definition, leakage controls, temporal splitting, ranking-oriented metrics, and interpretability of feature influence.',
    'It is not a production prediction system. It does not perform clinical decision-making and is not validated for deployment.',
    'Synthetic data limitations are documented explicitly — including cases where synthetic generator dynamics produce weak discrimination metrics.',
  ],
  callout:
    'Synthetic ROC-AUC can be weak; that limitation is documented as a property of the generator and experimental setup — not surfaced as a fake “success” metric.',
} as const

export const reproducibility = {
  title: 'Run the pipeline',
  intro:
    'The commands below are evidence of an end-to-end analytical pipeline you can run locally. They document build steps — not a hosted SaaS product or service level guarantee.',
  commands: [
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
  title: 'From dashboard evidence to governed analytics',
  body: 'Paradigm was built to show how analytical systems should be structured before insights are trusted: definitions, lineage, validation, consumption layers, and honest limitations.',
} as const

export const footer = {
  line1: 'Paradigm — Synthetic healthcare analytics engineering case study.',
  line2: 'Synthetic data only. No real patients, providers, or organizations.',
} as const
