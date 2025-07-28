import React from "react";
import image from "../images/abhinav2.png"; // Replace with actual path

export default function About() {
  // Skills data
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vue.js",
      ],
      icon: "🎨",
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Python",
        "Java",
        "Express.js",
        "Django",
        "FastAPI",
        "REST APIs",
        "GraphQL",
      ],
      icon: "⚙️",
    },
    {
      title: "Database & Cloud",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "Firebase",
        "Redis",
      ],
      icon: "☁️",
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
        "NLP",
        "Deep Learning",
      ],
      icon: "🧠",
    },
    {
      title: "Embedded Systems",
      skills: [
        "Arduino",
        "Raspberry Pi",
        "C/C++",
        "IoT",
        "Sensors",
        "Microcontrollers",
        "MQTT",
        "Real-time Systems",
      ],
      icon: "🔧",
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "Linux",
        "Agile",
        "Figma",
        "Postman",
        "Jenkins",
        "JIRA",
        "VS Code",
      ],
      icon: "🛠️",
    },
  ];

  const timeline = [
    {
      year: "2021–2025",
      title: "Bachelor of Engineering (Software Engineering)",
      subtitle: "University of Queensland",
      description:
        "Graduated with Honours in Software Engineering. Majors in Computer Engineering.",
      type: "education",
    },
    {
      year: "Aug 2024–Aug 2025",
      title: "Research Student",
      subtitle: "The Biome Project, UQ Saint Lucia",
      description:
        "Contributed to the UQ Biome Project, focusing on electrical characterisation of mycelial network.",
      type: "experience",
    },
    {
      year: "Nov 2024–Present",
      title: "Full Stack Developer",
      subtitle: "Hueris Labs, Brisbane",
      description:
        "Developing web applications for a Brisbane-based startup specializing in self-evolving AI agents, using React and Node.js.",
      type: "experience",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">About Me</h1>
          <p className="hero-subtitle">
            Passionate about creating innovative solutions and pushing the
            boundaries of technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-container">
        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Hello, I'm Abhinav</h2>
              <p>
                I'm a passionate Software Engineer with Honours degree from the
                University of Queensland. My journey in technology spans across
                full-stack development, artificial intelligence, machine
                learning, and embedded systems. I thrive on solving complex
                problems and turning innovative ideas into reality.
              </p>
              <p>
                With a strong foundation in both theoretical knowledge and
                practical application, I've worked on diverse projects ranging
                from web applications to IoT solutions. I'm constantly learning
                and adapting to new technologies, believing that the best
                solutions come from understanding both the big picture and the
                smallest details.
              </p>
              <div className="intro-stats">
                <div className="stat-card">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <div className="image-wrapper">
                <img src={image} alt="Abhinav working" className="about-img" />
                <div className="image-border" />
              </div>
            </div>
          </div>
          <hr className="section-separator" />
        </section>

        {/* Skills Section */}
        {/* <section className="skills-section">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>Technologies and tools I work with to bring ideas to life</p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="section-separator" />
        </section> */}

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="section-header">
            <h2>Journey & Experience</h2>
            <p>My educational and professional milestones</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${item.type}`}>
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  <div className="marker-year">{item.year}</div>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="section-separator" />
        </section>

        {/* Personal Section */}
        <section className="personal-section">
          <div className="section-header">
            <h2>Beyond Code</h2>
            <p>What drives me outside of technology</p>
          </div>
          <div className="personal-content">
            <div className="personal-grid">
              <div className="personal-item">
                <div className="personal-icon">📚</div>
                <h3>Continuous Learning</h3>
                <p>
                  Always exploring new technologies, reading research papers,
                  and staying updated with industry trends.
                </p>
              </div>
              <div className="personal-item">
                <div className="personal-icon">🌱</div>
                <h3>Open Source</h3>
                <p>
                  Contributing to open source projects and sharing knowledge
                  with the developer community.
                </p>
              </div>
              <div className="personal-item">
                <div className="personal-icon">🎯</div>
                <h3>Problem Solving</h3>
                <p>
                  Passionate about tackling complex challenges and finding
                  elegant solutions to real-world problems.
                </p>
              </div>
              <div className="personal-item">
                <div className="personal-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>
                  Believe in the power of teamwork and enjoy mentoring aspiring
                  developers.
                </p>
              </div>
            </div>
          </div>
          <hr className="section-separator" />
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
          .about-hero {
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
            padding: 0 1.5rem;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #10b981, #059669, #047857);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: -0.02em;
            margin-bottom: 0.5rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: #cbd5e1;
            font-weight: 300;
          }

          /* Main Container */
          .about-container {
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
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 4rem;
            align-items: center;
          }

          .intro-text h2 {
            font-size: 2.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f8fafc;
          }

          .intro-text p {
            font-size: 1.125rem;
            color: #cbd5e1;
            margin-bottom: 1.5rem;
            line-height: 1.7;
          }

          .intro-stats {
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
            flex-wrap: wrap;
          }

          .stat-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.5rem;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-8px);
            border-color: #10b981;
            box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          }

          .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: #10b981;
          }

          .stat-label {
            font-size: 0.875rem;
            color: #94a3b8;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .intro-image {
            display: flex;
            justify-content: center;
          }

          .image-wrapper {
            position: relative;
            width: 300px;
            height: 400px;
          }

          .about-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            filter: grayscale(20%) brightness(1.1);
            transition: all 0.3s ease;
          }

          .about-img:hover {
            filter: grayscale(0%) brightness(1.2);
            transform: scale(1.02);
          }

          .image-border {
            position: absolute;
            inset: -4px;
            background: linear-gradient(135deg, #10b981, #059669);
            border-radius: 24px;
            z-index: -1;
            opacity: 0.8;
          }

          /* Skills Section */
          .skills-section {
            margin-bottom: 4rem;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .skill-category {
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 20px;
            padding: 1.5rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            min-height: 200px;
          }

          .skill-category:hover {
            transform: translateY(-8px);
            border-color: #10b981;
            box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          }

          .category-header {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .category-icon {
            font-size: 2rem;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }

          .skill-category:hover .category-icon {
            filter: grayscale(0%);
          }

          .category-header h3 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #f8fafc;
          }

          .skills-list {
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

          /* Timeline Section */
          .timeline-section {
            margin-bottom: 4rem;
          }

          .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
          }

          .timeline::before {
            content: '';
            position: absolute;
            left: 30px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, #10b981, #059669);
          }

          .timeline-item {
            position: relative;
            display: flex;
            gap: 2rem;
            margin-bottom: 3rem;
          }

          .timeline-marker {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 2;
          }

          .marker-dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10b981, #059669);
            border: 4px solid #0a0a0a;
          }

          .marker-year {
            background: rgba(15, 23, 42, 0.9);
            color: #10b981;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }

          .timeline-content {
            flex: 1;
            background: rgba(15, 23, 42, 0.8);
            padding: 2rem;
            border-radius: 15px;
            border: 1px solid rgba(51, 65, 85, 0.3);
            backdrop-filter: blur(10px);
          }

          .timeline-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 0.5rem;
          }

          .timeline-content h4 {
            font-size: 1.125rem;
            color: #10b981;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .timeline-content p {
            color: #cbd5e1;
            line-height: 1.6;
          }

          .timeline-item.education .timeline-content,
          .timeline-item.experience .timeline-content {
            border-left: 4px solid #10b981;
          }

          /* Personal Section */
          .personal-section {
            margin-bottom: 4rem;
          }

          .personal-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }

          .personal-item {
            text-align: center;
            padding: 2rem;
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.3);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .personal-item:hover {
            transform: translateY(-8px);
            border-color: #10b981;
            box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
          }

          .personal-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
          }

          .personal-item:hover .personal-icon {
            filter: grayscale(0%);
          }

          .personal-item h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 1rem;
          }

          .personal-item p {
            color: #cbd5e1;
            line-height: 1.6;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .hero-title {
              font-size: 3rem;
            }

            .intro-content {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .intro-stats {
              justify-content: center;
              flex-wrap: wrap;
            }

            .image-wrapper {
              width: 250px;
              height: 300px;
            }

            .section-header h2 {
              font-size: 2.25rem;
            }

            .skills-grid {
              grid-template-columns: 1fr;
            }

            .timeline::before {
              left: 20px;
            }

            .timeline-item {
              gap: 1rem;
            }

            .personal-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 2.5rem;
            }

            .about-container {
              padding: 2rem 1rem;
            }

            .intro-text h2 {
              font-size: 1.75rem;
            }

            .intro-stats {
              gap: 1rem;
            }

            .stat-card {
              padding: 1rem;
            }

            .category-header h3 {
              font-size: 1.125rem;
            }

            .personal-item h3 {
              font-size: 1.25rem;
            }
          }
        `}
      </style>
    </>
  );
}
