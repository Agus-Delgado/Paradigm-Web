import { useEffect, useId, useRef, useState } from 'react'
import { caseIndex } from '../content'
import type { CaseSceneStatus } from '../content'
import { useScrollSpy } from './useScrollSpy'

function sceneNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}

function sceneStatus(
  targetId: string,
  activeId: string | null,
  visitedIds: ReadonlySet<string>,
): CaseSceneStatus {
  if (targetId === activeId) return 'active'
  if (visitedIds.has(targetId)) return 'visited'
  return 'pending'
}

const TARGET_IDS = caseIndex.map((entry) => entry.targetId)
const DESKTOP_QUERY = '(min-width: 1200px)'

export function CaseIndex() {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const { activeId, visitedIds, scrollPct } = useScrollSpy(TARGET_IDS, {
    headerSelector: '.case-index-bar',
    fallbackHeaderHeight: 24,
  })

  const activeEntry = caseIndex.find((entry) => entry.targetId === activeId)
  const activeIndex = activeEntry ? caseIndex.indexOf(activeEntry) : -1
  const sceneIndicator =
    activeIndex >= 0
      ? `Escena ${activeIndex + 1} de ${caseIndex.length}`
      : `Escena — de ${caseIndex.length}`

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const sync = () => {
      setIsDesktop(media.matches)
      if (media.matches) setOpen(false)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const onNavigate = () => setOpen(false)
    window.addEventListener('hashchange', onNavigate)
    return () => window.removeEventListener('hashchange', onNavigate)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null
      if (!target) return
      if (panelRef.current?.contains(target)) return
      if (toggleRef.current?.contains(target)) return
      setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('touchstart', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('touchstart', onPointer)
    }
  }, [open])

  const list = (
    <ol className="case-index-list">
      {caseIndex.map((entry, index) => {
        const status = sceneStatus(entry.targetId, activeId, visitedIds)
        const number = sceneNumber(index)
        return (
          <li key={entry.id} className={`case-index-item case-index-item--${status}`}>
            <a
              href={`#${entry.targetId}`}
              className={`case-index-link case-index-link--${status}`}
              aria-current={status === 'active' ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="case-index-number" aria-hidden="true">
                {number}
              </span>
              <span className="case-index-label">{entry.label}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )

  if (isDesktop) {
    return (
      <header className="case-index">
        <nav className="case-index-rail" aria-label="Índice del expediente">
          <p className="case-index-rail-title">Expediente</p>
          {list}
        </nav>
      </header>
    )
  }

  return (
    <header className="case-index">
      <nav className="case-index-bar" aria-label="Índice del expediente">
        <div className="case-index-bar-strip">
          <div className="case-index-bar-current">
            {activeIndex >= 0 ? (
              <>
                <span className="case-index-bar-number" aria-hidden="true">
                  {sceneNumber(activeIndex)}
                </span>
                <span className="case-index-bar-label">{activeEntry?.label}</span>
              </>
            ) : (
              <span className="case-index-bar-label case-index-bar-label--idle">Expediente</span>
            )}
            <span className="case-index-bar-mobile-indicator">{sceneIndicator}</span>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="case-index-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Cerrar' : 'Índice'}
          </button>
        </div>

        <div
          ref={panelRef}
          id={panelId}
          className={`case-index-panel ${open ? 'is-open' : ''}`}
          hidden={!open}
        >
          {list}
        </div>

        <div className="case-index-progress" aria-hidden="true">
          <div className="case-index-progress-fill" style={{ width: `${scrollPct}%` }} />
        </div>
      </nav>
    </header>
  )
}
