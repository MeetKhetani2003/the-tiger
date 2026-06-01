'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import './ServicesSection.css';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="services py-section" id="services">
      <div className="container">
        <div className="section-header text-center mb-element">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Premium Protection <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            className="text-lg mx-auto"
            style={{ maxWidth: '650px', marginTop: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering uncompromising security and facility management solutions tailored to the unique requirements of your enterprise.
          </motion.p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
            >
              <div className="service-img-container">
                <img src={service.image} alt={service.title} className="service-img" />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc" style={{ whiteSpace: 'pre-wrap' }}>{service.fullDescription}</p>
                <Link href={`/services/${service.slug}`} className="service-link">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="service-reflection"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
