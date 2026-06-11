import { liveFeatures } from '../content'
import { DeviceFrame } from '../ui/DeviceFrame'
import { Section } from '../ui/Section'

export function LiveFeaturesSection() {
  return (
    <Section
      id="live-features"
      title={liveFeatures.title}
      eyebrow="Live Demo"
      className="live-features-section"
    >
      <p className="section-intro">{liveFeatures.intro}</p>
      <div className="card-grid card-grid--live-features">
        {liveFeatures.items.map((item) => (
          <article key={item.id} className="card card--live-feature">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.body}</p>
            <DeviceFrame variant="card" src={item.imageSrc} alt={item.imageAlt} />
          </article>
        ))}
      </div>
    </Section>
  )
}
