import PageHero from '@/components/layout/PageHero';
import ContactCTASection from '@/components/home/ContactCTASection';
import { servicesData } from '@/data/servicesData';
import { upCities } from '@/data/citiesData';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  
  for (const service of servicesData) {
    for (const city of upCities) {
      params.push({
        slug: service.slug,
        city: city.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city: citySlug } = await params;
  
  const service = servicesData.find((s) => s.slug === slug);
  const city = upCities.find((c) => c.slug === citySlug);
  
  if (!service || !city) {
    return { title: 'Service Not Found' };
  }
  
  const title = `${service.title} in ${city.name} | Top Security Agency`;
  const description = `Looking for professional ${service.title.toLowerCase()} in ${city.name}, Uttar Pradesh? Maa Shiva Services provides elite protection and facility management tailored to ${city.name}.`;
  const url = `https://maashivaservices.com/services/${service.slug}/${city.slug}`;

  return {
    title: title,
    description: description,
    keywords: [
      `${service.title} in ${city.name}`, 
      `Best ${service.title} in ${city.name}`, 
      `${service.title} agency ${city.name}`, 
      `Security services in ${city.name} UP`, 
      `Hire ${service.title} ${city.name}`,
      "Maa Shiva Services"
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `https://maashivaservices.com${service.image}`,
          width: 1200,
          height: 630,
          alt: `${service.title} in ${city.name}`,
        }
      ],
      type: "website",
    },
  };
}

export default async function CityServiceDetailPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city: citySlug } = await params;
  
  const service = servicesData.find((s) => s.slug === slug);
  const city = upCities.find((c) => c.slug === citySlug);

  if (!service || !city) {
    notFound();
  }
  
  const description = `Looking for professional ${service.title.toLowerCase()} in ${city.name}, Uttar Pradesh? Maa Shiva Services provides elite protection and facility management tailored to ${city.name}.`;

  const heroBanners: Record<string, string> = {
    'corporate-security': '/home-sl1.jpeg',
    'industrial-security': '/bannerindustrial.jpeg',
    'residential-security': '/bannerresedential.jpeg',
    'event-security': '/home-sl3.jpeg',
    'commando-security-services': '/home-sl2.jpeg',
    'security-guard-services': '/home-sl1.jpeg',
  };
  const heroBg = heroBanners[service.slug] || '/home-sl1.jpeg';

  return (
    <>
      <PageHero 
        title={`${service.title} in ${city.name}`}
        description={`Providing uncompromising ${service.title.toLowerCase()} tailored specifically for businesses, events, and residences in ${city.name}, Uttar Pradesh.`}
        bgImage={heroBg}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
          { label: city.name, href: `/services/${service.slug}/${city.slug}` }
        ]}
      />
      
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '60px' }}>
            {/* Main Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <ShieldCheck size={40} color="var(--color-primary-blue)" />
                <h2 className="section-heading" style={{ margin: 0 }}>Service <span className="text-primary">Overview for {city.name}</span></h2>
              </div>
              
              <p className="text-lg" style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '40px', whiteSpace: 'pre-wrap' }}>
                {service.fullDescription}
              </p>

              <div style={{ padding: '24px', backgroundColor: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '8px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <MapPin color="var(--color-primary-blue)" />
                  <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text)' }}>Local Expertise in {city.name}</h3>
                </div>
                <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.6' }}>
                  Our team has extensive operational experience throughout {city.name} and the broader Uttar Pradesh region. We understand the local security landscape, enabling us to provide uniquely adapted {service.title.toLowerCase()} that meet the highest standards of safety and compliance.
                </p>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '24px' }}>
                Key Operational Features
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: 'var(--color-cards)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                    <CheckCircle2 size={24} color="#10B981" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
              <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '32px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--color-text)' }}>Quick Inquiry for {city.name}</h4>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                  Need {service.title.toLowerCase()} in {city.name}? Contact our command center for an immediate response and local deployment schedule.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="/contact" className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>Request Local Quote</a>
                  <a href="tel:+919415610453" className="btn btn-outline" style={{ textAlign: 'center', width: '100%' }}>Call +91 94156 10453</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": `${service.title} in ${city.name}`,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Maa Shiva Services Pvt. Ltd.",
                "url": "https://maashivaservices.com"
              },
              "areaServed": {
                "@type": "City",
                "name": city.name,
                "containedInPlace": {
                  "@type": "State",
                  "name": "Uttar Pradesh"
                }
              },
              "description": description,
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              },
              "name": `${service.title} in ${city.name}`,
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
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": city.name,
                  "item": `https://maashivaservices.com/services/${service.slug}/${city.slug}`
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}
