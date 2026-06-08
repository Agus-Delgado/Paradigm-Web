import { mlSection } from '../content'
import { Badge } from '../ui/Badge'
import { DataVizPlaceholder } from '../ui/DataVizPlaceholder'
import { Section } from '../ui/Section'

export function MLSection() {
  return (
    <Section id="ml" title={mlSection.title} eyebrow="Machine learning">
      <div className="badge-row" role="list">
        {mlSection.badges.map((b) => (
          <span key={b.label} role="listitem">
            <Badge variant={b.variant}>{b.label}</Badge>
          </span>
        ))}
      </div>

      <p className="section-intro">{mlSection.intro}</p>

      <div className="card-grid card-grid--ml">
        {mlSection.features.map((f) => (
          <article
            key={f.title}
            className={`card card--ml card--with-viz${f.highlight ? ' card--ml-highlight' : ''} card--ml-${f.accent}`}
          >
            <h3 className="card-title">{f.title}</h3>
            <p className="card-body">{f.body}</p>
            {'viz' in f && f.viz ? (
              <DataVizPlaceholder
                variant={f.viz}
                caption={'vizCaption' in f ? f.vizCaption : undefined}
              />
            ) : null}
          </article>
        ))}
      </div>

      <aside className="callout callout--info" role="note">
        <p className="callout-title">{mlSection.calloutTitle}</p>
        <p className="callout-body">{mlSection.callout}</p>
      </aside>

      <p className="section-p muted">
        No clinical claims. No assertion that the experiment&apos;s ranking translates to live
        operational KPIs outside this synthetic case study.
      </p>
    </Section>
  )
}
