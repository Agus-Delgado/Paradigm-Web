import { reproducibility } from '../content'
import { IconChartUp, IconSparkline, IconTerminal } from '../ui/DataIcons'
import { Section } from '../ui/Section'
import { TerminalBlock } from '../ui/TerminalBlock'

function PathIcon({ type }: { type: 'terminal' | 'sparkline' | 'chart' }) {
  if (type === 'terminal') return <IconTerminal className="repro-path-icon" />
  if (type === 'chart') return <IconChartUp className="repro-path-icon" />
  return <IconSparkline className="repro-path-icon" />
}

export function ReproducibilitySection() {
  return (
    <Section id="reproducibility" title={reproducibility.title} eyebrow="Open pipeline">
      <p className="section-intro">{reproducibility.intro}</p>

      <div className="repro-path-grid" role="list" aria-label="Primary pipeline commands">
        {reproducibility.professionalPath.map((step) => (
          <article
            key={step.cmd}
            role="listitem"
            className={`repro-path-card${step.primary ? ' repro-path-card--primary' : ''}`}
          >
            <PathIcon type={step.icon} />
            <code className="repro-path-cmd">{step.cmd}</code>
            <p className="repro-path-desc">{step.desc}</p>
          </article>
        ))}
      </div>

      <details className="repro-detail">
        <summary className="repro-detail-summary">{reproducibility.detailLabel}</summary>
        <TerminalBlock lines={reproducibility.detailCommands} />
      </details>
    </Section>
  )
}
