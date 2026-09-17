import './About.css';

const traits = [
  { icon: '⚡', label: 'Fast Learner' },
  { icon: '🎯', label: 'Problem Solver' },
  { icon: '🤝', label: 'Team Player' },
  { icon: '🎨', label: 'Creative Thinker' },
  { icon: '🔍', label: 'Detail Oriented' },
  { icon: '🚀', label: 'Self Motivated' },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />

        <div className="about__grid">
          {/* ---- Visual Card ---- */}
          <div className="about__visual">
            <div className="about__img-card">
              <span className="about__emoji-big">👨‍💻</span>
              <p className="about__name-card">Anadi Mondal</p>
              <p className="about__role-card">Aspiring SDE &amp; CS Student</p>

              <ul className="about__info-list">
                <li className="about__info-item">
                  <span className="about__info-icon">📍</span>
                  <div>
                    <span className="about__info-label">Location</span>
                    <span className="about__info-value">Kolkata, West Bengal, India</span>
                  </div>
                </li>
                <li className="about__info-item">
                  <span className="about__info-icon">🎓</span>
                  <div>
                    <span className="about__info-label">Degree</span>
                    <span className="about__info-value">BCA — Bachelor of Computer Applications</span>
                  </div>
                </li>
                <li className="about__info-item">
                  <span className="about__info-icon">📧</span>
                  <div>
                    <span className="about__info-label">Email</span>
                    <span className="about__info-value">anadi231001102091@technoindiaeducation.com</span>
                  </div>
                </li>
                <li className="about__info-item">
                  <span className="about__info-icon">💼</span>
                  <div>
                    <span className="about__info-label">Status</span>
                    <span className="about__info-value">Open to Work ✅</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ---- Text Side ---- */}
          <div className="about__text">
            <p className="about__intro">
              I&apos;m a passionate <span className="about__highlight">Computer Science student</span> at
              <span className="about__highlight"> Techno India University</span>, driven by a strong desire to
              become a skilled <span className="about__highlight">Software Development Engineer</span>.
              I enjoy building web applications, exploring new technologies, and writing clean,
              maintainable code.
            </p>
            <p className="about__intro">
              I specialize in <span className="about__highlight">React.js</span> and modern JavaScript,
              constantly learning and growing through hands-on projects, assignments, and
              collaboration. My goal is to contribute to impactful software products and
              build a strong career in the tech industry.
            </p>

            <div className="about__traits">
              {traits.map(t => (
                <div className="about__trait" key={t.label}>
                  <span className="about__trait-icon">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" id="about-contact-btn">
              Let&apos;s Connect 👋
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
