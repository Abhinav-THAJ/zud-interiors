import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="logo-icon footer-logo-icon">
                <span className="logo-main">Zud</span>
                <span className="logo-sub">INTERIORS</span>
              </div>
            </a>
            <p className="footer-desc">
              Designing spaces that define elegance. A premium interior design studio based in Bengaluru creating luxurious, functional spaces.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/zudinteriors/" target="_blank" rel="noreferrer" className="footer-social-link">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zud Interiors. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
