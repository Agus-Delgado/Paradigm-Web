import { recentImprovements } from '../content'
import { Badge } from '../ui/Badge'
import { DataVizPlaceholder } from '../ui/DataVizPlaceholder'
import { Section } from '../ui/Section'

export function RecentImprovementsSection() {
  return (
    <Section
      id="recent-improvements"
      title={recentImprovements.title}
      eyebrow={recentImprovements.eyebrow}
    >
      <p className="section-intro">{recentImprovements.intro}</p>
      <div className="card-grid card-grid--improvements">
        {recentImprovements.items.map((item) => (
          <article key={item.title} className="card card--improvement card--with-viz">
            <Badge variant={item.badgeVariant}>{item.badge}</Badge>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.body}</p>
            {'viz' in item && item.viz ? (
              <DataVizPlaceholder
                variant={item.viz}
                caption={'vizCaption' in item ? item.vizCaption : undefined}
              />
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
