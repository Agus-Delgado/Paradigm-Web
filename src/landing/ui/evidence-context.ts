import { createContext } from 'react'

export type EvidenceContextValue = {
  citedIds: ReadonlySet<string>
  cite: (folioIds: string[]) => void
  clearCite: () => void
  registerFolio: (id: string, number: string) => void
  unregisterFolio: (id: string) => void
  getFolioNumber: (id: string) => string | undefined
  scrollToFolio: (folioId: string) => void
}

export const EvidenceContext = createContext<EvidenceContextValue | null>(null)
