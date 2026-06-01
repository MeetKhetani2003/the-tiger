'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ShieldAlert, Users, ClipboardCheck } from 'lucide-react';
import './SLASection.css';

const slas = [
  {
    icon: <Clock size={32} />,
    title: "5-Minute Dispatch Guarantee",
    desc: "Our automated distress alert system ensures our Quick Response Team (QRT) is dispatched immediately under crisis scenarios."
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Tactical Gear & Bodycams",
    desc: "Deployments are equipped with smart body cameras linked directly to our central command room in Faizabad for visual verification."
  },
  {
    icon: <Users size={32} />,
    title: "No-Delay Guard Replacement",
    desc: "We maintain a 15% reserve pool of elite standby guards to guarantee immediate replacement under unplanned absences."
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Military-Grade Audits",
    desc: "Operational auditors carry out unscheduled weekly night patrols to evaluate alertness, uniform protocols, and gate discipline."
  }
];

export default function SLASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="sla-section py-section">
      <div className="container">
        <div className="section-header text-center mb-element">
          <motion.h4 
            className="text-primary font-bold uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Operational Standards
          </motion.h4>
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SLA <span className="text-primary">Excellence</span>
          </motion.h2>
          <motion.p 
            className="text-lg mx-auto"
            style={{ maxWidth: '700px', color: 'var(--color-text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We define industry-leading security practices by backing up our physical guards with rigorous service level agreements.
          </motion.p>
        </div>

        <div className="sla-grid">
          {slas.map((sla, idx) => (
            <motion.div 
              key={idx}
              className="sla-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
            >
              <div className="sla-icon-wrapper">
                {sla.icon}
              </div>
              <h3 className="sla-title">{sla.title}</h3>
              <p className="sla-desc">{sla.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
