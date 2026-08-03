import { ArchivoRelacionadoSection } from './sections/ArchivoRelacionadoSection'
import { CasoNoShowSection } from './sections/CasoNoShowSection'
import { ChainOfCustodySection } from './sections/ChainOfCustodySection'
import { CierreSection } from './sections/CierreSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { LiveFeaturesSection } from './sections/LiveFeaturesSection'
import { ProblemSection } from './sections/ProblemSection'
import { TrazabilidadGobiernoSection } from './sections/TrazabilidadGobiernoSection'
import { LocaleProvider } from './i18n'
import { CaseIndex } from './ui/CaseIndex'
import { EvidenceProvider } from './ui/EvidenceProvider'

export function ParadigmLanding() {
  return (
    <LocaleProvider>
      <EvidenceProvider>
        <div className="landing">
          <div className="landing-backdrop" aria-hidden="true" />
          <div className="landing-shell">
            <CaseIndex />
            <div className="landing-main">
              <HeroSection />
              <ProblemSection />
              <LiveFeaturesSection />
              <CasoNoShowSection />
              <ChainOfCustodySection />
              <TrazabilidadGobiernoSection />
              <CierreSection />
              <ArchivoRelacionadoSection />
              <FooterSection />
            </div>
          </div>
        </div>
      </EvidenceProvider>
    </LocaleProvider>
  )
}
