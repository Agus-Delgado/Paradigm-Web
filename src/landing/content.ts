/**
 * Paradigm landing content barrel — shared constants + bilingual messages.
 */

export {
  GITHUB_REPO_URL,
  METRICS_DOC_URL,
  ARCHITECTURE_DOC_URL,
  SCREENSHOTS_BASE,
  CASE_INDEX_TARGETS,
  DETAIL_COMMANDS,
  FOLIO_ASSETS,
} from './shared'

export type {
  LandingContent,
  CaseSceneStatus,
  DecisionEntry,
  ChainOfCustodyNode,
  CaseIndexEntry,
} from './i18n/content-types'

export { contentEs } from './i18n/content-es'
export { contentEn } from './i18n/content-en'
export { messages, getContent } from './i18n/messages'
