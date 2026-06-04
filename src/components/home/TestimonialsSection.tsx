'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    author: "Arun Srivastv",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Es company ke staff ka behaviour bahut hi normal aur professional hai.",
    avatarBg: "#E05A47", // Reddish-orange
    date: "18 weeks ago"
  },
  {
    id: 2,
    author: "Taksh Dubey",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Excellent service.",
    avatarBg: "#673AB7", // Purple
    date: "31 weeks ago"
  },
  {
    id: 3,
    author: "Jai Sharma",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Security management bahut solid aur prabhavi hai.",
    avatarBg: "#2E7D32", // Green
    date: "18 weeks ago"
  },
  {
    id: 4,
    author: "Shivam Pandey",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Yaha ki team hamesa alert active rahti hai.",
    avatarBg: "#EF6C00", // Orange
    date: "18 weeks ago"
  },
  {
    id: 5,
    author: "Mishra Yash",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "It is a very good company for security guard and the services are very good.",
    avatarBg: "#AD1457", // Pinkish/Purple
    date: "25 Oct 2024"
  },
  {
    id: 6,
    author: "Abhishek Pandey",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Maa Shiva Services Pvt. Ltd. ek pramukh suraksha agency hai jo vibhinn udyogo aur sangathano ko suraksha sevaye pradan karti hai.",
    avatarBg: "#1565C0", // Blue
    date: "49 weeks ago"
  },
  {
    id: 7,
    author: "Santosh Yadav",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Good security guard company faizabad best pyment",
    avatarBg: "#F4511E", // Dark Orange
    date: "8 weeks ago"
  },
  {
    id: 8,
    author: "Ayush Gupta",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Ye company bhut achchhi hai paisa bhut time de date hai",
    avatarBg: "#1E88E5", // Light Blue
    date: "8 weeks ago"
  },
  {
    id: 9,
    author: "Prabhakar Gupta",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "There are 300 guard in this company.",
    avatarBg: "#43A047", // Lime/Green
    date: "48 weeks ago"
  },
  {
    id: 10,
    author: "Himanshu Mishra",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "No 1 security company faizabad",
    avatarBg: "#37474F", // Blue-Grey
    date: "48 weeks ago"
  },
  {
    id: 11,
    author: "Pram pal yadav",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Company ki service quality bahut achhi aur santoshjanak hai.",
    avatarBg: "#8D6E63", // Brown
    date: "18 weeks ago"
  },
  {
    id: 12,
    author: "Vikash Jaiswal",
    role: "Verified Google Reviewer",
    rating: 5,
    text: "Good company hai.",
    avatarBg: "#00897B", // Teal
    date: "48 weeks ago"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayActive, setAutoplayActive] = useState(true);

  useEffect(() => {
    if (!autoplayActive) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplayActive]);

  const nextTestimonial = () => {
    setAutoplayActive(false);
    setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setAutoplayActive(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setAutoplayActive(false);
    setCurrentIndex(index);
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
            <span className="rating-text">Based on 150+ Corporate & Local Reviews</span>
          </div>
          
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Clients <span className="text-primary">Say About Us</span>
          </motion.h2>
        </div>

        <motion.div 
          className="testimonial-carousel-container"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ overflow: 'hidden', width: '100%', position: 'relative' }}
        >
          <div 
            className="testimonials-track"
            style={{
              display: 'flex',
              transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              width: '100%'
            }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="testimonial-slide"
                style={{
                  width: '100%',
                  flexShrink: 0,
                  padding: '0 15px'
                }}
              >
                <div className="test-card">
                  <div className="google-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                    <span>Google Review</span>
                  </div>
                  
                  <div className="test-header">
                    <div className="author-avatar-initial" style={{ backgroundColor: item.avatarBg }}>
                      {item.author.charAt(0).toUpperCase()}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{item.author}</h4>
                      <p className="client-company">{item.role} &bull; {item.date}</p>
                    </div>
                  </div>
                  
                  <div className="test-stars">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={20} fill="#FBBC05" color="#FBBC05" />)}
                  </div>
                  
                  <p className="test-text">&ldquo;{item.text}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-btn"><ChevronLeft size={24} /></button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(i)}
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
