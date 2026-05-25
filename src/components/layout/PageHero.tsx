'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import './PageHero.css';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  bgImage: string;
  breadcrumbs: Breadcrumb[];
}

const PageHero = ({ title, description, bgImage, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <div 
        className="page-hero-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="page-hero-overlay"></div>
      </div>
      
      <div className="container page-hero-content">
        <motion.div 
          className="breadcrumbs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="crumb-link">Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="crumb-wrapper">
              <ChevronRight size={14} className="crumb-separator" />
              {index === breadcrumbs.length - 1 ? (
                <span className="crumb-current">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="crumb-link">{crumb.label}</Link>
              )}
            </div>
          ))}
        </motion.div>

        <motion.h1 
          className="page-hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            className="page-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
