import { ecosystem, paradigmDeepDive } from '../content'

export function ParadigmDeepDiveIntro() {
  return (
    <section id="paradigm-deep-dive" className="paradigm-deep-dive-intro" aria-labelledby="paradigm-deep-dive-title">
      <div className="paradigm-deep-dive-divider" aria-hidden="true" />
      <div className="section-inner">
        <p className="section-eyebrow">{paradigmDeepDive.eyebrow}</p>
        <h2 id="paradigm-deep-dive-title" className="section-title">
          {paradigmDeepDive.title}
        </h2>
        <p className="paradigm-deep-dive-subtitle">{paradigmDeepDive.subtitle}</p>

        <div className="paradigm-deep-dive-trio" role="list" aria-label="Portfolio projects">
          {ecosystem.projects.map((project) => (
            <span
              key={project.id}
              role="listitem"
              className={`paradigm-deep-dive-pill paradigm-deep-dive-pill--${project.accent}`}
            >
              {project.title}
            </span>
          ))}
        </div>

        <p className="paradigm-deep-dive-reminder">{paradigmDeepDive.trioReminder}</p>
        <p className="section-intro paradigm-deep-dive-body">{paradigmDeepDive.body}</p>
      </div>
    </section>
  )
}
