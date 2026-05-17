import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const categories = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg>
    ),
    title: "Research",
    desc: "Bio-electrical sensing, agricultural IoT, and signal processing at UQ's Biome Lab.",
    link: "/projects/research",
    meta: "2 projects · 2024–2025",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h.01M10 8h4"/></svg>
    ),
    title: "Embedded Systems",
    desc: "Firmware on STM32, nRF52840, FPGA — RTOS, BLE, sensor fusion, and bare metal C.",
    link: "/projects/embedded",
    meta: "4 projects · 2024–2025",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: "Full Stack",
    desc: "Web and mobile applications — microservices, REST APIs, React, and cloud deployment.",
    link: "/projects/fullstack",
    meta: "2 projects · 2024–2025",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
    title: "AI & ML",
    desc: "Deep learning for medical imaging — SRCNN super-resolution on MRI data.",
    link: "/projects/aiml",
    meta: "1 project · 2025",
  },
];

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section style={s.hero}>
        <div style={s.orb1} />
        <div style={s.orb2} />
        <div style={s.heroInner}>
          <motion.div {...fadeUp(0.1)} style={s.heroLabel}>PORTFOLIO</motion.div>
          <motion.h1 {...fadeUp(0.2)} style={s.heroTitle}>
            My <span className="grad-text">Projects</span>
          </motion.h1>
          <motion.p {...fadeUp(0.3)} style={s.heroSub}>
            Work across research, embedded systems, full stack development, and AI — from UQ labs to production deployments.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <div style={s.container}>
        <div style={s.grid}>
          {categories.map((cat, i) => (
            <motion.div key={cat.title} {...fadeUp(i * 0.08)}>
              <Link to={cat.link} style={s.cardLink}>
                <div className="glass-card" style={s.card}>
                  <div style={s.iconWrap}>{cat.icon}</div>
                  <div style={s.cardMeta}>{cat.meta}</div>
                  <h2 style={s.cardTitle}>{cat.title}</h2>
                  <p style={s.cardDesc}>{cat.desc}</p>
                  <div style={s.cardArrow}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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
    position: "absolute", top: 0, left: "10%",
    width: "400px", height: "300px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
    filter: "blur(40px)", pointerEvents: "none",
  },
  orb2: {
    position: "absolute", bottom: 0, right: "10%",
    width: "350px", height: "300px", borderRadius: "50%",
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

  container: { maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
    gap: "1.5rem",
  },
  cardLink: { textDecoration: "none", color: "inherit", display: "block" },
  card: {
    padding: "2rem",
    display: "flex", flexDirection: "column", gap: "0.75rem",
    minHeight: "240px", cursor: "pointer",
    transition: "transform 0.25s, border-color 0.25s",
  },
  iconWrap: { color: "var(--blue)", width: "28px", height: "28px" },
  cardMeta: {
    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em",
    color: "var(--blue)", textTransform: "uppercase",
  },
  cardTitle: {
    fontSize: "1.4rem", fontWeight: 800,
    color: "var(--text)", letterSpacing: "-0.02em",
  },
  cardDesc: {
    fontSize: "0.95rem", color: "var(--text-2)", lineHeight: 1.7, flex: 1,
  },
  cardArrow: {
    color: "var(--blue)", alignSelf: "flex-end",
    transition: "transform 0.2s ease",
  },
};
