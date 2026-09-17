import { useState } from 'react';
import './Contact.css';

const contactCards = [
  {
    icon: '📧',
    bg: 'rgba(124, 58, 237, 0.15)',
    label: 'Email',
    value: 'anadi231001102091@technoindiaeducation.com',
    href: 'mailto:anadi231001102091@technoindiaeducation.com',
  },
  {
    icon: '📍',
    bg: 'rgba(6, 182, 212, 0.15)',
    label: 'Location',
    value: 'Kolkata, West Bengal, India',
    href: '#',
  },
  {
    icon: '📱',
    bg: 'rgba(245, 158, 11, 0.15)',
    label: 'Phone',
    value: 'Available on Request',
    href: '#',
  },
];

const socials = [
  { icon: '🐙', label: 'GitHub',   href: 'https://github.com/' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: '🐦', label: 'Twitter',  href: 'https://twitter.com/' },
  { icon: '📸', label: 'Instagram',href: 'https://instagram.com/' },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '',
    email: '', phone: '',
    subject: '', message: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you!
        </p>
        <div className="section-divider" />

        <div className="contact__grid">
          {/* ---- Info Side ---- */}
          <div className="contact__info">
            <p className="contact__tagline">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of something amazing. Feel free to reach out!
            </p>

            <div className="contact__cards">
              {contactCards.map(c => (
                <a className="contact__card" href={c.href} key={c.label} id={`contact-card-${c.label.toLowerCase()}`}>
                  <div className="contact__card-icon" style={{ background: c.bg }}>
                    {c.icon}
                  </div>
                  <div>
                    <span className="contact__card-label">{c.label}</span>
                    <span className="contact__card-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact__socials">
              {socials.map(s => (
                <a
                  className="contact__social-btn"
                  href={s.href}
                  key={s.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  id={`social-${s.label.toLowerCase()}`}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ---- Form Side ---- */}
          <div className="contact__form-card">
            {!submitted ? (
              <>
                <h3 className="contact__form-title">Send Me a Message ✉️</h3>
                <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic…</option>
                      <option value="job">Job / Internship Offer</option>
                      <option value="collab">Project Collaboration</option>
                      <option value="freelance">Freelance Work</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="form__submit" id="form-submit-btn">
                    Send Message 🚀
                  </button>
                </form>
              </>
            ) : (
              <div className="form__success">
                <div className="form__success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out, {form.firstName || 'there'}! I&apos;ll get back to you within 24 hours.</p>
                <button
                  className="btn-outline"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '8px' }}
                  id="send-another-btn"
                >
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
