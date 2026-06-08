import { DEMO_GIF_SRC, demoPreview } from '../content'
import { Section } from '../ui/Section'

export function DemoPreviewSection() {
  return (
    <Section
      id="workflow-preview"
      title={demoPreview.title}
      eyebrow="Walkthrough"
      className="demo-preview-section"
    >
      <p className="section-intro demo-preview-intro">{demoPreview.intro}</p>
      <p className="demo-preview-disclaimer" role="note">
        {demoPreview.disclaimer}
      </p>
      <div className="device-frame device-frame--media device-frame--demo">
        <div className="device-bezel" aria-hidden="true" />
        <div className="device-screen device-screen--media">
          <img
            src={DEMO_GIF_SRC}
            alt={demoPreview.gifAlt}
            loading="lazy"
            decoding="async"
            className="device-img"
          />
        </div>
      </div>
    </Section>
  )
}
