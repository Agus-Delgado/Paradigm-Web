import { DASHBOARD_IMAGE_SRC, dashboardEvidence } from '../content'
import { Section } from '../ui/Section'

export function DashboardEvidenceSection() {
  return (
    <Section
      id="dashboard"
      title={dashboardEvidence.title}
      eyebrow="Evidence"
      className="dashboard-evidence-section"
    >
      <p className="section-intro">{dashboardEvidence.caption}</p>
      <div className="device-frame device-frame--media device-frame--lead">
        <div className="device-bezel" aria-hidden="true" />
        <div className="device-screen device-screen--media">
          <img
            src={DASHBOARD_IMAGE_SRC}
            alt={dashboardEvidence.screenshotAlt}
            loading="lazy"
            decoding="async"
            className="device-img"
          />
        </div>
      </div>
    </Section>
  )
}
