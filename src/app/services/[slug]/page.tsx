import PageHero from '@/components/layout/PageHero';
import ContactCTASection from '@/components/home/ContactCTASection';
import { servicesData } from '@/data/servicesData';
import { upCities } from '@/data/citiesData';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import { generateServiceFAQs } from '@/utils/seoGenerator';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  
  const title = `Best ${service.title} Agency in UP & India | Maa Shiva Services`;
  const url = `https://maashivaservices.com/services/${service.slug}`;

  return {
    title: title,
    description: `Looking for top-tier ${service.title.toLowerCase()}? Maa Shiva Services offers highly trained personnel, comprehensive risk management, and reliable deployment. ${service.shortDescription}`,
    keywords: [
      service.title, 
      `Best ${service.title} in India`, 
      `Best ${service.title} in Uttar Pradesh`,
      `${service.title} agency near me`, 
      `Professional ${service.title} company`, 
      `Hire ${service.title}`,
      "Maa Shiva Services"
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: `Premium ${service.title.toLowerCase()} provided by Maa Shiva Services. We specialize in robust protection and trained personnel.`,
      url,
      siteName: 'Maa Shiva Services',
      images: [
        {
          url: `https://maashivaservices.com${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `Premium ${service.title.toLowerCase()} provided by Maa Shiva Services. We specialize in robust protection and trained personnel.`,
      images: [`https://maashivaservices.com${service.image}`],
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const heroBanners: Record<string, string> = {
    'corporate-security': '/home-sl1.jpeg',
    'industrial-security': '/bannerindustrial.jpeg',
    'residential-security': '/bannerresedential.jpeg',
    'event-security': '/home-sl3.jpeg',
    'commando-security-services': '/home-sl2.jpeg',
    'security-guard-services': '/home-sl1.jpeg',
  };
  const heroBg = heroBanners[service.slug] || '/home-sl1.jpeg';
  
  const faqs = generateServiceFAQs(service.title);

  return (
    <>
      <PageHero 
        title={service.title}
        description={service.shortDescription}
        bgImage={heroBg}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` }
        ]}
      />
      
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '60px' }}>
            {/* Main Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <ShieldCheck size={40} color="var(--color-primary-blue)" />
                <h2 className="section-heading" style={{ margin: 0 }}>Comprehensive <span className="text-primary">Overview</span></h2>
              </div>
              
              <div className="text-lg" style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '40px', whiteSpace: 'pre-wrap' }}>
                {service.fullDescription}
              </div>

              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '24px' }}>
                Key Operational Features
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                    <CheckCircle2 size={24} color="#10B981" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service FAQs */}
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '24px' }}>
                Frequently Asked Questions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, idx) => (
                  <div key={idx} style={{ padding: '24px', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ margin: '0 0 12px 0', fontSize: '1.15rem', color: 'var(--color-text)' }}>{faq.question}</h4>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
              <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '32px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--color-text)' }}>Need a Quick Quote?</h4>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                  Speak to our command center to discuss your specific requirements for {service.title.toLowerCase()}.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="/contact" className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>Request Assessment</a>
                  <a href="tel:+919415610453" className="btn btn-outline" style={{ textAlign: 'center', width: '100%' }}>Call +91 94156 10453</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-white" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="text-center mb-element">
            <h2 className="section-heading" style={{ fontSize: '2rem' }}>Locations We Serve in <span className="text-primary">Uttar Pradesh</span></h2>
            <p className="text-lg mx-auto" style={{ maxWidth: '700px', color: 'var(--color-text-muted)' }}>
              We provide dedicated, localized {service.title.toLowerCase()} across all major districts. Select your city to view localized security details.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {upCities.map((city, idx) => (
              <a 
                key={idx} 
                href={`/services/${service.slug}/${city.slug}`}
                className="location-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px',
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  color: 'var(--color-text)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <MapPin size={18} />
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTASection />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": service.title,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Maa Shiva Services Pvt. Ltd.",
                "url": "https://maashivaservices.com",
                "telephone": "+919415610453"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "description": service.fullDescription,
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              },
              "name": service.title,
              "image": `https://maashivaservices.com${service.image}`
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://maashivaservices.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://maashivaservices.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": service.title,
                  "item": `https://maashivaservices.com/services/${service.slug}`
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
                }
              }))
            }
          ])
        }}
      />
    </>
  );
}
