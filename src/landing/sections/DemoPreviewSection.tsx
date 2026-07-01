import { DEMO_PREVIEW_IMAGE_SRC, demoPreview } from '../content'
import { DeviceFrame } from '../ui/DeviceFrame'
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
      <DeviceFrame variant="demo" src={DEMO_PREVIEW_IMAGE_SRC} alt={demoPreview.imageAlt} />
    </Section>
  )
}
