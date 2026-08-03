import { analyticalQuestions, casoNoShow } from '../content'
import { Citation } from '../ui/Citation'
import { DecisionLog } from '../ui/DecisionLog'
import { Folio } from '../ui/Folio'
import { Section } from '../ui/Section'

const [folio01, folio02, folio03, folio04, folio05] = casoNoShow.folios

const threadIds = new Set<string>(casoNoShow.blocks.pregunta.threads)
const preguntaThreads = analyticalQuestions.filter((q) => threadIds.has(q.id))

export function CasoNoShowSection() {
  const { blocks } = casoNoShow

  return (
    <Section
      id="caso-no-show"
      eyebrow={casoNoShow.eyebrow}
      title={casoNoShow.title}
      sceneNumber="03"
      sceneTemp="caso"
      className="caso-no-show-section"
    >
      <p className="section-intro">
        Un solo recorrido sobre el mart gobernado: formular la pregunta, explorar el grano, leer la{' '}
        <span className="text-accent text-accent--evidence">evidencia</span> y registrar qué se
        decide — con{' '}
        <span className="text-accent text-accent--limit">limitación</span> explícita, sin cifras
        inventadas.
      </p>

      <div className="caso-block">
        <h3 className="caso-block-label">{blocks.pregunta.label}</h3>
        <p className="caso-block-lead">{blocks.pregunta.lead}</p>
        <p className="section-p">
          {blocks.pregunta.bodyBefore}
          <Citation folioIds={[folio01.id]}>{blocks.pregunta.citationPhrase}</Citation>
          {blocks.pregunta.bodyAfter}
        </p>
        <ul className="caso-threads">
          {preguntaThreads.map((thread) => (
            <li key={thread.id} className="caso-thread">
              <span className="caso-thread-id">{thread.id}</span>
              <span className="caso-thread-copy">
                <span className="caso-thread-title">{thread.title}</span>
                <span className="caso-thread-body">{thread.body}</span>
              </span>
            </li>
          ))}
        </ul>
        <Folio
          id={folio01.id}
          number={folio01.number}
          scope={casoNoShow.scope}
          title={folio01.title}
          src={folio01.src}
          alt={folio01.alt}
          context={folio01.context}
          source={casoNoShow.source}
          tone="explore"
        />
      </div>

      <div className="caso-block caso-block--explore">
        <h3 className="caso-block-label">{blocks.exploracion.label}</h3>
        <p className="caso-block-lead">{blocks.exploracion.lead}</p>
        <p className="section-p">
          {blocks.exploracion.bodyBefore}
          <Citation folioIds={[folio02.id]}>{blocks.exploracion.citationSql}</Citation>
          {blocks.exploracion.bodyMid}
          <Citation folioIds={[folio03.id]}>{blocks.exploracion.citationData}</Citation>
          {blocks.exploracion.bodyAfter}
        </p>
        <Folio
          id={folio02.id}
          number={folio02.number}
          scope={casoNoShow.scope}
          title={folio02.title}
          src={folio02.src}
          alt={folio02.alt}
          context={folio02.context}
          source={casoNoShow.source}
          tone="explore"
        />
        <Folio
          id={folio03.id}
          number={folio03.number}
          scope={casoNoShow.scope}
          title={folio03.title}
          src={folio03.src}
          alt={folio03.alt}
          context={folio03.context}
          source={casoNoShow.source}
          tone="explore"
        />
      </div>

      <div className="caso-block caso-block--evidence">
        <h3 className="caso-block-label">{blocks.evidencia.label}</h3>
        <p className="caso-block-lead">{blocks.evidencia.lead}</p>
        <p className="section-p">
          {blocks.evidencia.bodyBefore}
          <Citation folioIds={[folio04.id]}>{blocks.evidencia.citationAnalysis}</Citation>
          {blocks.evidencia.bodyMid}
          <Citation folioIds={[folio05.id]}>{blocks.evidencia.citationShap}</Citation>
          {blocks.evidencia.bodyAfter}
        </p>
        <aside className="caso-limitation" role="note">
          <p className="caso-limitation-title">{blocks.evidencia.limitationTitle}</p>
          <p className="caso-limitation-body">
            Synthetic{' '}
            <span className="text-accent text-accent--metric">ROC-AUC</span> remains modest — a
            documented property of the generator, not a hidden failure. The value here is
            methodology: leakage controls, temporal splits, ranking metrics, and honest
            explainability — not inflated performance claims.
          </p>
        </aside>
        <Folio
          id={folio04.id}
          number={folio04.number}
          scope={casoNoShow.scope}
          title={folio04.title}
          src={folio04.src}
          alt={folio04.alt}
          context={folio04.context}
          source={casoNoShow.source}
          tone="evidence"
        />
        <Folio
          id={folio05.id}
          number={folio05.number}
          scope={casoNoShow.scope}
          title={folio05.title}
          src={folio05.src}
          alt={folio05.alt}
          context={folio05.context}
          source={casoNoShow.source}
          tone="evidence"
        />
      </div>

      <div className="caso-block caso-block--decision">
        <h3 className="caso-block-label">{blocks.decision.label}</h3>
        <p className="caso-block-lead">
          Cierra el hilo de priorización (T6): una lista rankeada para outreach — soporte a{' '}
          <span className="text-accent text-accent--decision">decisión</span>, no cuidado autónomo.
          Lo documentado aquí es acotado: hallazgo, límite y evidencia citada.
        </p>
        <DecisionLog entries={casoNoShow.decisions} />
      </div>
    </Section>
  )
}
