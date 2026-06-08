import { AnalyticalQuestionsSection } from './sections/AnalyticalQuestionsSection'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { DashboardEvidenceSection } from './sections/DashboardEvidenceSection'
import { DemoPreviewSection } from './sections/DemoPreviewSection'
import { FinalCtaSection } from './sections/FinalCtaSection'
import { FooterSection } from './sections/FooterSection'
import { GovernedKpisSection } from './sections/GovernedKpisSection'
import { HeroSection } from './sections/HeroSection'
import { MLSection } from './sections/MLSection'
import { RecentImprovementsSection } from './sections/RecentImprovementsSection'
import { ProblemSection } from './sections/ProblemSection'
import { ReproducibilitySection } from './sections/ReproducibilitySection'
import { ValueChainSection } from './sections/ValueChainSection'
import { NavBar } from './ui/NavBar'

export function ParadigmLanding() {
  return (
    <div className="landing">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ValueChainSection />
      <ArchitectureSection />
      <DashboardEvidenceSection />
      <DemoPreviewSection />
      <GovernedKpisSection />
      <AnalyticalQuestionsSection />
      <MLSection />
      <RecentImprovementsSection />
      <ReproducibilitySection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  )
}
