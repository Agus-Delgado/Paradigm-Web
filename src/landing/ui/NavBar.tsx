import { useEffect, useId, useRef, useState } from 'react'
import { GITHUB_REPO_URL } from '../content'

const NAV_LINKS = [
  { href: '#overview', id: 'overview', label: 'Overview' },
  { href: '#ecosystem', id: 'ecosystem', label: 'Ecosystem' },
  { href: '#pipeline', id: 'pipeline', label: 'Pipeline' },
  { href: '#architecture', id: 'architecture', label: 'Architecture' },
  { href: '#live-features', id: 'live-features', label: 'Demo' },
  { href: '#dashboard', id: 'dashboard', label: 'Dashboard' },
  { href: '#ml', id: 'ml', label: 'ML' },
  { href: '#reproducibility', id: 'reproducibility', label: 'Run' },
] as const

const SECTION_ORDER = NAV_LINKS.map((l) => l.id)

export function NavBar() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>(SECTION_ORDER[0])
  const [scrollPct, setScrollPct] = useState(0)
  const panelId = useId()
  const scrollRaf = useRef(0)

  useEffect(() => {
    const onNavigate = () => setOpen(false)
    window.addEventListener('hashchange', onNavigate)
    return () => window.removeEventListener('hashchange', onNavigate)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const headerHeight = () => {
      const outer = document.querySelector('.landing-nav-outer')
      return outer?.getBoundingClientRect().height ?? 52
    }

    const tick = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY ?? doc.scrollTop
      const scrollable = doc.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0
      setScrollPct(pct)

      /** Stable spy: last section whose top has crossed the line below the sticky header. */
      const line = headerHeight() + 1
      let next = SECTION_ORDER[0]
      for (const id of SECTION_ORDER) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) {
          next = id
        }
      }
      if (window.innerHeight + scrollTop >= doc.scrollHeight - 3) {
        next = SECTION_ORDER[SECTION_ORDER.length - 1]
      }
      setActiveId(next)
    }

    const onScrollOrResize = () => {
      if (scrollRaf.current) return
      scrollRaf.current = requestAnimationFrame(() => {
        scrollRaf.current = 0
        tick()
      })
    }

    tick()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      cancelAnimationFrame(scrollRaf.current)
    }
  }, [])

  const githubTitle = !GITHUB_REPO_URL ? 'Set GITHUB_REPO_URL in src/landing/content.ts' : undefined

  return (
    <header className="landing-nav-outer">
      <nav className="landing-nav" aria-label="Primary">
        <div className="landing-nav-strip">
          <a
            href="#overview"
            className={`landing-nav-brand ${activeId === 'overview' ? 'landing-nav-brand--active' : ''}`}
          >
            Paradigm
          </a>

          <div className="landing-nav-desktop">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`landing-nav-link ${isActive ? 'landing-nav-link--active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="landing-nav-actions">
            {GITHUB_REPO_URL ? (
              <a
                href={GITHUB_REPO_URL}
                className="landing-nav-github"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            ) : (
              <span className="landing-nav-github landing-nav-github--disabled" title={githubTitle}>
                GitHub
              </span>
            )}

            <button
              type="button"
              className="landing-nav-menu-btn"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>

        <div
          id={panelId}
          className={`landing-nav-mobile-panel ${open ? 'is-open' : ''}`}
          hidden={!open}
        >
          <div className="landing-nav-mobile-links">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`landing-nav-mobile-link ${isActive ? 'landing-nav-mobile-link--active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className="landing-scroll-progress" aria-hidden="true">
          <div className="landing-scroll-progress-fill" style={{ width: `${scrollPct}%` }} />
        </div>
      </nav>
    </header>
  )
}
