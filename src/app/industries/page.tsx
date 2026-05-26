import PageHero from '@/components/layout/PageHero';
import IndustriesSection from '@/components/home/IndustriesSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import { Layers, ShieldCheck, Map, Users } from 'lucide-react';

export const metadata = {
  title: "Industries We Protect | Maa Shiva Services Pvt. Ltd.",
  description: "Specialized security management, risk audit, and protective staffing protocols designed for corporate, industrial, and retail complexes.",
};

const risks = [
  {
    sector: "Manufacturing & Industrial",
    threats: "Inventory Pilferage, Union Restlessness, Trespassing",
    solution: "Heavy-duty perimeter patrolling, rigorous entry/exit logs for materials, biometric time management, and CCTV desk monitoring."
  },
  {
    sector: "Corporate & Tech Parks",
    threats: "Unauthorized Entry, Data Vulnerabilities, Tailgating",
    solution: "Smart card access systems, highly trained lobby reception guards, digital visitor management apps, and strict night floor audits."
  },
  {
    sector: "Healthcare & Hospitals",
    threats: "Vandalism, Aggressive Patients/Visitors, Facility Misuse",
    solution: "Crisis containment guards, soft-skills de-escalation expertise, 24/7 emergency room monitoring, and ambulance pathway access control."
  }
];

const operations = [
  {
    icon: <Map size={28} />,
    title: "Faizabad & Uttar Pradesh Presence",
    desc: "Active operational offices covering key industrial zones, tech corridors, and residential neighborhoods across the state."
  },
  {
    icon: <Users size={28} />,
    title: "1,500+ Active Personnel",
    desc: "Rigorous manpower pool consisting of security guards, supervisors, fire marshals, and close protection commanders."
  },
  {
    icon: <Layers size={28} />,
    title: "Dynamic Risk Mapping",
    desc: "Every deployment contract receives a custom, complimentary hazard review prior to starting services."
  }
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero 
        title="Industries We Protect"
        description="Specialized security protocols designed for the unique regulatory, safety, and operational challenges of diverse sectors."
        bgImage="/guard-corporate.png"
        breadcrumbs={[ { label: 'Industries', href: '/industries' } ]}
      />
      
      <IndustriesSection />

      {/* Sector Risk Mitigations Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Risk Framework</span>
              <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px', textAlign: 'left' }}>
                Custom Risk <span className="text-primary">Mitigation</span>
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                Standard security models fail because every sector exhibits completely different threat signatures. We design custom manuals for your specific requirements.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                <ShieldCheck size={28} color="var(--color-primary-blue)" />
                <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>We carry out detailed threat modeling prior to any onsite guard deployment.</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {risks.map((risk, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '32px', 
                    backgroundColor: 'var(--color-cards)', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: '8px' 
                  }}
                >
                  <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: 'var(--color-primary-blue)' }}>{risk.sector}</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                    🚨 Risks: {risk.threats}
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                    💡 <strong>Solution Protocol:</strong> {risk.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Presence Statistics Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scale & Resources</span>
            <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px' }}>
              Our Security <span className="text-primary">Scale</span>
            </h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '650px' }}>
              Backed by institutional support, digital command tools, and hundreds of reliable security guards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {operations.map((op, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '40px 32px', 
                  backgroundColor: 'var(--color-cards)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ color: 'var(--color-primary-blue)', marginBottom: '24px' }}>{op.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', marginBottom: '12px', color: '#fff' }}>{op.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
