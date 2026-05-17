import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/profile" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contacts" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="brand">
          <span className="brand-text">Abhinav Singh</span>
          <span className="brand-subtitle">Co-founder · AI Engineer</span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} />
        </button>

        <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-nav-link ${isActive(item.path) ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
