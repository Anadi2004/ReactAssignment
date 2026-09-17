import './Skills.css';

const skillCategories = [
  {
    icon: '⚛️',
    category: 'Frontend',
    color: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    bg: 'rgba(124, 58, 237, 0.15)',
    skills: [
      { name: 'React.js',    pct: 88 },
      { name: 'JavaScript',  pct: 85 },
      { name: 'HTML5 / CSS3',pct: 92 },
      { name: 'TypeScript',  pct: 70 },
    ],
  },
  {
    icon: '🔧',
    category: 'Backend',
    color: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    bg: 'rgba(6, 182, 212, 0.15)',
    skills: [
      { name: 'Node.js',    pct: 72 },
      { name: 'Express.js', pct: 68 },
      { name: 'Python',     pct: 75 },
      { name: 'REST APIs',  pct: 80 },
    ],
  },
  {
    icon: '🗄️',
    category: 'Database & Tools',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    bg: 'rgba(245, 158, 11, 0.15)',
    skills: [
      { name: 'MongoDB',    pct: 65 },
      { name: 'MySQL',      pct: 60 },
      { name: 'Git / GitHub',pct: 88 },
      { name: 'VS Code',    pct: 95 },
    ],
  },
];

const techTags = [
  '⚛️ React', '🟨 JavaScript', '🐍 Python', '🟢 Node.js',
  '🌐 HTML5', '🎨 CSS3', '🔷 TypeScript', '🐙 GitHub',
  '🍃 MongoDB', '🐬 MySQL', '⚡ Vite', '🔴 Redux',
  '📱 Responsive Design', '🎭 Figma', '🐳 Docker (Basic)',
];

function SkillBar({ name, pct, gradient }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__top">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{pct}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ '--target-width': `${pct}%`, background: gradient }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life.
        </p>
        <div className="section-divider" />

        <div className="skills__grid">
          {skillCategories.map(cat => (
            <div className="skill-card" key={cat.category}>
              <div className="skill-card__header">
                <div
                  className="skill-card__icon"
                  style={{ background: cat.bg }}
                >
                  {cat.icon}
                </div>
                <div>
                  <div className="skill-card__category">{cat.category}</div>
                  <div className="skill-card__count">{cat.skills.length} skills</div>
                </div>
              </div>

              {cat.skills.map(s => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} gradient={cat.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Tag Cloud */}
        <div className="skills__tags-section">
          <p className="skills__tags-title">Other Technologies I Work With</p>
          <div className="skills__tags">
            {techTags.map(tag => (
              <span className="skills__tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
