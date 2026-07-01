import { DASHBOARD_IMAGE_SRC, dashboardEvidence } from '../content'
import { DeviceFrame } from '../ui/DeviceFrame'
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
      <p className="dashboard-evidence-disclaimer" role="note">
        {dashboardEvidence.disclaimer}
      </p>
      <DeviceFrame
        variant="lead"
        src={DASHBOARD_IMAGE_SRC}
        alt={dashboardEvidence.screenshotAlt}
        staticLabel
      />
    </Section>
  )
}
