'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { galleryMedia, GalleryItem } from '../gallery/GalleryGrid';
import './GalleryCarouselSection.css';

export default function GalleryCarouselSection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Duplicate the array to create a seamless infinite scrolling loop
  const duplicatedMedia = [...galleryMedia, ...galleryMedia];

  return (
    <section className="py-section gallery-carousel-section">
      <div className="container" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Visual Tour</span>
          <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '0', textAlign: 'left' }}>
            Our Operations <span className="text-primary">in Action</span>
          </h2>
        </div>
        <Link href="/gallery" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          View Full Gallery <ArrowRight size={18} />
        </Link>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {duplicatedMedia.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="carousel-item"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy" 
                className={item.type === 'video' ? 'video-thumbnail' : ''} 
              />
              
              {item.type === 'video' && (
                <div className="video-play-indicator" style={{ transform: 'translate(-50%, -50%) scale(0.8)' }}>
                  <Play size={32} fill="var(--color-primary-blue)" color="var(--color-primary-blue)" />
                </div>
              )}

              <div className="gallery-overlay">
                <div className="gallery-content">
                  <span className="gallery-category">{item.category}</span>
                  <h3 className="gallery-caption" style={{ fontSize: '1rem' }}>{item.alt}</h3>
                </div>
                <div className="gallery-icon" style={{ width: '36px', height: '36px' }}>
                  {item.type === 'video' ? <Play size={18} fill="#fff" color="#fff" /> : <ZoomIn size={18} color="#fff" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shared Lightbox Logic */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedItem(null)}>
              <X size={32} color="#fff" />
            </button>
            
            <motion.div
              className="lightbox-content-wrapper"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <div className="lightbox-video-container">
                  <iframe 
                    src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1&rel=0`}
                    title={selectedItem.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="lightbox-iframe"
                  ></iframe>
                </div>
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.alt}
                  className="lightbox-img"
                />
              )}
            </motion.div>

            <motion.h3 
              className="lightbox-caption"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {selectedItem.alt}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
