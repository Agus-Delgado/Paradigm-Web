import { useContent } from '../i18n'
import { Section } from '../ui/Section'

export function ProblemSection() {
  const { problem, ui } = useContent()

  return (
    <Section
      id="problem"
      title={problem.title}
      eyebrow={problem.eyebrow}
      sceneNumber="01"
      sceneTemp="apertura"
      className="apertura-section"
    >
      <div className="prose-stack">
        <p className="section-p">
          {problem.bodyBefore}
          <span className="text-accent text-accent--structure">{problem.bodyAccent}</span>
          {problem.bodyAfter}
        </p>
      </div>
      <ul className="problem-highlights" aria-label={ui.highlightsLabel}>
        {problem.highlights.map((item) => (
          <li key={item.title} className="problem-highlight-card">
            <h3 className="problem-highlight-title">{item.title}</h3>
            <p className="problem-highlight-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
