'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './IndustriesSection.css';

const industries = [
  { id: 'corp', name: 'Corporate Offices', desc: 'Secure entry protocols and floor monitoring.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
  { id: 'res', name: 'Residential', desc: '24/7 gate security and perimeter patrols.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' },
  { id: 'ind', name: 'Industrial', desc: 'Loss prevention and heavy machinery oversight.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
  { id: 'hosp', name: 'Healthcare', desc: 'Patient privacy and emergency room crowd control.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
  { id: 'edu', name: 'Institutions', desc: 'Campus safety and visitor management systems.', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800' },
];

const IndustriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeInd, setActiveInd] = useState('corp');

  return (
    <section ref={sectionRef} className="industries py-section" id="industries">
      <div className="container">
        <div className="section-header text-center mb-element">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Sectors We <span className="text-primary">Protect</span>
          </motion.h2>
          <motion.p 
            className="text-lg mx-auto"
            style={{ maxWidth: '650px', marginTop: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized security operations designed for the unique challenges of diverse sectors.
          </motion.p>
        </div>

        <motion.div 
          className="accordion-container"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {industries.map((ind) => (
            <div 
              key={ind.id} 
              className={`accordion-panel ${activeInd === ind.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveInd(ind.id)}
              style={{ backgroundImage: `url(${ind.img})` }}
            >
              <div className="accordion-overlay"></div>
              
              <div className="accordion-content">
                <div className="accordion-title-wrapper">
                  <h3 className="accordion-title">{ind.name}</h3>
                </div>
                
                <div className="accordion-details">
                  <p className="accordion-desc">{ind.desc}</p>
                  <a href="/industries" className="accordion-link">
                    Explore <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
