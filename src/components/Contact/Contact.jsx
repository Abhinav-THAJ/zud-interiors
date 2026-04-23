import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="section-subtitle" style={{textAlign: 'left'}}>Get In Touch</h5>
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>Let's Build Your Dream Space</h2>
            <p className="contact-desc">
              Ready to transform your space? Contact us today for a consultation. Our team of expert designers is here to bring your vision to life with precision and elegance.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon-wrap">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>6th Floor, MARUTI ONYX Tower,<br/>Ashraya Layout, Garudachar Palya,<br/>Brookfield, Bengaluru, Karnataka 560048</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrap">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 95440 00199</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrap">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>zudinteriors@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.instagram.com/zudinteriors/" target="_blank" rel="noreferrer" className="social-icon">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form glass-panel">
              <h3>Send us a message</h3>
              
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              
              <div className="form-group">
                <select required>
                  <option value="" disabled selected>Service Interested In</option>
                  <option value="interior">Interior Design</option>
                  <option value="turnkey">Turnkey Project</option>
                  <option value="kitchen">Modular Kitchen</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea placeholder="Message" rows="4" required></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">Submit Request</button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
