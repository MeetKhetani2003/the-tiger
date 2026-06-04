import PageHero from '@/components/layout/PageHero';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import { Target, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Client Testimonials & Case Studies | Maa Shiva Security",
  description: "Read verified case studies, metrics, and testimonials from corporate, industrial, and residential leaders who rely on Maa Shiva Services for elite protection.",
  alternates: {
    canonical: 'https://maashivaservices.in/testimonials',
  }
};

const stats = [
  {
    icon: <HeartHandshake size={32} />,
    value: "99.4%",
    label: "Client Retention Rate",
    desc: "Over 90% of our enterprise agreements are renewed annually, highlighting our premium quality consistency."
  },
  {
    icon: <TrendingUp size={32} />,
    value: "24 Mins",
    label: "Avg. Emergency Dispatch",
    desc: "Our localized Quick Response Units guarantee emergency backup arrival times in record-breaking windows."
  },
  {
    icon: <Target size={32} />,
    value: "1.2M+",
    label: "Patrol Hours Executed",
    desc: "Vigilant guard hours recorded across high-stakes infrastructure, factories, and tech hubs."
  }
];

const caseStudies = [
  {
    client: "Apex Manufacturing Plant",
    threat: "Commercial Theft Defused",
    text: "At 02:40 AM, a perimeter sensor triggered a high-priority alert. Utilizing the real-time command desk, our guard tracked 3 intruders attempting a fence break-in. QRT was dispatched immediately. Intrusion was defused within 6 minutes with local police handovers. Zero inventory losses were registered.",
    highlight: "Saves millions in potential supply-chain losses."
  },
  {
    client: "Prestige Estates Residential Hub",
    threat: "Critical Electrical Hazard Mitigated",
    text: "During an unscheduled night patrol, a junior guard noticed abnormal heat and heavy smoke emission from the central transformer room. Activating the fire emergency protocols, he isolated the system and coordinated with government fire stations. The hazard was safely contained before it could reach block buildings.",
    highlight: "Protected 800+ families from potential fire hazard."
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero 
        title="Trusted by Leaders"
        description="Don't just take our word for it. Read verified reviews and operational triumphs from operations directors and facility managers across India."
        bgImage="/bannerresedential.jpeg"
        breadcrumbs={[ { label: 'Testimonials', href: '/testimonials' } ]}
      />
      
      <TestimonialsSection />

      {/* Verified Performance Statistics Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Proven Excellence</span>
            <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px' }}>
              Performance <span className="text-primary">In Numbers</span>
            </h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '650px' }}>
              We track operational performance metrics on daily logs. These numbers reflect our commitment to real safety, not just theoretical models.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {stats.map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '40px 32px', 
                  backgroundColor: 'var(--color-cards)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'center'
                }}
              >
                <div style={{ color: 'var(--color-primary-blue)', display: 'inline-flex', marginBottom: '20px' }}>{stat.icon}</div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>{stat.value}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-primary-blue)', marginBottom: '12px' }}>{stat.label}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Operational Triumphs Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Operational Incidents</span>
              <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px', textAlign: 'left' }}>
                Real Incidents <span className="text-primary">Defused</span>
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                Explore actual, documented case studies showing how our patrol discipline and quick response networks prevent real threats from escalating.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <ShieldCheck size={28} color="var(--color-primary-blue)" />
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>Incident reports are audited weekly with enterprise client representatives.</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {caseStudies.map((study, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '32px', 
                    backgroundColor: 'var(--color-cards)', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: '12px' 
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{study.client}</span>
                    <span style={{ fontSize: '0.85rem', padding: '6px 12px', backgroundColor: 'rgba(218, 62, 40, 0.1)', color: 'var(--color-secondary-blue)', borderRadius: '20px', fontWeight: 600 }}>{study.threat}</span>
                  </div>
                  <p style={{ color: 'var(--color-text)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '16px' }}>{study.text}</p>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px', fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    💡 Result: {study.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />

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
                "name": "Testimonials",
                "item": "https://maashivaservices.in/testimonials"
              }
            ]
          })
        }}
      />
    </>
  );
}
