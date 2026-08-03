import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { CASE_INDEX_TARGETS } from '../content'
import type { CaseSceneStatus } from '../content'
import { formatMessage, useContent } from '../i18n'
import { LanguageSwitcher } from './LanguageSwitcher'
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

const DESKTOP_QUERY = '(min-width: 1200px)'
const TARGET_IDS = [...CASE_INDEX_TARGETS]

export function CaseIndex() {
  const content = useContent()
  const { caseIndex, ui } = content
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
  const sceneIndicator = useMemo(() => {
    if (activeIndex >= 0) {
      return formatMessage(ui.caseIndex.sceneOf, {
        current: activeIndex + 1,
        total: caseIndex.length,
      })
    }
    return formatMessage(ui.caseIndex.sceneIdle, { total: caseIndex.length })
  }, [activeIndex, caseIndex.length, ui.caseIndex.sceneIdle, ui.caseIndex.sceneOf])

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
        <nav className="case-index-rail" aria-label={ui.caseIndex.navLabel}>
          <div className="case-index-rail-header">
            <p className="case-index-rail-title">{ui.caseIndex.railTitle}</p>
            <LanguageSwitcher />
          </div>
          {list}
        </nav>
      </header>
    )
  }

  return (
    <header className="case-index">
      <nav className="case-index-bar" aria-label={ui.caseIndex.navLabel}>
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
              <span className="case-index-bar-label case-index-bar-label--idle">
                {ui.caseIndex.idleLabel}
              </span>
            )}
            <span className="case-index-bar-mobile-indicator">{sceneIndicator}</span>
          </div>

          <div className="case-index-bar-actions">
            <LanguageSwitcher />
            <button
              ref={toggleRef}
              type="button"
              className="case-index-toggle"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? ui.caseIndex.toggleClose : ui.caseIndex.toggleOpen}
            </button>
          </div>
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
