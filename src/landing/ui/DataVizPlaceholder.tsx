type VizVariant = 'shap' | 'ars-simulator'

type DataVizPlaceholderProps = {
  variant: VizVariant
  caption?: string
}

function ShapBeeswarmSvg() {
  const features = [
    { y: 18, dots: [12, 28, 44, 58, 72] },
    { y: 38, dots: [18, 34, 50, 66] },
    { y: 58, dots: [22, 38, 54, 70, 82] },
    { y: 78, dots: [30, 46, 62] },
  ]
  const colors = ['#34d399', '#22d3ee', '#67e8f9', '#60a5fa', '#34d399']

  return (
    <svg viewBox="0 0 200 100" className="data-viz-svg" aria-hidden="true">
      <line x1="8" y1="92" x2="192" y2="92" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      <line x1="8" y1="8" x2="8" y2="92" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {features.map((row, ri) =>
        row.dots.map((x, di) => (
          <circle
            key={`${ri}-${di}`}
            cx={x}
            cy={row.y}
            r={2.8}
            fill={colors[(ri + di) % colors.length]}
            opacity={0.75}
          />
        )),
      )}
      <text x="8" y="98" fill="rgba(139,148,163,0.7)" fontSize="5" fontFamily="monospace">
        SHAP value →
      </text>
    </svg>
  )
}

function ArsBarsSvg() {
  const bars = [
    { x: 28, h: 32, label: 'Base' },
    { x: 68, h: 48, label: 'Top-50' },
    { x: 108, h: 62, label: 'Top-100' },
    { x: 148, h: 78, label: 'Top-200' },
  ]

  return (
    <svg viewBox="0 0 200 100" className="data-viz-svg" aria-hidden="true">
      <line x1="12" y1="88" x2="188" y2="88" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
      {bars.map((bar, i) => (
        <g key={bar.label}>
          <rect
            x={bar.x - 14}
            y={88 - bar.h}
            width={28}
            height={bar.h}
            rx={3}
            fill={i === bars.length - 1 ? 'rgba(103,232,249,0.55)' : 'rgba(34,211,238,0.28)'}
          />
          <text
            x={bar.x}
            y="96"
            textAnchor="middle"
            fill="rgba(139,148,163,0.65)"
            fontSize="5"
            fontFamily="monospace"
          >
            {bar.label}
          </text>
        </g>
      ))}
      <polyline
        points="28,56 68,44 108,32 148,18"
        fill="none"
        stroke="rgba(52,211,153,0.5)"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />
      <text x="152" y="14" fill="rgba(52,211,153,0.6)" fontSize="5" fontFamily="monospace">
        ARS
      </text>
    </svg>
  )
}

export function DataVizPlaceholder({ variant, caption }: DataVizPlaceholderProps) {
  return (
    <figure className="data-viz-placeholder" aria-hidden="true">
      <div className="data-viz-frame">
        {variant === 'shap' ? <ShapBeeswarmSvg /> : <ArsBarsSvg />}
      </div>
      {caption ? <figcaption className="data-viz-caption">{caption}</figcaption> : null}
    </figure>
  )
}
