import type { LandingContent } from './content-types'
import {
  DETAIL_COMMANDS,
  GITHUB_REPO_URL,
  METRICS_DOC_URL,
  ARCHITECTURE_DOC_URL,
  SCREENSHOTS_BASE,
} from '../shared'

export const contentEs: LandingContent = {
  ui: {
    lang: {
      switcherLabel: 'Cambiar idioma',
      es: 'ES',
      en: 'EN',
    },
    caseIndex: {
      railTitle: 'Expediente',
      navLabel: 'Índice del expediente',
      toggleOpen: 'Índice',
      toggleClose: 'Cerrar',
      sceneOf: 'Escena {current} de {total}',
      sceneIdle: 'Escena — de {total}',
      idleLabel: 'Expediente',
    },
    citation: {
      viewFolio: 'Ver folio {n}',
      viewFolios: 'Ver folios {n}',
    },
    decisionLog: {
      statusDocumented: 'Documentada',
      finding: 'Hallazgo',
      limitation: 'Limitación',
      citedEvidence: 'Evidencia citada',
      citedEvidenceLead: 'Folios',
      citedEvidencePhrase: 'análisis guiado y explicabilidad SHAP',
    },
    folio: {
      enlarge: 'Ampliar',
      enlargeAria: 'Ampliar folio {number}: {title}',
      close: 'Cerrar',
      pendingCapture: 'Captura pendiente',
      pendingAria: '{alt} — captura pendiente',
      defaultSource: 'Captura estática — demo Streamlit separada',
    },
    custody: {
      trackLabel: 'Cadena de custodia',
      fallbackLink: 'Ver referencia',
    },
    footerNavLabel: 'Navegación del pie de página',
    highlightsLabel: 'Aspectos destacados',
    instrumentsListLabel: 'Lista de instrumentos',
    pipelineCommandsAria: 'Comandos del pipeline',
    cierreIndexNavLabel: 'Índice completo del expediente',
    architectureDocLabel: 'Documentación de arquitectura',
  },
  hero: {
    masthead: 'Paradigm — Sistema de análisis trazable',
    caseId: 'Caso 001 · Ausentismo operativo',
    titleBefore: 'Antes de tomar una ',
    titleDecision: 'decisión',
    titleMid: ', alguien tiene que demostrar de dónde salió cada ',
    titleMetric: 'número',
    titleAfter: '.',
    bodyBefore:
      'Turnos, pacientes, especialidades y señales operativas parten de fuentes fragmentadas. Paradigm las convierte en un análisis ',
    bodyValidated: 'validado',
    bodyAfter: ', reproducible y documentado hasta la decisión.',
    continueHref: '#problem',
    continueLabel: 'Continuar a la apertura',
    dataCaptionBefore: 'Fuentes → ',
    dataCaptionStructure: 'estructura',
    decisionNodeLabel: 'decisión',
  },
  caseIndex: [
    { id: 'apertura', label: 'Apertura', targetId: 'problem' },
    { id: 'instrumentos', label: 'Instrumentos', targetId: 'live-features' },
    { id: 'caso-no-show', label: 'Caso Clinic No-Show', targetId: 'caso-no-show' },
    { id: 'cadena-custodia', label: 'Cadena de custodia', targetId: 'cadena-custodia' },
    {
      id: 'trazabilidad-gobierno',
      label: 'Trazabilidad y gobierno',
      targetId: 'trazabilidad',
    },
    { id: 'cierre', label: 'Cierre', targetId: 'cierre' },
  ],
  problem: {
    eyebrow: 'Escena 01',
    title: 'Por qué existe Paradigm',
    bodyBefore:
      'Las operaciones ambulatorias generan fricción: ausentismo, cancelaciones tardías, brechas de agenda y desalineamientos de facturación. Paradigm se enfoca en construir una ',
    bodyAccent: 'capa analítica confiable',
    bodyAfter:
      ' antes de presentar insights. Es el caso de estudio principal en profundidad dentro de este portfolio Data & AI de tres proyectos.',
    highlightsLabel: 'Aspectos destacados',
    highlights: [
      {
        title: 'Fricción operativa',
        body: 'Ausentismo, cancelaciones tardías y brechas de agenda.',
      },
      {
        title: 'Confianza analítica',
        body: 'Definiciones, validación y anclaje temporal antes de insights.',
      },
      {
        title: 'Salidas reproducibles',
        body: 'BI, controles de calidad y experimentos ML desde el mismo mart gobernado.',
      },
    ],
  },
  liveFeatures: {
    eyebrow: 'Escena 02',
    title: 'Paradigm en acción',
    introBefore: 'Instrumental coherente sobre el ',
    introAccent: 'mart gobernado',
    introAfter: ': análisis guiado, exploración SQL, vistas de datos y ML explicable.',
    listLabel: 'Lista de instrumentos',
    items: [
      {
        id: 'landing',
        title: 'Landing Experience',
        body: 'Hub de entrada unificado a cada módulo Streamlit: datasets, wizards, explorers y ML — un workflow gobernado.',
      },
      {
        id: 'wizard',
        title: 'Root-Cause Wizard',
        body: 'Preguntas contextuales paso a paso que acotan dónde se concentra la fricción operativa sobre tu mart sintético.',
      },
      {
        id: 'sql-explorer',
        title: 'SQL Explorer + NL→SQL',
        body: 'Consulta el mart gobernado con SQL o lenguaje natural — exploración interactiva y con awareness del esquema, sin salir de la demo.',
      },
      {
        id: 'data-explorer',
        title: 'Immersive Data Explorer',
        body: 'Inspección a nivel fila de registros ambulatorios sintéticos con filtros, ordenamiento y tablas drill-down.',
      },
      {
        id: 'analysis-results',
        title: 'Guided Analysis + Recommendations',
        body: 'Análisis guiado de KPIs con gráficos y recomendaciones accionables extraídas de vistas gobernadas validadas.',
      },
      {
        id: 'no-show-shap',
        title: 'No-Show ML + SHAP Explainability',
        body: 'Experimento de ranking con plots SHAP beeswarm y locales — drivers auditables, no un score de caja negra.',
      },
    ],
  },
  casoNoShow: {
    eyebrow: 'Escena 03',
    title: 'Clinic No-Show: de la pregunta operativa a la decisión documentada',
    introBefore: 'Un solo recorrido sobre el mart gobernado: formular la pregunta, explorar el grano, leer la ',
    introEvidence: 'evidencia',
    introMid: ' y registrar qué se decide — con ',
    introLimit: 'limitación',
    introAfter: ' explícita, sin cifras inventadas.',
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
        threads: ['T1', 'T2', 'T3'],
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
        limitationTitle: 'Limitación documentada',
        limitation:
          'El ROC-AUC sintético sigue siendo modesto — una propiedad documentada del generador, no una falla oculta. El valor aquí es la metodología: controles de leakage, splits temporales, métricas de ranking y explicabilidad honesta — no claims de rendimiento inflados.',
      },
      decision: {
        label: 'Decisión',
        leadBefore:
          'Cierra el hilo de priorización (T6): una lista rankeada para outreach — soporte a ',
        leadDecision: 'decisión',
        leadAfter:
          ', no cuidado autónomo. Lo documentado aquí es acotado: hallazgo, límite y evidencia citada.',
      },
    },
    folios: [
      {
        id: 'no-show-01',
        number: '01',
        title: 'Root-Cause Wizard',
        src: `${SCREENSHOTS_BASE}/wizard_questions.png`,
        alt: 'Root-cause wizard — preguntas analíticas guiadas',
        context:
          'Preguntas contextuales paso a paso que acotan dónde se concentra la fricción operativa sobre tu mart sintético.',
      },
      {
        id: 'no-show-02',
        number: '02',
        title: 'SQL Explorer + NL→SQL',
        src: `${SCREENSHOTS_BASE}/sql_explorer.png`,
        alt: 'SQL Explorer con lenguaje natural a SQL sobre el mart gobernado',
        context:
          'Consulta el mart gobernado con SQL o lenguaje natural — exploración interactiva y con awareness del esquema, sin salir de la demo.',
      },
      {
        id: 'no-show-03',
        number: '03',
        title: 'Immersive Data Explorer',
        src: `${SCREENSHOTS_BASE}/data_explorer.png`,
        alt: 'Immersive data explorer — registros ambulatorios filtrados',
        context:
          'Inspección a nivel fila de registros ambulatorios sintéticos con filtros, ordenamiento y tablas drill-down.',
      },
      {
        id: 'no-show-04',
        number: '04',
        title: 'Guided Analysis + Recommendations',
        src: `${SCREENSHOTS_BASE}/analysis_results.png`,
        alt: 'Resultados de análisis guiado con gráficos de KPIs y recomendaciones',
        context:
          'Análisis guiado de KPIs con gráficos y recomendaciones accionables extraídas de vistas gobernadas validadas.',
      },
      {
        id: 'no-show-05',
        number: '05',
        title: 'No-Show ML + SHAP Explainability',
        src: `${SCREENSHOTS_BASE}/no_show_shap.png`,
        alt: 'Priorización ML de no-show con plots de explicabilidad SHAP',
        context:
          'Experimento de ranking con plots SHAP beeswarm y locales — drivers auditables, no un score de caja negra.',
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
        status: 'documented',
      },
    ],
  },
  analyticalQuestions: [
    {
      id: 'T1',
      title: 'Tendencias en el tiempo',
      body: 'Cómo se mueven las señales de asistencia, cancelaciones e ingresos a través de períodos con un grano estable.',
    },
    {
      id: 'T2',
      title: 'Dónde se concentra la fricción',
      body: 'Qué dimensiones (ej. sitios, líneas de negocio) concentran las fugas operativas.',
    },
    {
      id: 'T3',
      title: 'Cancelaciones tardías',
      body: 'Cómo las cancelaciones tardías difieren de otros caminos de cancelación y cómo distorsionan la utilización.',
    },
    {
      id: 'T4',
      title: 'Ingresos facturados vs actividad atendida',
      body: 'Alinear señales financieras con la atención realizada sin tratar los ingresos como un outcome clínico.',
    },
    {
      id: 'T5',
      title: 'Brechas de reconciliación',
      body: 'Dónde las narrativas de agenda, asistencia y facturación no coinciden — y qué tan grande es la brecha.',
    },
    {
      id: 'T6',
      title: 'Soporte de priorización',
      body: 'Una lista rankeada para workflows tipo outreach — un lente de soporte a decisión, no cuidado autónomo.',
    },
  ],
  chainOfCustody: {
    eyebrow: 'Escena 04',
    title: 'Cadena de custodia',
    introBefore: 'Todo se lee de ',
    introAccent: 'un mart SQLite gobernado',
    introAfter:
      ' — así los dashboards, scripts de validación y el experimento ML comparten las mismas definiciones en lugar de divergir.',
    architectureDocLabel: 'Documentación de arquitectura',
    headline: 'Un mart gobernado. Múltiples salidas confiables.',
    listLabel: 'Ver como lista',
    nodes: [
      {
        id: 'fuentes',
        label: 'Fuentes',
        title: 'Synthetic Data Layer',
        body: 'Generadores sintéticos controlados producen entradas CSV con suposiciones documentadas — no PHI de producción.',
      },
      {
        id: 'preparacion',
        label: 'Preparación y validación',
        title: 'Quality & Validation',
        body: 'Reportes de calidad y scripts de validación de KPIs detectan drift y regresiones de definición temprano.',
      },
      {
        id: 'mart',
        label: 'Mart gobernado',
        title: 'Governed SQLite Mart',
        body: 'Un mart SQLite modela visitas, facturación y eventos de agenda en una estructura consistente orientada a estrella. Hub: Governed SQLite Mart.',
      },
      {
        id: 'analisis',
        label: 'Análisis y modelos',
        title: 'ML Experiment',
        body: 'Un experimento de ranking acotado lee desde las mismas features del mart — no una fábrica de features paralela.',
      },
      {
        id: 'evidencia',
        label: 'Evidencia',
        title: 'Evidencia del caso',
        body: 'Los folios del Caso Clinic No-Show documentan exploración y resultados sobre el mismo mart — no una captura aislada.',
        citationPhrase: 'folios del Caso Clinic No-Show',
        folioIds: ['no-show-02', 'no-show-04'],
      },
      {
        id: 'salidas',
        label: 'Salidas BI y documentación',
        title: 'Governed KPI Views · BI Consumption',
        body: 'Vistas SQL codifican definiciones, anclaje temporal y grano para que los dashboards lean semánticas estables. Exportaciones llegan en formas listas para herramientas para monitoreo ejecutivo y exploración.',
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
  },
  governedKpis: {
    intro:
      'Cada KPI está definido con reglas explícitas y anclaje temporal. Los targets numéricos no se muestran en este sitio. Las definiciones autoritativas y semánticas temporales están documentadas en docs/metrics.md en el repositorio.',
    metricsDocNote: 'Ver docs/metrics.md',
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
    reproLabel: 'Reproducibilidad',
    intro:
      'Tres comandos cubren el workflow completo del analytics engineer — desde el mart gobernado hasta explicabilidad ML y demo en vivo.',
    professionalPath: [
      {
        cmd: 'make all',
        desc: 'Pipeline completo: datos sintéticos → mart gobernado → exportaciones BI → validación',
      },
      {
        cmd: 'make ml',
        desc: 'Training, explicabilidad SHAP y artefactos de ranking desde el mart gobernado',
      },
      {
        cmd: 'make demo',
        desc: 'App Streamlit: visualizaciones SHAP + simulación de ingresos ARS',
      },
    ],
    detailCommands: DETAIL_COMMANDS,
  },
  trazabilidadGobierno: {
    eyebrow: 'Escena 05',
    title: 'Trazabilidad y gobierno',
    introBefore: 'Los ',
    introKpi: 'KPIs',
    introMid: ' no son números sueltos: tienen definición, ',
    introValidation: 'validación',
    introAfter: ' y un procedimiento documentado para volver a producirlos.',
    kpiCitationLabel: 'No-show rate',
    kpiCitationFolioIds: ['no-show-04'],
    commandsIntro:
      'make all ejecuta el pipeline completo; make ml entrena y explica; make demo lanza Streamlit — sin encadenar scripts manualmente.',
    detailLabel: 'Ver comandos completos',
  },
  cierre: {
    eyebrow: 'Cierre',
    title: 'Expediente recorrido',
    body: 'Este es el índice completo del caso. Podés volver a cualquier escena o abrir el material fuente.',
    sealBefore: 'Paradigm — expediente ',
    sealAccent: 'cerrado',
    sealAfter: ' en documentación',
    links: [
      { href: GITHUB_REPO_URL, label: 'Repositorio' },
      { href: METRICS_DOC_URL, label: 'Métricas' },
      { href: ARCHITECTURE_DOC_URL, label: 'Arquitectura' },
    ],
    indexExpandLabel: 'Ver índice completo',
    indexNavLabel: 'Índice completo del expediente',
  },
  archivoRelacionado: {
    eyebrow: 'Archivo relacionado',
    intro:
      'En conjunto, demuestran un perfil Data/BI/AI práctico a través de analytics estructurado, automatización de archivos e inteligencia de texto no estructurado.',
    projects: [
      {
        id: 'clarusflow',
        title: 'ClarusFlow',
        role: 'Capa de automatización operativa y calidad de datos',
      },
      {
        id: 'lumenvox',
        title: 'LumenVox',
        role: 'Capa de inteligencia de texto e insights ejecutivos',
      },
    ],
  },
  footer: {
    line1: 'Paradigm · ClarusFlow · LumenVox — ecosistema portfolio Data & AI.',
    line2:
      'Proyectos sintéticos de portfolio únicamente. No representan pacientes, clientes, proveedores u organizaciones reales.',
    links: [
      { href: '#problem', label: 'Apertura' },
      { href: '#cierre', label: 'Cierre' },
      { href: '#archivo', label: 'Archivo' },
    ],
    navLabel: 'Navegación del pie de página',
  },
}
