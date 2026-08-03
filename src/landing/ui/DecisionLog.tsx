import type { DecisionEntry } from '../content'
import { Citation } from './Citation'

type DecisionLogProps = {
  entries: readonly DecisionEntry[]
}

export function DecisionLog({ entries }: DecisionLogProps) {
  return (
    <div className="decision-log">
      {entries.map((entry) => (
        <details key={entry.id} className="decision-entry">
          <summary className="decision-summary">
            <span className="decision-summary-main">
              <span className="decision-question">{entry.question}</span>
              <span className="decision-verdict">{entry.decision}</span>
            </span>
            <span className="decision-status" data-status={entry.status}>
              Documentada
            </span>
          </summary>

          <div className="decision-body">
            <div className="decision-field">
              <p className="decision-field-label">Hallazgo</p>
              <p className="decision-field-text">
                <Citation folioIds={[...entry.evidenceFolioIds]}>{entry.finding}</Citation>
              </p>
            </div>

            {entry.limitation ? (
              <div className="decision-field">
                <p className="decision-field-label">Limitación</p>
                <p className="decision-field-text">{entry.limitation}</p>
              </div>
            ) : null}

            <div className="decision-field">
              <p className="decision-field-label">Evidencia citada</p>
              <p className="decision-field-text">
                Folios{' '}
                <Citation folioIds={[...entry.evidenceFolioIds]}>
                  análisis guiado y explicabilidad SHAP
                </Citation>
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
