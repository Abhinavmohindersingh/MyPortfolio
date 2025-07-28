import React from "react";
import { Link } from "react-router-dom";
import fpgaProcessorImage from "../../images/fpga.png";
import bridgeMonitoringImage from "../../images/bridge.png";
import indoorLocalizationImage from "../../images/indoor.png";
import microscopeRemoteImage from "../../images/microscope.png";

export default function EmbeddedProjects() {
  const embeddedProjects = [
    {
      title: "Remote-Controlled Microscope – Serial Interfacing",
      category: "Embedded Systems",
      description:
        "Wireless microscope control system using STM32 and RF modules.",
      longDescription:
        "Built a remote-control interface for a microscope using serial communication protocols, microcontroller logic, and RF modules for wireless transmission. The system enables precise remote operation with low-latency control for laboratory environments.",
      icon: "🔬",
      status: "Individual Project",
      year: "Feb - June 2024",
      image: microscopeRemoteImage,
      technologies: [
        "STM32",
        "RF Communication",
        "UART",
        "Bare metal C programming",
      ],
      links: [
        {
          type: "report",
          label: "Project Repo",
          url: "https://github.com/Abhinavmohindersingh/RemoteControlledMicroscope",
          icon: "📊",
        },
      ],
    },
    {
      title: "FPGA-Based Application-Specific Instruction Processor",
      category: "Digital Design",
      description:
        "Designed custom arithmetic units and datapath/controller using FPGA.",
      longDescription:
        "On Nexys 4 DDR, implemented high-throughput arithmetic operations using VHDL. Built a full datapath and control architecture with keyboard interface and display system, optimizing for custom instruction processing and computational efficiency.",
      icon: "🧠",
      status: "Individual Project",
      year: "Aug - Nov 2024",
      image: fpgaProcessorImage,
      technologies: ["FPGA", "VHDL", "Nexys4 DDR", "Digital Logic"],
      links: [
        {
          type: "documentation",
          label: "Project Repo",
          url: "#",
          icon: "📄",
        },
      ],
    },
    {
      title: "Intelligent Bridge Suspension Monitoring",
      category: "IoT & Sensor Networks",
      description:
        "Wireless sensor system using STM32 DISC board for real-time data.",
      longDescription:
        "Built a wireless sensor network using accelerometers and ultrasonic sensors. Real-time monitoring and data logging enabled via DISC STM32, ESP32 & M5Stack Core 2 as actuator with JSON serialization, and GATT BLE protocol for comprehensive structural health monitoring.",
      icon: "🌉",
      status: "Team Project",
      year: "Feb - June 2025",
      image: bridgeMonitoringImage,
      technologies: ["STM32", "BLE", "Sensor Fusion", "Ultrasound", "JSON"],
      links: [
        {
          type: "demo",
          label: "Project Repo",
          url: "https://github.com/Abhinavmohindersingh/Atlas-Grey",
          icon: "🎥",
        },
      ],
    },
    {
      title: "Indoor Localization with Sensor Fusion",
      category: "Real-Time Systems",
      description:
        "Achieved real-time object tracking over a 4x3m grid using BLE + ultrasound.",
      longDescription:
        "Developed a real-time localization system combining RSSI and ultrasonic ranging sensors using a Kalman filter for high precision. Zephyr RTOS enabled multithreaded firmware with interrupt handling for sub-meter accuracy tracking.",
      icon: "📍",
      status: "Team project",
      year: "Feb - June 2025",
      image: indoorLocalizationImage,
      technologies: ["Zephyr RTOS", "BLE", "Ultrasound", "Kalman Filter"],
      links: [
        {
          type: "thesis",
          label: "Project Repo",
          url: "https://github.com/aniketgupta17/PRAC3-CSSE4011/tree/main",
          icon: "📄",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="embedded-hero">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/projects" className="breadcrumb-link">
              Projects
            </Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">Embedded Systems</span>
          </div>
          <h1 className="hero-title">Embedded Systems Projects</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="embedded-container">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <p>
              My embedded systems portfolio showcases comprehensive hardware and
              firmware development, integrating microcontrollers, FPGA design,
              wireless communication, and real-time processing. Each project
              demonstrates hands-on engineering skills and innovative solutions
              to complex technical challenges.
            </p>
            <p>
              From wireless control systems to intelligent sensor networks,
              these projects highlight the intersection of low-level
              programming, digital design, and practical problem-solving in
              embedded engineering applications.
            </p>
          </div>
          <hr className="section-separator" />
        </section>

        {/* Embedded Projects Section */}
        <section className="projects-section">
          <div className="section-header">
            <h2>Featured Systems</h2>
            <p>
              Hardware and firmware solutions with detailed technical
              implementation
            </p>
          </div>

          <div className="projects-grid">
            {embeddedProjects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card embedded-card-${index + 1}`}
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
                </div>

                <div className="card-footer">
                  <div className="card-links">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="embedded-link"
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

        {/* Embedded Focus Areas */}
        <section className="focus-section">
          <div className="section-header">
            <h2>Engineering Focus Areas</h2>
            <p>Core domains of embedded systems development and expertise</p>
          </div>

          <div className="focus-grid">
            <div className="focus-item">
              <div className="focus-icon">🔧</div>
              <h3>Microcontroller Systems</h3>
              <p>
                Developing embedded firmware for STM32 and other microcontroller
                platforms, implementing serial communication, sensor interfaces,
                and real-time control systems.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon">📡</div>
              <h3>Wireless Communication</h3>
              <p>
                Building wireless sensor networks and communication systems
                using BLE, RF modules, and IoT protocols for remote monitoring
                and control applications.
              </p>
            </div>
            <div className="focus-item">
              <div className="focus-icon">⚡</div>
              <h3>Digital Design</h3>
              <p>
                Creating custom digital logic solutions using FPGA and VHDL,
                implementing application-specific processors and
                high-performance computing architectures.
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
        .embedded-hero {
          position:  relative;
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
        .embedded-container {
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

        .card-technologies {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .card-technologies h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
        }

        .card-technologies ul {
          list-style-type: disc;
          margin-left: 1.5rem;
        }

        .card-technologies li {
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

        .embedded-link {
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

        .embedded-link:hover {
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
          .card-technologies {
            font-size: 0.85rem;
          }

          .card-technologies h4 {
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

          .embedded-link {
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

          .embedded-container {
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
          .card-technologies {
            font-size: 0.8rem;
          }

          .card-technologies h4 {
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

          .embedded-link {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
