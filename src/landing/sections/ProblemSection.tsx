import { problem, problemHighlights } from '../content'
import { Section } from '../ui/Section'

export function ProblemSection() {
  return (
    <Section
      id="problem"
      title={problem.title}
      eyebrow="Problem"
      sceneNumber="01"
      sceneTemp="apertura"
      className="apertura-section"
    >
      <div className="prose-stack">
        <p className="section-p">
          Outpatient operations generate friction: no-shows, late cancellations, schedule gaps and
          billing mismatches. Paradigm focuses on building a{' '}
          <span className="text-accent text-accent--structure">trusted analytical layer</span>{' '}
          before insights are presented. It is the primary in-depth case study within this
          three-project Data &amp; AI portfolio.
        </p>
      </div>
      <ul className="problem-highlights" aria-label="At a glance">
        {problemHighlights.map((item) => (
          <li key={item.title} className="problem-highlight-card">
            <h3 className="problem-highlight-title">{item.title}</h3>
            <p className="problem-highlight-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
