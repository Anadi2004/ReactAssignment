import './Education.css';

const educationData = [
  {
    icon: '🎓',
    degree: 'BCA — Bachelor of Computer Applications',
    institution: 'Techno India University (TIU)',
    period: '2023 – 2027',
    location: 'Kolkata, West Bengal, India',
    status: 'current',
    gpa: 'Roll: 23100110209 (1st Year)',
    description:
      'Pursuing BCA (Bachelor of Computer Applications) at Techno India University. Actively involved in coursework covering Data Structures, Algorithms, Web Development and Object-Oriented Programming. Building hands-on skills through lab assignments and projects like this React Portfolio.',
    subjects: ['Data Structures', 'Algorithms', 'Web Dev', 'Machine Learning', 'DBMS', 'OS'],
  },
  {
    icon: '📜',
    degree: 'React.js Complete Developer Course',
    institution: 'Coursera / Online Certification',
    period: '2024',
    location: 'Online',
    status: 'done',
    gpa: 'Score: 95%',
    description:
      'Completed a 40-hour course covering React hooks, Context API, Redux, React Router, REST API integration, and building full-stack applications.',
    subjects: ['React Hooks', 'Redux', 'Context API', 'REST APIs', 'Next.js Intro'],
  },
  {
    icon: '🏫',
    degree: 'Higher Secondary Certificate (12th — Science)',
    institution: 'Higher Secondary — WBCHSE',
    period: '2021 – 2023',
    location: 'West Bengal, India',
    status: 'done',
    gpa: 'Score: 92%',
    description:
      'Completed with distinction in Physics, Chemistry, Mathematics, and Computer Science. School Topper in the Computer Science subject.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
  {
    icon: '🏫',
    degree: 'Secondary School Certificate (10th)',
    institution: 'Secondary — WBBSE',
    period: '2019 – 2021',
    location: 'West Bengal, India',
    status: 'done',
    gpa: 'Score: 94%',
    description:
      'Graduated with merit, demonstrating strong foundation in Science and Mathematics. Won the Science Olympiad at the state level.',
    subjects: ['Science', 'Mathematics', 'Social Studies', 'English'],
  },
];

function EduItem({ item }) {
  return (
    <div className="edu-item">
      {/* Dot */}
      <div className="edu-item__dot-col">
        <div className="edu-item__dot">{item.icon}</div>
      </div>

      {/* Card */}
      <div className="edu-item__card">
        <div className="edu-item__header">
          <h3 className="edu-item__degree">{item.degree}</h3>
          <span className={`edu-item__badge edu-item__badge--${item.status}`}>
            {item.status === 'current' ? '🟢 Current' : '✅ Completed'}
          </span>
        </div>

        <p className="edu-item__institution">{item.institution}</p>

        <div className="edu-item__meta">
          <span>📅 {item.period}</span>
          <span>📍 {item.location}</span>
          <span>⭐ {item.gpa}</span>
        </div>

        <p className="edu-item__desc">{item.description}</p>

        <div className="edu-item__chips">
          {item.subjects.map(s => (
            <span className="edu-item__chip" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic journey and certifications that shaped my skills.
        </p>
        <div className="section-divider" />

        <div className="education__timeline">
          {educationData.map((item, i) => (
            <EduItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
