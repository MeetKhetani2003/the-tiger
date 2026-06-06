import HeroSection from '@/components/home/HeroSection';
import HomeIntroSection from '@/components/home/HomeIntroSection';
import ServicesSection from '@/components/home/ServicesSection';
import SLASection from '@/components/home/SLASection';
import FAQSection from '@/components/home/FAQSection';
import GalleryCarouselSection from '@/components/home/GalleryCarouselSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import ContactForm from '@/components/contact/ContactForm';
import Link from 'next/link';

export const metadata = {
  title: "Maa Shiva Services Pvt. Ltd. | Best Security Guard Agency in UP & India",
  description: "Looking for a reliable security agency in India? Maa Shiva Services Pvt. Ltd. provides PSARA-licensed security guards, bouncer services, commando security, and facility management across Uttar Pradesh and India. Request a free threat audit.",
  keywords: [
    "Security Guard Services",
    "Security Agency in India",
    "Corporate Security Services",
    "Industrial Security Services",
    "Event Security Services",
    "Armed Security Guards",
    "Bouncer Services India",
    "Facility Management Services",
    "Maa Shiva Services",
    "Private Security Agency UP",
    "Security Guard Agency Near Me",
    "Security Services Near Me",
    "Best Security Guard Company in India",
    "PSARA Registered Security Agency",
    "Private Security Guard Services",
    "Hire Security Guard",
    "Hire Bouncers Near Me",
    "Armed Security Guards Near Me",
    "Corporate Security Agency",
    "Industrial Security Guard Services",
    "Residential Security Guards",
    "ATM Security Guard Agency",
    "Security Services Provider"
  ],
  alternates: {
    canonical: 'https://maashivaservices.in',
  },
  openGraph: {
    title: "Maa Shiva Services Pvt. Ltd. | Premium Security Guard Agency in India",
    description: "State-vetted, PSARA-licensed private security guards, elite bouncers, and facility management services across India. 24/7 Command Center supervision.",
    url: 'https://maashivaservices.in',
    siteName: 'Maa Shiva Services',
    images: [{ url: 'https://maashivaservices.in/logo.png', width: 1200, height: 630, alt: 'Maa Shiva Security' }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maa Shiva Services Pvt. Ltd. | Premium Security Agency",
    description: "State-vetted, PSARA-licensed private security guards, elite bouncers, and facility management services across India.",
    images: ['https://maashivaservices.in/logo.png'],
  }
};

const homeFAQs = [
  {
    q: "Are your security personnel background checked?",
    a: "Yes. Every single guard or command center operator at Maa Shiva Services undergoes a mandatory 2-step verification protocol: a professional digital background screening followed by official Police Character Verification from local authorities."
  },
  {
    q: "How long does it take to deploy guards on site?",
    a: "Standard corporate or residential guarding contracts are typically deployed within 48 to 72 hours from contract signing. For immediate event or emergency VIP security, we can deploy active personnel within 6 to 12 hours across Uttar Pradesh."
  },
  {
    q: "Are your guards trained in fire safety and medical emergencies?",
    a: "Absolutely. Apart from combat training, our specialized curriculum includes mandatory drills for Fire Extinguishing, Disaster evacuation, Cardiopulmonary Resuscitation (CPR), and basic First-Aid administration."
  },
  {
    q: "What is your command center escalation protocol?",
    a: "Our centralized 24/7 command center monitors active field patrols. If a patrol guard registers a critical incident via their hand-held app, our duty desk operators immediately notify local police and dispatch our armed Quick Response Team (QRT) patrol unit."
  }
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeIntroSection />
      <ServicesSection />
      <SLASection />
      <FAQSection />

      {/* Popular Security Queries Section for SEO & User Quick Navigation */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quick Directory</span>
            <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px', fontSize: '2.2rem' }}>
              Popular Security <span className="text-primary">Searches & Services</span>
            </h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '650px', color: 'var(--color-text-muted)' }}>
              Looking for professional protection? We align with the most searched security configurations in India. Click any query to explore our specialized solutions:
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { label: "Security Guard Agency Near Me", href: "/contact" },
              { label: "Best Security Guard Company in India", href: "/about" },
              { label: "PSARA Licensed Security Agency", href: "/psara-license" },
              { label: "Hire Bouncers Near Me", href: "/services/executive-protection-security-guards" },
              { label: "Armed Security Guard Services", href: "/services/armed-security-guards" },
              { label: "Corporate Security Agency UP", href: "/services/corporate-security-guards" },
              { label: "Industrial Guarding Services", href: "/services/industrial-security-guards" },
              { label: "Residential Security Guards", href: "/services/residential-security-guards" },
              { label: "Event Crowd Management Services", href: "/services/event-security-guards" },
              { label: "VIP Bodyguard & Protection", href: "/services/executive-protection-security-guards" },
              { label: "24/7 Command Center Guarding", href: "/process" },
              { label: "ATM & Bank Security Guards", href: "/services/atm-security-guards" },
              { label: "Logistical Hub & Warehouse Security", href: "/services/warehouse-security-guards" },
              { label: "Private Security Guard Agency", href: "/contact" },
              { label: "Verified Security Personnel Provider", href: "/about" }
            ].map((query, idx) => (
              <Link
                key={idx}
                href={query.href}
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'var(--color-cards)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '30px',
                  color: 'var(--color-text)',
                  fontSize: '0.925rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                className="search-tag-chip"
              >
                🔍 {query.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Lead Generation Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Free Threat Audit</span>
              <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '24px', textAlign: 'left', fontSize: '2.5rem', color: 'var(--color-text)' }}>
                Secure Your Property <span className="text-primary">Today</span>
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Don&apos;t leave your assets vulnerable. Request a free professional threat audit from our retired military and police specialists. We will identify loopholes in your perimeter access controls and provide a custom protection blueprint.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🏆</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>PSARA State Police Vetted Agency</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.25rem' }}>🔒</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>ISO 9001:2015 Quality Audited Protocols</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.25rem' }}>👤</span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>100% Police Verified & Trained Guards</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <GalleryCarouselSection />
      <ContactCTASection />

      {/* Advanced Multi-Schema Integration for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://maashivaservices.in/#organization",
              "name": "Maa Shiva Services Pvt. Ltd.",
              "alternateName": "Maa Shiva Security",
              "url": "https://maashivaservices.in",
              "logo": "https://maashivaservices.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919415610453",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "sameAs": []
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://maashivaservices.in/#localbusiness",
              "name": "Maa Shiva Services Pvt. Ltd.",
              "image": "https://maashivaservices.in/logo.png",
              "telephone": "+919415610453",
              "email": "info@maashivaservices.in",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Railway Station, 277, Exchange Modha, Shakti Vihar Colony",
                "addressLocality": "Faizabad",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN",
                "postalCode": "224001"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.7730",
                "longitude": "82.1444"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": homeFAQs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://maashivaservices.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://maashivaservices.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ])
        }}
      />
    </>
  );
}
