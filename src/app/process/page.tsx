import PageHero from '@/components/layout/PageHero';
import ProcessSection from '@/components/home/ProcessSection';
import ContactCTASection from '@/components/home/ContactCTASection';
import { ClipboardCheck, ShieldAlert, Cpu, Heart, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: "Our Process | Maa Shiva Services Pvt. Ltd.",
  description: "Learn about our systematic selection, rigorous training pipeline, and high-tech command center monitoring systems.",
};

const pipeline = [
  {
    step: "01",
    title: "Sourcing & Police Verification",
    desc: "We focus on recruiting ex-servicemen, retired police officers, and physically fit civilians. Mandatory Police Verification and digital identity audits are completed before induction."
  },
  {
    step: "02",
    title: "Physical & Combat Conditioning",
    desc: "Recruits undergo 160 hours of intense physical training covering defensive tactics, crowd management, gate discipline, and incident handling."
  },
  {
    step: "03",
    title: "Technical & Medical Drills",
    desc: "Mandatory certification in First-Aid, CPR administration, Fire Hydrant operations, and digital smart patrol app logging."
  }
];

const techStack = [
  {
    icon: <ClipboardCheck size={28} />,
    title: "Geofenced GPS Patrol Tracking",
    desc: "Guards trace predefined route checkpoints using NFC tags. Missed check-in checkpoints automatically flag alerts in the command room."
  },
  {
    icon: <ShieldAlert size={28} />,
    title: "Instant Panic Distress App",
    desc: "Every deployment carrying a custom handset can trigger an emergency panic call, instantly pinging the nearest QRT vehicle via GPS."
  },
  {
    icon: <Cpu size={28} />,
    title: "Central Visual Command Desk",
    desc: "Faizabad desk monitors active night operations, checking automated logs, visual alarms, and response dispatch records."
  }
];

export default function ProcessPage() {
  return (
    <>
      <PageHero 
        title="Our Methodology"
        description="A rigorous, strategic six-step approach from initial risk approach to active command center monitoring."
        bgImage="/bannerindustrial.jpeg"
        breadcrumbs={[ { label: 'Process', href: '/process' } ]}
      />
      
      <ProcessSection />

      {/* Guard Selection & Training Pipeline Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Training Excellence</span>
              <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px', textAlign: 'left' }}>
                Our Selection & <span className="text-primary">Training Pipeline</span>
              </h2>
              <p className="text-lg" style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                We believe that premium protection is built on elite preparation. Our security guards undergo a rigorous training curriculum designed to exceed standard security norms.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Mandatory Physical Exams', '2-Step Identity Police Audits', 'Unscheduled Fire-Fighting Drills', 'Soft-Skills & Hospitality Basics'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={20} color="var(--color-primary-blue)" />
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {pipeline.map((item, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    gap: '24px',
                    padding: '32px', 
                    backgroundColor: 'var(--color-cards)', 
                    border: '1px solid var(--color-border)', 
                    borderRadius: '12px' 
                  }}
                >
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'rgba(252, 202, 9, 0.25)', fontFamily: 'var(--font-heading)', lineHeight: '1', flexShrink: 0 }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Digital Support</span>
            <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '16px' }}>
              Our Security <span className="text-primary">Tech Stack</span>
            </h2>
            <p className="text-lg" style={{ maxWidth: '650px', margin: '0 auto' }}>
              We merge military-grade human guarding with localized geofencing and centralized command tracking platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {techStack.map((tech, i) => (
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
                <div style={{ color: 'var(--color-primary-blue)', marginBottom: '24px' }}>{tech.icon}</div>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', marginBottom: '12px', color: '#fff' }}>{tech.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
