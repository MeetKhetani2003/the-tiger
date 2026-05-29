import PageHero from '@/components/layout/PageHero';

export const metadata = {
  title: "Careers | Maa Shiva Services Pvt. Ltd.",
  description: "Join our elite team of professional security personnel and command center operators.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero 
        title="Join Our Elite Team"
        description="We are always looking for disciplined, highly-trained professionals to join our ranks in physical security, operations, and facility management."
        bgImage="/home-sl2.jpeg"
        breadcrumbs={[ { label: 'Careers', href: '/careers' } ]}
      />
      <div className="py-section" style={{ minHeight: '50vh', backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            <div style={{ padding: '40px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-text)' }}>Security Officer</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>Corporate & Industrial Deployment. Requires clean background check and physical fitness.</p>
              <a href="/contact" className="btn btn-outline">Apply Now</a>
            </div>
            <div style={{ padding: '40px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-text)' }}>Command Center Operator</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>24/7 Surveillance Operations. Requires technical proficiency and crisis management skills.</p>
              <a href="/contact" className="btn btn-outline">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
