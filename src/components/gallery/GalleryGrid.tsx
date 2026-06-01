'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play } from 'lucide-react';
import './GalleryGrid.css';

export type GalleryItem = {
  id: string;
  type: 'photo' | 'video';
  src: string;
  alt: string;
  category: string;
  videoId?: string;
};

export const galleryMedia: GalleryItem[] = [
  { id: 'v1', type: 'video', videoId: 'MfIIOt5s-UM', src: 'https://img.youtube.com/vi/MfIIOt5s-UM/hqdefault.jpg', alt: 'Security Operations Briefing', category: 'Operations' },
  { id: 'p1', type: 'photo', src: '/generated/corporate_guard.png', alt: 'Corporate Office Security', category: 'Corporate' },
  { id: 'p2', type: 'photo', src: '/generated/event_guard.png', alt: 'Large Scale Event Security', category: 'Event' },
  { id: 'v2', type: 'video', videoId: 'CAdXafQYfag', src: 'https://img.youtube.com/vi/CAdXafQYfag/maxresdefault.jpg', alt: 'Tactical Deployment Training', category: 'Training' },
  { id: 'p3', type: 'photo', src: '/generated/residential_guard.png', alt: 'Premium Residential Patrol', category: 'Residential' },
  { id: 'p4', type: 'photo', src: '/vip-sec.jpeg', alt: 'VIP Executive Protection Detail', category: 'VIP' },
  { id: 'p5', type: 'photo', src: '/industrial-sec.jpeg', alt: 'Industrial Plant Security', category: 'Industrial' },
  { id: 'p6', type: 'photo', src: '/commando-sec.jpeg', alt: 'Elite Commando Unit', category: 'Specialized' },
  { id: 'p7', type: 'photo', src: '/bouncer-sec.jpeg', alt: 'Professional Crowd Control', category: 'Event' },
  { id: 'p8', type: 'photo', src: '/security-sec.jpeg', alt: 'Retail Loss Prevention', category: 'Commercial' },
  { id: 'p9', type: 'photo', src: '/facility-sec.jpeg', alt: 'Facility Management Operations', category: 'Facility' },
  { id: 'p10', type: 'photo', src: '/sec6.jpeg', alt: 'Armed Security Personnel', category: 'Armed' },
  { id: 'p11', type: 'photo', src: '/sec8.jpeg', alt: 'Campus Security Monitoring', category: 'Educational' },
  { id: 'p12', type: 'photo', src: '/guard-patrol.png', alt: 'Mobile Patrol Unit', category: 'Patrol' }
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredMedia = galleryMedia.filter(item => filter === 'all' || item.type === filter);

  return (
    <>
      <div className="gallery-tabs">
        <button 
          className={`gallery-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`gallery-tab ${filter === 'photo' ? 'active' : ''}`}
          onClick={() => setFilter('photo')}
        >
          Photos
        </button>
        <button 
          className={`gallery-tab ${filter === 'video' ? 'active' : ''}`}
          onClick={() => setFilter('video')}
        >
          Videos
        </button>
      </div>

      <motion.div layout className="gallery-masonry">
        <AnimatePresence>
          {filteredMedia.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="gallery-item"
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className={item.type === 'video' ? 'video-thumbnail' : ''} />
              
              {item.type === 'video' && (
                <div className="video-play-indicator">
                  <Play size={40} fill="var(--color-primary-blue)" color="var(--color-primary-blue)" />
                </div>
              )}

              <div className="gallery-overlay">
                <div className="gallery-content">
                  <span className="gallery-category">{item.category}</span>
                  <h3 className="gallery-caption">{item.alt}</h3>
                </div>
                <div className="gallery-icon">
                  {item.type === 'video' ? <Play size={24} fill="#fff" color="#fff" /> : <ZoomIn size={24} color="#fff" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
    </>
  );
}
