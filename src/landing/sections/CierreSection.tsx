import { caseIndex, cierre } from '../content'
import { useMediaQuery } from '../ui/useMediaQuery'
import { useSceneReveal } from '../ui/useSceneReveal'

function sceneNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}

function IndexList() {
  return (
    <ol className="cierre-index-list">
      {caseIndex.map((entry, index) => (
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

  return (
    <section
      ref={revealRef}
      id="cierre"
      className="landing-section cierre-section scene-reveal scene-temp scene-temp--cierre"
      aria-labelledby="cierre-title"
    >
      <div className="section-inner">
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
        <p className="section-intro">
          Este es el índice completo del caso. Podés volver a cualquier escena o abrir el material
          fuente.
        </p>

        <p className="cierre-seal">
          Paradigm — expediente{' '}
          <span className="text-accent text-accent--decision">cerrado</span> en documentación
        </p>

        <nav className="cierre-index" aria-label="Resumen del expediente">
          {isDesktop ? (
            <IndexList />
          ) : (
            <details className="cierre-index-mobile">
              <summary className="cierre-index-mobile-summary">{cierre.indexExpandLabel}</summary>
              <IndexList />
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
