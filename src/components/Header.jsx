import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/profile" },
    { name: "Projects", path: "/projects" },
    // { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contacts" },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="brand">
          <span className="brand-text">Abhinav</span>
          <span className="brand-subtitle">Software Engineer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActivePath(item.path) ? "active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-nav-link ${
                isActivePath(item.path) ? "active" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: background 0.3s ease;
        }

        .header.scrolled {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(16, 185, 129, 0.3);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
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

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 600;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #34d399;
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: #10b981;
          background: linear-gradient(135deg, #10b981, #059669);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .hamburger {
          width: 24px;
          height: 16px;
          position: relative;
          display: block;
        }

        .hamburger::before,
        .hamburger::after,
        .hamburger span {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #10b981;
          transition: all 0.3s ease;
        }

        .hamburger::before {
          top: 0;
        }

        .hamburger span {
          top: 7px;
        }

        .hamburger::after {
          bottom: 0;
        }

        .hamburger.open::before {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span {
          opacity: 0;
        }

        .hamburger.open::after {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 100%;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 600;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #34d399;
          transform: translateY(-2px);
        }

        .mobile-nav-link.active {
          color: #10b981;
          background: linear-gradient(135deg, #10b981, #059669);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .brand-text {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 1rem;
          }

          .brand-text {
            font-size: 1.25rem;
          }

          .brand-subtitle {
            font-size: 0.75rem;
          }

          .mobile-nav-link {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;