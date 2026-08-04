import React, { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-brand" onClick={closeMenu}>
          <GraduationCap className="nav-brand-icon" size={32} />
          <span>Advanced College of Eng.</span>
        </a>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About Us</a>
          <a href="#programs" className="nav-link" onClick={closeMenu}>Programs</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="btn btn-primary" onClick={closeMenu}>Apply Now</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
