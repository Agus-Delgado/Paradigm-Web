import { complementarity } from '../content'
import { Section } from '../ui/Section'

export function ComplementaritySection() {
  return (
    <Section
      id="complementarity"
      title={complementarity.title}
      eyebrow="Layers"
      className="complementarity-section"
    >
      <p className="section-intro">{complementarity.intro}</p>

      <div className="complementarity-cards" role="list" aria-label="Portfolio layers by project">
        {complementarity.layers.map((layer, index) => (
          <article
            key={layer.project}
            role="listitem"
            className={`complementarity-card complementarity-card--${layer.accent}`}
            aria-labelledby={`complementarity-layer-${index}-title`}
          >
            <span className="complementarity-card-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="complementarity-card-block">
              <p className="complementarity-card-label">Layer</p>
              <h3 id={`complementarity-layer-${index}-title`} className="complementarity-card-layer">
                {layer.title}
              </h3>
            </div>

            <div className="complementarity-card-block">
              <p className="complementarity-card-label">Project</p>
              <p className="complementarity-card-project">{layer.project}</p>
            </div>

            <div className="complementarity-card-block">
              <p className="complementarity-card-label">Output</p>
              <p className="complementarity-card-output">{layer.output}</p>
            </div>

            <div className="complementarity-card-block complementarity-card-block--skills">
              <p className="complementarity-card-label">Skills</p>
              <ul className="complementarity-skill-list" aria-label={`${layer.project} skills`}>
                {layer.skills.map((skill) => (
                  <li key={skill} className="complementarity-skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="section-intro complementarity-closing">{complementarity.closing}</p>
    </Section>
  )
}
