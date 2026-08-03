export type CaseSceneStatus = 'pending' | 'active' | 'visited'

export interface LandingContent {
  ui: {
    lang: {
      switcherLabel: string
      es: 'ES'
      en: 'EN'
    }
    caseIndex: {
      railTitle: string
      navLabel: string
      toggleOpen: string
      toggleClose: string
      sceneOf: string
      sceneIdle: string
      idleLabel: string
    }
    citation: {
      viewFolio: string
      viewFolios: string
    }
    decisionLog: {
      statusDocumented: string
      finding: string
      limitation: string
      citedEvidence: string
      citedEvidenceLead: string
      citedEvidencePhrase: string
    }
    folio: {
      enlarge: string
      enlargeAria: string
      close: string
      pendingCapture: string
      pendingAria: string
      defaultSource: string
    }
    custody: {
      trackLabel: string
      fallbackLink: string
    }
    footerNavLabel: string
    highlightsLabel: string
    instrumentsListLabel: string
    pipelineCommandsAria: string
    cierreIndexNavLabel: string
    architectureDocLabel: string
  }
  hero: {
    masthead: string
    caseId: string
    titleBefore: string
    titleDecision: string
    titleMid: string
    titleMetric: string
    titleAfter: string
    bodyBefore: string
    bodyValidated: string
    bodyAfter: string
    continueHref: '#problem'
    continueLabel: string
    dataCaptionBefore: string
    dataCaptionStructure: string
    decisionNodeLabel: string
  }
  caseIndex: Array<{
    id: string
    label: string
    targetId: string
  }>
  problem: {
    eyebrow: string
    title: string
    bodyBefore: string
    bodyAccent: string
    bodyAfter: string
    highlightsLabel: string
    highlights: Array<{
      title: string
      body: string
    }>
  }
  liveFeatures: {
    eyebrow: string
    title: string
    introBefore: string
    introAccent: string
    introAfter: string
    listLabel: string
    items: Array<{
      id: string
      title: string
      body: string
    }>
  }
  casoNoShow: {
    eyebrow: string
    title: string
    introBefore: string
    introEvidence: string
    introMid: string
    introLimit: string
    introAfter: string
    scope: string
    source: string
    blocks: {
      pregunta: {
        label: string
        lead: string
        bodyBefore: string
        citationPhrase: string
        bodyAfter: string
        threads: readonly ['T1', 'T2', 'T3']
      }
      exploracion: {
        label: string
        lead: string
        bodyBefore: string
        citationSql: string
        bodyMid: string
        citationData: string
        bodyAfter: string
      }
      evidencia: {
        label: string
        lead: string
        bodyBefore: string
        citationAnalysis: string
        bodyMid: string
        citationShap: string
        bodyAfter: string
        limitationTitle: string
        limitation: string
      }
      decision: {
        label: string
        leadBefore: string
        leadDecision: string
        leadAfter: string
      }
    }
    folios: Array<{
      id: string
      number: string
      title: string
      src: string
      alt: string
      context: string
    }>
    decisions: Array<{
      id: string
      question: string
      evidenceFolioIds: readonly string[]
      finding: string
      limitation: string
      decision: string
      status: 'documented'
    }>
  }
  analyticalQuestions: Array<{
    id: 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6'
    title: string
    body: string
  }>
  chainOfCustody: {
    eyebrow: string
    title: string
    introBefore: string
    introAccent: string
    introAfter: string
    architectureDocLabel: string
    headline: string
    listLabel: string
    nodes: Array<{
      id: string
      label: string
      title: string
      body: string
      citationPhrase?: string
      folioIds?: readonly string[]
      href?: string
      hrefLabel?: string
    }>
  }
  governedKpis: {
    intro: string
    metricsDocNote: string
    items: string[]
  }
  reproducibility: {
    reproLabel: string
    intro: string
    professionalPath: Array<{
      cmd: string
      desc: string
    }>
    detailCommands: readonly string[]
  }
  trazabilidadGobierno: {
    eyebrow: string
    title: string
    introBefore: string
    introKpi: string
    introMid: string
    introValidation: string
    introAfter: string
    kpiCitationLabel: string
    kpiCitationFolioIds: readonly string[]
    commandsIntro: string
    detailLabel: string
  }
  cierre: {
    eyebrow: string
    title: string
    body: string
    sealBefore: string
    sealAccent: string
    sealAfter: string
    links: Array<{
      href: string
      label: string
    }>
    indexExpandLabel: string
    indexNavLabel: string
  }
  archivoRelacionado: {
    eyebrow: string
    intro: string
    projects: Array<{
      id: string
      title: string
      role: string
    }>
  }
  footer: {
    line1: string
    line2: string
    links: Array<{
      href: string
      label: string
    }>
    navLabel: string
  }
}

export type DecisionEntry = LandingContent['casoNoShow']['decisions'][number]
export type ChainOfCustodyNode = LandingContent['chainOfCustody']['nodes'][number]
export type CaseIndexEntry = LandingContent['caseIndex'][number]
