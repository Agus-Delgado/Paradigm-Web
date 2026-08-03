import { ARCHITECTURE_DOC_URL, chainOfCustody } from '../content'
import { ChainOfCustodyDiagram } from '../ui/ChainOfCustodyDiagram'
import { Section } from '../ui/Section'

export function ChainOfCustodySection() {
  return (
    <Section
      id="cadena-custodia"
      eyebrow={chainOfCustody.eyebrow}
      title={chainOfCustody.title}
      sceneTemp="cadena"
      className="chain-of-custody-section"
    >
      <p className="section-intro">
        Everything reads from one{' '}
        <span className="text-accent text-accent--structure">governed SQLite mart</span> — so
        dashboards, validation scripts and the ML experiment share the same definitions instead of
        drifting apart.
      </p>
      {ARCHITECTURE_DOC_URL ? (
        <p className="section-p doc-link-line">
          <a
            href={ARCHITECTURE_DOC_URL}
            className="inline-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            Architecture documentation
          </a>
        </p>
      ) : null}

      <ChainOfCustodyDiagram
        nodes={chainOfCustody.nodes}
        listLabel={chainOfCustody.listLabel}
        headline={chainOfCustody.headline}
      />
    </Section>
  )
}
