import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { upCities } from '@/data/citiesData';
import { branchesData } from '@/data/branchesData';
import './Footer.css';

const Footer = () => {
  const featuredSlugs = [
    'ayodhya',
    'basti',
    'sant-kabir-nagar',
    'gorakhpur',
    'gonda',
    'ambedkar-nagar',
    'sultanpur',
    'barabanki',
    'lucknow',
    'amethi'
  ];

  const featuredCities = featuredSlugs
    .map(slug => upCities.find(c => c.slug === slug))
    .filter((c): c is typeof upCities[number] => !!c);

  const otherCities = upCities.filter(c => !featuredSlugs.includes(c.slug));

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
            <div className="social-links mt-element">
              <a
                href="https://www.facebook.com/share/18qkQhP9zn/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mss.group_?utm_source=qr&igsh=eHA0ZmIyNjVwazZy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><Link href="/services/corporate-security-guards">Corporate Security</Link></li>
              <li><Link href="/services/industrial-security-guards">Industrial Security</Link></li>
              <li><Link href="/services/residential-security-guards">Residential Security</Link></li>
              <li><Link href="/services/event-security-guards">Event Security</Link></li>
              <li><Link href="/services/executive-protection-security-guards">VIP Protection</Link></li>
              <li><Link href="/services/facility-management">Facility Management</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/industries">Industries We Serve</Link></li>
              <li><Link href="/process">Our Process</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Branches</h4>
            <ul>
              {branchesData.map((branch) => (
                <li key={branch.slug}>
                  <Link href={`/branches/${branch.slug}`}>{branch.shortName}</Link>
                </li>
              ))}
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
              <span>info@maashivaservices.in</span>
            </div>
            <div className="contact-item align-start">
              <MapPin size={24} className="contact-icon" />
              <span>Railway Station, 277, Exchange Modha, Shakti Vihar Colony, Faizabad, Uttar Pradesh 224001</span>
            </div>
          </div>
        </div>

        <div className="footer-cities mt-element" style={{ paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          {/* Section 1: Key Service Cities */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--color-primary-blue)', fontSize: '0.875rem', marginBottom: '12px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700 }}>
              Primary Security Hubs & Service Cities
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', alignItems: 'center' }}>
              {featuredCities.map((city, idx) => (
                <span key={city.slug} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Link 
                    href={`/services/security-guard-services/${city.slug}`}
                    style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600, transition: 'color 0.3s ease' }}
                    className="city-link"
                  >
                    {city.name === 'Ayodhya' ? 'Faizabad / Ayodhya' : city.name}
                  </Link>
                  {idx < featuredCities.length - 1 && (
                    <span style={{ color: 'rgba(252, 202, 9, 0.3)', fontSize: '0.9rem' }}>•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Section 2: Other Coverage Cities */}
          <div>
            <h5 style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '0.8rem', marginBottom: '8px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Other Coverage Zones in UP
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px', alignItems: 'center' }}>
              {otherCities.map((city, idx) => (
                <span key={city.slug} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Link 
                    href={`/services/security-guard-services/${city.slug}`}
                    style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', transition: 'color 0.3s ease' }}
                    className="city-link"
                  >
                    {city.name}
                  </Link>
                  {idx < otherCities.length - 1 && (
                    <span style={{ color: 'rgba(255, 255, 255, 0.15)', fontSize: '0.75rem' }}>•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom mt-element">
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
