import { hero } from '../content'
import { useSceneReveal } from '../ui/useSceneReveal'

type DataNode = {
  id: string
  label: string
  x: number
  y: number
  tone: 'muted' | 'ochre' | 'mineral' | 'oxblood'
  key?: boolean
}

type DataEdge = { from: string; to: string; tone?: 'ochre' | 'mineral' | 'oxblood' }

const DATA_NODES: readonly DataNode[] = [
  { id: 'n1', label: 'appointments.csv', x: 28, y: 42, tone: 'ochre' },
  { id: 'n2', label: 'patients.csv', x: 118, y: 22, tone: 'muted' },
  { id: 'n3', label: 'specialty_id', x: 72, y: 118, tone: 'ochre', key: true },
  { id: 'n4', label: 'lead_time_days', x: 188, y: 96, tone: 'mineral' },
  { id: 'n5', label: 'attendance_status', x: 248, y: 48, tone: 'mineral', key: true },
  { id: 'n6', label: 'mart.fact_visits', x: 312, y: 128, tone: 'mineral', key: true },
  { id: 'n7', label: 'decisión', x: 356, y: 72, tone: 'oxblood', key: true },
]

/** Desktop edges: fragmentation → structured path */
const DATA_EDGES: readonly DataEdge[] = [
  { from: 'n1', to: 'n3', tone: 'ochre' },
  { from: 'n2', to: 'n3' },
  { from: 'n3', to: 'n4', tone: 'ochre' },
  { from: 'n4', to: 'n5', tone: 'mineral' },
  { from: 'n5', to: 'n6', tone: 'mineral' },
  { from: 'n6', to: 'n7', tone: 'oxblood' },
]

const MOBILE_NODES: readonly DataNode[] = [
  { id: 'n1', label: 'appointments.csv', x: 36, y: 48, tone: 'ochre' },
  { id: 'n3', label: 'specialty_id', x: 120, y: 120, tone: 'ochre', key: true },
  { id: 'n5', label: 'attendance_status', x: 210, y: 56, tone: 'mineral', key: true },
  { id: 'n7', label: 'decisión', x: 300, y: 110, tone: 'oxblood', key: true },
]

const MOBILE_EDGES: readonly DataEdge[] = [
  { from: 'n1', to: 'n3', tone: 'ochre' },
  { from: 'n3', to: 'n5', tone: 'mineral' },
  { from: 'n5', to: 'n7', tone: 'oxblood' },
]

function nodeById(nodes: readonly DataNode[], id: string) {
  const node = nodes.find((n) => n.id === id)
  if (!node) throw new Error(`Missing data node: ${id}`)
  return node
}

function DataFieldSvg({
  nodes,
  edges,
  className,
}: {
  nodes: readonly DataNode[]
  edges: readonly DataEdge[]
  className: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g className="hero-data-edges">
        {edges.map((edge, index) => {
          const a = nodeById(nodes, edge.from)
          const b = nodeById(nodes, edge.to)
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              className={`hero-data-edge${edge.tone ? ` hero-data-edge--${edge.tone}` : ''}`}
              style={{ ['--edge-i' as string]: index }}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
            />
          )
        })}
      </g>

      <g className="hero-data-nodes">
        {nodes.map((node, index) => (
          <g
            key={node.id}
            className={`hero-data-node hero-data-node--${node.tone}${node.key ? ' hero-data-node--key' : ''}${node.id === 'n7' ? ' hero-data-node--final' : ''}`}
            style={{ ['--node-i' as string]: index }}
            transform={`translate(${node.x} ${node.y})`}
          >
            <circle className="hero-data-dot" r={node.key ? 5 : 3.5} cx="0" cy="0" />
            <text className="hero-data-label" x="8" y="4">
              {node.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}

export function HeroSection() {
  const revealRef = useSceneReveal<HTMLElement>()

  return (
    <section
      ref={revealRef}
      className="hero scene-reveal"
      id="overview"
      aria-labelledby="hero-title"
    >
      <div className="section-inner hero-shell">
        <div className="hero-copy">
          <p className="hero-masthead">{hero.masthead}</p>
          <p className="hero-case-id">{hero.caseId}</p>

          <h1 id="hero-title" className="hero-title">
            Antes de tomar una{' '}
            <span className="text-accent text-accent--decision">decisión</span>, alguien tiene que
            demostrar de dónde salió cada{' '}
            <span className="text-accent text-accent--metric">número</span>.
          </h1>

          <p className="hero-body">
            Turnos, pacientes, especialidades y señales operativas parten de fuentes fragmentadas.
            Paradigm las convierte en un análisis{' '}
            <span className="text-accent text-accent--structure">validado</span>, reproducible y
            documentado hasta la decisión.
          </p>

          <p className="hero-continue">
            <a href={hero.continueHref} className="hero-continue-link">
              {hero.continueLabel}
            </a>
          </p>
        </div>

        <div className="hero-data-field" aria-hidden="true">
          <div className="hero-data-field-frame">
            <p className="hero-data-field-caption">
              Fuentes → <span className="text-accent text-accent--structure">estructura</span>
            </p>
            <DataFieldSvg
              className="hero-data-svg hero-data-svg--desktop"
              nodes={DATA_NODES}
              edges={DATA_EDGES}
            />
            <DataFieldSvg
              className="hero-data-svg hero-data-svg--mobile"
              nodes={MOBILE_NODES}
              edges={MOBILE_EDGES}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
