import { finalCta } from '../content'

export function FinalCtaSection() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="section-inner">
        <h2 id="final-cta-title" className="final-cta-title">
          {finalCta.title}
        </h2>
        <p className="final-cta-body">{finalCta.body}</p>
      </div>
    </section>
  )
}
