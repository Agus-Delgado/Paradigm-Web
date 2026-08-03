import type { DecisionEntry } from '../content'
import { useContent } from '../i18n'
import { Citation } from './Citation'

type DecisionLogProps = {
  entries: readonly DecisionEntry[]
}

export function DecisionLog({ entries }: DecisionLogProps) {
  const { ui } = useContent()
  const labels = ui.decisionLog

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
              {labels.statusDocumented}
            </span>
          </summary>

          <div className="decision-body">
            <div className="decision-field">
              <p className="decision-field-label">{labels.finding}</p>
              <p className="decision-field-text">
                <Citation folioIds={[...entry.evidenceFolioIds]}>{entry.finding}</Citation>
              </p>
            </div>

            {entry.limitation ? (
              <div className="decision-field">
                <p className="decision-field-label">{labels.limitation}</p>
                <p className="decision-field-text">{entry.limitation}</p>
              </div>
            ) : null}

            <div className="decision-field">
              <p className="decision-field-label">{labels.citedEvidence}</p>
              <p className="decision-field-text">
                {labels.citedEvidenceLead}{' '}
                <Citation folioIds={[...entry.evidenceFolioIds]}>
                  {labels.citedEvidencePhrase}
                </Citation>
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
