import { ecosystem } from '../content'
import { Section } from '../ui/Section'

export function ProjectEcosystemSection() {
  return (
    <Section
      id="ecosystem"
      title={ecosystem.title}
      eyebrow="Projects"
      className="ecosystem-section ecosystem-section--primary"
    >
      <p className="section-intro">{ecosystem.intro}</p>

      <div className="ecosystem-grid" role="list" aria-label="Data and AI portfolio projects">
        {ecosystem.projects.map((project) => (
          <article
            key={project.id}
            role="listitem"
            className={`ecosystem-card ecosystem-card--${project.accent}`}
            aria-labelledby={`ecosystem-${project.id}-title`}
          >
            <header className="ecosystem-card-header">
              <p className="ecosystem-card-label">{project.label}</p>
              <h3 id={`ecosystem-${project.id}-title`} className="ecosystem-card-title">
                {project.title}
              </h3>
            </header>
            <p className="ecosystem-card-body">{project.body}</p>
            <ul className="ecosystem-signal-list" aria-label={`${project.title} skills`}>
              {project.signals.map((signal) => (
                <li key={signal} className="ecosystem-signal">
                  {signal}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
