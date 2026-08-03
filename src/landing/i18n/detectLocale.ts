import { isLocale, LOCALE_STORAGE_KEY, type Locale } from './types'

export function readStoredLocale(): Locale | null {
  try {
    const raw = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return isLocale(raw) ? raw : null
  } catch {
    return null
  }
}

export function writeStoredLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    /* ignore quota / private mode */
  }
}

export function detectBrowserLocale(): Locale {
  const candidates = [
    ...(window.navigator.languages ?? []),
    window.navigator.language,
  ]
    .filter(Boolean)
    .map((value) => value.toLowerCase())

  for (const candidate of candidates) {
    if (candidate.startsWith('en')) return 'en'
    if (candidate.startsWith('es')) return 'es'
  }

  return 'es'
}

export function resolveInitialLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale()
}
