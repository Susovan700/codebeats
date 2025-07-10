"use client";
import "./about.css";
import Sidebar from "../components/sidebar/page";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/team-member-1.jpg",
      description: "Passionate music enthusiast with 10+ years in tech",
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "/team-member-2.jpg",
      description: "Full-stack developer specializing in audio streaming",
    },
    {
      name: "Mike Rodriguez",
      role: "Music Curator",
      image: "/team-member-3.jpg",
      description: "Professional DJ and music industry expert",
    },
    {
      name: "Emma Wilson",
      role: "UI/UX Designer",
      image: "/team-member-4.jpg",
      description: "Creative designer focused on user experience",
    },
  ];

  const features = [
    {
      icon: "🎵",
      title: "Multi-language Support",
      description:
        "Discover music from around the world in Hindi, English, Spanish, Bengali, and Japanese",
    },
    {
      icon: "🎨",
      title: "Beautiful Interface",
      description:
        "Sleek, modern design that makes music discovery a visual delight",
    },
    {
      icon: "📱",
      title: "Cross-platform",
      description: "Seamless experience across all your devices",
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description:
        "Find your favorite songs and artists with intelligent search",
    },
  ];
  return (
    <div className="about-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbar-about">
        <div className="navigation-header">
          <button className="about-back-button" onClick={handleBackClick}>
            ← Back to Home
          </button>
          <h2>About CodeBeats</h2>
        </div>
      </div>
      <div className="about-main">
        <div className="about-content">
          
          <div className="about-hero">
            <div className="hero-text">
              <h1>Welcome to CodeBeats</h1>
              <p className="hero-subtitle">Where Music Meets Technology</p>
              <p className="hero-description">
                CodeBeats is more than just a music streaming platform - it's a
                passion project born from the love of music and cutting-edge
                technology. We believe that music is a universal language that
                connects people across cultures and borders.
              </p>
            </div>
            <div className="hero-image">
              <div className="music-visualization">
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mission-section">
            <h3>Our Mission</h3>
            <p>
              To create an inclusive music platform that celebrates diversity in
              sound and culture. We strive to provide music lovers with easy
              access to songs from different languages and genres, fostering a
              global community of music enthusiasts.
            </p>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <h3>What Makes Us Special</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h3>Meet Our Team</h3>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-image">
                    <div className="placeholder-avatar">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <h3>CodeBeats by Numbers</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Songs Available</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Languages Supported</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1K+</div>
                <div className="stat-label">Artists Featured</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Music Streaming</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h3>Get in Touch</h3>
            <p>
              Have questions, suggestions, or just want to say hello? We'd love
              to hear from you!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> hello@codebeats.com
              </div>
              <div className="contact-item">
                <strong>Follow us:</strong> @codebeats on social media
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
