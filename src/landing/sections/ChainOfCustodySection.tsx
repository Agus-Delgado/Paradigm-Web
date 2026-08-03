import { ARCHITECTURE_DOC_URL } from '../content'
import { useContent } from '../i18n'
import { ChainOfCustodyDiagram } from '../ui/ChainOfCustodyDiagram'
import { Section } from '../ui/Section'

export function ChainOfCustodySection() {
  const { chainOfCustody, ui } = useContent()

  return (
    <Section
      id="cadena-custodia"
      eyebrow={chainOfCustody.eyebrow}
      title={chainOfCustody.title}
      sceneTemp="cadena"
      className="chain-of-custody-section"
    >
      <p className="section-intro">
        {chainOfCustody.introBefore}
        <span className="text-accent text-accent--structure">{chainOfCustody.introAccent}</span>
        {chainOfCustody.introAfter}
      </p>
      {ARCHITECTURE_DOC_URL ? (
        <p className="section-p doc-link-line">
          <a
            href={ARCHITECTURE_DOC_URL}
            className="inline-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            {ui.architectureDocLabel}
          </a>
        </p>
      ) : null}

      <ChainOfCustodyDiagram
        nodes={chainOfCustody.nodes}
        listLabel={chainOfCustody.listLabel}
        headline={chainOfCustody.headline}
        trackLabel={ui.custody.trackLabel}
        fallbackLinkLabel={ui.custody.fallbackLink}
      />
    </Section>
  )
}
