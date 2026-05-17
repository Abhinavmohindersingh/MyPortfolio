import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const nav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/profile" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contacts" },
  ];

  const social = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abhinav3838",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Abhinavmohindersingh",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:abhinavsinghkanwal@gmail.com",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      ),
    },
    {
      name: "SingSingh AI",
      url: "https://singsinghai.com.au",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="brand" style={{ textDecoration: "none" }}>
              <span className="brand-text">Abhinav Singh</span>
              <span className="brand-subtitle">Co-founder · AI Engineer</span>
            </Link>
            <p className="footer-description">
              Co-founder at SingSingh AI.
              BEng Honours, University of Queensland. Brisbane, Australia.
            </p>
            <div className="social-links">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="social-link"
                  target={s.url.startsWith("http") ? "_blank" : "_self"}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : ""}
                  aria-label={s.name}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="footer-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--text-2)" }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Brisbane, QLD, Australia</span>
              </div>
              <div className="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--text-2)" }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:abhinavsinghkanwal@gmail.com" style={{ color: "var(--blue)", textDecoration: "none" }}>
                  abhinavsinghkanwal@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span style={{ color: "var(--green)", fontSize: "0.6rem" }}>●</span>
                <span style={{ color: "var(--green)", fontWeight: 500 }}>Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {year} Abhinav Singh. All rights reserved.</p>
          <p style={{ color: "var(--text-3)", fontSize: "0.85rem" }}>
            Systems Architect · Full Stack Engineer · AI Builder
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
