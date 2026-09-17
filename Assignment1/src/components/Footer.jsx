import './Footer.css';

const quickLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'About Me',  href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

const techStack = [
  { label: 'React.js',    href: '#skills' },
  { label: 'JavaScript',  href: '#skills' },
  { label: 'Node.js',     href: '#skills' },
  { label: 'MongoDB',     href: '#skills' },
  { label: 'Git & GitHub',href: '#skills' },
];

const socials = [
  { icon: '🐙', label: 'GitHub',    href: 'https://github.com/' },
  { icon: '💼', label: 'LinkedIn',  href: 'https://linkedin.com/' },
  { icon: '🐦', label: 'Twitter',   href: 'https://twitter.com/' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com/' },
];

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">

          {/* Brand Column */}
          <div className="footer__brand">
            <a className="footer__logo" href="#home">
              <div className="footer__logo-icon">P</div>
              Portfolio
            </a>
            <p className="footer__tagline">
              Aspiring SDE &amp; CS student at Techno India University.
              Open to opportunities, internships, and exciting collaborations.
            </p>
            <div className="footer__socials">
              {socials.map(s => (
                <a
                  className="footer__social"
                  href={s.href}
                  key={s.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  id={`footer-social-${s.label.toLowerCase()}`}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer__col-title">Quick Links</p>
            <ul className="footer__links">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href}>→ {l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="footer__col-title">Tech Stack</p>
            <ul className="footer__links">
              {techStack.map(l => (
                <li key={l.label}>
                  <a href={l.href}>⚡ {l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="footer__col-title">Contact</p>
            <ul className="footer__links">
              <li><a href="mailto:anadi231001102091@technoindiaeducation.com">📧 anadi231001102091@</a></li>
              <li><a href="#">📧 technoindiaeducation.com</a></li>
              <li><a href="#contact">📍 Kolkata, WB, India</a></li>
              <li><a href="#contact">💼 Open to Work</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} <strong>Anadi Mondal</strong>. All rights reserved.
          </p>
          <p className="footer__made-with">
            Built with <span className="footer__heart">❤️</span> using React &amp; Vite
          </p>
          <button
            className="footer__back-top"
            onClick={scrollTop}
            aria-label="Back to top"
            id="back-to-top-btn"
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
