import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mlImage from "../../images/ML.png";
import ImageLightbox from "../../components/ImageLightbox";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const projects = [
  {
    title: "Brain MRI Super-Resolution CNN",
    description:
      "Trained a Super-Resolution Convolutional Neural Network (SRCNN) on the ADNI dataset to enhance brain MRI image resolution. The model learns patch extraction, non-linear feature mapping, and image reconstruction — producing diagnostically sharper images from low-resolution inputs without expensive hardware. PSNR-validated with strong generalisation on held-out data.",
    image: mlImage,
    tags: ["Python", "TensorFlow", "Keras", "SRCNN", "Medical Imaging", "PSNR"],
    link: "https://github.com/Abhinavmohindersingh/PatternAnalysis-2023/tree/topic-recognition/recognition/Brain_MRI_SuperResolution",
    year: "2025",
    badge: "Individual",
  },
];

export default function AIProjects() {
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
            <span style={s.breadcrumbCurrent}>AI & Deep Learning</span>
          </div>
          <motion.h1 {...fadeUp(0.1)} style={s.heroTitle}>AI & Deep Learning</motion.h1>
          <motion.p {...fadeUp(0.2)} style={s.heroSub}>
            Neural networks and computer vision applied to real-world problems.
          </motion.p>
        </div>
      </section>

      <div style={s.container}>
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
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={s.btn}>
                View Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </motion.div>
        ))}
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

  container: { maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" },
  card: { display: "flex", flexDirection: "column", overflow: "hidden" },
  imgWrap: { position: "relative", cursor: "zoom-in", overflow: "hidden" },
  img: { width: "100%", height: "420px", objectFit: "cover", objectPosition: "top", display: "block", transition: "transform 0.3s ease" },
  cardBody: { padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem" },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: {
    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em",
    color: "var(--blue)", background: "rgba(96,165,250,0.08)",
    border: "1px solid rgba(96,165,250,0.2)", borderRadius: "20px",
    padding: "0.2rem 0.7rem",
  },
  year: { fontSize: "0.8rem", color: "var(--text-3)", fontWeight: 500 },
  cardTitle: {
    fontSize: "1.2rem", fontWeight: 700, color: "var(--text)",
    lineHeight: 1.4, letterSpacing: "-0.01em",
  },
  cardDesc: { fontSize: "0.95rem", color: "var(--text-2)", lineHeight: 1.8 },
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
