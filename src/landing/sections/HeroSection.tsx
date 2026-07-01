import { badges, GITHUB_REPO_URL, hero, HERO_SCREENSHOT_SRC } from '../content'
import { Badge } from '../ui/Badge'
import { ButtonLink } from '../ui/ButtonLink'
import { DeviceFrame } from '../ui/DeviceFrame'

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
            <Badge variant="live">{hero.hubBadge}</Badge>
          </a>

          <div className="hero-title-block">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-gradient">{hero.title}</span>
            </h1>
            <p className="hero-subline">{hero.subtitle}</p>
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

        <aside className="hero-product-preview" aria-label={hero.productPreviewLabel}>
          <p className="hero-preview-caption">{hero.previewCaption}</p>
          <DeviceFrame
            variant="hero"
            src={HERO_SCREENSHOT_SRC}
            alt={hero.screenshotAlt}
            loading="eager"
            className="device-frame--hero-muted"
          />
        </aside>
      </div>
    </section>
  )
}
