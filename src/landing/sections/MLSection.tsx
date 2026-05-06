import { mlSection } from '../content'
import { Section } from '../ui/Section'

export function MLSection() {
  return (
    <Section id="ml" title={mlSection.title} eyebrow="Machine learning">
      <div className="prose-stack">
        {mlSection.paragraphs.map((p) => (
          <p key={p} className="section-p">
            {p}
          </p>
        ))}
      </div>
      <aside className="callout callout--warning" role="note">
        <p className="callout-title">Limitation (documented)</p>
        <p className="callout-body">{mlSection.callout}</p>
      </aside>
      <p className="section-p muted">
        No clinical claims. No assertion that the experiment&apos;s ranking translates to live
        operational KPIs outside this synthetic case study.
      </p>
    </Section>
  )
}
