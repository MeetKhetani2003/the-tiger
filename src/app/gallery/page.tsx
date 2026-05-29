import PageHero from '@/components/layout/PageHero';

export const metadata = {
  title: "Gallery | Maa Shiva Services Pvt. Ltd.",
  description: "View our professional security personnel in action across various corporate and industrial deployments.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero 
        title="Operational Excellence"
        description="A visual showcase of our highly trained personnel executing security protocols across various high-stakes environments."
        bgImage="/bannerindustrial.jpeg"
        breadcrumbs={[ { label: 'Gallery', href: '/gallery' } ]}
      />
      <div className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <img src="/corporate-sec.jpeg" alt="Corporate Security Officer" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/industrial-sec.jpeg" alt="Industrial Security Deployment" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/residentialsec.jpeg" alt="Residential Security Patrol" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/vip-sec.jpeg" alt="VIP Close Protection Agent" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/sec1.jpeg" alt="Marked Security Patrol Vehicle" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="/facility-sec.jpeg" alt="Elite Guard Group Portrait" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    </>
  );
}
