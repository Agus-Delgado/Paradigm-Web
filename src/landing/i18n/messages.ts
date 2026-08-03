import type { Locale } from './types'
import { contentEs } from './content-es'
import { contentEn } from './content-en'

export const messages = { es: contentEs, en: contentEn } as const

export function getContent(locale: Locale) {
  return messages[locale]
}
