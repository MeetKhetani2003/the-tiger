'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShieldCheck, Clock, Users } from 'lucide-react';
import './HeroSection.css';

const slides = [
  {
    id: 1,
    title: "Professional Corporate Security",
    subtitle: "Safeguarding your enterprise assets, personnel, and intellectual property with world-class protection services.",
    image: "/home-sl1.jpeg",
  },
  {
    id: 2,
    title: "Industrial Complex Protection",
    subtitle: "Robust 24/7 monitoring and physical security deployments for manufacturing plants and critical infrastructure.",
    image: "/home-sl2.jpeg",
  },
  {
    id: 3,
    title: "Residential Estate Safety",
    subtitle: "Discreet, highly-trained personnel ensuring absolute peace of mind for premium residential communities.",
    image: "/home-sl3.jpeg",
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="hero-carousel" id="home">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="hero-bg-layer"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="hero-bg-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container hero-carousel-content">
        <div className="hero-carousel-text">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                {slides[currentSlide].title}
              </h1>
              <p className="hero-subtitle text-lg">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a href="/contact" className="btn btn-primary">Request Consultation</a>
            <a href="/services" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Our Services</a>
          </motion.div>

          <motion.div
            className="hero-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="badge-item"><CheckCircle size={16} className="badge-icon" /> Verified Personnel</div>
            <div className="badge-item"><Clock size={16} className="badge-icon" /> 24×7 Operations</div>
            <div className="badge-item"><Users size={16} className="badge-icon" /> Professional Deployment</div>
          </motion.div>
        </div>
      </div>

      <div className="hero-controls">
        <div className="container controls-container">
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={prevSlide}><ChevronLeft size={24} /></button>
            <button className="nav-btn" onClick={nextSlide}><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted CheckCircle since it wasn't in original import
import { CheckCircle } from 'lucide-react';

export default HeroSection;
