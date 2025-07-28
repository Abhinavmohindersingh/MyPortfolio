import React from "react";
import image from "../images/abhina.png"; // Replace with actual path

export default function Home() {
  // Categories data
  const projectCategories = [
    {
      title: "Research Projects",
      desc: "Explore my work on advanced research topics and innovative solutions.",
      link: "/projects/research",
      icon: "🔬",
    },
    {
      title: "Embedded Projects",
      desc: "Hands-on projects in embedded systems and IoT applications.",
      link: "/projects/embedded",
      icon: "⚡",
    },
    {
      title: "Full Stack Projects",
      desc: "Web and app development projects showcasing frontend and backend skills.",
      link: "/projects/fullstack",
      icon: "💻",
    },
    {
      title: "AI & ML Projects",
      desc: "Artificial Intelligence and Machine Learning projects demonstrating data-driven insights.",
      link: "/projects/aiml",
      icon: "🤖",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-main">Abhinav</span>
          </h1>
          <div className="hero-subtitle">Software Engineer & Tech Innovator</div>
        </div>
      </section> */}

      {/* Main Content Section */}
      <section className="main-container">
        <div className="profile-section">
          <div className="profile-photo">
            <div className="photo-wrapper">
              <img src={image} alt="Abhinav" className="profile-img" />

              <div className="photo-border" />
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-intro">
              <h2>
                Hi, I'm <span className="name-highlight">Abhinav</span>
              </h2>
              <p className="profile-description">
                A passionate Software Engineering graduate from the University
                of Queensland, dedicated to creating innovative solutions and
                pushing the boundaries of technology. I have extensive
                experience in full-stack development, AI/ML implementations, and
                IoT systems.
              </p>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Project Categories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">UQ</span>
                  <span className="stat-label">Graduate</span>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href="/profile" className="btn btn-secondary">
                <span>About Me</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="section-separator" />
      </section>

      {/* Project Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Project Categories</h2>
          <p>Discover my work across different domains of technology</p>
        </div>

        <div className="categories-grid">
          {projectCategories.map(({ title, desc, link, icon }) => (
            <a
              href={link}
              key={title}
              className="category-card"
              aria-label={`Go to ${title}`}
            >
              <div className="card-icon">{icon}</div>
              <div className="card-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <div className="card-arrow">→</div>
            </a>
          ))}
        </div>
        <hr className="section-separator" />
      </section>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background: #0a0a0a;
            color: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
          }

          a {
            color: #10b981;
            text-decoration: none;
          }

          a:hover {
            color: #34d399;
          }

          /* Hero Section */
          .hero-section {
            position: relative;
            min-height: 30vh;
            margin-top: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .hero-background {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%);
          }

          .hero-background::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.3);
          }

          .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 800px;
            padding: 0 2rem;
          }

          .hero-title {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .hero-main {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #10b981, #059669, #047857);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: #cbd5e1;
            margin-top: 1rem;
            font-weight: 300;
          }

          /* Main Container */
          .main-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
          }

          .section-separator {
            border: 0;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent);
            margin: 2rem auto;
            width: 50%;
          }

          .profile-section {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
            align-items: center;
          }

          /* Profile Photo */
          .profile-photo {
            display: flex;
            justify-content: center;
          }

          .photo-wrapper {
            position: relative;
            width: 300px;
            height: 300px;
          }

          .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            filter: grayscale(20%) brightness(1.1);
            transition: all 0.3s ease;
          }

          .profile-img:hover {
            filter: grayscale(0%) brightness(1.2);
            transform: scale(1.02);
          }

          .photo-border {
            position: absolute;
            inset: -4px;
            background: linear-gradient(135deg, #10b981, #059669);
            border-radius: 24px;
            z-index: -1;
            opacity: 0.8;
          }

          /* Profile Content */
          .profile-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 50px;
          }

          .profile-intro h2 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f8fafc;
          }

          .name-highlight {
            background: linear-gradient(135deg, #10b981, #059669);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .profile-description {
            font-size: 1.125rem;
            color: #cbd5e1;
            line-height: 1.7;
            margin-bottom: 2rem;
          }

          .profile-stats {
            display: flex;
            gap: 3rem;
            margin-bottom: 1rem;
          }

          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: #10b981;
          }

          .stat-label {
            font-size: 0.875rem;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          /* CTA Buttons */
          .cta-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.5rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 15px;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid transparent;
          }

          .btn-primary {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(16, 185, 129, 0.4);
          }

          .btn-secondary {
            background: rgba(30, 41, 59, 0.8);
            color: #e2e8f0;
            border-color: #475569;
          }

          .btn-secondary:hover {
            background: rgba(51, 65, 85, 0.9);
            border-color: #64748b;
            transform: translateY(-2px);
          }

          .btn-arrow {
            font-size: 0.9rem;
            transition: transform 0.3s ease;
          }

          .btn:hover .btn-arrow {
            transform: translateX(4px);
          }

          /* Categories Section */
          .categories-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
          }

          .section-header {
            margin-bottom: 3rem;
            text-align: center;
          }

          .section-header h2 {
            font-size: 2.75rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, #f8fafc, #cbd5e1);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .section-header p {
            font-size: 1rem;
            color: #94a3b8;
          }

          .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .category-card {
            display: flex;
            flex-direction: column;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            padding: 2rem;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            min-height: 300px;
          }

          .category-card:hover {
            transform: translateY(-8px);
            border-color: #10b981;
            box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          }

          .card-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }

          .category-card:hover .card-icon {
            filter: grayscale(0%);
          }

          .card-content {
            flex: 1;
            margin-bottom: 1rem;
          }

          .card-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 0.75rem;
          }

          .card-content p {
            color: #cbd5e1;
            line-height: 1.6;
          }

          .card-arrow {
            align-self: flex-end;
            font-size: 1.5rem;
            color: #10b981;
            transition: transform 0.3s ease;
          }

          .category-card:hover .card-arrow {
            transform: translateX(8px);
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .hero-main {
              font-size: 3rem;
            }

            .profile-section {
              grid-template-columns: 1fr;
              gap: 3rem;
              text-align: center;
            }

            .photo-wrapper {
              width: 250px;
              height: 250px;
            }

            .profile-intro h2 {
              font-size: 2rem;
            }

            .profile-stats {
              justify-content: center;
            }

            .cta-buttons {
              justify-content: center;
            }

            .section-header h2 {
              font-size: 2.25rem;
            }

            .categories-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .hero-main {
              font-size: 2.5rem;
            }

            .main-container,
            .categories-section {
              padding: 2rem 1rem;
            }

            .btn {
              padding: 0.5rem 1.5rem;
            }

            .profile-intro h2 {
              font-size: 1.75rem;
            }
          }
        `}
      </style>
    </>
  );
}
