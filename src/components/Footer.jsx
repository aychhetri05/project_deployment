import React from 'react';
import { GraduationCap, Globe, MessageSquare, Camera, Share2, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="#" className="nav-brand" style={{ color: '#fff', marginBottom: '1.5rem', display: 'flex' }}>
              <GraduationCap className="nav-brand-icon" size={32} />
              <span style={{ fontSize: '1.25rem' }}>Advanced College of Eng.</span>
            </a>
            <p>Empowering the next generation of engineers with world-class education, cutting-edge research, and industry-focused programs.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><MessageSquare size={20} /></a>
              <a href="#" className="social-link"><Camera size={20} /></a>
              <a href="#" className="social-link"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#programs">Academics</a>
              <a href="#contact">Admissions</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Departments</h3>
            <div className="footer-links">
              <a href="#programs">Computer Engineering</a>
              <a href="#programs">Civil Engineering</a>
              <a href="#programs">Mechanical Engineering</a>
              <a href="#programs">Electrical Engineering</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={20} className="nav-brand-icon" />
                <span>123 Innovation Drive, Tech City, TX 75001</span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="nav-brand-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={20} className="nav-brand-icon" />
                <span>info@advancedeng.edu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Advanced College of Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
