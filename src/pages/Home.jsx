import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePhoto from "../images/abhinav2.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

const ROLES = ["AI Engineer", "Co-founder", "Full Stack Developer", "Research Engineer"];

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 40, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const word = words[wordIdx];
    const speed = deleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setPaused(true);
          setTimeout(() => { setPaused(false); setDeleting(true); }, pause);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx, paused, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Home() {
  const roleText = useTypewriter(ROLES);

  const whatIDo = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      ),
      title: "AI Systems Architecture",
      desc: "Design production-grade AI infrastructure that connects intelligent agents to real business operations — not demos, not prototypes.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      title: "Full Stack Development",
      desc: "Build end-to-end web applications with modern frameworks — from React frontends to Node.js & Python backends, deployed to cloud.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
      ),
      title: "Embedded & Research",
      desc: "From FPGA signal processing to mycelial network characterisation at UQ's Biome Lab — I work at the intersection of hardware and software.",
    },
  ];

  const projectCategories = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
        </svg>
      ),
      title: "Research Projects",
      desc: "Signal processing, SRCNN imaging, and bio-electrical systems at UQ.",
      link: "/projects/research",
      tag: "Aug 2024 – Jul 2025",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
          <path d="M7 8h.01M10 8h4"/>
        </svg>
      ),
      title: "Embedded Systems",
      desc: "RTOS, Zephyr, Nordic & STM32 boards, MQTT, IoT sensor networks.",
      link: "/projects/embedded",
      tag: "4 Projects",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: "Full Stack",
      desc: "React, Node.js, Python — SaaS apps, dashboards, and cloud deployments.",
      link: "/projects/fullstack",
      tag: "2 Projects",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "AI & ML",
      desc: "Computer vision, deep learning, and AI-powered systems built for production.",
      link: "/projects/aiml",
      tag: "1 Project",
    },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={styles.hero}>
        {/* Background orbs */}
        <div style={styles.orb1} />
        <div style={styles.orb2} />
        <div style={styles.orb3} />
        <div style={styles.grid} />

        <div className="home-hero-inner" style={styles.heroInner}>
          {/* Left: Text */}
          <div style={styles.heroText}>
            <motion.div {...fadeUp(0.1)} style={styles.eyebrow}>
              <span style={styles.termBracket}>[</span>
              <span style={styles.dot} />
              <span style={{ color: "var(--green)", fontWeight: 700, fontFamily: "monospace" }}>ONLINE</span>
              <span style={styles.termBracket}>]</span>
              <span style={{ color: "var(--text-3)", fontFamily: "monospace" }}>  Brisbane, AU · Open to opportunities</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} style={styles.heroName}>
              Abhinav Singh
            </motion.h1>

            <motion.div {...fadeUp(0.3)} style={styles.roleRow}>
              <span style={styles.rolePrefix}>{">"}</span>
              <span style={styles.roleText}>{roleText}</span>
              <span style={styles.roleCursor}>█</span>
            </motion.div>

            <motion.p {...fadeUp(0.4)} style={styles.heroBio}>
              Co-founder of{" "}
              <a href="https://singsinghai.com.au" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>
                SingSingh AI
              </a>
              , building and shipping production AI systems for clients across accounting,
              property management, and RTOs. RAG pipelines, multi-agent orchestration,
              MCP integrations — things that actually work. Casual Academic at{" "}
              <span style={{ color: "var(--blue)" }}>University of Queensland</span>
              {" "}— tutoring undergraduate engineering. BEng Honours,{" "}
              <span style={{ color: "var(--blue)" }}>UQ</span>.
            </motion.p>

            <motion.div {...fadeUp(0.5)} style={styles.ctaRow}>
              <Link to="/projects" style={styles.btnPrimary}>
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/contacts" style={styles.btnSecondary}>
                Get in Touch
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.6)} style={styles.statRow}>
              {[
                { val: "5.6/7", label: "GPA" },
                { val: "95%", label: "Time Saved" },
                { val: "3+", label: "Industries" },
                { val: "10+", label: "Projects" },
              ].map((s) => (
                <div key={s.label} style={styles.stat}>
                  <span style={styles.statVal}>{s.val}</span>
                  <span style={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            {...fadeIn(0.3)}
            className="home-hero-photo"
            style={styles.photoWrap}
          >
            <div style={styles.photoGlow} />
            <motion.img
              src={profilePhoto}
              alt="Abhinav Singh"
              style={styles.photo}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          {...fadeIn(1.2)}
          style={styles.scrollCue}
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12l7 7 7-7"/></svg>
        </motion.div>
      </section>

      {/* ── What I Do ─────────────────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={styles.sectionHeader}
          >
            <span style={styles.sectionLabel}>// WHAT I DO</span>
            <h2 style={styles.sectionTitle}>
              I build things that <span className="grad-text">actually run.</span>
            </h2>
            <p style={styles.sectionSub}>Not demos. Production.</p>
          </motion.div>

          <div style={styles.threeGrid}>
            {whatIDo.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={styles.doCard}
              >
                <div style={styles.doIcon}>{item.icon}</div>
                <h3 style={styles.doTitle}>{item.title}</h3>
                <p style={styles.doDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Categories ─────────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={styles.sectionHeader}
          >
            <span style={styles.sectionLabel}>// PORTFOLIO</span>
            <h2 style={styles.sectionTitle}>Project Categories</h2>
            <p style={styles.sectionSub}>Work across four domains of engineering and research</p>
          </motion.div>

          <div style={styles.fourGrid}>
            {projectCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={cat.link} style={styles.catCardLink}>
                  <div className="glass-card" style={styles.catCard}>
                    <div style={styles.catIcon}>{cat.icon}</div>
                    <div style={styles.catTag}>{cat.tag}</div>
                    <h3 style={styles.catTitle}>{cat.title}</h3>
                    <p style={styles.catDesc}>{cat.desc}</p>
                    <div style={styles.catArrow}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={styles.ctaStrip}
          >
            <div>
              <h2 style={{ ...styles.sectionTitle, marginBottom: "0.5rem" }}>
                Let's build something <span className="grad-text">together.</span>
              </h2>
              <p style={styles.sectionSub}>
                Whether it's an AI system, a web app, or a research problem — I'm interested.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/contacts" style={styles.btnPrimary}>Get in Touch</Link>
              <Link to="/profile" style={styles.btnSecondary}>About Me</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

/* ── Inline Styles ─────────────────────────────────────────── */
const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingTop: "80px",
  },
  orb1: {
    position: "absolute",
    top: "10%",
    left: "5%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  orb2: {
    position: "absolute",
    bottom: "10%",
    right: "5%",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
    filter: "blur(50px)",
    pointerEvents: "none",
  },
  orb3: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "800px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    pointerEvents: "none",
  },
  heroInner: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "3rem 2rem",
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: "4rem",
    alignItems: "center",
  },
  heroText: { display: "flex", flexDirection: "column", gap: "1.5rem" },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
    fontSize: "0.85rem",
    color: "var(--text-2)",
    fontWeight: 500,
    letterSpacing: "0.04em",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "var(--green)",
    display: "inline-block",
    animation: "pulse-dot 2s ease infinite",
    flexShrink: 0,
  },
  heroName: {
    fontSize: "clamp(2.8rem, 6vw, 5rem)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    paddingRight: "0.06em",
    background: "linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  termBracket: {
    color: "rgba(96,165,250,0.5)", fontFamily: "monospace", fontWeight: 700,
  },
  roleRow: {
    display: "flex", alignItems: "center", gap: "0.5rem",
    height: "2rem", overflow: "hidden",
  },
  rolePrefix: {
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    color: "var(--blue)", fontWeight: 700, fontSize: "1.2rem",
  },
  roleText: {
    fontSize: "1.25rem",
    fontWeight: 600,
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    background: "var(--grad)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.01em",
    minWidth: "2ch",
  },
  roleCursor: {
    color: "var(--blue)", fontSize: "1rem",
    animation: "blink 1s step-end infinite",
  },
  heroBio: {
    fontSize: "1.1rem",
    color: "var(--text-2)",
    lineHeight: 1.75,
    maxWidth: "560px",
  },
  inlineLink: {
    color: "var(--cyan)",
    textDecoration: "underline",
    textDecorationColor: "rgba(34,211,238,0.3)",
  },
  ctaRow: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.7rem 1.6rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "opacity 0.2s, transform 0.2s",
    boxShadow: "0 4px 20px rgba(96,165,250,0.3)",
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.7rem 1.6rem",
    background: "rgba(255,255,255,0.04)",
    color: "var(--text-2)",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "background 0.2s, border-color 0.2s",
  },
  statRow: {
    display: "flex",
    gap: "2.5rem",
    flexWrap: "wrap",
    paddingTop: "0.5rem",
    borderTop: "1px solid var(--border)",
  },
  stat: { display: "flex", flexDirection: "column", gap: "2px" },
  statVal: {
    fontSize: "1.6rem",
    fontWeight: 800,
    background: "var(--grad)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
  },
  statLabel: { fontSize: "0.78rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em" },

  photoWrap: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  photoGlow: {
    position: "absolute",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)",
    filter: "blur(30px)",
  },
  photo: {
    position: "relative",
    width: "320px",
    objectFit: "contain",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  photoBadge: {
    position: "absolute",
    bottom: "-14px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "rgba(4,8,26,0.9)",
    border: "1px solid var(--border)",
    borderRadius: "20px",
    padding: "0.4rem 1rem",
    zIndex: 2,
    backdropFilter: "blur(10px)",
    whiteSpace: "nowrap",
  },
  badgeDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "var(--green)",
    animation: "pulse-dot 2s infinite",
    flexShrink: 0,
  },
  scrollCue: {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    color: "var(--text-3)",
    zIndex: 2,
  },

  section: { padding: "5rem 0" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" },
  sectionHeader: { textAlign: "center", marginBottom: "3.5rem" },
  sectionLabel: {
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    color: "var(--blue)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.75rem",
  },
  sectionTitle: {
    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
    fontWeight: 800,
    color: "var(--text)",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    marginBottom: "0.75rem",
  },
  sectionSub: { fontSize: "1rem", color: "var(--text-2)" },

  threeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  doCard: { padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" },
  doIcon: { color: "var(--blue)", width: "28px", height: "28px" },
  doTitle: { fontSize: "1.15rem", fontWeight: 700, color: "var(--text)" },
  doDesc: { fontSize: "0.95rem", color: "var(--text-2)", lineHeight: 1.7 },

  fourGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.25rem",
  },
  catCardLink: { textDecoration: "none", color: "inherit", display: "block" },
  catCard: {
    padding: "1.75rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    minHeight: "230px",
    cursor: "pointer",
  },
  catIcon: { color: "var(--blue)", width: "28px", height: "28px" },
  catTag: {
    fontSize: "0.72rem",
    color: "var(--blue)",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  catTitle: { fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" },
  catDesc: { fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.6, flex: 1 },
  catArrow: {
    color: "var(--blue)",
    alignSelf: "flex-end",
    transition: "transform 0.2s ease",
  },

  ctaStrip: {
    padding: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
    background: "linear-gradient(135deg, rgba(96,165,250,0.06), rgba(167,139,250,0.06))",
    borderColor: "rgba(96,165,250,0.15)",
  },
};
