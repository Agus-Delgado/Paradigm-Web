import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  className?: string
  /** Shown when href is empty (placeholder URL). */
  placeholderTitle?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external,
  className = '',
  placeholderTitle,
}: ButtonLinkProps) {
  const cls = `btn btn-${variant} ${className}`.trim()
  const title = !href ? placeholderTitle : undefined

  if (!href) {
    return (
      <span className={`${cls} btn--disabled`} title={title} role="status">
        {children}
      </span>
    )
  }

  const rel = external ? 'noopener noreferrer' : undefined
  const target = external ? '_blank' : undefined

  return (
    <a href={href} className={cls} rel={rel} target={target}>
      {children}
    </a>
  )
}
