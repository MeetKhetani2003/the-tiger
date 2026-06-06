import PageHero from '@/components/layout/PageHero';
import ContactCTASection from '@/components/home/ContactCTASection';
import { industriesData } from '@/data/industriesData';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((s) => s.slug === slug);
  
  if (!industry) {
    return { title: 'Industry Not Found' };
  }
  
  const title = `Security for ${industry.title} | Top Security Agency in India`;
  const url = `https://maashivaservices.in/industries/${industry.slug}`;

  return {
    title: title,
    description: industry.shortDescription,
    keywords: [
      `${industry.title} security`, 
      `Security guards for ${industry.title}`, 
      `Best security agency for ${industry.title}`, 
      `Professional protection for ${industry.title}`, 
      "Maa Shiva Services"
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: industry.shortDescription,
      url,
      images: [
        {
          url: `https://maashivaservices.in${industry.image}`,
          width: 1200,
          height: 630,
          alt: industry.title,
        }
      ],
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((s) => s.slug === slug);

  if (!industry) {
    notFound();
  }

  const heroBanners: Record<string, string> = {
    'corporate-offices': '/home-sl1.jpeg',
    'residential-security': '/bannerresedential.jpeg',
    'industrial-security': '/bannerindustrial.jpeg',
    'healthcare-security': '/home-sl3.jpeg',
    'institutional-security': '/home-sl2.jpeg',
  };
  const heroBg = heroBanners[industry.slug] || '/home-sl1.jpeg';

  return (
    <>
      <PageHero 
        title={`${industry.title} Security`}
        description={industry.shortDescription}
        bgImage={heroBg}
        breadcrumbs={[
          { label: 'Industries', href: '/industries' },
          { label: industry.title, href: `/industries/${industry.slug}` }
        ]}
      />
      
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div className="sidebar-grid">
            {/* Main Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <ShieldCheck size={40} color="var(--color-primary-blue)" />
                <h2 className="section-heading" style={{ margin: 0 }}>Sector <span className="text-primary">Overview</span></h2>
              </div>
              
              <p className="text-lg" style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '40px' }}>
                {industry.fullDescription}
              </p>

              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '24px' }}>
                Key Operational Protocols
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {industry.features.map((feature, idx) => (
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
                <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--color-text)' }}>Secure Your {industry.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                  Require specialized security for your sector? Contact our command center for an immediate site assessment.
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

      <ContactCTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": `${industry.title} Security Services`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Maa Shiva Services Pvt. Ltd.",
              "url": "https://maashivaservices.in"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": industry.fullDescription,
            "name": `Security Services for ${industry.title}`,
            "image": `https://maashivaservices.in${industry.image}`
          })
        }}
      />
    </>
  );
}
