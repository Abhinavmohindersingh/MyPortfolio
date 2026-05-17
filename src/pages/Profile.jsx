import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePhoto from "../images/Abhinav.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const timeline = [
  {
    period: "Jan 2026 – Present",
    role: "Casual Academic — Tutor & Demonstrator",
    org: "University of Queensland",
    location: "Brisbane, Australia",
    type: "work",
    desc: "Tutoring and demonstrating for undergraduate engineering courses at UQ, supporting students across lab sessions and coursework in computer engineering and systems topics.",
    tags: ["Teaching", "Computer Engineering", "UQ", "Academic"],
  },
  {
    period: "Sep 2025 – Present",
    role: "Co-founder & AI Solutions Developer",
    org: "SingSingh AI",
    location: "Brisbane, Australia",
    type: "work",
    link: "https://singsinghai.com.au",
    desc: "Building and shipping production AI systems for clients across accounting, property management, and registered training organisations. Work covers RAG pipelines, multi-agent orchestration, MCP integrations, LLM document processing, and chatbot integrations into platforms like Microsoft Teams.",
    tags: ["RAG Pipelines", "Multi-agent AI", "MCP Integrations", "LLM Systems", "AWS"],
  },
  {
    period: "Aug 2024 – Jul 2025",
    role: "Undergraduate Researcher — Honours Thesis",
    org: "The Biome Project, UQ EECS",
    location: "St Lucia, Brisbane",
    type: "research",
    desc: "Frontier research on the electrical characterisation of mycelial networks — developing signal processing pipelines and embedded measurement systems at the intersection of biology and computing. Awarded Distinction.",
    tags: ["Signal Processing", "Embedded Systems", "Research", "Bio-electronics"],
  },
  {
    period: "Jul 2021 – Jul 2025",
    role: "BEng (Hons) Computer Engineering",
    org: "University of Queensland",
    location: "Brisbane, Australia",
    type: "education",
    desc: "Graduated with Honours (GPA 5.6/7, Honours Thesis: Distinction). Majors in Computer Engineering. Coursework spanned AI/ML, embedded systems, signal processing, full-stack development, and computer architecture.",
    tags: ["Computer Engineering", "AI/ML", "Embedded Systems", "GPA 5.6/7"],
  },
];

const skills = [
  { category: "AI & LLM",       level: 93, items: ["RAG Pipelines", "Multi-agent Orchestration", "MCP Integrations", "Prompt Engineering", "Vector Embeddings", "Claude API"] },
  { category: "AWS",             level: 82, items: ["EC2", "S3", "Lambda", "VPC", "IAM", "ECR", "DynamoDB", "API Gateway", "EKS"] },
  { category: "Backend",         level: 87, items: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "SQLite", "Webhooks"] },
  { category: "Infrastructure",  level: 78, items: ["Docker", "Terraform", "GitHub Actions", "CI/CD", "Nginx", "Grafana"] },
  { category: "Integrations",    level: 88, items: ["Microsoft Graph", "SharePoint", "Teams", "Xero", "Twilio", "ElevenLabs", "WhatsApp"] },
  { category: "Frontend",        level: 75, items: ["React", "TypeScript", "Vite", "Tailwind CSS", "JavaScript"] },
  { category: "Embedded",        level: 80, items: ["FreeRTOS", "Zephyr RTOS", "STM32", "ESP32", "nRF52840", "BLE GATT", "SPI/I2C"] },
];

const typeColour = {
  work: "var(--blue)",
  research: "var(--violet)",
  education: "var(--cyan)",
};

