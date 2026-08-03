import { liveFeatures } from '../content'
import { Section } from '../ui/Section'

export function LiveFeaturesSection() {
  return (
    <Section
      id="live-features"
      title={liveFeatures.title}
      eyebrow="Instrumentos"
      sceneNumber="02"
      sceneTemp="instrumentos"
      className="live-features-section"
    >
      <p className="section-intro">
        Instrumental coherente sobre el{' '}
        <span className="text-accent text-accent--structure">mart gobernado</span>: análisis
        guiado, exploración SQL, vistas de datos y ML explicable.
      </p>
      <ul className="instrument-list" aria-label="Instrumentos del caso">
        {liveFeatures.items.map((item) => (
          <li key={item.id} className="instrument-row">
            <span className="instrument-name">{item.title}</span>
            <span className="instrument-body">{item.body}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
