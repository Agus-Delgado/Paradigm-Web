import { useEffect, useId, useRef, useState } from 'react'
import { useEvidence } from './useEvidence'

export type FolioProps = {
  id: string
  number: string
  scope: string
  title: string
  src?: string
  alt: string
  context: string
  source?: string
  variant?: 'full' | 'inline'
  cited?: boolean
  tone?: 'explore' | 'evidence' | 'decision'
}

export function Folio({
  id,
  number,
  scope,
  title,
  src,
  alt,
  context,
  source = 'Captura estática — demo Streamlit separada',
  variant = 'full',
  cited,
  tone,
}: FolioProps) {
  const { citedIds, registerFolio, unregisterFolio } = useEvidence()
  const isCited = cited ?? citedIds.has(id)
  const [zoomed, setZoomed] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const dialogTitleId = useId()

  useEffect(() => {
    registerFolio(id, number)
    return () => unregisterFolio(id)
  }, [id, number, registerFolio, unregisterFolio])

  useEffect(() => {
    if (!zoomed) return

    const trigger = triggerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setZoomed(false)
        return
      }

      if (e.key === 'Tab') {
        e.preventDefault()
        closeRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      trigger?.focus()
    }
  }, [zoomed])

  return (
    <>
      <figure
        id={id}
        className={`folio folio--${variant}${isCited ? ' folio--cited' : ''}${tone ? ` folio--tone-${tone}` : ''}`}
        data-folio-number={number}
      >
        <figcaption className="folio-caption">
          <div className="folio-meta">
            <span className={`folio-number${isCited ? ' folio-number--cited' : ''}`}>{number}</span>
            <span className="folio-scope">{scope}</span>
          </div>
          <p className="folio-title">{title}</p>
          <p className="folio-context">{context}</p>
          {source ? <p className="folio-source">{source}</p> : null}
        </figcaption>

        {src ? (
          <div className="folio-media">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="folio-image"
            />
            <button
              ref={triggerRef}
              type="button"
              className="folio-zoom-trigger"
              onClick={() => setZoomed(true)}
              aria-haspopup="dialog"
              aria-label={`Ampliar folio ${number}: ${title}`}
            >
              Ampliar
            </button>
          </div>
        ) : (
          <div className="folio-fallback" role="img" aria-label={`${alt} — captura pendiente`}>
            <span className="folio-fallback-label">Captura pendiente</span>
          </div>
        )}
      </figure>

      {zoomed && src ? (
        <div
          ref={dialogRef}
          className="folio-zoom"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onClick={() => setZoomed(false)}
        >
          <div className="folio-zoom-panel" onClick={(e) => e.stopPropagation()}>
            <div className="folio-zoom-header">
              <p id={dialogTitleId} className="folio-zoom-title">
                <span className="folio-number">{number}</span>
                <span className="folio-zoom-title-text">{title}</span>
              </p>
              <button
                ref={closeRef}
                type="button"
                className="folio-zoom-close"
                onClick={() => setZoomed(false)}
              >
                Cerrar
              </button>
            </div>
            <img src={src} alt={alt} className="folio-zoom-image" />
          </div>
        </div>
      ) : null}
    </>
  )
}
