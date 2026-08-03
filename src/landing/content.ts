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

export const hero = {
  masthead: 'Paradigm — Sistema de análisis trazable',
  caseId: 'Caso 001 · Ausentismo operativo',
  title: 'Antes de tomar una decisión, alguien tiene que demostrar de dónde salió cada número.',
  body: 'Turnos, pacientes, especialidades y señales operativas parten de fuentes fragmentadas. Paradigm las convierte en un análisis validado, reproducible y documentado hasta la decisión.',
  fragments: [
    'appointments.csv',
    'patients.csv',
    'specialty_id',
    'attendance_status',
    'lead_time_days',
  ] as const,
  continueHref: '#problem',
  continueLabel: 'Continuar a la apertura',
} as const

/**
 * CaseIndex scenes. Demand Forecast is omitted (no real content in repo).
 */
export const caseIndex = [
  { id: 'apertura', label: 'Apertura', targetId: 'problem' },
  { id: 'instrumentos', label: 'Instrumentos', targetId: 'live-features' },
  { id: 'caso-no-show', label: 'Caso Clinic No-Show', targetId: 'caso-no-show' },
  { id: 'cadena-custodia', label: 'Cadena de custodia', targetId: 'cadena-custodia' },
  { id: 'trazabilidad-gobierno', label: 'Trazabilidad y gobierno', targetId: 'trazabilidad' },
  { id: 'cierre', label: 'Cierre', targetId: 'cierre' },
] as const

export type CaseIndexEntry = (typeof caseIndex)[number]
export type CaseSceneStatus = 'pending' | 'active' | 'visited'

