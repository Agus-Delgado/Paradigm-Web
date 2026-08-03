import type { KeyboardEvent, ReactNode } from 'react'
import { formatMessage, useContent } from '../i18n'
import { useEvidence } from './useEvidence'

export type CitationProps = {
  folioIds: string[]
  children: ReactNode
}

function formatMarker(numbers: string[]) {
  return numbers.join(',')
}

export function Citation({ folioIds, children }: CitationProps) {
  const { cite, clearCite, getFolioNumber, scrollToFolio } = useEvidence()
  const { ui } = useContent()

  const numbers = folioIds.map((id) => getFolioNumber(id) ?? id)
  const marker = formatMarker(numbers)
  const label =
    folioIds.length === 1
      ? formatMessage(ui.citation.viewFolio, { n: numbers[0] ?? '' })
      : formatMessage(ui.citation.viewFolios, { n: numbers.join(', ') })

  const highlight = () => cite(folioIds)
  const unhighlight = () => clearCite()

  const goToPrimary = () => {
    const target = folioIds[0]
    if (target) scrollToFolio(target)
  }

  const onMarkerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      goToPrimary()
    }
  }

  return (
    <span className="citation">
      <span
        className="citation-text"
        onMouseEnter={highlight}
        onMouseLeave={unhighlight}
        onClick={goToPrimary}
      >
        {children}
      </span>
      <button
        type="button"
        className="citation-mark"
        aria-label={label}
        onMouseEnter={highlight}
        onMouseLeave={unhighlight}
        onFocus={highlight}
        onBlur={unhighlight}
        onClick={(e) => {
          e.stopPropagation()
          goToPrimary()
        }}
        onKeyDown={onMarkerKeyDown}
      >
        <span className="citation-mark-hit" aria-hidden="true">
          {marker}
        </span>
      </button>
    </span>
  )
}
