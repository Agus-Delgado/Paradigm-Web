/**
 * Shared non-translated constants for the Paradigm landing.
 */

export const GITHUB_REPO_URL = 'https://github.com/Agus-Delgado/Paradigm-.git'

export const METRICS_DOC_URL =
  'https://github.com/Agus-Delgado/Paradigm-/blob/main/docs/metrics.md'

export const ARCHITECTURE_DOC_URL =
  'https://github.com/Agus-Delgado/Paradigm-/blob/main/docs/architecture.md'

export const SCREENSHOTS_BASE = '/assets/screenshots'

export const CASE_INDEX_TARGETS = [
  'problem',
  'live-features',
  'caso-no-show',
  'cadena-custodia',
  'trazabilidad',
  'cierre',
] as const

export const DETAIL_COMMANDS = [
  'python scripts/generate_paradigm_v2_synthetic.py',
  'python scripts/build_sqlite_mart.py',
  'python scripts/run_data_quality.py',
  'python scripts/export_powerbi_source.py',
  'python scripts/export_tableau_source.py',
  'python scripts/validate_executive_kpis.py',
  'python scripts/train_no_show.py',
] as const

export const FOLIO_ASSETS = {
  'no-show-01': { src: `${SCREENSHOTS_BASE}/wizard_questions.png`, number: '01' },
  'no-show-02': { src: `${SCREENSHOTS_BASE}/sql_explorer.png`, number: '02' },
  'no-show-03': { src: `${SCREENSHOTS_BASE}/data_explorer.png`, number: '03' },
  'no-show-04': { src: `${SCREENSHOTS_BASE}/analysis_results.png`, number: '04' },
  'no-show-05': { src: `${SCREENSHOTS_BASE}/no_show_shap.png`, number: '05' },
} as const
