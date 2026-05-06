import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  title?: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`landing-section ${className}`.trim()}>
      <div className="section-inner">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </div>
    </section>
  )
}
