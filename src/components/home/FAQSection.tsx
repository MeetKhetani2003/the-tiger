'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    q: "Are your security personnel background checked?",
    a: "Yes. Every single guard or command center operator at Maa Shiva Services undergoes a mandatory 2-step verification protocol: a professional digital background screening followed by official Police Character Verification from local authorities."
  },
  {
    q: "How long does it take to deploy guards on site?",
    a: "Standard corporate or residential guarding contracts are typically deployed within 48 to 72 hours from contract signing. For immediate event or emergency VIP security, we can deploy active personnel within 6 to 12 hours across Uttar Pradesh."
  },
  {
    q: "Are your guards trained in fire safety and medical emergencies?",
    a: "Absolutely. Apart from combat training, our specialized curriculum includes mandatory drills for Fire Extinguishing, Disaster evacuation, Cardiopulmonary Resuscitation (CPR), and basic First-Aid administration."
  },
  {
    q: "What is your command center escalation protocol?",
    a: "Our centralized 24/7 command center monitors active field patrols. If a patrol guard registers a critical incident via their hand-held app, our senior desk operators immediately notify local police and dispatch our armed Quick Response Team (QRT) patrol unit."
  }
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="faq-section py-section">
      <div className="container">
        <div className="section-header text-center mb-element">
          <motion.h4 
            className="text-primary font-bold uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Common Inquiries
          </motion.h4>
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-lg mx-auto"
            style={{ maxWidth: '700px', color: 'var(--color-text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gain clarity on deployment times, compliance parameters, and operations escalation systems.
          </motion.p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className={`faq-item ${openIndex === idx ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`faq-icon ${openIndex === idx ? 'rotated' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
