import { METRICS_DOC_URL, governedKpis } from '../content'
import { Section } from '../ui/Section'

export function GovernedKpisSection() {
  return (
    <Section id="kpis" title={governedKpis.title} eyebrow="Metrics">
      <p className="section-intro">{governedKpis.intro}</p>
      <p className="section-p">
        {METRICS_DOC_URL ? (
          <>
            Authoritative definitions and time semantics:{' '}
            <a href={METRICS_DOC_URL} className="inline-link" rel="noopener noreferrer" target="_blank">
              docs/metrics.md
            </a>
            .
          </>
        ) : (
          <>
            {governedKpis.metricsDocNote}{' '}
            <span className="muted">
              (Set <code className="inline-code">METRICS_DOC_URL</code> in{' '}
              <code className="inline-code">content.ts</code> when you publish the file.)
            </span>
          </>
        )}
      </p>
      <ul className="kpi-list">
        {governedKpis.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  )
}
