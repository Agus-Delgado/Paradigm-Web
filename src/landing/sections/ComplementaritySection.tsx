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

      <div className="complementarity-layers" role="list" aria-label="Portfolio layers by project">
        {complementarity.layers.map((layer, index) => (
          <article
            key={layer.project}
            role="listitem"
            className={`complementarity-layer complementarity-layer--${layer.accent}`}
            aria-labelledby={`complementarity-layer-${index}-title`}
          >
            <div className="complementarity-layer-index" aria-hidden="true">
              {index + 1}
            </div>
            <div className="complementarity-layer-content">
              <h3 id={`complementarity-layer-${index}-title`} className="complementarity-layer-title">
                {layer.title}
              </h3>
              <p className="complementarity-layer-project">
                <span className="complementarity-layer-project-label">Project</span>
                {layer.project}
              </p>
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
