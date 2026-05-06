import { ARCHITECTURE_DOC_URL, architecture, architectureHub } from '../content'
import { Section } from '../ui/Section'

export function ArchitectureSection() {
  return (
    <Section id="architecture" title={architecture.title} eyebrow="System">
      <p className="section-intro">{architecture.intro}</p>
      {ARCHITECTURE_DOC_URL ? (
        <p className="section-p doc-link-line">
          <a href={ARCHITECTURE_DOC_URL} className="inline-link" rel="noopener noreferrer" target="_blank">
            Architecture documentation
          </a>
        </p>
      ) : (
        <p className="section-p muted">
          When published, set <code className="inline-code">ARCHITECTURE_DOC_URL</code> in{' '}
          <code className="inline-code">content.ts</code> to link the canonical doc.
        </p>
      )}

      <div className="architecture-hub architecture-hub--flow">
        <p className="architecture-hub-headline">{architectureHub.headline}</p>
        <div
          className="architecture-flow"
          role="group"
          aria-label="Governed mart connecting to Power BI, Tableau, KPI validation and the ML experiment."
        >
          <div className="architecture-flow-mart">
            <span className="architecture-flow-mart-label">{architectureHub.centerNode}</span>
          </div>
          {architectureHub.flow.map((label) => (
            <div key={label} className="architecture-flow-step">
              <span className="architecture-flow-arrow" aria-hidden="true">
                →
              </span>
              <span className="architecture-flow-node">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-grid card-grid--architecture">
        {architecture.cards.map((c) => (
          <article key={c.title} className="card">
            <h3 className="card-title">{c.title}</h3>
            <p className="card-body">{c.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
