import { useContent } from '../i18n'
import { useSceneReveal } from '../ui/useSceneReveal'

export function ArchivoRelacionadoSection() {
  const revealRef = useSceneReveal<HTMLElement>()
  const { archivoRelacionado } = useContent()

  return (
    <section
      ref={revealRef}
      id="archivo"
      className="landing-section landing-section--compact archivo-section scene-reveal"
      aria-labelledby="archivo-title"
    >
      <div className="section-inner">
        <h2 id="archivo-title" className="archivo-eyebrow">
          {archivoRelacionado.eyebrow}
        </h2>
        <p className="archivo-intro">{archivoRelacionado.intro}</p>

        <ul className="archivo-list">
          {archivoRelacionado.projects.map((project) => (
            <li key={project.id} className="archivo-item">
              <span className="archivo-project">{project.title}</span>
              <span className="archivo-role">{project.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
