import React from 'react';
import { ArrowRight, BookOpen, Users, Globe, Target, MapPin, Mail, Phone } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content animate-slide-up">
            <h1 className="hero-title">Engineer the Future at <span>Advanced College</span></h1>
            <p className="hero-subtitle">
              Join a community of innovators, leaders, and creators. We offer world-class engineering programs designed to tackle tomorrow's global challenges.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Apply Now <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn btn-hero-outline">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="features-grid" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>About Our Legacy</h2>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                Founded in 1985, the Advanced College of Engineering has been at the forefront of technological advancement. Our alumni have gone on to found Fortune 500 companies and lead groundbreaking research.
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                We believe in learning by doing, equipping our students with both the theoretical foundation and the practical skills necessary to succeed.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                  <Target size={24} className="nav-brand-icon" /> Innovation
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                  <Users size={24} className="nav-brand-icon" /> Community
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: '600' }}>
                  <Globe size={24} className="nav-brand-icon" /> Global Impact
                </div>
              </div>
            </div>
            <div className="feature-card glass" style={{ backgroundColor: 'var(--bg-main)' }}>
              <div className="feature-icon-wrapper">
                <BookOpen size={32} />
              </div>
              <h3 className="feature-title">Excellence in Education</h3>
              <p>Top-ranked academic programs with hands-on labs, state-of-the-art facilities, and rigorous curriculum designed by industry pioneers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section id="programs" className="programs-section section">
        <div className="container">
          <h2 className="section-title">Featured Programs</h2>
          <div className="programs-grid">
            
            <div className="program-card">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Computer Engineering" className="program-image" />
              <div className="program-content">
                <h3>Computer Engineering</h3>
                <p>Master software development, artificial intelligence, and hardware design to build the next generation of computing systems.</p>
              </div>
            </div>

            <div className="program-card">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mechanical Engineering" className="program-image" />
              <div className="program-content">
                <h3>Mechanical Engineering</h3>
                <p>From robotics to renewable energy, gain the skills to design and manufacture innovative mechanical systems.</p>
              </div>
            </div>

            <div className="program-card">
              <img src="https://images.unsplash.com/photo-1541888087525-4ebdac1c24c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Civil Engineering" className="program-image" />
              <div className="program-content">
                <h3>Civil Engineering</h3>
                <p>Build sustainable infrastructure, design smart cities, and lead construction projects that shape our world.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="features-grid" style={{ gap: '4rem' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Ready to Start?</h2>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                Take the first step towards a rewarding career in engineering. Applications for the Fall semester are now open. Reach out to our admissions team for any questions.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '10px', backgroundColor: 'var(--bg-main)', borderRadius: '50%', color: 'var(--accent-color)' }}><MapPin size={20} /></div>
                  <span style={{ fontWeight: '500' }}>123 Innovation Drive, Tech City, TX 75001</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '10px', backgroundColor: 'var(--bg-main)', borderRadius: '50%', color: 'var(--accent-color)' }}><Phone size={20} /></div>
                  <span style={{ fontWeight: '500' }}>+1 (555) 123-4567</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '10px', backgroundColor: 'var(--bg-main)', borderRadius: '50%', color: 'var(--accent-color)' }}><Mail size={20} /></div>
                  <span style={{ fontWeight: '500' }}>admissions@advancedeng.edu</span>
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'var(--bg-main)', padding: '2.5rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Request Information</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} required />
                <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1' }} required />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
