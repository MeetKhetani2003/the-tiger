'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  // Sync hoveredPath with pathname when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHoveredPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link href="/" className="logo-area">
          <img src="/logo.png" alt="Maa Shiva Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-primary">MAA SHIVA</span>
            <span className="logo-secondary">SERVICES PVT. LTD</span>
          </div>
        </Link>

        <nav 
          className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}
          onMouseLeave={() => setHoveredPath(pathname)}
        >
          <button className="mobile-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
          
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const isHovered = hoveredPath === link.path;
            
            return (
              <Link 
                key={link.path}
                href={link.path} 
                className={`nav-link ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setHoveredPath(link.path)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {isHovered && (
                  <motion.div
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="nav-link-text">{link.name}</span>
              </Link>
            );
          })}
          
          <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>
            Get Quote
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
