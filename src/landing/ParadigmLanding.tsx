import { AnalyticalQuestionsSection } from './sections/AnalyticalQuestionsSection'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { ComplementaritySection } from './sections/ComplementaritySection'
import { DashboardEvidenceSection } from './sections/DashboardEvidenceSection'
import { LiveFeaturesSection } from './sections/LiveFeaturesSection'
import { DemoPreviewSection } from './sections/DemoPreviewSection'
import { FinalCtaSection } from './sections/FinalCtaSection'
import { FooterSection } from './sections/FooterSection'
import { GovernedKpisSection } from './sections/GovernedKpisSection'
import { HeroSection } from './sections/HeroSection'
import { ParadigmDeepDiveIntro } from './sections/ParadigmDeepDiveIntro'
import { ProjectEcosystemSection } from './sections/ProjectEcosystemSection'
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
      <ProjectEcosystemSection />
      <ComplementaritySection />
      <ParadigmDeepDiveIntro />
      <ProblemSection />
      <ValueChainSection />
      <ArchitectureSection />
      <LiveFeaturesSection />
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
