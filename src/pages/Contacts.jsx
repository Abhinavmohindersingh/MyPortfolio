import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact methods data
  const contactMethods = [
    {
      title: "Email",
      description: "Send me a message and I'll get back to you within 24 hours",
      icon: "📧",
      value: "abhinavsinghkanwal@gmail.com",
      link: "mailto:abhinavsinghkanwal@gmail.com",
      color: "blue",
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and view my career journey",
      icon: "💼",
      value: "linkedin.com/in/abhinav",
      link: "https://linkedin.com/in/abhinav3838",
      color: "blue",
    },
    {
      title: "GitHub",
      description:
        "Explore my code repositories and contribute to open source projects",
      icon: "🔗",
      value: "github.com/abhinav",
      link: "https://github.com/Abhinavmohindersingh",
      color: "purple",
    },
  ];

  // Collaboration types
  const collaborationTypes = [
    {
      title: "Full-time Opportunities",
      description:
        "Seeking challenging roles in software engineering, AI/ML, or research positions",
      icon: "💼",
      tags: [
        "Software Engineer",
        "AI/ML Engineer",
        "Research Scientist",
        "Full Stack Developer",
      ],
    },
    {
      title: "Freelance Projects",
      description:
        "Available for consulting on web development, AI implementations, and technical solutions",
      icon: "🚀",
      tags: [
        "Web Development",
        "AI Consulting",
        "Technical Architecture",
        "Code Review",
      ],
    },
    {
      title: "Research Collaboration",
      description:
        "Open to academic partnerships and collaborative research in AI, ML, and computer science",
      icon: "🔬",
      tags: [
        "Academic Research",
        "Paper Collaboration",
        "Peer Review",
        "Conference Presentations",
      ],
    },
    {
      title: "Open Source",
      description:
        "Contributing to meaningful open source projects and building developer tools",
      icon: "🌟",
      tags: [
        "Open Source",
        "Developer Tools",
        "Community Projects",
        "Technical Writing",
      ],
    },
  ];

  const availability = {
    status: "Available",
    description: "Currently seeking new opportunities",
    timeline: "Immediate start available",
    location: "Brisbane, Australia (Open to remote work)",
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("XGBQPdYVyW68c7LkL");
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    const serviceID = "service_bt38qfj"; // Your Gmail Service ID
    const templateID = "template_h1xa2nq"; // Replace with your EmailJS Template ID

    emailjs
      .send(serviceID, templateID, {
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ fullName: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          setStatus(`Failed to send message: ${error.text}`);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Let's Connect</h1>
          <p className="hero-subtitle">
            Ready to collaborate, innovate, and build something amazing together
          </p>
          <div className="availability-card">
            <div className="availability-status">
              <span className="status-indicator"></span>
              <span className="status-text">{availability.status}</span>
            </div>
            <p className="availability-desc">{availability.description}</p>
            <div className="availability-details">
              <span>📍 {availability.location}</span>
              <span>⏰ {availability.timeline}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-container">
        {/* Contact Methods Section */}
        <section className="contact-methods-section">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>
              Choose your preferred way to reach out - I'm always excited to
              hear from fellow developers, potential collaborators, and
              interesting people
            </p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.link}
                className="contact-method-card"
                target={method.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  method.link.startsWith("http") ? "noopener noreferrer" : ""
                }
              >
                <div className="method-icon">{method.icon}</div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p className="method-description">{method.description}</p>
                  <span className="method-value">{method.value}</span>
                </div>
                <div className="method-arrow">→</div>
              </a>
            ))}
          </div>
          <hr className="section-separator" />
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="form-container">
            <div className="form-header">
              <h2>Send a Message</h2>
              <p>
                Have a specific project in mind or just want to say hello? Drop
                me a message and I'll get back to you soon.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="select-wrapper">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  >
                    <option value="">Select a topic</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="freelance-project">Freelance Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="textarea-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    required
                    aria-required="true"
                  ></textarea>
                </div>
              </div>

              <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="btn-arrow">✉️</span>
              </button>

              {status && (
                <p
                  className={`status-message ${
                    status.includes("Failed") ? "error" : "success"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
          <hr className="section-separator" />
        </section>

        {/* Collaboration Section */}
        <section className="collaboration-section">
          <div className="section-header">
            <h2>Collaboration Opportunities</h2>
            <p>
              I'm always interested in working on exciting projects and
              connecting with like-minded professionals
            </p>
          </div>

          <div className="collaboration-grid">
            {collaborationTypes.map((type, index) => (
              <div key={type.title} className="collaboration-card">
                <div className="collab-header">
                  <span className="collab-icon">{type.icon}</span>
                  <h3>{type.title}</h3>
                </div>
                <p className="collab-description">{type.description}</p>
                <div className="collab-tags">
                  {type.tags.map((tag, idx) => (
                    <span key={idx} className="collab-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className="section-separator" />
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
        .contact-hero {
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
        }

        .availability-card {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.3);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          max-width: 500px;
          margin: 0 auto;
        }

        .availability-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          justify-content: center;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .status-text {
          font-weight: 600;
          color: #10b981;
          font-size: 1.125rem;
        }

        .availability-desc {
          color: #cbd5e1;
          margin-bottom: 1rem;
          text-align: center;
        }

        .availability-details {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.875rem;
          color: #94a3b8;
        }

        /* Main Container */
        .contact-container {
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

        /* Contact Methods Section */
        .contact-methods-section {
          margin-bottom: 4rem;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.3);
          border-radius: 20px;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          min-height: 200px;
        }

        .contact-method-card:hover {
          transform: translateY(-8px);
          border-color: #10b981;
          box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
        }

        .method-icon {
          font-size: 2.5rem;
          min-width: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .contact-method-card:hover .method-icon {
          filter: grayscale(0%);
        }

        .method-content {
          flex: 1;
        }

        .method-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.5rem;
        }

        .method-description {
          color: #cbd5e1;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .method-value {
          color: #10b981;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .method-arrow {
          font-size: 1.5rem;
          color: #10b981;
          transition: transform 0.3s ease;
        }

        .contact-method-card:hover .method-arrow {
          transform: translateX(4px);
        }

        /* Contact Form Section */
        .contact-form-section {
          margin-bottom: 4rem;
        }

        .form-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-header h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: #cbd5e1;
          font-size: 1rem;
        }

        .contact-form {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.3);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: #f8fafc;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .input-wrapper input,
        .select-wrapper select,
        .textarea-wrapper textarea {
          width: 100%;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(51, 65, 85, 0.5);
          border-radius: 12px;
          padding: 1rem;
          color: #f8fafc;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .input-wrapper input:focus,
        .select-wrapper select:focus,
        .textarea-wrapper textarea:focus {
          outline: none;
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .input-wrapper input::placeholder,
        .textarea-wrapper textarea::placeholder {
          color: #94a3b8;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 15px;
          padding: 0.5rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(16, 185, 129, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-arrow {
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .status-message {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.875rem;
        }

        .status-message.success {
          color: #10b981;
        }

        .status-message.error {
          color: #ef4444;
        }

        /* Collaboration Section */
        .collaboration-section {
          margin-bottom: 4rem;
        }

        .collaboration-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .collaboration-card {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.3);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        .collaboration-card:hover {
          transform: translateY(-8px);
          border-color: #10b981;
          box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
        }

        .collab-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .collab-icon {
          font-size: 2rem;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .collaboration-card:hover .collab-icon {
          filter: grayscale(0%);
        }

        .collab-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .collab-description {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          flex: 1;
        }

        .collab-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .collab-tag {
          background: rgba(16, 185, 129, 0.1);
          color: #6ee7b7;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(16, 185, 129, 0.2);
          transition: all 0.3s ease;
        }

        .collab-tag:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .availability-details {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .section-header h2 {
            font-size: 2.25rem;
          }

          .contact-methods-grid {
            grid-template-columns: 1fr;
          }

          .contact-method-card {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
            min-height: auto;
          }

          .method-arrow {
            display: none;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .form-header h2 {
            font-size: 2rem;
          }

          .collaboration-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .contact-container {
            padding: 2rem 1rem;
          }

          .availability-card {
            padding: 1.5rem;
          }

          .contact-form {
            padding: 1rem;
          }

          .form-header h2 {
            font-size: 1.75rem;
          }

          .contact-method-card,
          .collaboration-card {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}
