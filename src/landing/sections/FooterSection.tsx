import { footer } from '../content'

export function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <p className="footer-line">{footer.line1}</p>
        <p className="footer-line footer-line--muted">{footer.line2}</p>
      </div>
    </footer>
  )
}
