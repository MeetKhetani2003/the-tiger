import PageHero from '@/components/layout/PageHero';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { branchesData } from '@/data/branchesData';

export const metadata = {
  title: "Get a Quote | Contact Maa Shiva Services 24/7 Security Agency",
  description: "Connect with our senior security consultants. Fill out our contact form for a free threat audit, or call our 24/7 Faizabad Headquarters command center directly.",
  alternates: {
    canonical: 'https://maashivaservices.in/contact',
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Secure Your Enterprise"
        description="Our command center is operational 24/7. Reach out for a comprehensive threat assessment or immediate deployment requests."
        bgImage="/home-sl3.jpeg"
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '60px', alignItems: 'start' }}>

            {/* Left Column: Info & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <h2 className="section-heading" style={{ marginBottom: '16px', fontSize: '2.5rem' }}>
                  Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-lg" style={{ marginBottom: '0px', fontSize: '1.1rem' }}>
                  Connect with our Faizabad headquarters command center. Our security advisors are ready to assist you.
                </p>
              </div>

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
                    <a href="mailto:info@maashivaservices.in" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>maashivaservices@gmail.com</a>
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

              {/* Map block under info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
                  <iframe
                    title="Maa Shiva Services Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.10082599657!2d82.1457858!3d26.7730558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07422fda518b%3A0xe966cfe38bbe155f!2sMAA%20SHIVA%20SERIVCES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1780584414220!5m2!1sen!2sin"
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Based on 54 reviews</span>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Branch Offices Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Network</span>
            <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px', fontSize: '2.5rem' }}>
              Our Branch <span className="text-primary">Offices</span>
            </h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '650px' }}>
              We operate three major branch offices across Uttar Pradesh to manage localized patrol security, bouncer deployments, and facility maintenance teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {branchesData.map((branch) => (
              <div
                key={branch.slug}
                style={{
                  backgroundColor: 'var(--color-cards)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
                className="location-link"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(252, 202, 9, 0.1)', color: 'var(--color-primary-blue)', marginBottom: '24px' }}>
                    <MapPin size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '12px' }}>
                    {branch.shortName}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                    {branch.address}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                  <a href={`/branches/${branch.slug}`} className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '0.95rem', textAlign: 'center' }}>
                    View Branch Details
                  </a>
                  <a
                    href={branch.mapDirectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', border: '1px solid var(--color-border)', borderRadius: '4px' }}
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://maashivaservices.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://maashivaservices.in/contact"
              }
            ]
          })
        }}
      />
    </>
  );
}
