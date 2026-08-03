import type { ReactNode } from 'react'
import { useSceneReveal } from './useSceneReveal'

export type SceneTemp =
  | 'apertura'
  | 'instrumentos'
  | 'caso'
  | 'cadena'
  | 'trazabilidad'
  | 'cierre'

type SectionProps = {
  id?: string
  title?: string
  eyebrow?: string
  sceneNumber?: string
  sceneTemp?: SceneTemp
  children: ReactNode
  className?: string
}

export function Section({
  id,
  title,
  eyebrow,
  sceneNumber,
  sceneTemp,
  children,
  className = '',
}: SectionProps) {
  const revealRef = useSceneReveal<HTMLElement>()

  return (
    <section
      ref={revealRef}
      id={id}
      className={`landing-section scene-reveal${sceneTemp ? ` scene-section scene-temp scene-temp--${sceneTemp}` : ''} ${className}`.trim()}
    >
      <div className={`section-inner${sceneTemp ? ' scene-section__inner' : ''}`}>
        {eyebrow || title || sceneNumber ? (
          <header className="section-heading">
            {sceneNumber ? (
              <span className="section-scene-num" aria-hidden="true">
                {sceneNumber}
              </span>
            ) : null}
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            <span className="section-title-mark" aria-hidden="true" />
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}
