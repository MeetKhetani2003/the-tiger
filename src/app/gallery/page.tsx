import PageHero from '@/components/layout/PageHero';

export const metadata = {
  title: "Gallery | Maha Shiva Security",
  description: "View our professional security personnel in action across various corporate and industrial deployments.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero 
        title="Operational Excellence"
        description="A visual showcase of our highly trained personnel executing security protocols across various high-stakes environments."
        bgImage="https://images.unsplash.com/photo-1544255554-1b15c1e95cfc?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'Gallery', href: '/gallery' } ]}
      />
      <div className="py-section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <img src="https://images.unsplash.com/photo-1544255554-1b15c1e95cfc?auto=format&fit=crop&q=80&w=800" alt="Security guard" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Industrial security" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Residential security" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1551836022-b06985bceb24?auto=format&fit=crop&q=80&w=800" alt="Corporate security" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Office lobby" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" alt="VIP protection" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        </div>
      </div>
    </>
  );
}
