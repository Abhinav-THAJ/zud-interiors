import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h5 className="section-subtitle">About Us</h5>
        <h2 className="section-title">Elevating Lifestyles Through Design</h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/about_bg.png" alt="Luxury Interior" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of<br/>Excellence</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Modern & Luxury Interiors</h3>
            <p>
              At Zud Interiors, we believe that your space should be a reflection of your personality and a sanctuary for your soul. Based in Bengaluru, we specialize in curating high-end, elegant, and minimal interiors that balance aesthetics with functionality.
            </p>
            <p>
              Whether it's a turnkey project, a modular kitchen, or a complete living space transformation, our team is dedicated to bringing your vision to life with uncompromising quality and attention to detail.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <h4>150+</h4>
                <p>Projects Delivered</p>
              </div>
              <div className="feature">
                <h4>Premium</h4>
                <p>Quality Materials</p>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">Consult With Us</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
