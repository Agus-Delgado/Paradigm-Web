import { useContent } from '../i18n'
import { useMediaQuery } from '../ui/useMediaQuery'
import { useSceneReveal } from '../ui/useSceneReveal'

function sceneNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}

function IndexList({
  entries,
}: {
  entries: readonly { id: string; label: string; targetId: string }[]
}) {
  return (
    <ol className="cierre-index-list">
      {entries.map((entry, index) => (
        <li key={entry.id} className="cierre-index-item">
          <a href={`#${entry.targetId}`} className="cierre-index-link">
            <span className="cierre-index-number" aria-hidden="true">
              {sceneNumber(index)}
            </span>
            <span className="cierre-index-label">{entry.label}</span>
          </a>
        </li>
      ))}
    </ol>
  )
}

export function CierreSection() {
  const revealRef = useSceneReveal<HTMLElement>()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { cierre, caseIndex } = useContent()

  return (
    <section
      ref={revealRef}
      id="cierre"
      className="landing-section cierre-section scene-reveal scene-temp scene-temp--cierre scene-section"
      aria-labelledby="cierre-title"
    >
      <div className="section-inner scene-section__inner">
        <header className="section-heading">
          <span className="section-scene-num" aria-hidden="true">
            06
          </span>
          <p className="section-eyebrow">{cierre.eyebrow}</p>
          <h2 id="cierre-title" className="section-title">
            {cierre.title}
          </h2>
          <span className="section-title-mark" aria-hidden="true" />
        </header>
        <p className="section-intro">{cierre.body}</p>

        <p className="cierre-seal">
          {cierre.sealBefore}
          <span className="text-accent text-accent--decision">{cierre.sealAccent}</span>
          {cierre.sealAfter}
        </p>

        <nav className="cierre-index" aria-label={cierre.indexNavLabel}>
          {isDesktop ? (
            <IndexList entries={caseIndex} />
          ) : (
            <details className="cierre-index-mobile">
              <summary className="cierre-index-mobile-summary">{cierre.indexExpandLabel}</summary>
              <IndexList entries={caseIndex} />
            </details>
          )}
        </nav>

        <ul className="cierre-links">
          {cierre.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cierre-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
