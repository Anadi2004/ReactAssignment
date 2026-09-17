import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content">
        {/* ---- Text Side ---- */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Opportunities
          </div>

          <h1 className="hero__title">
            Hi, I&apos;m 👋
            <span className="hero__title-name">Anadi Mondal</span>
          </h1>

          <p className="hero__role">
            <strong>Aspiring SDE</strong> &amp; CS Student @ TIU
          </p>

          <p className="hero__description">
            I&apos;m a passionate Computer Science student at Techno India University,
            building my path towards becoming a Software Development Engineer.
            I love crafting clean, efficient code and solving real-world problems through technology.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn-primary" id="hero-contact-btn">
              Get In Touch 🚀
            </a>
            <a href="#about" className="btn-outline" id="hero-about-btn">
              About Me
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Years Study</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">8+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
          </div>
        </div>

        {/* ---- Visual / Avatar Side ---- */}
        <div className="hero__visual">
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <span className="hero__avatar-emoji">👨‍💻</span>
            </div>

            <div className="hero__floating-badge hero__floating-badge--1">
              ⚛️ React Expert
            </div>
            <div className="hero__floating-badge hero__floating-badge--2">
              🎨 UI Designer
            </div>
            <div className="hero__floating-badge hero__floating-badge--3">
              🔥 Open Source
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        Scroll down
      </div>
    </section>
  );
}

export default Hero;
