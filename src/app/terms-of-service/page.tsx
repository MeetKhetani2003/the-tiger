import PageHero from '@/components/layout/PageHero';

export const metadata = {
  title: 'Terms of Service | Maa Shiva Services Pvt. Ltd.',
  description: 'Review the terms and conditions governing the professional security, bouncer, and facility management services provided by Maa Shiva Services.',
  alternates: {
    canonical: 'https://maashivaservices.in/terms-of-service',
  }
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero 
        title="Terms of Service"
        description="Standard terms and conditions for our security contracts and digital operations."
        bgImage="/home-sl2.jpeg"
        breadcrumbs={[
          { label: 'Terms of Service', href: '/terms-of-service' }
        ]}
      />
      
      <section className="py-section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>1. Agreement of Terms</h2>
            <p style={{ marginBottom: '24px' }}>
              By accessing and using the services of Maa Shiva Services Pvt. Ltd. (referred to as &quot;the Company&quot;), you agree to comply with and be bound by the following terms, conditions, and SLA guidelines.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>2. Service Commitments (SLA)</h2>
            <p style={{ marginBottom: '24px' }}>
              We commit to deploying fully trained, police-verified security guards as per the signed contract parameters. Standard deployments commence within 48 to 72 hours of agreement validation. We maintain a 15% reserve pool to guarantee instant guard replacements during absences.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>3. Compliance and Legislation</h2>
            <p style={{ marginBottom: '24px' }}>
              Maa Shiva Services Pvt. Ltd. operates in 100% compliance with the Private Security Agencies Regulation Act (PSARA) of 2005. All personnel are police-verified. The Client agrees to provide necessary access to perimeters and facilities to ensure optimal protection.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>4. Limitation of Liability</h2>
            <p style={{ marginBottom: '24px' }}>
              The Company maintains comprehensive commercial general liability insurance. While we guarantee professional diligence and military-grade command oversight, the Company is not liable for structural utility failures, natural acts of God, or client-directed bypasses of standard security protocols.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>5. Contact and Escalations</h2>
            <p style={{ marginBottom: '24px' }}>
              All billing inquiries, service modifications, and operational escalations must be directed to our 24/7 Faizabad Headquarters Command Center.
              <br/><br/>
              Maa Shiva Services Pvt. Ltd.<br/>
              Railway Station, 277, Exchange Modha, Shakti Vihar Colony, Faizabad, UP 224001<br/>
              Email: info@maashivaservices.in<br/>
              Phone: +91 94156 10453
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema for Terms of Service */}
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
                "name": "Terms of Service",
                "item": "https://maashivaservices.in/terms-of-service"
              }
            ]
          })
        }}
      />
    </>
  );
}
