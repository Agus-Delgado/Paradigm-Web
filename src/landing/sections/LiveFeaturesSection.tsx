import { useContent } from '../i18n'
import { Section } from '../ui/Section'

export function LiveFeaturesSection() {
  const { liveFeatures, ui } = useContent()

  return (
    <Section
      id="live-features"
      title={liveFeatures.title}
      eyebrow={liveFeatures.eyebrow}
      sceneNumber="02"
      sceneTemp="instrumentos"
      className="live-features-section"
    >
      <p className="section-intro">
        {liveFeatures.introBefore}
        <span className="text-accent text-accent--structure">{liveFeatures.introAccent}</span>
        {liveFeatures.introAfter}
      </p>
      <ul className="instrument-list" aria-label={ui.instrumentsListLabel}>
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
