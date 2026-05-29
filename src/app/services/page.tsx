import PageHero from '@/components/layout/PageHero';
import ServicesSection from '@/components/home/ServicesSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import { ShieldAlert, Zap, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "Services | Maa Shiva Services Pvt. Ltd.",
  description: "Explore our premium, certified security solutions including corporate guarding, close VIP protection, event monitoring, and facility management.",
};

const standards = [
  {
    icon: <Clock size={32} />,
    title: "5-Minute Dispatch Guarantee",
    desc: "Our automated distress alert system ensures our Quick Response Team (QRT) is dispatched immediately under crisis scenarios.",
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Tactical Gear & Bodycams",
    desc: "Deployments are equipped with smart body cameras linked directly to our central command room in Faizabad for visual verification.",
  },
  {
    icon: <Zap size={32} />,
    title: "No-Delay Guard Replacement",
    desc: "We maintain a 15% reserve pool of elite standby guards to guarantee immediate replacement under unplanned absences.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Military-Grade Audits",
    desc: "Operational auditors carry out unscheduled weekly night patrols to evaluate alertness, uniform protocols, and gate discipline.",
  }
];

const faqs = [
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
    a: "Our centralized 24/7 command center monitors active field patrols. If a patrol guard registers a critical incident via their hand-held app, our senior desk operators immediately notify local police and dispatch our armed Quick Response Team (QRT) patrol unit."
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Security Services"
        description="Comprehensive, uncompromising protection solutions tailored precisely to the vulnerabilities and operational needs of your enterprise."
        bgImage="/home-sl2.jpeg"
        breadcrumbs={[ { label: 'Services', href: '/services' } ]}
      />
      
      <ServicesSection />

      {/* SEO Services Detail Block */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>
              Comprehensive <span className="text-primary">Security Guard Services</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: '1.8' }}>
              As one of the <strong>best security companies in India</strong>, we offer a diverse portfolio of protection solutions. Our core offerings include professional <strong>Security Guard Services</strong> for residential and commercial properties, highly trained <strong>Bouncer Security Services</strong> for events and VIPs, and elite <strong>Commando Security Services</strong> for high-risk environments.
            </p>
            <p className="text-lg" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
              Beyond physical guarding, our comprehensive <strong>Facility Management Services</strong> ensure your premises operate smoothly and securely 24/7. Whether you require armed security guards, corporate office security, or industrial plant protection, our tailored services are designed to mitigate all operational risks.
            </p>
          </div>
        </div>
      </section>

      {/* Service Standards & SLA Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>SLA Excellence</span>
            <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px' }}>
              Operational <span className="text-primary">Standards</span>
            </h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '650px' }}>
              We define industry-leading security practices by backing up our physical guards with rigorous service level agreements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {standards.map((std, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '40px 32px', 
                  backgroundColor: 'var(--color-cards)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ color: 'var(--color-primary-blue)', marginBottom: '24px' }}>{std.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', marginBottom: '12px', color: '#fff' }}>{std.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
            <div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Common Inquiries</span>
              <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px', textAlign: 'left' }}>
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                Gain clarity on deployment times, compliance parameters, and operations escalation systems.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <HelpCircle size={28} color="var(--color-primary-blue)" />
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>Still have operational questions? Connect directly with our desk office at <strong>+91 94156 10453</strong>.</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '32px', 
                    backgroundColor: 'var(--color-cards)', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: '8px' 
                  }}
                >
                  <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '12px', color: 'var(--color-primary-blue)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontWeight: 800 }}>Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 0 28px' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
