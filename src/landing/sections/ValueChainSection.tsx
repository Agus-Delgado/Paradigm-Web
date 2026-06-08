import { Fragment } from 'react'
import { pipelinePhases, pipelineSection } from '../content'
import { IconChartUp, IconDatabase, IconShield } from '../ui/DataIcons'
import { Section } from '../ui/Section'

const phaseIcons = [IconDatabase, IconShield, IconChartUp] as const

export function ValueChainSection() {
  return (
    <Section id="pipeline" title={pipelineSection.title} eyebrow={pipelineSection.eyebrow}>
      <p className="section-intro">{pipelineSection.intro}</p>
      <div
        className="pipeline-phases"
        role="region"
        aria-label="Three-phase analytics pipeline"
      >
        {pipelinePhases.map((phase, index) => {
          const PhaseIcon = phaseIcons[index]
          return (
            <Fragment key={phase.id}>
              {index > 0 ? (
                <div
                  className={`pipeline-connector pipeline-connector--step-${index}`}
                  aria-hidden="true"
                >
                  <span className="pipeline-connector-line" />
                  <span className="pipeline-connector-glyph">→</span>
                </div>
              ) : null}
              <article
                className={`pipeline-phase-card pipeline-phase-card--${phase.accent}`}
                aria-labelledby={`${phase.id}-title`}
              >
                <div className="pipeline-phase-icon-wrap">
                  <PhaseIcon className="pipeline-phase-icon" />
                </div>
                <h3 id={`${phase.id}-title`} className="pipeline-phase-title">
                  {phase.title}
                </h3>
                <ul className="pipeline-phase-chips">
                  {phase.chips.map((chip) => (
                    <li key={chip} className="pipeline-phase-chip">
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            </Fragment>
          )
        })}
      </div>
    </Section>
  )
}
