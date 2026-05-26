import PageHero from '@/components/layout/PageHero';
import AboutSection from '@/components/home/AboutSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import { Award, ShieldCheck, Landmark, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "About Us | Maa Shiva Services Pvt. Ltd.",
  description: "Learn about our mission, vision, leadership, and institutional compliances that drive our premier security operations.",
};

const leaders = [
  {
    name: "Commandant S. N. Singh",
    role: "Founder & Managing Director",
    desc: "Ex-Indian Army Special Forces Captain with over 25 years of active strategic security experience. He shapes the rigorous training programs and command center discipline.",
    image: "/guard-vip.png" // Local high-fidelity professional guard asset
  },
  {
    name: "Mrs. Meera Singh",
    role: "Co-Founder & Director of Finance",
    desc: "Oversees corporate compliance, financial ethics, and sustainable operations, ensuring Maa Shiva Services remains a highly trusted institutional partner.",
    image: "/guard-corporate.png"
  },
  {
    name: "Inspector Rajeev Kumar",
    role: "Head of Operations & Logistics",
    desc: "Ex-Police Department Officer overseeing dispatch operations, immediate response units, and government-liaison procedures across Uttar Pradesh.",
    image: "/guard-industrial.png"
  }
];

const accreditations = [
  {
    icon: <Award size={36} />,
    title: "PSARA Licensed",
    desc: "Fully registered and licensed under the Private Security Agencies Regulation Act, complying with all state guidelines.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "ISO 9001:2015",
    desc: "Certified Quality Management System ensuring standard operational protocols and continuous audits.",
  },
  {
    icon: <Landmark size={36} />,
    title: "MSME Registered",
    desc: "Registered with the Ministry of Micro, Small and Medium Enterprises, government-recognized corporate operations.",
  },
  {
    icon: <FileText size={36} />,
    title: "100% Statutorily Compliant",
    desc: "Strict adherence to ESIC, Provident Fund (PF), GST, Labor laws, and comprehensive corporate insurance.",
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Our Enterprise"
        description="Setting the benchmark for professional security and facility management across India through discipline, technology, and rigorous training."
        bgImage="/guard-group.png"
        breadcrumbs={[ { label: 'About Us', href: '/about' } ]}
      />
      
      <AboutSection />

      {/* Leadership & Core Team Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>
              Core <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '650px' }}>
              Guided by retired defense specialists and legal compliance experts committed to absolute integrity and operational excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {leaders.map((leader, i) => (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: 'var(--color-cards)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  transition: 'all 0.4s ease' 
                }}
              >
                <div style={{ height: '350px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                </div>
                <div style={{ padding: '32px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{leader.role}</span>
                  <h3 style={{ fontSize: '1.5rem', margin: '8px 0 16px 0', fontFamily: 'var(--font-heading)', color: '#fff' }}>{leader.name}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Institutional Trust Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2 className="section-heading" style={{ marginBottom: '16px', textAlign: 'left' }}>
                Institutional <span className="text-primary">Trust</span>
              </h2>
              <p className="text-lg" style={{ marginBottom: '32px', color: 'var(--color-text-muted)' }}>
                We believe that premium protection requires unconditional legality. Maa Shiva Services maintains flawless compliance records, enabling premium corporate tie-ups.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Police Verified Staff', 'Comprehensive General Liability Insurance', '24/7 Client Redressal Hotline', 'Strict Zero-Tolerance Safety Protocol'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={20} color="var(--color-primary-blue)" />
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {accreditations.map((item, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '32px 24px', 
                    backgroundColor: 'var(--color-cards)', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: '8px', 
                    transition: 'all 0.3s ease' 
                  }}
                >
                  <div style={{ color: 'var(--color-primary-blue)', marginBottom: '16px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>{item.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
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
