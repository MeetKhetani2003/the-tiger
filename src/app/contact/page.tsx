import PageHero from '@/components/layout/PageHero';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export const metadata = {
  title: "Contact Us | Maa Shiva Services Pvt. Ltd.",
  description: "Connect with our senior security consultants for a comprehensive risk assessment or immediate security guard deployment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Secure Your Enterprise"
        description="Our command center is operational 24/7. Reach out for a comprehensive threat assessment or immediate deployment requests."
        bgImage="/home-sl3.jpeg"
        breadcrumbs={[ { label: 'Contact', href: '/contact' } ]}
      />

      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
            
            {/* Contact Details Column */}
            <div>
              <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg" style={{ marginBottom: '40px' }}>
                Connect with our Faizabad headquarters command center. Our security advisors are ready to assist you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Phone Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(252, 202, 9, 0.1)', color: 'var(--color-primary-blue)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>24/7 Command Line</h4>
                    <a href="tel:+919415610453" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-blue)', display: 'block', marginBottom: '4px' }}>+91 94156 10453</a>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Operational 365 Days a Year</span>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(218, 62, 40, 0.1)', color: 'var(--color-secondary-blue)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Email Correspondence</h4>
                    <a href="mailto:info@maashivaservices.com" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>info@maashivaservices.com</a>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Response time: Under 2 Hours</span>
                  </div>
                </div>

                {/* Address Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(252, 202, 9, 0.1)', color: 'var(--color-primary-blue)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Faizabad Headquarters</h4>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.5', color: 'var(--color-text)', margin: '0 0 12px 0' }}>
                      Railway Station, 277, Exchange Modha,<br />Shakti Vihar Colony, Faizabad,<br />Uttar Pradesh 224001
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/enMoXp57LSQ3Tzjx9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary-blue)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      Open in Google Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(218, 62, 40, 0.1)', color: 'var(--color-secondary-blue)', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Operating Hours</h4>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: '0 0 4px 0' }}>
                      Mon - Sat: <strong>Open 24 Hours</strong>
                    </p>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: 0 }}>
                      Sun: <strong>9:00 AM – 5:00 PM</strong>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Column */}
            <div style={{ height: '100%', minHeight: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
                <iframe
                  title="Maa Shiva Services Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.85404455434!2d82.1264259!3d26.7820617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07ef3f2a1b1d%3A0xe54e6ac2f57b6f6f!2sMAA%20SHIVA%20SERIVCES%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1716768000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>⭐ Google Rating: <strong>4.7 / 5.0</strong></span>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Based on 54 corporate client reviews</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
