'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneCall, ShieldAlert, UserCheck, Map, Activity, HeadphonesIcon } from 'lucide-react';
import './ProcessSection.css';

const processes = [
  {
    id: 1,
    title: "Consultation & Discovery",
    desc: "We begin with a strategic briefing to understand your specific vulnerabilities, operational requirements, and corporate culture.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Threat & Risk Assessment",
    desc: "Our senior security architects conduct a comprehensive site survey, identifying potential breach points and compliance gaps.",
    icon: ShieldAlert,
  },
  {
    id: 3,
    title: "Personnel Selection",
    desc: "We rigorously vet and select specialized security personnel whose training perfectly matches your specific operational environment.",
    icon: UserCheck,
  },
  {
    id: 4,
    title: "Strategic Deployment",
    desc: "Seamless, zero-downtime integration of our security teams and surveillance technology into your existing infrastructure.",
    icon: Map,
  },
  {
    id: 5,
    title: "Active Monitoring",
    desc: "24/7 command center oversight utilizing advanced surveillance metrics and real-time incident reporting protocols.",
    icon: Activity,
  },
  {
    id: 6,
    title: "Ongoing Support",
    desc: "Continuous strategy optimization, rapid response team availability, and dedicated relationship management.",
    icon: HeadphonesIcon,
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section ref={sectionRef} className="process py-section" id="process">
      <div className="container">
        <div className="process-wrapper">
          
          {/* Sticky Left Column */}
          <div className="process-sticky">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="process-badge">Methodology</div>
              <h2 className="section-heading mb-element">
                Our Operational <br/><span className="text-primary">Process</span>
              </h2>
              <p className="text-lg mb-element" style={{ maxWidth: '450px' }}>
                We employ a systematic, military-grade methodology ensuring flawless execution and absolute protection from day one.
              </p>
              
              <div className="process-stats mt-element">
                <div className="process-stat-box">
                  <span className="stat-num">06</span>
                  <span className="stat-label">Rigorous<br/>Steps</span>
                </div>
                <div className="process-stat-box">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Compliance<br/>Rate</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right Column */}
          <motion.div 
            className="process-steps"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {processes.map((proc) => {
              const Icon = proc.icon;
              return (
                <motion.div key={proc.id} variants={cardVariants} className="process-card">
                  <div className="process-card-header">
                    <span className="process-step-num">0{proc.id}</span>
                    <div className="process-icon-box">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="process-card-content">
                    <h3 className="process-card-title">{proc.title}</h3>
                    <p className="process-card-desc">{proc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
