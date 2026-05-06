import { reproducibility } from '../content'
import { Section } from '../ui/Section'
import { TerminalBlock } from '../ui/TerminalBlock'

export function ReproducibilitySection() {
  return (
    <Section id="reproducibility" title={reproducibility.title} eyebrow="Open pipeline">
      <p className="section-intro">{reproducibility.intro}</p>
      <TerminalBlock lines={reproducibility.commands} />
    </Section>
  )
}
