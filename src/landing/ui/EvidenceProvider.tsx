import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { EvidenceContext } from './evidence-context'

function caseIndexOffset() {
  const bar = document.querySelector('.case-index-bar')
  if (bar && getComputedStyle(bar).display !== 'none') {
    return bar.getBoundingClientRect().height + 12
  }
  return 24
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function EvidenceProvider({ children }: { children: ReactNode }) {
  const [citedIds, setCitedIds] = useState<ReadonlySet<string>>(() => new Set())
  const [registry, setRegistry] = useState<Record<string, string>>({})

  const registerFolio = useCallback((id: string, number: string) => {
    setRegistry((prev) => (prev[id] === number ? prev : { ...prev, [id]: number }))
  }, [])

  const unregisterFolio = useCallback((id: string) => {
    setRegistry((prev) => {
      if (!(id in prev)) return prev
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const getFolioNumber = useCallback((id: string) => registry[id], [registry])

  const cite = useCallback((folioIds: string[]) => {
    setCitedIds(new Set(folioIds))
  }, [])

  const clearCite = useCallback(() => {
    setCitedIds(new Set())
  }, [])

  const scrollToFolio = useCallback((folioId: string) => {
    const el = document.getElementById(folioId)
    if (!el) return

    setCitedIds(new Set([folioId]))
    const top = el.getBoundingClientRect().top + window.scrollY - caseIndexOffset()
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })

    window.setTimeout(
      () => {
        setCitedIds((current) => {
          if (current.size === 1 && current.has(folioId)) return new Set()
          return current
        })
      },
      prefersReducedMotion() ? 400 : 900,
    )
  }, [])

  const value = useMemo(
    () => ({
      citedIds,
      cite,
      clearCite,
      registerFolio,
      unregisterFolio,
      getFolioNumber,
      scrollToFolio,
    }),
    [citedIds, cite, clearCite, registerFolio, unregisterFolio, getFolioNumber, scrollToFolio],
  )

  return <EvidenceContext.Provider value={value}>{children}</EvidenceContext.Provider>
}
