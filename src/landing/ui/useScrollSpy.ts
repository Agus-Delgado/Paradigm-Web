import { useEffect, useRef, useState } from 'react'

export type ScrollSpyOptions = {
  /** Selector for the sticky header / index bar used as the spy line. */
  headerSelector?: string
  fallbackHeaderHeight?: number
}

/**
 * Scroll-spy for CaseIndex scene highlighting:
 * rAF-throttled scroll/resize, last section whose top crossed the header line.
 * Sections are evaluated in document order (not array order) so temporal
 * CaseIndex mappings that don't match narrative order still spy correctly.
 */
export function useScrollSpy(
  sectionIds: readonly string[],
  { headerSelector = '.case-index', fallbackHeaderHeight = 52 }: ScrollSpyOptions = {},
) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [visitedIds, setVisitedIds] = useState<ReadonlySet<string>>(() => new Set())
  const [scrollPct, setScrollPct] = useState(0)
  const scrollRaf = useRef(0)
  const idsKey = sectionIds.join('|')

  useEffect(() => {
    const ids = idsKey.split('|').filter(Boolean)

    const headerHeight = () => {
      const bar = document.querySelector('.case-index-bar')
      if (bar && getComputedStyle(bar).display !== 'none') {
        return bar.getBoundingClientRect().height
      }
      const legacy = document.querySelector(headerSelector)
      if (legacy && headerSelector !== '.case-index') {
        return legacy.getBoundingClientRect().height
      }
      /** Desktop rail is lateral — keep a small top offset, not the wrapper height. */
      return fallbackHeaderHeight > 0 ? Math.min(fallbackHeaderHeight, 24) : 24
    }

    const sortedEntries = () =>
      ids
        .map((id) => {
          const el = document.getElementById(id)
          return el ? { id, el } : null
        })
        .filter((entry): entry is { id: string; el: HTMLElement } => entry !== null)
        .sort((a, b) => a.el.offsetTop - b.el.offsetTop)

    const tick = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY ?? doc.scrollTop
      const scrollable = doc.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0
      setScrollPct(pct)

      const sorted = sortedEntries()
      if (sorted.length === 0) {
        setActiveId(null)
        setVisitedIds(new Set())
        return
      }

      const line = headerHeight() + 1
      let next: string | null = null
      let nextIndex = -1

      for (let i = 0; i < sorted.length; i += 1) {
        if (sorted[i].el.getBoundingClientRect().top <= line) {
          next = sorted[i].id
          nextIndex = i
        }
      }

      if (window.innerHeight + scrollTop >= doc.scrollHeight - 3) {
        next = sorted[sorted.length - 1].id
        nextIndex = sorted.length - 1
      }

      setActiveId(next)
      setVisitedIds(new Set(sorted.slice(0, Math.max(0, nextIndex)).map((entry) => entry.id)))
    }

    const onScrollOrResize = () => {
      if (scrollRaf.current) return
      scrollRaf.current = requestAnimationFrame(() => {
        scrollRaf.current = 0
        tick()
      })
    }

    /** Hash / history navigation may scroll after the hashchange event — re-measure. */
    const scrollToHashTarget = () => {
      const id = decodeURIComponent(location.hash.replace(/^#/, ''))
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top
      const line = headerHeight()
      const near = top >= -48 && top <= line + 160
      if (!near) {
        el.scrollIntoView()
      }
    }

    const onHashChange = () => {
      scrollToHashTarget()
      onScrollOrResize()
      window.setTimeout(tick, 50)
      window.setTimeout(tick, 200)
    }

    tick()
    if (location.hash) {
      scrollToHashTarget()
      window.setTimeout(tick, 50)
    }
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      window.removeEventListener('hashchange', onHashChange)
      cancelAnimationFrame(scrollRaf.current)
    }
  }, [idsKey, headerSelector, fallbackHeaderHeight])

  return { activeId, visitedIds, scrollPct }
}
