import {
  METRICS_DOC_URL,
  governedKpis,
  reproducibility,
  trazabilidadGobierno,
} from '../content'
import { Citation } from '../ui/Citation'
import { Section } from '../ui/Section'

export function TrazabilidadGobiernoSection() {
  return (
    <Section
      id="trazabilidad"
      eyebrow={trazabilidadGobierno.eyebrow}
      title={trazabilidadGobierno.title}
      sceneTemp="trazabilidad"
      className="trazabilidad-section"
    >
      <p className="section-intro">
        Los{' '}
        <span className="text-accent text-accent--metric">KPIs</span> no son números sueltos:
        tienen definición,{' '}
        <span className="text-accent text-accent--validation">validación</span> y un procedimiento
        documentado para volver a producirlos.
      </p>
      <p className="section-p">{governedKpis.intro}</p>

      <ol className="gov-kpi-register">
        {governedKpis.items.map((item, index) => {
          const isCited = item === trazabilidadGobierno.kpiCitationLabel
          return (
            <li key={item} className="gov-kpi-item">
              <span className="gov-kpi-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="gov-kpi-name">
                {isCited ? (
                  <Citation folioIds={[...trazabilidadGobierno.kpiCitationFolioIds]}>{item}</Citation>
                ) : (
                  item
                )}
              </span>
            </li>
          )
        })}
      </ol>

      <p className="gov-kpi-note">
        {governedKpis.metricsDocNote}
        {METRICS_DOC_URL ? (
          <>
            {' '}
            <a
              href={METRICS_DOC_URL}
              className="inline-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              docs/metrics.md
            </a>
          </>
        ) : null}
      </p>

      <div className="gov-repro">
        <h3 className="gov-repro-label">Reproducibilidad</h3>
        <p className="section-p">{reproducibility.intro}</p>
        <p className="section-p">{trazabilidadGobierno.commandsIntro}</p>

        <ol className="gov-command-list">
          {reproducibility.professionalPath.map((step, index) => (
            <li key={step.cmd} className="gov-command-item">
              <span className="gov-command-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="gov-command-copy">
                <code className="gov-command-cmd">{step.cmd}</code>
                <span className="gov-command-desc">{step.desc}</span>
              </div>
            </li>
          ))}
        </ol>

        <details className="gov-command-detail">
          <summary className="gov-command-detail-summary">
            {trazabilidadGobierno.detailLabel}
          </summary>
          <pre className="gov-command-pre" aria-label="Comandos completos del pipeline">
            <code>
              {reproducibility.detailCommands.map((line) => (
                <span key={line} className="gov-command-line">
                  {line}
                  {'\n'}
                </span>
              ))}
            </code>
          </pre>
        </details>
      </div>
    </Section>
  )
}
