import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('#home');

  /* --- Scroll listener --- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* --- Close mobile menu on link click --- */
  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar__inner">

          {/* Logo */}
          <a className="navbar__logo" href="#home" onClick={() => handleNavClick('#home')}>
            <div className="navbar__logo-icon">P</div>
            Portfolio
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? 'active' : ''}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <a className="navbar__cta" href="#contact" onClick={() => handleNavClick('#contact')}>
            Hire Me
          </a>
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            id="hamburger-btn"
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => handleNavClick(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="navbar__cta" href="#contact" onClick={() => handleNavClick('#contact')}>
          Hire Me 🚀
        </a>
      </div>
    </>
  );
}

export default Navbar;
