import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { resolveInitialLocale, writeStoredLocale } from './detectLocale'
import { LocaleContext } from './locale-context'
import type { Locale } from './types'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window === 'undefined' ? 'es' : resolveInitialLocale(),
  )

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    writeStoredLocale(next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
