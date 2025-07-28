import React from "react";
import { Link } from "react-router-dom";
import srcnnModelImage from "../../images/srcnn1.png";
import srcnnPredictionImage from "../../images/srcnn3.png";

export default function AIProjects() {
  // AI Projects data
  const aiProjects = [
    {
      title: "Brain MRI Super-Resolution CNN",
      category: "AI / Deep Learning",
      description:
        "Implementation of a Super-Resolution Convolutional Neural Network (SRCNN) trained on the ADNI dataset to enhance MRI image resolution.",
      longDescription:
        "This SRCNN model generates high-resolution MRI images from low-resolution inputs by learning intrinsic image patterns and reconstructing finer details. The approach involves patch extraction, non-linear mapping, and reconstruction phases to upscale images effectively. SRCNN benefits medical diagnostics by improving image clarity without costly sensors.",
      icon: "🧠",
      status: "Individual Project",
      year: "2025",
      images: [srcnnModelImage, srcnnPredictionImage],
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Matplotlib",
        "PIL",
      ],
      keyFindings: [
        "Effective image upscaling via SRCNN improves diagnostic quality",
        "Residual blocks mitigate vanishing gradients and stabilize training",
        "PSNR metric crucial for assessing super-resolution performance",
        "Model generalizes well with validation data, reducing overfitting risks",
      ],
      impact:
        "Provides enhanced medical image resolution aiding precise diagnostics and treatments. Also applicable to image restoration, CCTV footage enhancement, and satellite imaging.",
      links: [
        {
          type: "report",
          label: "Project Repo",
          url: "https://github.com/Abhinavmohindersingh/PatternAnalysis-2023/tree/topic-recognition/recognition/Brain_MRI_SuperResolution",
          icon: "📊",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/projects" className="breadcrumb-link">
              Projects
            </Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">AI & Deep Learning</span>
          </div>
          <h1 className="hero-title">AI & Deep Learning Projects</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="ai-container">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <p>
              My AI portfolio demonstrates advanced deep learning applications
              in medical imaging and computer vision. Each project showcases
              cutting-edge neural network architectures and machine learning
              techniques for solving complex real-world problems.
            </p>
            <p>
              From super-resolution CNNs for medical diagnostics to advanced
              image processing algorithms, these projects highlight the
              intersection of artificial intelligence, healthcare technology,
              and innovative problem-solving in computational imaging.
            </p>
          </div>
          <hr className="section-separator" />
        </section>

        {/* AI Projects Section */}
        <section className="projects-section">
          <div className="section-header">
            <h2>Featured AI Systems</h2>
            <p>
              Deep learning models and AI solutions with detailed technical
              implementation
            </p>
          </div>

          <div className="projects-grid">
            {aiProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card ai-card-${index + 1}`}
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

                {project.images && (
                  <div className="project-images">
                    {project.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${project.title} - Image ${idx + 1}`}
                        className="project-image"
                      />
                    ))}
                  </div>
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

                  {project.keyFindings && (
                    <div className="card-findings">
                      <h4>Key Findings</h4>
                      <ul>
                        {project.keyFindings.map((finding, idx) => (
                          <li key={idx}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.impact && (
                    <div className="card-impact">
                      <h4>Project Impact</h4>
                      <p>{project.impact}</p>
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
                        className="ai-link"
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

        {/* AI Focus Areas */}
        <section className="focus-section">
          <div className="section-header">
            <h2>AI Focus Areas</h2>
            <p>
              Core domains of artificial intelligence and machine learning
              expertise
            </p>
          </div>

          <div className="focus-grid">
            <div className="focus-item">
              <div className="focus-icon">🧠</div>
              <h3>Deep Learning</h3>
              <p>
                Developing advanced neural network architectures including CNNs,
                RNNs, and transformer models for computer vision, natural
                language processing, and medical imaging applications.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon">🔬</div>
              <h3>Medical AI</h3>
              <p>
                Creating AI solutions for healthcare applications including
                medical image enhancement, diagnostic assistance, and clinical
                decision support systems using state-of-the-art ML techniques.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon">📊</div>
              <h3>Computer Vision</h3>
              <p>
                Implementing advanced image processing and computer vision
                algorithms for object detection, image classification,
                super-resolution, and visual pattern recognition systems.
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
        .ai-hero {
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
        .ai-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
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
        }

                .section-separator {
          border: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent);
          margin: 2rem auto;
          width: 50%;
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

        .project-images {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          overflow-x: auto;
        }

        .project-image {
          flex: 1;
          min-width: 0;
          height: 250px;
          border-radius: 16px;
          object-fit: cover;
          transition: transform 0.3s ease;
          border: 1px solid rgba(51, 65, 85, 0.3);
        }

        .project-card:hover .project-image {
          transform: scale(1.02);
          border-color: rgba(16, 185, 129, 0.4);
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
        .card-findings,
        .card-impact {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .card-technologies h4,
        .card-findings h4,
        .card-impact h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
        }

        .card-technologies ul,
        .card-findings ul {
          list-style-type: disc;
          margin-left: 1.5rem;
        }

        .card-technologies li,
        .card-findings li {
          margin-bottom: 0.25rem;
        }

        .card-impact p {
          color: #94a3b8;
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

        .ai-link {
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

        .ai-link:hover {
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
          }

          .card-content h3 {
            font-size: 1.5rem;
          }

          .card-description {
            font-size: 0.9rem;
          }

          .card-long-description,
          .card-technologies,
          .card-findings,
          .card-impact {
            font-size: 0.85rem;
          }

          .card-technologies h4,
          .card-findings h4,
          .card-impact h4 {
            font-size: 1rem;
          }

          .project-images {
            flex-direction: column;
            gap: 0.75rem;
          }

          .project-images {
            flex-direction: column;
            gap: 0.5rem;
          }

          .project-image {
            height: 180px;
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

          .ai-link {
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

          .ai-container {
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
          }

          .card-content h3 {
            font-size: 1.25rem;
          }

          .card-description {
            font-size: 0.85rem;
          }

          .card-long-description,
          .card-technologies,
          .card-findings,
          .card-impact {
            font-size: 0.8rem;
          }

          .card-technologies h4,
          .card-findings h4,
          .card-impact h4 {
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

          .ai-link {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