export default function Profile() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={s.hero}>
        <div style={s.orb1} />
        <div style={s.orb2} />
        <div style={s.heroInner}>
          <motion.div {...fadeUp(0.1)} style={s.heroLabel}>ABOUT ME</motion.div>
          <motion.h1 {...fadeUp(0.2)} style={s.heroTitle}>
            Engineer. Architect.{" "}
            <span className="grad-text">Builder.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.3)} style={s.heroSub}>
            From mycelial bio-electronics research at UQ to production AI systems
            deployed for real businesses — focused on building things that actually work.
          </motion.p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <div className="profile-intro-grid" style={s.introGrid}>
            <motion.div {...fadeUp(0.1)} className="profile-intro-photo" style={s.introPhoto}>
              <div style={s.photoGlow} />
              <img src={profilePhoto} alt="Abhinav Singh" style={s.photo} />
            </motion.div>

            <motion.div {...fadeUp(0.2)} style={s.introText}>
              <span style={s.label}>HELLO, I'M ABHINAV</span>
              <h2 style={s.introHeading}>
                I don't just write code —{" "}
                <span className="grad-text">I architect systems.</span>
              </h2>
              <p style={s.introPara}>
                Co-founder of a Brisbane AI startup, spending the last year building
                and shipping production AI systems for clients across accounting,
                property management, and registered training organisations.
              </p>
              <p style={s.introPara}>
                Work at{" "}
                <a href="https://singsinghai.com.au" target="_blank" rel="noopener noreferrer" style={s.link}>
                  SingSingh AI
                </a>
                {" "}has covered RAG pipelines, multi-agent orchestration, MCP integrations,
                LLM document processing, and chatbot integrations into platforms like
                Microsoft Teams — focused on building things that actually work and
                genuinely improve how people spend their time at work.
              </p>
              <p style={s.introPara}>
                BEng (Hons) Computer Engineering graduate from the University of
                Queensland (GPA 5.6/7). Honours thesis in bio-electrical systems
                research, awarded Distinction. Currently tutoring undergraduate
                engineering at UQ.
              </p>
              <div style={s.introStats}>
                {[
                  { val: "95%", label: "Time Reduction" },
                  { val: "3+", label: "Industries" },
                  { val: "5.6/7", label: "GPA" },
                ].map((s2) => (
                  <div key={s2.label} style={s.introStat}>
                    <span style={s.introStatVal}>{s2.val}</span>
                    <span style={s.introStatLabel}>{s2.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <motion.div {...fadeUp(0)} style={s.sectionHeader}>
            <span style={s.label}>JOURNEY</span>
            <h2 style={s.sectionTitle}>Education & Experience</h2>
          </motion.div>

          <div style={s.timeline}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                style={s.timelineItem}
              >
                <div style={s.timelineLeft}>
                  <div style={{ ...s.timelineDot, background: typeColour[item.type] }} />
                  {i < timeline.length - 1 && <div style={s.timelineLine} />}
                </div>
                <div className="glass-card" style={s.timelineCard}>
                  <div style={s.timelineTop}>
                    <div>
                      <div style={{ ...s.timelinePeriod, color: typeColour[item.type] }}>
                        {item.period}
                      </div>
                      <h3 style={s.timelineRole}>{item.role}</h3>
                      <div style={s.timelineOrg}>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" style={s.link}>
                            {item.org}
                          </a>
                        ) : item.org} · {item.location}
                      </div>
                    </div>
                    <span style={{ ...s.timelineType, borderColor: typeColour[item.type], color: typeColour[item.type] }}>
                      {item.type}
                    </span>
                  </div>
                  <p style={s.timelineDesc}>{item.desc}</p>
                  <div style={s.tags}>
                    {item.tags.map((t) => (
                      <span key={t} style={s.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <motion.div {...fadeUp(0)} style={s.sectionHeader}>
            <span style={s.label}>// SKILLS</span>
            <h2 style={s.sectionTitle}>Technical Toolkit</h2>
          </motion.div>

          <div style={s.skillsGrid}>
            {skills.map((cat, i) => (
              <motion.div
                key={cat.category}
                className="glass-card"
                {...fadeUp(i * 0.08)}
                style={s.skillCard}
              >
                <span style={s.skillCategory}>
                  <span style={s.skillPrompt}>&gt; </span>{cat.category}
                </span>
                <div style={s.tagRow}>
                  {cat.items.map((item) => (
                    <span key={item} style={s.skillTag}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SingSingh AI callout ───────────────────────────────── */}
      <section style={s.section}>
        <div style={s.container}>
          <motion.div
            className="glass-card"
            {...fadeUp(0)}
            style={s.callout}
          >
            <div style={s.calloutLeft}>
              <span style={s.label}>CO-FOUNDER</span>
              <h3 style={s.calloutTitle}>
                SingSingh AI — <span className="grad-text">Smarter AI, Stronger Business.</span>
              </h3>
              <p style={s.calloutDesc}>
                We design and deploy personalised AI solutions that reduce operational costs
                and increase business efficiency. Built around your workflows, not generic tools.
                Brisbane, Australia.
              </p>
              <div style={s.calloutStats}>
                {[["3+","Industries"], ["95%","Time Reduction"], ["100%","In production"]].map(([v, l]) => (
                  <div key={l} style={s.cStat}>
                    <span style={s.cStatVal}>{v}</span>
                    <span style={s.cStatLabel}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://singsinghai.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={s.calloutBtn}
            >
              Visit SingSingh AI
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ ...s.section, paddingBottom: "2rem" }}>
        <div style={{ ...s.container, textAlign: "center" }}>
          <motion.div {...fadeUp(0)}>
            <h2 style={{ ...s.sectionTitle, marginBottom: "1rem" }}>
              Want to work together?
            </h2>
            <p style={{ color: "var(--text-2)", marginBottom: "2rem" }}>
              I'm open to full-time roles, freelance projects, and research collaborations.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contacts" style={s.btnPrimary}>Get in Touch</Link>
              <Link to="/projects" style={s.btnSecondary}>View Projects</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ── Inline Styles ─────────────────────────────────────────── */
const s = {
  hero: {
    position: "relative",
    minHeight: "45vh",
    marginTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
  },
  orb1: {
    position: "absolute",
    top: 0, left: "15%",
    width: "400px", height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  orb2: {
    position: "absolute",
    bottom: 0, right: "10%",
    width: "350px", height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  heroInner: {
    position: "relative", zIndex: 2,
    maxWidth: "700px", padding: "4rem 2rem",
    display: "flex", flexDirection: "column", gap: "1rem",
    alignItems: "center",
  },
  heroLabel: {
    fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em",
    color: "var(--blue)", textTransform: "uppercase",
  },
  heroTitle: {
    fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800,
    letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.15,
  },
  heroSub: {
    fontSize: "1.05rem", color: "var(--text-2)", lineHeight: 1.7,
    maxWidth: "560px",
  },

  section: { padding: "4.5rem 0" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" },
  sectionHeader: { marginBottom: "3rem" },
  sectionTitle: {
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800,
    color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.2,
  },
  label: {
    display: "block",
    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em",
    color: "var(--blue)", textTransform: "uppercase", marginBottom: "0.5rem",
  },

  introGrid: {
    display: "grid", gridTemplateColumns: "300px 1fr",
    gap: "4rem", alignItems: "start",
  },
  introPhoto: { position: "relative" },
  photoGlow: {
    position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
    width: "280px", height: "280px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)",
    filter: "blur(30px)",
  },
  photo: {
    position: "relative", width: "100%", aspectRatio: "4/5",
    objectFit: "cover", objectPosition: "center top",
    borderRadius: "16px",
    border: "1px solid var(--border)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  },
  introText: { display: "flex", flexDirection: "column", gap: "1.25rem" },
  introHeading: {
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800,
    color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.25,
  },
  introPara: { fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75 },
  link: { color: "var(--blue)", textDecoration: "underline", textDecorationColor: "rgba(96,165,250,0.3)" },
  introStats: {
    display: "flex", gap: "2rem", paddingTop: "1rem",
    borderTop: "1px solid var(--border)", flexWrap: "wrap",
  },
  introStat: { display: "flex", flexDirection: "column", gap: "2px" },
  introStatVal: {
    fontSize: "1.5rem", fontWeight: 800,
    background: "var(--grad)", WebkitBackgroundClip: "text",
    backgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  introStatLabel: { fontSize: "0.75rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.05em" },

  timeline: { display: "flex", flexDirection: "column", gap: "0" },
  timelineItem: { display: "flex", gap: "1.5rem", paddingBottom: "2rem" },
  timelineLeft: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "1.5rem" },
  timelineDot: {
    width: "14px", height: "14px", borderRadius: "50%",
    flexShrink: 0, border: "2px solid var(--bg)", zIndex: 1,
    boxShadow: "0 0 10px rgba(96,165,250,0.4)",
  },
  timelineLine: {
    flex: 1, width: "2px", background: "var(--border)",
    margin: "4px 0", minHeight: "40px",
  },
  timelineCard: { flex: 1, padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" },
  timelineTop: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem",
  },
  timelinePeriod: { fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", marginBottom: "0.2rem" },
  timelineRole: { fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.2rem" },
  timelineOrg: { fontSize: "0.9rem", color: "var(--text-2)" },
  timelineType: {
    fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
    textTransform: "uppercase", padding: "0.25rem 0.7rem",
    border: "1px solid", borderRadius: "20px",
    flexShrink: 0,
  },
  timelineDesc: { fontSize: "0.95rem", color: "var(--text-2)", lineHeight: 1.7 },
  tags: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  tag: {
    fontSize: "0.75rem", fontWeight: 500,
    padding: "0.2rem 0.7rem", borderRadius: "20px",
    background: "rgba(96,165,250,0.08)",
    color: "var(--blue)",
    border: "1px solid rgba(96,165,250,0.15)",
  },

  skillsGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  skillCard: { padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" },
  skillCategory: {
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em",
    textTransform: "uppercase", color: "var(--violet)",
  },
  skillPrompt: { color: "var(--blue)", opacity: 0.7 },
  tagRow: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  skillTag: {
    fontSize: "0.78rem", fontWeight: 500,
    padding: "0.2rem 0.6rem", borderRadius: "6px",
    background: "rgba(255,255,255,0.04)",
    color: "var(--text-2)",
    border: "1px solid var(--border)",
    fontFamily: "monospace",
  },

  callout: {
    padding: "2.5rem 3rem",
    display: "flex", justifyContent: "space-between",
    alignItems: "center", gap: "2rem", flexWrap: "wrap",
    background: "linear-gradient(135deg, rgba(96,165,250,0.06), rgba(167,139,250,0.06))",
    borderColor: "rgba(96,165,250,0.15)",
  },
  calloutLeft: { display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1, minWidth: "260px" },
  calloutTitle: {
    fontSize: "1.4rem", fontWeight: 800,
    color: "var(--text)", letterSpacing: "-0.02em",
  },
  calloutDesc: { fontSize: "0.95rem", color: "var(--text-2)", lineHeight: 1.7 },
  calloutStats: { display: "flex", gap: "2rem", flexWrap: "wrap" },
  cStat: { display: "flex", flexDirection: "column", gap: "2px" },
  cStatVal: {
    fontSize: "1.4rem", fontWeight: 800,
    background: "var(--grad)", WebkitBackgroundClip: "text",
    backgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  cStatLabel: { fontSize: "0.72rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" },
  calloutBtn: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    padding: "0.7rem 1.5rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff", borderRadius: "10px", fontWeight: 600,
    fontSize: "0.9rem", textDecoration: "none",
    whiteSpace: "nowrap", flexShrink: 0,
    boxShadow: "0 4px 20px rgba(96,165,250,0.3)",
    transition: "opacity 0.2s",
  },

  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    padding: "0.7rem 1.6rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff", borderRadius: "10px", fontWeight: 600,
    fontSize: "0.95rem", textDecoration: "none",
    boxShadow: "0 4px 20px rgba(96,165,250,0.3)",
  },
  btnSecondary: {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    padding: "0.7rem 1.6rem",
    background: "rgba(255,255,255,0.04)",
    color: "var(--text-2)",
    border: "1px solid var(--border)",
    borderRadius: "10px", fontWeight: 600,
    fontSize: "0.95rem", textDecoration: "none",
  },
};
