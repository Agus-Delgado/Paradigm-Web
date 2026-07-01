import { paradigmDeepDive } from '../content'

export function ParadigmDeepDiveIntro() {
  return (
    <section id="paradigm-deep-dive" className="paradigm-deep-dive-intro" aria-labelledby="paradigm-deep-dive-title">
      <div className="section-inner">
        <p className="section-eyebrow">{paradigmDeepDive.eyebrow}</p>
        <h2 id="paradigm-deep-dive-title" className="section-title">
          {paradigmDeepDive.title}
        </h2>
        <p className="paradigm-deep-dive-subtitle">{paradigmDeepDive.subtitle}</p>
        <p className="section-intro paradigm-deep-dive-body">{paradigmDeepDive.body}</p>
      </div>
    </section>
  )
}