/** Instrumentos — text index of capabilities; screenshots live only in the Caso folios. */
export const liveFeatures = {
  title: 'Paradigm in action',
  intro:
    'Instrumental coherente sobre el mart gobernado: análisis guiado, exploración SQL, vistas de datos y ML explicable.',
  items: [
    {
      id: 'landing',
      title: 'Landing Experience',
      body: 'Unified entry hub to every Streamlit module: datasets, wizards, explorers, and ML — one governed workflow.',
    },
    {
      id: 'wizard',
      title: 'Root-Cause Wizard',
      body: 'Contextual step-by-step questions that narrow where operational friction concentrates across your synthetic mart.',
    },
    {
      id: 'sql-explorer',
      title: 'SQL Explorer + NL→SQL',
      body: 'Query the governed mart with SQL or natural language — interactive, schema-aware exploration without leaving the demo.',
    },
    {
      id: 'data-explorer',
      title: 'Immersive Data Explorer',
      body: 'Row-level inspection of synthetic outpatient records with filters, sorting, and drill-down tables.',
    },
    {
      id: 'analysis-results',
      title: 'Guided Analysis + Recommendations',
      body: 'Guided KPI analysis with charts and actionable recommendations drawn from validated governed views.',
    },
    {
      id: 'no-show-shap',
      title: 'No-Show ML + SHAP Explainability',
      body: 'Ranking experiment with SHAP beeswarm and local plots — auditable drivers, not a black-box score.',
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

export const architectureHub = {
  headline: 'One governed mart. Multiple trusted outputs.',
  centerNode: 'Governed SQLite Mart',
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

/** Cadena de custodia — seven linear nodes mapped from architecture + case evidence. */
export const chainOfCustody = {
  eyebrow: 'Escena 05',
  title: 'Cadena de custodia',
  intro: architecture.intro,
  headline: architectureHub.headline,
  listLabel: 'Ver como lista',
  nodes: [
    {
      id: 'fuentes',
      label: 'Fuentes',
      title: architecture.cards[0].title,
      body: architecture.cards[0].body,
    },
    {
      id: 'preparacion',
      label: 'Preparación y validación',
      title: architecture.cards[3].title,
      body: architecture.cards[3].body,
    },
    {
      id: 'mart',
      label: 'Mart gobernado',
      title: architectureHub.centerNode,
      body: `${architecture.cards[1].body} Hub: ${architectureHub.centerNode}.`,
    },
    {
      id: 'analisis',
      label: 'Análisis y modelos',
      title: architecture.cards[5].title,
      body: architecture.cards[5].body,
    },
    {
      id: 'evidencia',
      label: 'Evidencia',
      title: 'Evidencia del caso',
      body: 'Los folios del Caso Clinic No-Show documentan exploración y resultados sobre el mismo mart — no una captura aislada.',
      citationPhrase: 'folios del Caso Clinic No-Show',
      folioIds: ['no-show-02', 'no-show-04'] as const,
    },
    {
      id: 'salidas',
      label: 'Salidas BI y documentación',
      title: `${architecture.cards[2].title} · ${architecture.cards[4].title}`,
      body: `${architecture.cards[2].body} ${architecture.cards[4].body}`,
    },
    {
      id: 'decision',
      label: 'Decisión',
      title: 'Decisión documentada',
      body: 'El DecisionLog del Caso Clinic No-Show registra hallazgo, limitación y decisión con evidencia citada — el eslabón final de la cadena.',
      href: '#caso-no-show',
      hrefLabel: 'Ir al caso y DecisionLog',
    },
  ],
} as const

export type ChainOfCustodyNode = (typeof chainOfCustody.nodes)[number]

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
  calloutTitle: 'Documented limitation',
  callout:
    'Synthetic ROC-AUC remains modest — a documented property of the generator, not a hidden failure. The value here is methodology: leakage controls, temporal splits, ranking metrics, and honest explainability — not inflated performance claims.',
} as const

/** Caso Clinic No-Show — narrative Pregunta → Exploración → Evidencia → Decisión. */
export const casoNoShow = {
  eyebrow: 'Caso 01 — Ausentismo',
  title: 'Clinic No-Show: de la pregunta operativa a la decisión documentada',
  intro:
    'Un solo recorrido sobre el mart gobernado: formular la pregunta, explorar el grano, leer la evidencia y registrar qué se decide — con limitación explícita, sin cifras inventadas.',
  scope: 'Caso 01',
  source: 'Captura estática — demo Streamlit separada',
  blocks: {
    pregunta: {
      label: 'Pregunta',
      lead: 'La operación necesita saber dónde se concentra el ausentismo antes de repartir el mismo esfuerzo de confirmación a todos los turnos.',
      bodyBefore: 'El hilo empieza en el asistente de causa raíz: preguntas contextuales que acotan ',
      citationPhrase: 'dónde se concentra la fricción operativa',
      bodyAfter:
        ' — tendencias en el tiempo, dimensiones con más fuga y cancelaciones tardías — sin sustituir el juicio clínico ni operacional.',
      threads: ['T1', 'T2', 'T3'] as const,
    },
    exploracion: {
      label: 'Exploración',
      lead: 'Con la pregunta acotada, el análisis baja al mart: consultas y filas sobre la misma base gobernada, no sobre un extracto paralelo.',
      bodyBefore: 'El ',
      citationSql: 'SQL Explorer (y NL→SQL)',
      bodyMid: ' interroga el esquema; el ',
      citationData: 'Data Explorer',
      bodyAfter:
        ' inspecciona registros sintéticos ambulatorios con filtros y drill-down — el mismo grano que alimenta KPIs y el experimento de priorización.',
    },
    evidencia: {
      label: 'Evidencia',
      lead: 'La evidencia no es un score opaco: es análisis guiado más explicabilidad sobre el ranking.',
      bodyBefore: 'El ',
      citationAnalysis: 'análisis guiado con KPIs y recomendaciones',
      bodyMid:
        ' resume señales de asistencia y cancelación; el experimento de priorización aporta ',
      citationShap: 'SHAP global y local',
      bodyAfter:
        ' sobre features del mart, y escenarios ARS de outreach como lenguaje de negocio — soporte a decisión, no predicción productiva.',
      limitationTitle: mlSection.calloutTitle,
      limitation: mlSection.callout,
    },
    decision: {
      label: 'Decisión',
      lead: 'Cierra el hilo de priorización (T6): una lista rankeada para outreach — soporte a decisión, no cuidado autónomo. Lo documentado aquí es acotado: hallazgo, límite y evidencia citada.',
    },
  },
  folios: [
    {
      id: 'no-show-01',
      number: '01',
      title: liveFeatures.items[1].title,
      src: `${SCREENSHOTS_BASE}/wizard_questions.png`,
      alt: 'Root-cause wizard — guided analytical questions',
      context: liveFeatures.items[1].body,
    },
    {
      id: 'no-show-02',
      number: '02',
      title: liveFeatures.items[2].title,
      src: `${SCREENSHOTS_BASE}/sql_explorer.png`,
      alt: 'SQL Explorer with natural language to SQL on the governed mart',
      context: liveFeatures.items[2].body,
    },
    {
      id: 'no-show-03',
      number: '03',
      title: liveFeatures.items[3].title,
      src: `${SCREENSHOTS_BASE}/data_explorer.png`,
      alt: 'Immersive data explorer — filtered outpatient records',
      context: liveFeatures.items[3].body,
    },
    {
      id: 'no-show-04',
      number: '04',
      title: liveFeatures.items[4].title,
      src: `${SCREENSHOTS_BASE}/analysis_results.png`,
      alt: 'Guided analysis results with KPI charts and recommendations',
      context: liveFeatures.items[4].body,
    },
    {
      id: 'no-show-05',
      number: '05',
      title: liveFeatures.items[5].title,
      src: `${SCREENSHOTS_BASE}/no_show_shap.png`,
      alt: 'No-show ML prioritization with SHAP explainability plots',
      context: liveFeatures.items[5].body,
    },
  ],
  decisions: [
    {
      id: 'decision-no-show-01',
      question: '¿Dónde concentrar el esfuerzo de confirmación activa?',
      evidenceFolioIds: ['no-show-04', 'no-show-05'],
      finding:
        'El modelo prioriza turnos con mayor riesgo de ausencia usando el mart gobernado y explicabilidad SHAP — a nivel global y local.',
      limitation:
        'El ROC-AUC sobre datos sintéticos es modesto — una propiedad documentada del generador, no una falla oculta.',
      decision:
        'Concentrar confirmaciones y recordatorios en los segmentos con mayor riesgo, en vez de aplicar el mismo esfuerzo a todos.',
      status: 'documented' as const,
    },
  ],
} as const

export type DecisionEntry = (typeof casoNoShow.decisions)[number]

export const reproducibility = {
  title: 'Run the pipeline',
  intro:
    'Three commands cover the full analytics engineer workflow — from governed mart to ML explainability and live demo.',
  professionalPath: [
    {
      cmd: 'make all',
      desc: 'Full pipeline: synthetic data → governed mart → BI exports → validation',
    },
    {
      cmd: 'make ml',
      desc: 'Training, SHAP explainability, and ranking artifacts from the governed mart',
    },
    {
      cmd: 'make demo',
      desc: 'Streamlit app: SHAP visualizations + ARS revenue simulation',
    },
  ],
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

/** Trazabilidad y gobierno — KPIs + reproducibilidad fused. */
export const trazabilidadGobierno = {
  eyebrow: 'Escena 06',
  title: 'Trazabilidad y gobierno',
  intro:
    'Los KPIs no son números sueltos: tienen definición, validación y un procedimiento documentado para volver a producirlos.',
  kpiCitationLabel: 'No-show rate',
  kpiCitationFolioIds: ['no-show-04'] as const,
  commandsIntro:
    'make all runs the full pipeline; make ml trains and explains; make demo launches Streamlit — no manual script chaining.',
  detailLabel: 'Ver comandos completos',
} as const

/** Cierre del expediente — índice completo + enlaces documentales. */
export const cierre = {
  eyebrow: 'Cierre',
  title: 'Expediente recorrido',
  body: 'Este es el índice completo del caso. Podés volver a cualquier escena o abrir el material fuente.',
  seal: 'Paradigm — expediente cerrado en documentación',
  links: [
    { href: GITHUB_REPO_URL, label: 'Repositorio' },
    { href: METRICS_DOC_URL, label: 'Métricas' },
    { href: ARCHITECTURE_DOC_URL, label: 'Arquitectura' },
  ] as const,
  indexExpandLabel: 'Ver índice completo',
} as const

/** Archivo relacionado — portfolio appendix outside CaseIndex. */
export const archivoRelacionado = {
  eyebrow: 'Archivo relacionado',
  intro:
    'Together, they demonstrate a practical Data/BI/AI profile across structured analytics, file automation and unstructured text intelligence.',
  projects: [
    {
      id: 'clarusflow',
      title: 'ClarusFlow',
      role: 'Operational automation and data quality layer',
    },
    {
      id: 'lumenvox',
      title: 'LumenVox',
      role: 'Text intelligence and executive insight layer',
    },
  ],
} as const

export const footer = {
  line1: 'Paradigm · ClarusFlow · LumenVox — Data & AI portfolio ecosystem.',
  line2:
    'Synthetic portfolio projects only. No real patients, customers, providers or organizations are represented.',
  links: [
    { href: '#problem', label: 'Apertura' },
    { href: '#cierre', label: 'Cierre' },
    { href: '#archivo', label: 'Archivo' },
  ],
} as const
