import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageLightbox from "../../components/ImageLightbox";
import fpgaImage from "../../images/fpga.png";
import bridgeImage from "../../images/bridge.png";
import indoorImage from "../../images/indoor.png";
import microscopeImage from "../../images/microscope.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const projects = [
  {
    title: "Remote-Controlled Microscope – Serial Interfacing",
    description:
      "Built a wireless control interface for a laboratory microscope using STM32 and RF communication. Low-latency UART-based control with precise positioning — designed for real lab environments, not demos.",
    image: microscopeImage,
    tags: ["STM32", "UART", "RF Communication", "Bare Metal C"],
    link: "https://github.com/Abhinavmohindersingh/RemoteControlledMicroscope",
    year: "Feb – Jun 2024",
    badge: "Individual",
  },
  {
    title: "FPGA-Based Application-Specific Instruction Processor",
    description:
      "Designed and implemented a custom ASIP on Nexys 4 DDR using VHDL — full datapath, control unit, keyboard interface, and display system. Built from the ground up to handle specialised arithmetic operations at high throughput.",
    image: fpgaImage,
    tags: ["FPGA", "VHDL", "Nexys4 DDR", "Digital Logic", "Datapath Design"],
    link: "#",
    year: "Aug – Nov 2024",
    badge: "Individual",
  },
  {
    title: "Intelligent Bridge Suspension Monitoring",
    description:
      "Wireless sensor network combining accelerometers and ultrasonic sensors for real-time structural health monitoring. STM32 DISC + ESP32 + M5Stack Core 2 communicating over GATT BLE with JSON serialisation — built to detect structural anomalies before they become problems.",
    image: bridgeImage,
    tags: ["STM32", "ESP32", "BLE GATT", "Sensor Fusion", "Ultrasound", "JSON"],
    link: "https://github.com/Abhinavmohindersingh/Atlas-Grey",
    year: "Feb – Jun 2025",
    badge: "Team",
  },
  {
    title: "Indoor Localization with Sensor Fusion",
    description:
      "Real-time object tracking across a 4×3m grid using RSSI + ultrasonic ranging fused through a Kalman filter. Zephyr RTOS enabled multi-threaded firmware with interrupt-driven sensor handling — achieving sub-metre accuracy.",
    image: indoorImage,
    tags: ["Zephyr RTOS", "nRF52840", "BLE", "Kalman Filter", "Ultrasound", "Multithreading"],
    link: "https://github.com/aniketgupta17/PRAC3-CSSE4011/tree/main",
    year: "Feb – Jun 2025",
    badge: "Team",
  },
];

export default function EmbeddedProjects() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <>
      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <div style={s.heroContent}>
          <div style={s.breadcrumb}>
            <Link to="/projects" style={s.breadcrumbLink}>Projects</Link>
            <span style={s.sep}>→</span>
            <span style={s.breadcrumbCurrent}>Embedded Systems</span>
          </div>
          <motion.h1 {...fadeUp(0.1)} style={s.heroTitle}>Embedded Systems</motion.h1>
          <motion.p {...fadeUp(0.2)} style={s.heroSub}>
            Firmware, digital design, and wireless systems — from bare metal to RTOS.
          </motion.p>
        </div>
      </section>

      <div style={s.container}>
        <div style={s.grid}>
          {projects.map((p, i) => (
            <motion.div key={p.title} className="glass-card" {...fadeUp(i * 0.1)} style={s.card}>
              <div style={s.imgWrap} onClick={() => setLightbox({ src: p.image, alt: p.title })}>
                <img src={p.image} alt={p.title} style={s.img} />
              </div>
              <div style={s.cardBody}>
                <div style={s.cardTop}>
                  <span style={s.badge}>{p.badge}</span>
                  <span style={s.year}>{p.year}</span>
                </div>
                <h3 style={s.cardTitle}>{p.title}</h3>
                <p style={s.cardDesc}>{p.description}</p>
                <div style={s.tags}>
                  {p.tags.map((t) => <span key={t} style={s.tag}>{t}</span>)}
                </div>
                {p.link !== "#" && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" style={s.btn}>
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                )}
              </div>
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
    minHeight: "32vh",
    marginTop: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0d1117 0%, #0f172a 100%)",
  },
  heroBg: {
    position: "absolute", inset: 0,
    background: "radial-gradient(circle at 30% 50%, rgba(96,165,250,0.07) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(167,139,250,0.07) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative", zIndex: 2,
    textAlign: "center", maxWidth: "700px", padding: "3rem 2rem",
  },
  breadcrumb: {
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: "0.5rem", fontSize: "0.85rem", marginBottom: "1.5rem",
  },
  breadcrumbLink: { color: "var(--blue)", fontWeight: 500, textDecoration: "none" },
  sep: { color: "var(--text-3)" },
  breadcrumbCurrent: { color: "var(--text-2)", fontWeight: 600 },
  heroTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800,
    background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
    WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
    letterSpacing: "-0.03em", marginBottom: "1rem",
  },
  heroSub: { fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.7 },

  container: { maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
    gap: "2rem",
  },
  card: { display: "flex", flexDirection: "column", overflow: "hidden" },
  imgWrap: { position: "relative", cursor: "zoom-in", overflow: "hidden" },
  img: { width: "100%", height: "240px", objectFit: "cover", display: "block", transition: "transform 0.3s ease" },
  cardBody: { padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: {
    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em",
    color: "var(--blue)", background: "rgba(96,165,250,0.08)",
    border: "1px solid rgba(96,165,250,0.2)", borderRadius: "20px",
    padding: "0.2rem 0.7rem",
  },
  year: { fontSize: "0.8rem", color: "var(--text-3)", fontWeight: 500 },
  cardTitle: {
    fontSize: "1.1rem", fontWeight: 700, color: "var(--text)",
    lineHeight: 1.4, letterSpacing: "-0.01em",
  },
  cardDesc: { fontSize: "0.92rem", color: "var(--text-2)", lineHeight: 1.75, flex: 1 },
  tags: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  tag: {
    fontSize: "0.75rem", fontWeight: 500,
    padding: "0.2rem 0.65rem", borderRadius: "6px",
    background: "rgba(255,255,255,0.04)", color: "var(--text-2)",
    border: "1px solid var(--border)",
  },
  btn: {
    display: "inline-flex", alignItems: "center", gap: "0.4rem",
    padding: "0.6rem 1.2rem", marginTop: "0.25rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff", borderRadius: "8px", fontWeight: 600,
    fontSize: "0.85rem", textDecoration: "none", alignSelf: "flex-start",
    boxShadow: "0 4px 15px rgba(96,165,250,0.25)",
  },
};
