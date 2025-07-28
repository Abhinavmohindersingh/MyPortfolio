import React from "react";
import { Link } from "react-router-dom";
import moviePickerImage from "../../images/movie-picker.png";
import windashImage from "../../images/windash.png";

export default function FullStackProjects() {
  // Full Stack projects data
  const fullStackProjects = [
    {
      title: "MoviePicker — Group Movie Selection Application",
      category: "Full Stack Web App",
      description:
        "Microservices-based web app for real-time collaborative movie selection.",
      longDescription:
        "MoviePicker is a modular microservices system built with Flask backend services and a vanilla JS frontend. It supports real-time group sessions, swipe voting, authentication, and movie data from TMDB API. The architecture emphasizes scalability, extensibility, and maintainability.",
      icon: "🎬",
      status: "Completed",
      year: "Feb - July 2025",
      image: moviePickerImage,
      technologies: [
        "Microservices architecture",
        "JWT Authentication",
        "REST & TMDB APIs",
      ],
      collaborators: [
        "Abhinav",
        "Alysha Ismail",
        "Haotian Xue",
        "Charlotte Birkinshaw",
      ],
      links: [
        {
          type: "thesis",
          label: "Project Repo",
          url: "https://github.com/Abhinavmohindersingh/MoviePicker",
          icon: "📄",
        },
      ],
    },
    {
      title: "Windash — AI-powered Energy Monitoring Mobile App",
      category: "Full Stack Mobile App",
      description:
        "Mobile app for real-time household energy monitoring using AI to analyze patterns and reduce consumption.",
      longDescription:
        "Windash combines machine learning and intuitive user interfaces to detect unusual energy consumption, provide actionable recommendations, and display historical trends. It is designed for user-friendly, mobile-first access to smart energy management.",
      icon: "🌬️",
      status: "Completed",
      year: "July - Nov 2024",
      image: windashImage,
      technologies: [
        "React Native",
        "AI & ML Algorithms",
        "Sensor Integration",
        "Mobile UX Design",
      ],
      collaborators: [
        "Abhinav",
        "Sunaya Dahal",
        "Wilson Nguyen",
        "Shanmukh Valluru",
        "Arthur Lin",
        "Alex Pitman",
      ],
      links: [
        {
          type: "documentation",
          label: "Project Repo",
          url: "https://github.com/Abhinavmohindersingh/DECO3801",
          icon: "📊",
        },
      ],
    },
  ];

  const fullStackStats = [
    {
      number: "2",
      label: "Full Stack Projects",
      description: "Completed successfully",
    },
    {
      number: "14",
      label: "Months",
      description: "Total development duration",
    },
    {
      number: "1",
      label: "Thesis",
      description: "Published academic work",
    },
    {
      number: "4+",
      label: "Collaborators",
      description: "Cross-disciplinary team",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="fullstack-hero">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/projects" className="breadcrumb-link">
              Projects
            </Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">Full Stack</span>
          </div>
          <h1 className="hero-title">Full Stack Projects</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="fullstack-container">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <p>
              My full stack portfolio demonstrates comprehensive web and mobile
              application development, integrating modern microservices
              architectures, AI-driven features, and intuitive user experiences.
              Each project showcases end-to-end development capabilities and
              technical innovation.
            </p>
          </div>
          <hr className="section-separator" />
        </section>

        {/* Full Stack Projects Section */}
        <section className="projects-section">
          <div className="section-header">
            <h2>Featured Applications</h2>
            <p>
              From collaborative movie selection platforms to AI-powered energy
              monitoring systems, these projects highlight the intersection of
              scalable backend architecture and engaging frontend design in
              solving real-world challenges.
            </p>
          </div>

          <div className="projects-grid">
            {fullStackProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card fullstack-card-${index + 1}`}
              >
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <span className="card-icon">{project.icon}</span>
                  </div>
                  <div className="card-meta">
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                </div>

                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                )}

                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <p className="card-long-description">
                    {project.longDescription}
                  </p>
                  {project.technologies && (
                    <div className="card-technologies">
                      <h4>Technologies</h4>
                      <ul>
                        {project.technologies.map((tech, idx) => (
                          <li key={idx}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.collaborators && (
                    <div className="card-collaborators">
                      <h4>Collaborators</h4>
                      <ul>
                        {project.collaborators.map((collaborator, idx) => (
                          <li key={idx}>{collaborator}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <div className="card-links">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fullstack-link"
                      >
                        <span className="link-icon">{link.icon}</span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="section-separator" />
        </section>

        {/* Full Stack Focus Areas */}
        <section className="focus-section">
          <div className="section-header">
            <h2>Development Focus Areas</h2>
            <p>
              Core domains of full stack development and technical expertise
            </p>
          </div>

          <div className="focus-grid">
            <div className="focus-item">
              <div className="focus-icon">🌐</div>
              <h3>Web Applications</h3>
              <p>
                Building scalable web applications with modern microservices
                architecture, real-time features, and robust API integrations
                for collaborative user experiences.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>
                Creating intuitive mobile applications with AI-powered features,
                sensor integration, and user-centric design for enhanced
                accessibility and engagement.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>
                Implementing machine learning algorithms and AI-driven insights
                into full stack applications for intelligent data processing and
                predictive analytics capabilities.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
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
        .fullstack-hero {
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
                      radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
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
          max-width: 1000px;
          padding: 0 2rem;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .breadcrumb-link {
          color: #10b981;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .breadcrumb-link:hover {
          color: #34d399;
        }

        .breadcrumb-separator {
          color: #64748b;
        }

        .breadcrumb-current {
          color: #cbd5e1;
          font-weight: 600;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #10b981, #059669, #047857);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        /* Main Container */
        .fullstack-container {
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

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
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

        /* Introduction Section */
        .intro-section {
          margin-bottom: 4rem;
        }

        .intro-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .intro-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .intro-content p {
          font-size: 1.125rem;
          color: #cbd5e1;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        /* Projects Section */
        .projects-section {
          margin-bottom: 4rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .project-card {
          background: rgba(15, 23, 42, 0.8);
          border-radius: 20px;
          border: 1px solid rgba(51, 65, 85, 0.3);
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          min-height: 650px; /* Increased to accommodate collaborators */
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #10b981;
          box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .card-icon-wrapper {
          width: 70px;
          height: 70px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 18px;
          border: 1px solid rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .project-card:hover .card-icon-wrapper {
          filter: grayscale(0%);
        }

        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.85rem;
          text-align: right;
          min-width: 110px;
        }

        .project-category,
        .project-year,
        .project-status {
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-weight: 600;
          border: 1px solid transparent;
        }

        .project-category {
          color: #10b981;
          background: rgba(16, 185, 129, 0.2);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .project-year {
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.3);
        }

        .project-status {
          color: #22c55e;
          background: rgba(34, 197, 94, 0.2);
          border-color: rgba(34, 197, 94, 0.3);
          text-transform: uppercase;
        }

        .project-image {
          width: 100%;
          height: 300px;
          border-radius: 16px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.02);
        }

        .card-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.5rem;
        }

        .card-description {
          font-weight: 600;
          font-size: 1rem;
          color: #6ee7b7;
          margin-bottom: 1rem;
        }

        .card-long-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .card-technologies,
        .card-collaborators {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .card-technologies h4,
        .card-collaborators h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
        }

        .card-technologies ul,
        .card-collaborators ul {
          list-style-type: disc;
          margin-left: 1.5rem;
        }

        .card-technologies li,
        .card-collaborators li {
          margin-bottom: 0.25rem;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(51, 65, 85, 0.3);
        }

        .card-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .fullstack-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.3rem 0.9rem;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          text-decoration: none;
          border-radius: 15px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .fullstack-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(16, 185, 129, 0.4);
        }

        .link-icon {
          font-size: 0.9rem;
        }

        /* Focus Areas Section */
        .focus-section {
          margin-bottom: 4rem;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .focus-item {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .focus-item:hover {
          transform: translateY(-6px);
          border-color: rgba(16, 185, 129, 0.5);
        }

        .focus-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .focus-item h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
        }

        .focus-item p {
          color: #cbd5e1;
          line-height: 1.6;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .section-header h2 {
            font-size: 2.25rem;
          }

          .intro-content h2 {
            font-size: 2rem;
          }

          .intro-content p {
            font-size: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 1.5rem;
            min-height: 600px; /* Adjusted for smaller screens */
          }

          .card-content h3 {
            font-size: 1.5rem;
          }

          .card-description {
            font-size: 0.9rem;
          }

          .card-long-description,
          .card-technologies,
          .card-collaborators {
            font-size: 0.85rem;
          }

          .card-technologies h4,
          .card-collaborators h4 {
            font-size: 1rem;
          }

          .project-image {
            height: 250px;
          }

          .card-icon-wrapper {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }

          .card-meta {
            font-size: 0.8rem;
            min-width: 100px;
          }

          .project-category,
          .project-year,
          .project-status {
            padding: 0.2rem 0.5rem;
          }

          .fullstack-link {
            padding: 0.25rem 0.75rem;
            font-size: 0.85rem;
          }

          .link-icon {
            font-size: 0.85rem;
          }

          .focus-grid {
            grid-template-columns: 1fr;
          }

          .focus-item {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .fullstack-container {
            padding: 2rem 1rem;
          }

          .breadcrumb {
            flex-direction: column;
            gap: 0.25rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .project-card {
            padding: 1rem;
            min-height: 550px; /* Adjusted for smaller screens */
          }

          .card-content h3 {
            font-size: 1.25rem;
          }

          .card-description {
            font-size: 0.85rem;
          }

          .card-long-description,
          .card-technologies,
          .card-collaborators {
            font-size: 0.8rem;
          }

          .card-technologies h4,
          .card-collaborators h4 {
            font-size: 0.9rem;
          }

          .project-image {
            height: 200px;
          }

          .card-icon-wrapper {
            width: 50px;
            height: 50px;
            font-size: 1.75rem;
          }

          .fullstack-link {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
