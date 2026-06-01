import PageHero from '@/components/layout/PageHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

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
      <div className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <GalleryGrid />
        </div>
      </div>
    </>
  );
}
