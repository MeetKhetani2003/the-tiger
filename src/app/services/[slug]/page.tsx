import PageHero from '@/components/layout/PageHero';
import ContactCTASection from '@/components/home/ContactCTASection';
import { servicesData } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.title} | Maha Shiva Security`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={service.title}
        description={service.shortDescription}
        bgImage={service.image}
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
                <h2 className="section-heading" style={{ margin: 0 }}>Service <span className="text-primary">Overview</span></h2>
              </div>
              
              <p className="text-lg" style={{ lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '40px' }}>
                {service.fullDescription}
              </p>

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
                <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--color-text)' }}>Quick Inquiry</h4>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
                  Need {service.title.toLowerCase()}? Contact our command center for an immediate response.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="/contact" className="btn btn-primary" style={{ textAlign: 'center', width: '100%' }}>Request Quote</a>
                  <a href="tel:+919876543210" className="btn btn-outline" style={{ textAlign: 'center', width: '100%' }}>Call +91 98765 43210</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
