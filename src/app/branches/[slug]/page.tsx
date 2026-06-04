import PageHero from '@/components/layout/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import { branchesData } from '@/data/branchesData';
import { notFound } from 'next/navigation';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  return branchesData.map((branch) => ({
    slug: branch.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branchesData.find((b) => b.slug === slug);
  
  if (!branch) {
    return { title: 'Branch Not Found' };
  }

  const url = `https://maashivaservices.in/branches/${branch.slug}`;

  return {
    title: branch.seoTitle,
    description: branch.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: branch.seoTitle,
      description: branch.seoDescription,
      url,
      siteName: 'Maa Shiva Services',
      images: [{ url: 'https://maashivaservices.in/logo.png', width: 1200, height: 630, alt: branch.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: branch.seoTitle,
      description: branch.seoDescription,
      images: ['https://maashivaservices.in/logo.png'],
    }
  };
}

export default async function BranchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branchesData.find((b) => b.slug === slug);

  if (!branch) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={branch.shortName}
        description={`Our localized branch office providing elite, PSARA-licensed security guard services and facility management in ${branch.city}.`}
        bgImage="/home-sl2.jpeg"
        breadcrumbs={[
          { label: 'Contact Us', href: '/contact' },
          { label: branch.city, href: `/branches/${branch.slug}` }
        ]}
      />

      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '60px', alignItems: 'start' }}>
            
            {/* Left Column: Local details & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <h2 className="section-heading" style={{ marginBottom: '16px', fontSize: '2.5rem' }}>
                  Our Office in <span className="text-primary">{branch.city}</span>
                </h2>
                <p className="text-lg" style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {branch.localIntro}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Address Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(252, 202, 9, 0.1)', color: 'var(--color-primary-blue)', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Office Address</h4>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.5', color: 'var(--color-text)', margin: '0 0 12px 0' }}>
                      {branch.address}
                    </p>
                    <a 
                      href={branch.mapDirectionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary-blue)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      Open in Google Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Contact Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(252, 202, 9, 0.1)', color: 'var(--color-primary-blue)', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Local Command Line</h4>
                    <a href={`tel:${branch.telephone}`} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-blue)', display: 'block', marginBottom: '4px' }}>{branch.telephone}</a>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>24/7 Dispatch Operator Line</span>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(218, 62, 40, 0.1)', color: 'var(--color-secondary-blue)', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Email Correspondence</h4>
                    <a href={`mailto:${branch.email}`} style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>{branch.email}</a>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Response time: Under 2 Hours</span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: 'flex', gap: '20px', padding: '24px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(218, 62, 40, 0.1)', color: 'var(--color-secondary-blue)', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>Operating Hours</h4>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: '0 0 4px 0' }}>
                      Mon - Sat: <strong>Open 24 Hours</strong>
                    </p>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', margin: 0 }}>
                      Sun: <strong>9:00 AM – 5:00 PM</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div style={{ width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
                <iframe
                  title={`${branch.city} Branch Google Map`}
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Lead Form prefilled with Branch Details */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <ContactForm defaultCity={branch.city} />
            </div>

          </div>
        </div>
      </section>

      {/* JSON-LD LocalBusiness Schema & Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `https://maashivaservices.in/branches/${branch.slug}/#localbusiness`,
              "name": branch.name,
              "image": "https://maashivaservices.in/logo.png",
              "telephone": branch.telephone,
              "email": branch.email,
              "priceRange": "$$",
              "url": `https://maashivaservices.in/branches/${branch.slug}`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": branch.address,
                "addressLocality": branch.city,
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN",
                "postalCode": branch.postalCode
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": branch.latitude,
                "longitude": branch.longitude
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            },
            {
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
                  "name": "Contact Us",
                  "item": "https://maashivaservices.in/contact"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": branch.city,
                  "item": `https://maashivaservices.in/branches/${branch.slug}`
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}
