import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        style={s.backdrop}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={s.imageWrap}
        >
          {/* sticky close button inside the scrollable container */}
          <div style={s.closeRow}>
            <button onClick={onClose} style={s.closeBtn} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <img src={src} alt={alt} style={s.image} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const s = {
  backdrop: {
    position: "fixed", inset: 0, zIndex: 9998,
    background: "rgba(4,8,26,0.92)",
    backdropFilter: "blur(8px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "2rem",
    cursor: "zoom-out",
  },
  imageWrap: {
    position: "relative",
    width: "min(900px, 92vw)",
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: "12px",
    boxShadow: "0 0 80px rgba(96,165,250,0.15), 0 40px 100px rgba(0,0,0,0.7)",
    border: "1px solid rgba(96,165,250,0.15)",
    cursor: "default",
  },
  closeRow: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    padding: "0.6rem 0.6rem 0",
    pointerEvents: "none",
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  closeBtn: {
    pointerEvents: "all",
    width: "32px", height: "32px",
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(96,165,250,0.2)",
    borderRadius: "50%",
    color: "#94a3b8",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
  },
};
