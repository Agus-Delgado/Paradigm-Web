import type { LandingContent } from './content-types'
import {
  DETAIL_COMMANDS,
  GITHUB_REPO_URL,
  METRICS_DOC_URL,
  ARCHITECTURE_DOC_URL,
  SCREENSHOTS_BASE,
} from '../shared'

export const contentEn: LandingContent = {
  ui: {
    lang: {
      switcherLabel: 'Switch language',
      es: 'ES',
      en: 'EN',
    },
    caseIndex: {
      railTitle: 'Case file',
      navLabel: 'Case index',
      toggleOpen: 'Index',
      toggleClose: 'Close',
      sceneOf: 'Scene {current} of {total}',
      sceneIdle: 'Scene — of {total}',
      idleLabel: 'Case file',
    },
    citation: {
      viewFolio: 'View folio {n}',
      viewFolios: 'View folios {n}',
    },
    decisionLog: {
      statusDocumented: 'Documented',
      finding: 'Finding',
      limitation: 'Limitation',
      citedEvidence: 'Cited evidence',
      citedEvidenceLead: 'Folios',
      citedEvidencePhrase: 'guided analysis and SHAP explainability',
    },
    folio: {
      enlarge: 'Enlarge',
      enlargeAria: 'Enlarge folio {number}: {title}',
      close: 'Close',
      pendingCapture: 'Capture pending',
      pendingAria: '{alt} — capture pending',
      defaultSource: 'Static capture — separate Streamlit demo',
    },
    custody: {
      trackLabel: 'Chain of custody',
      fallbackLink: 'View reference',
    },
    footerNavLabel: 'Footer navigation',
    highlightsLabel: 'Highlights',
    instrumentsListLabel: 'Instruments list',
    pipelineCommandsAria: 'Pipeline commands',
    cierreIndexNavLabel: 'Complete case file index',
    architectureDocLabel: 'Architecture documentation',
  },
  hero: {
    masthead: 'Paradigm — Traceable analytics system',
    caseId: 'Case 001 · Operational no-show',
    titleBefore: 'Before making a ',
    titleDecision: 'decision',
    titleMid: ', someone has to prove where each ',
    titleMetric: 'number',
    titleAfter: ' came from.',
    bodyBefore:
      'Appointments, patients, specialties and operational signals start from fragmented sources. Paradigm turns them into a ',
    bodyValidated: 'validated',
    bodyAfter: ', reproducible analysis documented through to the decision.',
    continueHref: '#problem',
    continueLabel: 'Continue to the opening',
    dataCaptionBefore: 'Sources → ',
    dataCaptionStructure: 'structure',
    decisionNodeLabel: 'decision',
  },
  caseIndex: [
    { id: 'apertura', label: 'Opening', targetId: 'problem' },
    { id: 'instrumentos', label: 'Instruments', targetId: 'live-features' },
    { id: 'caso-no-show', label: 'Clinic No-Show Case', targetId: 'caso-no-show' },
    { id: 'cadena-custodia', label: 'Chain of custody', targetId: 'cadena-custodia' },
    {
      id: 'trazabilidad-gobierno',
      label: 'Traceability & governance',
      targetId: 'trazabilidad',
    },
    { id: 'cierre', label: 'Close', targetId: 'cierre' },
  ],
  problem: {
    eyebrow: 'Scene 01',
    title: 'Why Paradigm exists',
    bodyBefore:
      'Outpatient operations generate friction: no-shows, late cancellations, schedule gaps and billing mismatches. Paradigm focuses on building a ',
    bodyAccent: 'trusted analytical layer',
    bodyAfter:
      ' before insights are presented. It is the primary in-depth case study within this three-project Data & AI portfolio.',
    highlightsLabel: 'Highlights',
    highlights: [
      {
        title: 'Operational friction',
        body: 'No-shows, late cancellations, and schedule gaps.',
      },
      {
        title: 'Analytical trust',
        body: 'Definitions, validation, and time anchoring before insights.',
      },
      {
        title: 'Reproducible outputs',
        body: 'BI, quality checks, and ML experiments from the same governed mart.',
      },
    ],
  },
  liveFeatures: {
    eyebrow: 'Scene 02',
    title: 'Paradigm in action',
    introBefore: 'Coherent instrumentation over the ',
    introAccent: 'governed mart',
    introAfter: ': guided analysis, SQL exploration, data views and explainable ML.',
    listLabel: 'Instruments list',
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
  },
  casoNoShow: {
    eyebrow: 'Scene 03',
    title: 'Clinic No-Show: from operational question to documented decision',
    introBefore: 'A single journey over the governed mart: formulate the question, explore the grain, read the ',
    introEvidence: 'evidence',
    introMid: ' and record what is decided — with an explicit ',
    introLimit: 'limitation',
    introAfter: ', and no invented figures.',
    scope: 'Case 01',
    source: 'Static capture — separate Streamlit demo',
    blocks: {
      pregunta: {
        label: 'Question',
        lead: 'Operations need to know where absenteeism concentrates before distributing the same confirmation effort to all appointments.',
        bodyBefore: 'The thread starts in the root-cause wizard: contextual questions that narrow ',
        citationPhrase: 'where operational friction concentrates',
        bodyAfter:
          ' — trends over time, dimensions with more leakage, and late cancellations — without replacing clinical or operational judgment.',
        threads: ['T1', 'T2', 'T3'],
      },
      exploracion: {
        label: 'Exploration',
        lead: 'With the question scoped, the analysis goes down to the mart: queries and rows over the same governed base, not a parallel extract.',
        bodyBefore: 'The ',
        citationSql: 'SQL Explorer (and NL→SQL)',
        bodyMid: ' interrogates the schema; the ',
        citationData: 'Data Explorer',
        bodyAfter:
          ' inspects synthetic outpatient records with filters and drill-down — the same grain that feeds KPIs and the prioritization experiment.',
      },
      evidencia: {
        label: 'Evidence',
        lead: 'The evidence is not an opaque score: it is guided analysis plus explainability over the ranking.',
        bodyBefore: 'The ',
        citationAnalysis: 'guided analysis with KPIs and recommendations',
        bodyMid:
          ' summarizes attendance and cancellation signals; the prioritization experiment provides ',
        citationShap: 'global and local SHAP',
        bodyAfter:
          ' over mart features, and ARS outreach scenarios as business language — decision support, not production prediction.',
        limitationTitle: 'Documented limitation',
        limitation:
          'Synthetic ROC-AUC remains modest — a documented property of the generator, not a hidden failure. The value here is methodology: leakage controls, temporal splits, ranking metrics, and honest explainability — not inflated performance claims.',
      },
      decision: {
        label: 'Decision',
        leadBefore:
          'Closes the prioritization thread (T6): a ranked list for outreach — ',
        leadDecision: 'decision',
        leadAfter:
          ' support, not autonomous care. What is documented here is scoped: finding, limit, and cited evidence.',
      },
    },
    folios: [
      {
        id: 'no-show-01',
        number: '01',
        title: 'Root-Cause Wizard',
        src: `${SCREENSHOTS_BASE}/wizard_questions.png`,
        alt: 'Root-cause wizard — guided analytical questions',
        context:
          'Contextual step-by-step questions that narrow where operational friction concentrates across your synthetic mart.',
      },
      {
        id: 'no-show-02',
        number: '02',
        title: 'SQL Explorer + NL→SQL',
        src: `${SCREENSHOTS_BASE}/sql_explorer.png`,
        alt: 'SQL Explorer with natural language to SQL on the governed mart',
        context:
          'Query the governed mart with SQL or natural language — interactive, schema-aware exploration without leaving the demo.',
      },
      {
        id: 'no-show-03',
        number: '03',
        title: 'Immersive Data Explorer',
        src: `${SCREENSHOTS_BASE}/data_explorer.png`,
        alt: 'Immersive data explorer — filtered outpatient records',
        context:
          'Row-level inspection of synthetic outpatient records with filters, sorting, and drill-down tables.',
      },
      {
        id: 'no-show-04',
        number: '04',
        title: 'Guided Analysis + Recommendations',
        src: `${SCREENSHOTS_BASE}/analysis_results.png`,
        alt: 'Guided analysis results with KPI charts and recommendations',
        context:
          'Guided KPI analysis with charts and actionable recommendations drawn from validated governed views.',
      },
      {
        id: 'no-show-05',
        number: '05',
        title: 'No-Show ML + SHAP Explainability',
        src: `${SCREENSHOTS_BASE}/no_show_shap.png`,
        alt: 'No-show ML prioritization with SHAP explainability plots',
        context:
          'Ranking experiment with SHAP beeswarm and local plots — auditable drivers, not a black-box score.',
      },
    ],
    decisions: [
      {
        id: 'decision-no-show-01',
        question: 'Where should we concentrate active confirmation efforts?',
        evidenceFolioIds: ['no-show-04', 'no-show-05'],
        finding:
          'The model prioritizes appointments with higher absence risk using the governed mart and SHAP explainability — at global and local levels.',
        limitation:
          'ROC-AUC on synthetic data is modest — a documented property of the generator, not a hidden failure.',
        decision:
          'Concentrate confirmations and reminders on higher-risk segments, instead of applying the same effort to all.',
        status: 'documented',
      },
    ],
  },
  analyticalQuestions: [
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
  ],
  chainOfCustody: {
    eyebrow: 'Scene 04',
    title: 'Chain of custody',
    introBefore: 'Everything reads from ',
    introAccent: 'one governed SQLite mart',
    introAfter:
      ' — so dashboards, validation scripts, and the ML experiment share the same definitions instead of drifting apart.',
    architectureDocLabel: 'Architecture documentation',
    headline: 'One governed mart. Multiple trusted outputs.',
    listLabel: 'View as list',
    nodes: [
      {
        id: 'fuentes',
        label: 'Sources',
        title: 'Synthetic Data Layer',
        body: 'Controlled synthetic generators produce CSV inputs with documented assumptions — not production PHI.',
      },
      {
        id: 'preparacion',
        label: 'Preparation & validation',
        title: 'Quality & Validation',
        body: 'Quality reports and KPI validation scripts catch drift and definition regressions early.',
      },
      {
        id: 'mart',
        label: 'Governed mart',
        title: 'Governed SQLite Mart',
        body: 'A SQLite mart models visits, billing, and schedule events in a consistent star-oriented structure. Hub: Governed SQLite Mart.',
      },
      {
        id: 'analisis',
        label: 'Analysis & models',
        title: 'ML Experiment',
        body: 'A scoped ranking experiment reads from the same mart features — not a parallel feature factory.',
      },
      {
        id: 'evidencia',
        label: 'Evidence',
        title: 'Case evidence',
        body: 'The Clinic No-Show Case folios document exploration and results over the same mart — not an isolated capture.',
        citationPhrase: 'Clinic No-Show Case folios',
        folioIds: ['no-show-02', 'no-show-04'],
      },
      {
        id: 'salidas',
        label: 'BI outputs & documentation',
        title: 'Governed KPI Views · BI Consumption',
        body: 'SQL views encode definitions, time anchoring, and grain so dashboards read stable semantics. Exports land in tool-ready shapes for executive monitoring and exploration.',
      },
      {
        id: 'decision',
        label: 'Decision',
        title: 'Documented decision',
        body: 'The Clinic No-Show Case DecisionLog records finding, limitation, and decision with cited evidence — the final link in the chain.',
        href: '#caso-no-show',
        hrefLabel: 'Go to case and DecisionLog',
      },
    ],
  },
  governedKpis: {
    intro:
      'Each KPI is defined with explicit rules and time anchoring. Numeric targets are not shown on this site. Authoritative definitions and time semantics are documented in docs/metrics.md in the repository.',
    metricsDocNote: 'See docs/metrics.md',
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
  },
  reproducibility: {
    reproLabel: 'Reproducibility',
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
    detailCommands: DETAIL_COMMANDS,
  },
  trazabilidadGobierno: {
    eyebrow: 'Scene 05',
    title: 'Traceability & governance',
    introBefore: 'The ',
    introKpi: 'KPIs',
    introMid: ' are not loose numbers: they have definition, ',
    introValidation: 'validation',
    introAfter: ', and a documented procedure to reproduce them.',
    kpiCitationLabel: 'No-show rate',
    kpiCitationFolioIds: ['no-show-04'],
    commandsIntro:
      'make all runs the full pipeline; make ml trains and explains; make demo launches Streamlit — no manual script chaining.',
    detailLabel: 'View complete commands',
  },
  cierre: {
    eyebrow: 'Close',
    title: 'Case file reviewed',
    body: 'This is the complete case index. You can return to any scene or open the source material.',
    sealBefore: 'Paradigm — case file ',
    sealAccent: 'closed',
    sealAfter: ' in documentation',
    links: [
      { href: GITHUB_REPO_URL, label: 'Repository' },
      { href: METRICS_DOC_URL, label: 'Metrics' },
      { href: ARCHITECTURE_DOC_URL, label: 'Architecture' },
    ],
    indexExpandLabel: 'View complete index',
    indexNavLabel: 'Complete case file index',
  },
  archivoRelacionado: {
    eyebrow: 'Related files',
    intro:
      'Together, they demonstrate a practical Data/BI/AI profile across structured analytics, file automation, and unstructured text intelligence.',
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
  },
  footer: {
    line1: 'Paradigm · ClarusFlow · LumenVox — Data & AI portfolio ecosystem.',
    line2:
      'Synthetic portfolio projects only. No real patients, customers, providers, or organizations are represented.',
    links: [
      { href: '#problem', label: 'Opening' },
      { href: '#cierre', label: 'Close' },
      { href: '#archivo', label: 'Archive' },
    ],
    navLabel: 'Footer navigation',
  },
}
