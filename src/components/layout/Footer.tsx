import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer pt-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-area">
              <img src="/logo.png" alt="Maa Shiva Logo" className="logo-img footer-logo-img" />
              <div className="logo-text">
                <span className="logo-primary">MAA SHIVA</span>
                <span className="logo-secondary">SERVICES PVT. LTD</span>
              </div>
            </Link>
            <p className="footer-desc mt-element">
              Setting the national standard for premium security operations, facility management, and integrated protection solutions across India.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><Link href="/services">Corporate Security</Link></li>
              <li><Link href="/services">Industrial Security</Link></li>
              <li><Link href="/services">Residential Security</Link></li>
              <li><Link href="/services">Event Security</Link></li>
              <li><Link href="/services">VIP Protection</Link></li>
              <li><Link href="/services">Facility Management</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/industries">Industries We Serve</Link></li>
              <li><Link href="/process">Our Process</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <div>
                <span>+91 94156 10453</span><br/>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>24/7 Command Center</span>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <span>info@maashivaservices.com</span>
            </div>
            <div className="contact-item align-start">
              <MapPin size={24} className="contact-icon" />
              <span>Railway Station, 277, Exchange Modha, Shakti Vihar Colony, Faizabad, Uttar Pradesh 224001</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Maa Shiva Services Pvt. Ltd. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
