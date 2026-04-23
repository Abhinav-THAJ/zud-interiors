import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Box, Sofa, Home } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Interior Design',
    description: 'Bespoke designs tailored to your lifestyle, seamlessly blending aesthetics with comfort.',
    icon: <PenTool size={32} />
  },
  {
    title: 'Space Planning',
    description: 'Optimizing layouts to enhance flow and functionality, ensuring every corner serves a purpose.',
    icon: <Box size={32} />
  },
  {
    title: 'Custom Furniture',
    description: 'Handcrafted pieces that perfectly fit your space and elevate the overall design narrative.',
    icon: <Sofa size={32} />
  },
  {
    title: 'Turnkey Projects',
    description: 'End-to-end solutions, taking your project from concept to completion with flawless execution.',
    icon: <Home size={32} />
  }
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <h5 className="section-subtitle">Our Expertise</h5>
        <h2 className="section-title">Comprehensive Design Solutions</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-hover-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
