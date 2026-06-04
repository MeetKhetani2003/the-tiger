import PageHero from '@/components/layout/PageHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata = {
  title: "Operations Gallery | Maa Shiva Services Pvt. Ltd.",
  description: "View our professional, police-verified security personnel and bouncers in action across various corporate, event, and industrial deployments in India.",
  alternates: {
    canonical: 'https://maashivaservices.in/gallery',
  }
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
                "name": "Gallery",
                "item": "https://maashivaservices.in/gallery"
              }
            ]
          })
        }}
      />
    </>
  );
}
