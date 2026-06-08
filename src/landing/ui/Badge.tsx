type BadgeVariant = 'default' | 'emerald' | 'blue' | 'live'

type BadgeProps = {
  children: string
  variant?: BadgeVariant
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variantClass =
    variant === 'default' ? '' : ` badge--${variant}`
  return <span className={`badge${variantClass}`.trim()}>{children}</span>
}
