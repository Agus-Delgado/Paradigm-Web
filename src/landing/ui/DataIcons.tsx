type IconProps = {
  className?: string
}

export function IconDatabase({ className = 'data-icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <ellipse cx="8" cy="4" rx="5.5" ry="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M2.5 4v3c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2V4M2.5 7v3c0 1.1 2.46 2 5.5 2s5.5-.9 5.5-2V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function IconShield({ className = 'data-icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 1.5L2.5 3.5v4.5c0 3.2 2.35 5.5 5.5 6.5 3.15-1 5.5-3.3 5.5-6.5V3.5L8 1.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M5.5 8l1.8 1.8L10.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconChartUp({ className = 'data-icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 13h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M4 10l3-3 2.5 2.5L12 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.5 5H12v1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconTerminal({ className = 'data-icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect
        x="1.5"
        y="2.5"
        width="13"
        height="11"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M4 6l2 2-2 2M7.5 10h3" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function IconSparkline({ className = 'data-icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M1.5 11l2.5-3 2 2 3-5 2.5 3 3.5-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
