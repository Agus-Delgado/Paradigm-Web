import { badges, ecosystem, GITHUB_REPO_URL, hero, heroEcosystemMap } from '../content'
import { Badge } from '../ui/Badge'
import { ButtonLink } from '../ui/ButtonLink'

export function HeroSection() {
  return (
    <section className="hero" id="overview" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid-layer" />
        <div className="hero-dots-layer" />
        <div className="hero-glow" />
      </div>

      <div className="section-inner hero-layout">
        <div className="hero-copy">
          <a href="#ecosystem" className="hero-live-badge-link">
            <Badge variant="hub">{hero.hubBadge}</Badge>
          </a>

          <div className="hero-title-block">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-gradient">{hero.title}</span>
            </h1>
            <p className="hero-subline">{hero.subtitle}</p>
          </div>

          <div className="hero-project-pills" role="list" aria-label="Portfolio projects">
            {ecosystem.projects.map((project) => (
              <a
                key={project.id}
                href="#ecosystem"
                role="listitem"
                className={`hero-project-pill hero-project-pill--${project.accent}`}
              >
                {project.title}
              </a>
            ))}
          </div>

          <div className="hero-flow" aria-label="Data and AI portfolio flow">
            {hero.flowSteps.map((step, index) => (
              <span key={step} className="hero-flow-step">
                {index > 0 && (
                  <span className="hero-flow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
                <span className="hero-flow-label">{step}</span>
              </span>
            ))}
          </div>

          <p className="hero-lead">{hero.description}</p>
          <p className="hero-subcopy">{hero.subcopy}</p>

          <div className="badge-row" role="list">
            {badges.map((b) => (
              <span key={b} role="listitem">
                <Badge>{b}</Badge>
              </span>
            ))}
          </div>

          <div className="cta-row">
            <ButtonLink
              href={GITHUB_REPO_URL}
              external
              variant="primary"
              placeholderTitle="Set GITHUB_REPO_URL in src/landing/content.ts"
            >
              View on GitHub
            </ButtonLink>
            <a href="#ecosystem" className="btn btn-secondary">
              Explore projects
            </a>
          </div>

          <p className="disclaimer hero-disclaimer">{hero.disclaimer}</p>
        </div>

        <aside className="hero-ecosystem-map" aria-label={heroEcosystemMap.title}>
          <header className="hero-ecosystem-map-header">
            <span className="hero-ecosystem-map-dot" aria-hidden="true" />
            <h2 className="hero-ecosystem-map-title">{heroEcosystemMap.title}</h2>
          </header>

          <ol className="hero-ecosystem-map-layers" aria-label="Data and AI portfolio layers">
            {heroEcosystemMap.layers.map((layer, index) => (
              <li
                key={layer.project}
                className={`hero-ecosystem-map-layer hero-ecosystem-map-layer--${layer.accent}`}
              >
                <div className="hero-ecosystem-map-layer-inner">
                  <p className="hero-ecosystem-map-project">{layer.project}</p>
                  <p className="hero-ecosystem-map-tagline">{layer.tagline}</p>
                  <p className="hero-ecosystem-map-signals">{layer.signals}</p>
                </div>
                {index < heroEcosystemMap.layers.length - 1 && (
                  <span className="hero-ecosystem-map-connector" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>

          <p className="hero-ecosystem-map-footer">{heroEcosystemMap.footer}</p>
        </aside>
      </div>
    </section>
  )
}
