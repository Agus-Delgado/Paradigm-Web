import { getContent } from './messages'
import { useLocale } from './locale-context'

export function useContent() {
  const { locale } = useLocale()
  return getContent(locale)
}

/** Replace `{key}` placeholders in a content template string. */
export function formatMessage(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    values[key] !== undefined ? String(values[key]) : `{${key}}`,
  )
}
