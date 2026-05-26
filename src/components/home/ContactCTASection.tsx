'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import './ContactCTASection.css';

const ContactCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="cta py-section" id="contact">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-bg-image"></div>
          <div className="cta-overlay"></div>
          
          <div className="cta-content">
            <Shield size={48} className="cta-icon" />
            <h2 className="cta-title">Secure Your Enterprise Today.</h2>
            <p className="cta-desc">
              Connect with our senior security consultants for a comprehensive risk assessment and customized protection strategy.
            </p>
            
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                Schedule Consultation <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </a>
              <a href="tel:+919415610453" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Call +91 94156 10453
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTASection;
