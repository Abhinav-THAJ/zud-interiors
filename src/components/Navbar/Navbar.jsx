import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container container">
        
        <div className="nav-left">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <span className="logo-main">Zud</span>
              <span className="logo-sub">INTERIORS</span>
            </div>
          </a>
        </div>
        
        <div className="nav-center desktop-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
        </div>

        <div className="nav-right desktop-menu">
          <a href="#contact" className="nav-btn-premium">
            <span className="circle"></span>
            <span className="text">Consult Us</span>
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#home" className="mobile-link" onClick={toggleMenu}>Home</a>
            <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>
            <a href="#services" className="mobile-link" onClick={toggleMenu}>Services</a>
            <a href="#portfolio" className="mobile-link" onClick={toggleMenu}>Portfolio</a>
            <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
