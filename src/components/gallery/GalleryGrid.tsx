'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './GalleryGrid.css';

const galleryImages = [
  { src: '/generated/corporate_guard.png', alt: 'Corporate Office Security', category: 'Corporate' },
  { src: '/generated/event_guard.png', alt: 'Large Scale Event Security', category: 'Event' },
  { src: '/generated/residential_guard.png', alt: 'Premium Residential Patrol', category: 'Residential' },
  { src: '/vip-sec.jpeg', alt: 'VIP Executive Protection Detail', category: 'VIP' },
  { src: '/industrial-sec.jpeg', alt: 'Industrial Plant Security', category: 'Industrial' },
  { src: '/commando-sec.jpeg', alt: 'Elite Commando Unit', category: 'Specialized' },
  { src: '/bouncer-sec.jpeg', alt: 'Professional Crowd Control', category: 'Event' },
  { src: '/security-sec.jpeg', alt: 'Retail Loss Prevention', category: 'Commercial' },
  { src: '/facility-sec.jpeg', alt: 'Facility Management Operations', category: 'Facility' },
  { src: '/sec6.jpeg', alt: 'Armed Security Personnel', category: 'Armed' },
  { src: '/sec8.jpeg', alt: 'Campus Security Monitoring', category: 'Educational' },
  { src: '/guard-patrol.png', alt: 'Mobile Patrol Unit', category: 'Patrol' }
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <>
      <div className="gallery-masonry">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <div className="gallery-overlay">
              <div className="gallery-content">
                <span className="gallery-category">{image.category}</span>
                <h3 className="gallery-caption">{image.alt}</h3>
              </div>
              <div className="gallery-icon">
                <ZoomIn size={24} color="#fff" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} color="#fff" />
            </button>
            <motion.img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="lightbox-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.h3 
              className="lightbox-caption"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {selectedImage.alt}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
