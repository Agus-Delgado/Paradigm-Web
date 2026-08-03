import { useContext } from 'react'
import { EvidenceContext } from './evidence-context'

export function useEvidence() {
  const ctx = useContext(EvidenceContext)
  if (!ctx) {
    throw new Error('useEvidence must be used within EvidenceProvider')
  }
  return ctx
}
