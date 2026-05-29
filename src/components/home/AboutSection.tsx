'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Target, Eye, ShieldAlert } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section ref={sectionRef} className="about py-section" id="about">
      <div className="container">
        <div className="about-split">
          <motion.div 
            className="about-content"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeUpItem} className="section-heading mb-element">
              Defining the Standard in <br/><span className="text-primary">Corporate Protection.</span>
            </motion.h2>
            
            <motion.p variants={fadeUpItem} className="text-lg mb-element">
              Maa Shiva Services Pvt. Ltd. is a premier provider of comprehensive security and facility management solutions. With decades of combined operational experience, we deliver uncompromising protection for national and multinational organizations.
            </motion.p>
            
            <div className="about-values">
              <motion.div variants={fadeUpItem} className="value-box">
                <div className="value-icon-wrapper">
                  <Target className="value-icon" size={24} />
                </div>
                <div>
                  <h4 className="value-title">Our Mission</h4>
                  <p className="value-desc">To provide highly trained personnel and innovative security solutions that safeguard our clients' assets, people, and reputation.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpItem} className="value-box">
                <div className="value-icon-wrapper">
                  <Eye className="value-icon" size={24} />
                </div>
                <div>
                  <h4 className="value-title">Our Vision</h4>
                  <p className="value-desc">To be the most trusted and technologically advanced enterprise security partner across India.</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUpItem} className="value-box">
                <div className="value-icon-wrapper">
                  <ShieldAlert className="value-icon" size={24} />
                </div>
                <div>
                  <h4 className="value-title">Core Values</h4>
                  <p className="value-desc">Integrity, discipline, rapid response, continuous training, and unwavering commitment to client safety.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="about-visual">
            <div className="about-img-mask">
              <motion.img 
                style={{ y: imageY }}
                src="/security-grpphoto.jpg" 
                alt="Corporate Security Officers" 
                className="about-img"
              />
            </div>
            <motion.div 
              className="about-experience"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="exp-number">15+</span>
              <span className="exp-text">Years of<br/>Excellence</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
