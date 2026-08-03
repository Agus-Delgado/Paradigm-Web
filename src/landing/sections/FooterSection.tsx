import { useContent } from '../i18n'

export function FooterSection() {
  const { footer } = useContent()

  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <nav className="footer-nav" aria-label={footer.navLabel}>
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} className="footer-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="footer-line">{footer.line1}</p>
        <p className="footer-line footer-line--muted">{footer.line2}</p>
      </div>
    </footer>
  )
}
