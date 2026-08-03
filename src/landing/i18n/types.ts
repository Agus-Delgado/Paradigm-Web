export type Locale = 'es' | 'en'

export const LOCALES: readonly Locale[] = ['es', 'en'] as const

export const LOCALE_STORAGE_KEY = 'paradigm-landing-locale'

export function isLocale(value: unknown): value is Locale {
  return value === 'es' || value === 'en'
}
