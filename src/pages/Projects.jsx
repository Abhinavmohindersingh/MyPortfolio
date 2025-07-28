import { Link } from "react-router-dom";

export default function Projects() {
  // Project categories data with expanded information
  const projectCategories = [
    {
      title: "Research Projects",
      description:
        "During my studies, I engaged in research and design projects, analyzing peer-reviewed papers to derive insights and develop innovative solutions using AI, computer vision, and software-hardware integration to address real-world challenges.",

      icon: "🔬",
      link: "/projects/research",
      technologies: [
        "Python",
        "Tensorflow",
        "Signal processing",
        "Amplitude Normalizations",
        "Fast fourier transformation",
        "Analog-Digital conversion",
        "SPI communication",
      ],
      collaborators: ["Alice Johnson", "Bob Smith"],
      highlights: [
        "Peer-Reviewed Research",
        "AI-Driven Solutions",
        "Hardware-Software Innovation",
      ],
      projectCount: "2 Projects",
      status: "Aug 2024 - July 2025",
    },
    {
      title: "Embedded Projects",
      description:
        "Hardware-software integration projects featuring IoT devices, sensor networks, and real-time embedded systems.",
      longDescription:
        "From Arduino-based prototypes to complex IoT ecosystems, these projects demonstrate my ability to work at the intersection of hardware and software, creating efficient and scalable embedded solutions.",
      icon: "⚡",
      link: "/projects/embedded",
      technologies: [
        "C/C++",
        "Arduino",
        "Raspberry Pi",
        "IoT",
        "MQTT",
        "Real-time Systems",
        "Nordic boards",
        "Disco boards",
      ],
      collaborators: ["Clara Lee", "David Kim", "Emma Chen"],
      highlights: [
        "Wireless Communication",
        "RTOS",
        "Zephyr",
        "Sensor Networks",
        "Real-time Processing",
        "Hardware Integration",
      ],
      projectCount: "4 Projects",
      status: "Feb 2024 - Aug 2025",
    },
    {
      title: "Full Stack Projects",
      description:
        "End-to-end web applications and mobile solutions showcasing modern development practices and scalable architectures.",
      longDescription:
        "These projects span the entire development stack, from responsive frontends to robust backend APIs, demonstrating proficiency in modern frameworks and cloud deployment strategies.",
      icon: "💻",
      link: "/projects/fullstack",
      technologies: ["React", "Node.js", "Next.js", "MongoDB", "AWS", "Docker"],
      collaborators: ["Frank Wilson", "Grace Patel"],
      highlights: [
        "SaaS Applications",
        "Mobile Apps",
        "Web Application",
        "AWS Deployment",
        "DevOps",
      ],
      projectCount: "2 Projects",
      status: "Aug 2024 - June 2025",
    },
    {
      title: "AI & ML Projects",
      description:
        "Machine learning models, deep learning applications, and AI-powered solutions for real-world problem solving.",
      longDescription:
        "From computer vision applications to natural language processing systems, these projects showcase the practical application of AI/ML techniques to solve complex, real-world challenges.",
      icon: "🤖",
      link: "/projects/aiml",
      technologies: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "OpenCV",
        "NLP",
        "Deep Learning",
      ],
      collaborators: ["Henry Brown", "Isabella Davis", "James Lee"],
      highlights: [
        "Computer Vision",
        "NLP Systems",
        "Predictive Models",
        "Data Science",
      ],
      projectCount: "1 Projects",
      status: "Aug 2023 - Nov 2023",
    },
  ];

  const stats = [
    {
      number: "35+",
      label: "Total Projects",
      description: "Completed across all categories",
    },
    {
      number: "6",
      label: "Technologies",
      description: "Primary tech stacks mastered",
    },
    { number: "4", label: "Domains", description: "Specialized project areas" },
    {
      number: "100%",
      label: "Open Source",
      description: "Available on GitHub",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">My Projects</h1>
          {/* <p className="hero-subtitle">
            Exploring innovation through code, research, and creative
            problem-solving
          </p> */}
          {/* <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.description}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Main Content */}
      <div className="projects-container">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <p>
              Each project represents a journey of learning, innovation, and
              problem-solving. From research-driven investigations to
              production-ready applications, my portfolio spans multiple domains
              of technology. These projects demonstrate not just technical
              proficiency, but also creativity, persistence, and the ability to
              translate complex ideas into tangible solutions.
            </p>
            <p>
              Whether it's optimizing neural networks for better performance,
              building scalable web applications, or creating embedded systems
              that interact with the physical world, each project has
              contributed to my growth as an engineer and innovator.
            </p>
          </div>
          <hr className="section-separator" />
        </section>

        {/* Project Categories Section */}
        <section className="categories-section">
          <div className="section-header">
            <h2>Project Categories</h2>
            <p>Explore my work organized by domain and technology focus</p>
          </div>

          <div className="categories-grid">
            {projectCategories.map((category, index) => (
              <div
                key={category.title}
                className={`category-card card-${index + 1}`}
              >
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <span className="card-icon">{category.icon}</span>
                  </div>
                  <div className="card-meta">
                    <span className="project-count">
                      {category.projectCount}
                    </span>
                    <span className="project-status">{category.status}</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3>{category.title}</h3>
                  <p className="card-description">{category.description}</p>
                  <p className="card-long-description">
                    {category.longDescription}
                  </p>

                  <div className="card-highlights">
                    <h4>Key Highlights</h4>
                    <div className="highlights-grid">
                      {category.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-item">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {category.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="card-collaborators">
                    <h4>Collaborators</h4>
                    <ul>
                      {category.collaborators.map((collaborator, idx) => (
                        <li key={idx}>{collaborator}</li>
                      ))}
                    </ul>
                  </div> */}
                </div>

                <div className="card-footer">
                  <Link to={category.link} className="explore-btn">
                    <span>Explore Projects</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <hr className="section-separator" />
        </section>

        {/* Featured Projects Teaser */}
        <section className="featured-section">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>
              Highlighted projects that showcase innovation and technical
              excellence
            </p>
          </div>

          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-icon">🏆</div>
              <h3>Research</h3>
              <p>Part of the Biome Project at UQ</p>
            </div>
            <div className="featured-item">
              <div className="featured-icon">🚀</div>
              <h3>Production Applications</h3>
              <p>
                Full-stack applications serving thousands of users with 99.9%
                uptime and scalable cloud infrastructure.
              </p>
            </div>
            <div className="featured-item">
              <div className="featured-icon">🔧</div>
              <h3>Innovation in IoT</h3>
              <p>
                Smart embedded systems that bridge the physical and digital
                worlds with real-time data processing capabilities.
              </p>
            </div>
          </div>
        </section>
      </div>

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
          .projects-hero {
            position: relative;
            min-height: 25vh;
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
            max-width: 1000px;
            padding: 0 2rem;
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

          .hero-subtitle {
            font-size: 1.25rem;
            color: #cbd5e1;
            font-weight: 300;
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          /* Main Container */
          .projects-container {
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
            max-width: 600px;
            margin: 0 auto;
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

          /* Categories Section */
          .categories-section {
            margin-bottom: 4rem;
          }

          .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 3rem;
          }

          .category-card {
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, border-color 0.3s ease;
            display: flex;
            flex-direction: column;
            min-height: 650px;
          }

          .category-card:hover {
            transform: translateY(-8px);
            border-color: #10b981;
            box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1.5rem;
          }

          .card-icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            background: rgba(16, 185, 129, 0.1);
            border-radius: 18px;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }

          .card-icon {
            font-size: 2.5rem;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }

          .category-card:hover .card-icon {
            filter: grayscale(0%);
          }

          .card-meta {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.25rem;
          }

          .project-count {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 600;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }

          .project-status {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }

          .card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
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

          .card-highlights h4,
          .card-technologies h4,
          .card-collaborators h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #cbd5e1;
            margin-bottom: 0.5rem;
          }

          .highlights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 0.5rem;
          }

          .highlight-item {
            background: rgba(16, 185, 129, 0.1);
            color: #6ee7b7;
            padding: 0.3rem 0.75rem;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 500;
            text-align: center;
            border: 1px solid rgba(16, 185, 129, 0.2);
            transition: all 0.3s ease;
          }

          .highlight-item:hover {
            background: rgba(16, 185, 129, 0.2);
            transform: translateY(-2px);
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tech-tag {
            background: rgba(6, 182, 212, 0.1);
            color: #67e8f9;
            padding: 0.3rem 0.75rem;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 500;
            border: 1px solid rgba(6, 182, 212, 0.2);
            transition: all 0.3s ease;
          }

          .tech-tag:hover {
            background: rgba(6, 182, 212, 0.2);
            transform: translateY(-2px);
          }

          .card-collaborators {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #94a3b8;
            margin-bottom: 1rem;
          }

          .card-collaborators ul {
            list-style-type: disc;
            margin-left: 1.5rem;
          }

          .card-collaborators li {
            margin-bottom: 0.25rem;
          }

          .card-footer {
            margin-top: auto;
            padding-top: 1rem;
            border-top: 1px solid rgba(51, 65, 85, 0.3);
          }

          .explore-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.5rem;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            text-decoration: none;
            border-radius: 15px;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            border: 1px solid transparent;
          }

          .explore-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(16, 185, 129, 0.4);
          }

          .btn-arrow {
            font-size: 0.9rem;
            transition: transform 0.3s ease;
          }

          .explore-btn:hover .btn-arrow {
            transform: translateX(4px);
          }

          /* Featured Section */
          .featured-section {
            margin-bottom: 4rem;
          }

          .featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .featured-item {
            text-align: center;
            padding: 3rem 2rem;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .featured-item:hover {
            transform: translateY(-6px);
            border-color: rgba(16, 185, 129, 0.5);
          }

          .featured-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            display: block;
          }

          .featured-item h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 1rem;
          }

          .featured-item p {
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

            .categories-grid {
              grid-template-columns: 1fr;
            }

            .category-card {
              padding: 1.5rem;
              min-height: 600px;
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

            .card-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
            }

            .card-meta {
              align-items: flex-start;
            }

            .featured-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 2.5rem;
            }

            .projects-container {
              padding: 2rem 1rem;
            }

            .section-header h2 {
              font-size: 2rem;
            }

            .category-card {
              padding: 1rem;
              min-height: 550px;
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
          }
        `}
      </style>
    </>
  );
}
