import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const contactLinks = [
  {
    title: "Email",
    value: "abhinavsinghkanwal@gmail.com",
    href: "mailto:abhinavsinghkanwal@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: "var(--blue)",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/abhinav3838",
    href: "https://linkedin.com/in/abhinav3838",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    color: "var(--blue)",
  },
  {
    title: "GitHub",
    value: "github.com/Abhinavmohindersingh",
    href: "https://github.com/Abhinavmohindersingh",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
    color: "var(--violet)",
  },
];

export default function Contacts() {
  const [form, setForm] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => { emailjs.init("XGBQPdYVyW68c7LkL"); }, []);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error:Please enter a valid email address.");
      return;
    }
    setSending(true);
    setStatus("");
    emailjs.send("service_uijgvdo", "template_h1xa2nq", {
      from_name: form.fullName,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    }).then(
      () => { setStatus("success:Message sent! I'll get back to you soon."); setForm({ fullName: "", email: "", subject: "", message: "" }); setSending(false); },
      (err) => { setStatus(`error:Failed to send: ${err.text}`); setSending(false); }
    );
  };

  const statusParts = status.split(":");
  const statusType = statusParts[0];
  const statusMsg = statusParts.slice(1).join(":");

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={s.hero}>
        <div style={s.orb1} />
        <div style={s.orb2} />
        <div style={s.heroInner}>
          <motion.div {...fadeUp(0.1)} style={s.heroLabel}>GET IN TOUCH</motion.div>
          <motion.h1 {...fadeUp(0.2)} style={s.heroTitle}>
            Let's <span className="grad-text">Connect.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.3)} style={s.heroSub}>
            Open to full-time roles, freelance projects, AI consulting, and research collaborations.
          </motion.p>
          <motion.div {...fadeUp(0.4)} style={s.availBadge}>
            <span style={s.availDot} />
            <span style={{ color: "var(--green)", fontWeight: 600, fontSize: "0.9rem" }}>
              Available · Brisbane, Australia · Open to remote
            </span>
          </motion.div>
        </div>
      </section>

      <div style={s.container}>
        {/* ── Contact Links ─────────────────────────────────── */}
        <section style={s.section}>
          <div style={s.linksGrid}>
            {contactLinks.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : "_self"}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="glass-card"
                {...fadeUp(i * 0.1)}
                style={s.linkCard}
              >
                <div style={{ ...s.linkIcon, color: c.color }}>{c.icon}</div>
                <div>
                  <div style={s.linkTitle}>{c.title}</div>
                  <div style={s.linkValue}>{c.value}</div>
                </div>
                <div style={{ ...s.linkArrow, color: c.color }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Form ──────────────────────────────────────────── */}
        <section style={s.section}>
          <div style={s.formWrap}>
            <motion.div {...fadeUp(0)} style={s.formHeader}>
              <span style={s.label}>SEND A MESSAGE</span>
              <h2 style={s.formTitle}>Have a project in mind?</h2>
              <p style={{ color: "var(--text-2)", fontSize: "0.95rem" }}>
                Drop me a message and I'll get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.form
              className="glass-card"
              {...fadeUp(0.1)}
              style={s.form}
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row" style={s.formRow}>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Full Name</label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={s.input}
                  />
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    style={s.input}
                  />
                </div>
              </div>

              <div style={s.formGroup}>
                <label style={s.formLabel}>Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} required style={s.input}>
                  <option value="">Select a topic</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="freelance-project">Freelance / Consulting</option>
                  <option value="ai-consulting">AI Systems Consulting</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div style={s.formGroup}>
                <label style={s.formLabel}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  required
                  style={{ ...s.input, resize: "vertical", fontFamily: "inherit" }}
                />
              </div>

              <button type="submit" disabled={sending} style={s.submitBtn}>
                {sending ? "Sending..." : "Send Message"}
                {!sending && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                )}
              </button>

              {status && (
                <div style={{ ...s.statusMsg, color: statusType === "success" ? "var(--green)" : "#f87171" }}>
                  {statusMsg}
                </div>
              )}
            </motion.form>
          </div>
        </section>

        {/* ── Opportunities ─────────────────────────────────── */}
        <section style={{ ...s.section, paddingBottom: "2rem" }}>
          <motion.div {...fadeUp(0)} style={s.sectionHeader}>
            <span style={s.label}>OPEN TO</span>
            <h2 style={s.formTitle}>Collaboration Types</h2>
          </motion.div>
          <div style={s.oppGrid}>
            {[
              {
                title: "Full-time Roles",
                desc: "Software Engineer, AI/ML Engineer, Systems Architect, Full Stack Developer.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                ),
              },
              {
                title: "Freelance & Consulting",
                desc: "AI system design, web development, technical architecture, code review.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                ),
              },
              {
                title: "Research",
                desc: "Academic partnerships in AI, embedded systems, and computational biology.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card"
                {...fadeUp(i * 0.1)}
                style={s.oppCard}
              >
                <div style={{ color: "var(--blue)" }}>{item.icon}</div>
                <h3 style={s.oppTitle}>{item.title}</h3>
                <p style={s.oppDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

const s = {
  hero: {
    position: "relative",
    minHeight: "42vh",
    marginTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
  },
  orb1: {
    position: "absolute",
    top: 0, left: "10%",
    width: "400px", height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
    filter: "blur(40px)", pointerEvents: "none",
  },
  orb2: {
    position: "absolute",
    bottom: 0, right: "10%",
    width: "350px", height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
    filter: "blur(40px)", pointerEvents: "none",
  },
  heroInner: {
    position: "relative", zIndex: 2,
    maxWidth: "660px", padding: "4rem 2rem",
    display: "flex", flexDirection: "column",
    gap: "1rem", alignItems: "center",
  },
  heroLabel: {
    fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em",
    color: "var(--blue)", textTransform: "uppercase",
  },
  heroTitle: {
    fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 800,
    letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1,
  },
  heroSub: {
    fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.7, maxWidth: "520px",
  },
  availBadge: {
    display: "flex", alignItems: "center", gap: "0.5rem",
    background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
    borderRadius: "20px", padding: "0.5rem 1.25rem",
  },
  availDot: {
    width: "8px", height: "8px", borderRadius: "50%",
    background: "var(--green)", animation: "pulse-dot 2s infinite", display: "inline-block",
  },

  container: { maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" },
  section: { padding: "3.5rem 0" },
  sectionHeader: { marginBottom: "2rem" },
  label: {
    display: "block",
    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em",
    color: "var(--blue)", textTransform: "uppercase", marginBottom: "0.5rem",
  },

  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
  },
  linkCard: {
    display: "flex", alignItems: "center", gap: "1.25rem",
    padding: "1.5rem", textDecoration: "none", color: "inherit",
    transition: "transform 0.25s, border-color 0.25s",
  },
  linkIcon: { flexShrink: 0 },
  linkTitle: { fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" },
  linkValue: { fontSize: "0.85rem", color: "var(--text-2)" },
  linkArrow: { marginLeft: "auto", flexShrink: 0 },

  formWrap: { maxWidth: "700px", margin: "0 auto" },
  formHeader: { marginBottom: "2rem" },
  formTitle: {
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
    color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "0.5rem",
  },
  form: { padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" },
  formRow: {
    display: "grid", gridTemplateColumns: "1fr 1fr",
    gap: "1.25rem",
  },
  formGroup: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  formLabel: {
    fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--text-2)",
  },
  input: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    borderRadius: "10px", padding: "0.75rem 1rem",
    color: "var(--text)", fontSize: "0.95rem",
    outline: "none", width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
  },
  submitBtn: {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
    padding: "0.85rem 2rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff", border: "none", borderRadius: "10px",
    fontWeight: 600, fontSize: "1rem", cursor: "pointer",
    boxShadow: "0 4px 20px rgba(96,165,250,0.3)",
    transition: "opacity 0.2s, transform 0.2s",
  },
  statusMsg: {
    textAlign: "center", fontSize: "0.9rem",
    padding: "0.75rem", borderRadius: "8px",
    background: "rgba(255,255,255,0.03)",
  },

  oppGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.25rem",
  },
  oppCard: {
    padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem",
  },
  oppTitle: { fontSize: "1.05rem", fontWeight: 700, color: "var(--text)" },
  oppDesc: { fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.6 },
};
