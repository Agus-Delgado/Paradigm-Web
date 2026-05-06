import { problem, problemHighlights } from '../content'
import { Section } from '../ui/Section'

export function ProblemSection() {
  return (
    <Section id="problem" title={problem.title} eyebrow="Problem">
      <div className="prose-stack">
        {problem.paragraphs.map((p) => (
          <p key={p} className="section-p">
            {p}
          </p>
        ))}
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
