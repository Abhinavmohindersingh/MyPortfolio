import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { text: "> Initialising systems...",             suffix: null,   delay: 300  },
  { text: "> Loading:  Abhinav Singh",             suffix: null,   delay: 750  },
  { text: "> Role:     AI Engineer // Co-founder", suffix: null,   delay: 1150 },
  { text: "> UQ Honours verified",                 suffix: "[OK]", delay: 1500 },
  { text: "> SingSingh AI connected",              suffix: "[OK]", delay: 1850 },
  { text: "> Production systems online",           suffix: "[OK]", delay: 2150 },
];

export default function BootScreen({ onComplete }) {
  const [shown, setShown] = useState([]);
  const [progressDone, setProgressDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => setShown((p) => [...p, i]), line.delay);
    });
    setTimeout(() => setProgressDone(true), 2500);
    setTimeout(() => setExiting(true), 3400);
    setTimeout(() => onComplete(), 4000);
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={s.overlay}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={s.terminal}
          >
            {/* Title bar */}
            <div style={s.titleBar}>
              <div style={s.dots}>
                <span style={{ ...s.dot, background: "#ff5f57" }} />
                <span style={{ ...s.dot, background: "#febc2e" }} />
                <span style={{ ...s.dot, background: "#28c840" }} />
              </div>
              <span style={s.titleText}>abhinav@portfolio: ~</span>
            </div>

            {/* Body */}
            <div style={s.body}>
              <div style={s.header}>ABHINAV SINGH // PORTFOLIO v2.0</div>
              <div style={s.divider}>{"─".repeat(44)}</div>
              <br />

              {LINES.map((line, i) =>
                shown.includes(i) ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18 }}
                    style={s.line}
                  >
                    <span style={s.lineText}>{line.text}</span>
                    {line.suffix && (
                      <span style={s.ok}>{line.suffix}</span>
                    )}
                  </motion.div>
                ) : null
              )}

              {progressDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <br />
                  <div style={s.statusLine}>STATUS: ALL SYSTEMS READY</div>
                  <div style={s.progressRow}>
                    <div style={s.progressTrack}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={s.progressFill}
                      />
                    </div>
                    <span style={s.pct}>100%</span>
                  </div>
                </motion.div>
              )}

              <span style={s.cursor}>█</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const s = {
  overlay: {
    position: "fixed", inset: 0, zIndex: 9999,
    background: "#04081a",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  terminal: {
    width: "min(560px, 90vw)",
    background: "#0d1117",
    border: "1px solid rgba(96,165,250,0.25)",
    borderRadius: "10px",
    boxShadow: "0 0 60px rgba(96,165,250,0.12), 0 30px 80px rgba(0,0,0,0.6)",
    overflow: "hidden",
  },
  titleBar: {
    display: "flex", alignItems: "center", gap: "0.5rem",
    background: "#161b22", padding: "0.65rem 1rem",
    borderBottom: "1px solid rgba(96,165,250,0.1)",
  },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "12px", height: "12px", borderRadius: "50%", display: "inline-block" },
  titleText: {
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontSize: "0.78rem", color: "#64748b", marginLeft: "0.5rem",
  },
  body: {
    padding: "1.5rem 1.75rem 1.75rem",
    fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
    fontSize: "0.85rem", lineHeight: 1.9,
  },
  header: {
    color: "#60a5fa", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em",
  },
  divider: { color: "rgba(96,165,250,0.3)", fontSize: "0.75rem" },
  line: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  lineText: { color: "#cbd5e1" },
  ok: { color: "#22c55e", fontWeight: 700, fontSize: "0.78rem" },
  statusLine: { color: "#a78bfa", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em" },
  progressRow: { display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.4rem" },
  progressTrack: {
    flex: 1, height: "6px", background: "rgba(96,165,250,0.1)",
    borderRadius: "3px", overflow: "hidden",
    border: "1px solid rgba(96,165,250,0.15)",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #3b82f6, #a78bfa)",
    borderRadius: "3px",
  },
  pct: { color: "#60a5fa", fontSize: "0.78rem", fontWeight: 700, minWidth: "36px" },
  cursor: {
    display: "inline-block", color: "#60a5fa",
    animation: "blink 1s step-end infinite",
  },
};
