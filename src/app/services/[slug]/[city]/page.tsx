import PageHero from '@/components/layout/PageHero';
import ContactCTASection from '@/components/home/ContactCTASection';
import { servicesData } from '@/data/servicesData';
import { upCities } from '@/data/citiesData';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2, MapPin, AlertTriangle, Building } from 'lucide-react';
import { generateCityContext, generateServiceFAQs, generateCustomCityMetadata } from '@/utils/seoGenerator';
import ContactForm from '@/components/contact/ContactForm';

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
  
  // 100% Unique Metadata Generation
  const { title, description } = generateCustomCityMetadata(city.slug, service.title, city.name);
  const url = `https://maashivaservices.in/services/${service.slug}/${city.slug}`;

  return {
    title: title,
    description: description,
    keywords: [
      `${service.title} in ${city.name}`, 
      `Best ${service.title} in ${city.name}`, 
      `Security agency in ${city.name} UP`, 
      `Hire ${service.title} ${city.name}`,
      `Private security company ${city.name}`,
      "Maa Shiva Services"
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Maa Shiva Services',
      images: [
        {
          url: `https://maashivaservices.in${service.image}`,
          width: 1200,
          height: 630,
          alt: `Professional ${service.title} deployed in ${city.name}`,
        }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://maashivaservices.in${service.image}`],
    }
  };
}

export default async function CityServiceDetailPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city: citySlug } = await params;
  
  const service = servicesData.find((s) => s.slug === slug);
  const city = upCities.find((c) => c.slug === citySlug);

  if (!service || !city) {
    notFound();
  }
  
  const { title, description } = generateCustomCityMetadata(city.slug, service.title, city.name);
  
  const heroBanners: Record<string, string> = {
    'corporate-security': '/home-sl1.jpeg',
    'industrial-security': '/bannerindustrial.jpeg',
    'residential-security': '/bannerresedential.jpeg',
    'event-security': '/home-sl3.jpeg',
    'commando-security-services': '/home-sl2.jpeg',
    'security-guard-services': '/home-sl1.jpeg',
  };
  const heroBg = heroBanners[service.slug] || '/home-sl1.jpeg';

  const { risks, needs, intro, approach } = generateCityContext(city.name, service.title);
  const faqs = generateServiceFAQs(service.title, city.name);

  return (
    <>
      <PageHero 
        title={`${service.title} in ${city.name}`}
        description={`Providing uncompromising ${service.title.toLowerCase()} specifically tailored to mitigate risks across commercial and residential sectors in ${city.name}, Uttar Pradesh.`}
        bgImage={heroBg}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${service.slug}` },
          { label: city.name, href: `/services/${service.slug}/${city.slug}` }
        ]}
      />
      
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="sidebar-grid">
            {/* Main Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <ShieldCheck size={40} color="var(--color-primary-blue)" />
                <h2 className="section-heading" style={{ margin: 0 }}>Service <span className="text-primary">Overview for {city.name}</span></h2>
              </div>
              
              <p className="text-lg" style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '40px', whiteSpace: 'pre-wrap' }}>
                {service.fullDescription}
              </p>

              {/* Local SEO Context Section */}
              <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '16px' }}>
                  The Local Security Landscape in {city.name}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', lineHeight: '1.7' }}>
                  {intro}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <AlertTriangle color="#ef4444" size={20} />
                      <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text)' }}>Key Risks in {city.name}</h4>
                    </div>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {risks.map((risk, i) => <li key={i}>{risk}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <Building color="#3b82f6" size={20} />
                      <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text)' }}>Our {city.name} Strategy</h4>
                    </div>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {needs.map((need, i) => <li key={i}>{need}</li>)}
                    </ul>
                  </div>
                </div>

                <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: '1.7' }}>
                  {approach}
                </p>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '24px' }}>
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

              {/* Unique FAQs for the City */}
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '24px' }}>
                Frequently Asked Questions in {city.name}
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

            {/* Sidebar Form */}
            <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
              <ContactForm defaultService={service.title} defaultCity={city.name} isMini={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Cross-Linking Section for SEO Crawl Mesh */}
      <section className="py-section bg-white" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            
            {/* Other services in this city */}
            <div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '16px' }}>
                Other Premium Security Services in <span className="text-primary">{city.name}</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                Explore our full suite of professional protection and facility management services available in {city.name}.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {servicesData.filter(s => s.slug !== service.slug).map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}/${city.slug}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '16px 20px',
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out'
                    }}
                    className="location-link"
                  >
                    <span style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '1.05rem', marginBottom: '4px' }}>
                      {s.title}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      Available in {city.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Same service in nearby cities */}
            <div>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '16px' }}>
                {service.title} in <span className="text-primary">Neighboring Districts</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                We provide security guard deployments across all major regions in the {city.division} Division and surrounding areas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {upCities
                  .filter(c => c.slug !== city.slug && (c.division === city.division || upCities.filter(x => x.division === city.division).length < 5))
                  .slice(0, 8)
                  .map((c) => (
                    <a
                      key={c.slug}
                      href={`/services/${service.slug}/${c.slug}`}
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
                        transition: 'all 0.2s ease-in-out'
                      }}
                      className="location-link"
                    >
                      <MapPin size={16} />
                      {c.name}
                    </a>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactCTASection />

      {/* Advanced Multi-Schema Integration */}
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
                "url": "https://maashivaservices.in",
                "telephone": "+919415610453"
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
                "availability": "https://schema.org/InStock",
                "areaServed": city.name
              },
              "name": `${service.title} in ${city.name}`,
              "image": `https://maashivaservices.in${service.image}`
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
                  "name": "Services",
                  "item": "https://maashivaservices.in/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": service.title,
                  "item": `https://maashivaservices.in/services/${service.slug}`
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": city.name,
                  "item": `https://maashivaservices.in/services/${service.slug}/${city.slug}`
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
