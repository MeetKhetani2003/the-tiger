'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    client: "Global Tech Solutions",
    author: "Rahul M., VP of Operations",
    rating: 5,
    text: "Maa Shiva Services has completely transformed our campus safety protocol. Their personnel are highly professional, punctual, and handle crisis situations with extreme competence.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    client: "Prestige Estates",
    author: "Anjali S., Facility Manager",
    rating: 5,
    text: "We switched to Maa Shiva Services two years ago and the difference is night and day. The guards are well-trained, polite to residents, and extremely vigilant during night shifts.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    client: "Apex Manufacturing",
    author: "Vikram D., Plant Head",
    rating: 5,
    text: "Industrial security requires specialized training, and Maa Shiva Services delivers exactly that. Their loss prevention strategies have saved us millions. Highly recommended.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    client: "Citywalk Mall",
    author: "Priya K., Center Director",
    rating: 5,
    text: "Managing a daily footfall of 50,000+ requires immense coordination. The Maa Shiva Services team handles access control and emergency response flawlessly.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} className="testimonials py-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center mb-element">
          <div className="google-rating">
            <span className="rating-score">4.9</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#FBBC05" color="#FBBC05" />)}
            </div>
            <span className="rating-text">Based on 150+ Corporate Reviews</span>
          </div>
          
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Industry <span className="text-primary">Leaders</span>
          </motion.h2>
        </div>

        <motion.div 
          className="testimonial-carousel-container"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="test-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="test-header">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="author-img" />
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentIndex].author}</h4>
                  <p className="client-company">{testimonials[currentIndex].client}</p>
                </div>
                <div className="verified-badge">
                  <CheckCircle size={16} />
                  <span>Verified Client</span>
                </div>
              </div>
              
              <div className="test-stars">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} size={20} fill="#FBBC05" color="#FBBC05" />)}
              </div>
              
              <p className="test-text">"{testimonials[currentIndex].text}"</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-btn"><ChevronLeft size={24} /></button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="carousel-btn"><ChevronRight size={24} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
