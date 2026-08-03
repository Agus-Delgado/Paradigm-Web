import { LOCALES, useLocale, type Locale } from '../i18n'
import { useContent } from '../i18n/useContent'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const { ui } = useContent()

  return (
    <div className="lang-switcher" role="group" aria-label={ui.lang.switcherLabel}>
      {LOCALES.map((code) => {
        const active = code === locale
        const label = code === 'es' ? ui.lang.es : ui.lang.en
        return (
          <button
            key={code}
            type="button"
            className={`lang-switcher-option${active ? ' is-active' : ''}`}
            aria-pressed={active}
            onClick={() => setLocale(code as Locale)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
