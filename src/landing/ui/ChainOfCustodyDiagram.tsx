import { useEffect, useId, useRef, useState } from 'react'
import type { ChainOfCustodyNode } from '../content'
import { Citation } from './Citation'

type ChainOfCustodyDiagramProps = {
  nodes: readonly ChainOfCustodyNode[]
  listLabel: string
  headline?: string
  trackLabel: string
  fallbackLinkLabel: string
}

export function ChainOfCustodyDiagram({
  nodes,
  listLabel,
  headline,
  trackLabel,
  fallbackLinkLabel,
}: ChainOfCustodyDiagramProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [drawn, setDrawn] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )
  const rootRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (drawn) return

    const root = rootRef.current
    if (!root) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setDrawn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [drawn])

  useEffect(() => {
    if (!expandedId) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setExpandedId(null)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expandedId])

  const toggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <div
      ref={rootRef}
      className={`custody-diagram${drawn ? ' custody-diagram--drawn' : ''}`}
    >
      {headline ? <p className="custody-headline">{headline}</p> : null}

      <ol className="custody-track" aria-label={trackLabel}>
        {nodes.map((node, index) => {
          const expanded = expandedId === node.id
          const detailId = `${panelId}-${node.id}`
          return (
            <li
              key={node.id}
              className={`custody-node${expanded ? ' custody-node--expanded' : ''}`}
            >
              <button
                type="button"
                className="custody-node-trigger"
                aria-expanded={expanded}
                aria-controls={expanded ? detailId : undefined}
                onClick={() => toggle(node.id)}
              >
                <span className="custody-node-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="custody-node-dot" aria-hidden="true" />
                <span className="custody-node-label">{node.label}</span>
              </button>

              {expanded ? (
                <div id={detailId} className="custody-node-detail">
                  <p className="custody-node-title">{node.title}</p>
                  <p className="custody-node-body">
                    {(() => {
                      const phrase = node.citationPhrase
                      const folioIds = node.folioIds
                      if (!phrase || !folioIds?.length) return node.body
                      const ids = [...folioIds]
                      return node.body.split(phrase).map((part, i, parts) =>
                        i < parts.length - 1 ? (
                          <span key={`${node.id}-part-${i}`}>
                            {part}
                            <Citation folioIds={ids}>{phrase}</Citation>
                          </span>
                        ) : (
                          <span key={`${node.id}-tail`}>{part}</span>
                        ),
                      )
                    })()}
                  </p>
                  {'href' in node && node.href ? (
                    <p className="custody-node-link-line">
                      <a href={node.href} className="inline-link">
                        {node.hrefLabel ?? fallbackLinkLabel}
                      </a>
                    </p>
                  ) : null}
                </div>
              ) : null}
            </li>
          )
        })}
      </ol>

      <details className="custody-text-alt">
        <summary className="custody-text-alt-summary">{listLabel}</summary>
        <ol className="custody-text-alt-list">
          {nodes.map((node) => (
            <li key={`alt-${node.id}`} className="custody-text-alt-item">
              <span className="custody-text-alt-label">{node.label}</span>
              <span className="custody-text-alt-title">{node.title}</span>
              <span className="custody-text-alt-body">{node.body}</span>
            </li>
          ))}
        </ol>
      </details>
    </div>
  )
}
