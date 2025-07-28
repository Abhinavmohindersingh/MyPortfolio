import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "About", path: "/profile" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contacts" },
    ],
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abhinav3838",
        icon: "💼",
      },
      {
        name: "GitHub",
        url: "https://github.com/Abhinavmohindersingh",
        icon: "🔗",
      },
      // { name: "Email", url: "mailto:abhinavsinghkanwal@gmail.com", icon: "📧" },
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "Embedded Systems",
      "Full Stack Development",
      "DevOps",
      "AWS Cloud",
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-text">Abhinav</span>
              <span className="brand-subtitle">Software Engineer</span>
            </div>
            <p className="footer-description">
              Passionate about creating innovative solutions and pushing the
              boundaries of technology. Let's build something amazing together.
            </p>
            <div className="social-links">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target={social.url.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    social.url.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="footer-section">
            <h3 className="footer-title">Technologies</h3>
            <div className="skills-grid">
              {footerLinks.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                Brisbane, QLD, Australia
              </p>
              <p className="contact-item">
                <span className="contact-icon">🎓</span>
                University of Queensland Graduate
              </p>
              <p className="contact-item">
                <span className="contact-icon">💻</span>
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        <hr className="section-separator" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Abhinav . All rights reserved.
            </p>
            {/* <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="/terms" className="footer-bottom-link">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .footer {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .brand {
          display: flex;
          flex-direction: column;
        }

        .brand-text {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, #10b981, #059669);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-subtitle {
          font-size: 0.875rem;
          color: #94a3b8;
          font-weight: 300;
        }

        .footer-description {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: #34d399;
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 1.25rem;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .social-link:hover .social-icon {
          filter: grayscale(0%);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          background: linear-gradient(135deg, #10b981, #059669);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(16, 185, 129, 0.1);
          color: #6ee7b7;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(16, 185, 129, 0.2);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: translateY(-2px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          color: #cbd5e1;
        }

        .contact-icon {
          font-size: 1.25rem;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          filter: grayscale(0%);
        }

        .section-separator {
          border: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent);
          margin: 2rem auto;
          width: 50%;
        }

        .footer-bottom {
          border-top: 1px solid rgba(51, 65, 85, 0.3);
          padding-top: 1.5rem;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-link {
          font-size: 0.875rem;
          font-weight: 600;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #34d399;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-brand {
            align-items: center;
          }

          .social-links {
            justify-content: center;
          }

          .brand-text {
            font-size: 1.5rem;
          }

          .footer-title {
            font-size: 1.25rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 2rem 1rem;
          }

          .brand-text {
            font-size: 1.25rem;
          }

          .brand-subtitle {
            font-size: 0.75rem;
          }

          .footer-description {
            font-size: 0.875rem;
          }

          .footer-title {
            font-size: 1.125rem;
          }

          .social-link,
          .contact-item {
            font-size: 0.875rem;
          }

          .social-icon,
          .contact-icon {
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
