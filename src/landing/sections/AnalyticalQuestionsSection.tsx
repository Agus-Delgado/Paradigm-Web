import { analyticalQuestions } from '../content'
import { Section } from '../ui/Section'

export function AnalyticalQuestionsSection() {
  return (
    <Section id="questions" title="Analytical questions" eyebrow="Threads">
      <p className="section-intro">
        Six analytical threads map operational questions to governed views — without claiming
        real-world benchmarks on this site.
      </p>
      <div className="card-grid card-grid--questions">
        {analyticalQuestions.map((q) => (
          <article key={q.id} className="card card--question">
            <p className="question-id">{q.id}</p>
            <h3 className="card-title">{q.title}</h3>
            <p className="card-body">{q.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
