import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'The Azure Residence',
    category: 'Living Space',
    image: '/images/port_4.png'
  },
  {
    id: 2,
    title: 'Lumina Kitchen',
    category: 'Modular Kitchen',
    image: '/images/port_1.png'
  },
  {
    id: 3,
    title: 'Oasis Dining',
    category: 'Dining Space',
    image: '/images/port_2.png'
  },
  {
    id: 4,
    title: 'Serenity Suite',
    category: 'Bedroom Interior',
    image: '/images/port_3.png'
  }
];

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <h5 className="section-subtitle">Our Work</h5>
        <h2 className="section-title">Selected Projects</h2>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="view-project-btn">
                  <span>View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="portfolio-cta">
          <a href="#" className="btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
