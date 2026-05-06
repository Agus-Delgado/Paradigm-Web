import {
  badges,
  GITHUB_REPO_URL,
  hero,
  heroAssuranceChips,
  heroCommandLayers,
  heroSqlSnippet,
} from '../content'
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
          <div className="hero-title-block">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-gradient">{hero.title}</span>
            </h1>
            <p className="hero-subline">{hero.subtitle}</p>
          </div>

          <p className="hero-lead">{hero.description}</p>

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
            <a href="#pipeline" className="btn btn-secondary">
              See how it works
            </a>
          </div>

          <p className="disclaimer hero-disclaimer">{hero.disclaimer}</p>
        </div>

        <aside
          className="hero-command-center"
          aria-label="Illustrative analytics system preview. Qualitative only — no live metrics."
        >
          <header className="hero-cc-header">
            <span className="hero-cc-title">{hero.commandCenterTitle}</span>
            <span className="hero-cc-badge">{hero.commandCenterBadge}</span>
          </header>

          <div className="hero-cc-stack">
            {heroCommandLayers.map((layer) => (
              <div key={layer.label} className="hero-cc-row">
                <span className="hero-cc-k">{layer.label}</span>
                <span className="hero-cc-v">{layer.value}</span>
              </div>
            ))}
            <div className="hero-cc-assurance" role="list" aria-label="Quality and validation cues">
              {heroAssuranceChips.map((chip) => (
                <span key={chip} className="hero-cc-mini-chip" role="listitem">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-cc-sql-wrap">
            <p className="hero-cc-sql-label">Illustrative query</p>
            <pre className="hero-cc-sql">
              <code>{heroSqlSnippet}</code>
            </pre>
          </div>
        </aside>
      </div>
    </section>
  )
}
