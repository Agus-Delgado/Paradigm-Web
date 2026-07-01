import { ecosystem } from '../content'
import { Section } from '../ui/Section'

function ProjectIcon({ accent }: { accent: string }) {
  if (accent === 'paradigm') {
    return (
      <svg className="ecosystem-card-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="14" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="5" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 11l6-4 5 3 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (accent === 'clarusflow') {
    return (
      <svg className="ecosystem-card-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 11l3-3M14 8l3 3M14 14l3-3M7 13l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <svg className="ecosystem-card-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

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
            <div className="ecosystem-card-icon-wrap">
              <ProjectIcon accent={project.accent} />
            </div>
            <header className="ecosystem-card-header">
              <p className="ecosystem-card-label">{project.label}</p>
              <h3 id={`ecosystem-${project.id}-title`} className="ecosystem-card-title">
                {project.title}
              </h3>
            </header>
            <p className="ecosystem-card-role">
              <span className="ecosystem-card-role-label">Role in the ecosystem</span>
              {project.role}
            </p>
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
