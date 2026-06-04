import PageHero from '@/components/layout/PageHero';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'PSARA Licensed Security Guard Agency in UP | Maa Shiva Services',
  description: 'Maa Shiva Services is a 100% PSARA-licensed private security agency operating across Uttar Pradesh. We adhere strictly to the Private Security Agencies Regulation Act.',
  alternates: {
    canonical: 'https://maashivaservices.in/psara-license',
  }
};

export default function PsaraLicensePage() {
  return (
    <>
      <PageHero 
        title="PSARA Licensed Agency"
        description="100% Compliance. 100% Reliability. Ensuring your safety with legally vetted personnel."
        bgImage="/sec5.jpeg"
        breadcrumbs={[
          { label: 'PSARA License', href: '/psara-license' }
        ]}
      />
      
      <section className="py-section bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <ShieldCheck size={64} color="var(--color-primary-blue)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              Certified and Compliant
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '16px auto 0' }}>
              The Private Security Agencies Regulation Act (PSARA) of 2005 is the central framework governing the operation of private security agencies in India.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '32px' }}>
            <div style={{ padding: '32px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 color="#10B981" />
                Why PSARA Compliance Matters
              </h3>
              <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                Hiring an un-licensed security agency puts your business at severe legal and operational risk. A PSARA license ensures that the agency has been vetted by state police authorities, that all directors have passed strict background checks, and that the financial standing of the company is sound.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 color="#10B981" />
                Mandatory Police Verification
              </h3>
              <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                Under PSARA guidelines, every single security guard deployed by Maa Shiva Services undergoes mandatory police verification. We maintain detailed dossiers and biometric records of our staff to guarantee the absolute safety of our clients.
              </p>
            </div>

            <div style={{ padding: '32px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 color="#10B981" />
                Standardized Training
              </h3>
              <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
                PSARA mandates specific training durations and curricula. Our guards undergo a minimum of 160 hours of training, covering physical fitness, fire-fighting, crowd control, and emergency response, ensuring they are prepared for any contingency.
              </p>
            </div>
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
                "name": "PSARA License",
                "item": "https://maashivaservices.in/psara-license"
              }
            ]
          })
        }}
      />
    </>
  );
}
