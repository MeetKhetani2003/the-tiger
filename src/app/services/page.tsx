import PageHero from '@/components/layout/PageHero';
import ServicesSection from '@/components/home/ServicesSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export const metadata = {
  title: "Services | Maha Shiva Security",
  description: "Explore our comprehensive security solutions including corporate, industrial, and residential protection.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Security Services"
        description="Comprehensive, uncompromising protection solutions tailored precisely to the vulnerabilities and operational needs of your enterprise."
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'Services', href: '/services' } ]}
      />
      <ServicesSection />
      <ContactCTASection />
    </>
  );
}
