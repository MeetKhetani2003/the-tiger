'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HomeIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive <span className="text-primary">Security Guard Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg"
            style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '24px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            As one of the best security companies in India, we offer a diverse portfolio of 15 specialized types of security guards to meet your exact needs. From highly visible Armed Security Guards to discreet Executive Protection, we ensure you have the right personnel for your specific environment, risk level, and operational goals.
          </motion.p>
          
          <motion.p 
            className="text-lg"
            style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our comprehensive offerings cover everything from Corporate and Residential Security to complex Industrial and Event Security. Whether you require mobile patrols, specialized hospital guards, or elite commando units, our tailored services are designed to mitigate all operational risks.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
