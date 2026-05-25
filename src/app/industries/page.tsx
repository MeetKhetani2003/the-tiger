import PageHero from '@/components/layout/PageHero';
import IndustriesSection from '@/components/home/IndustriesSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export const metadata = {
  title: "Industries | Maha Shiva Security",
  description: "Discover how we protect corporate offices, manufacturing plants, hospitals, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero 
        title="Industries We Protect"
        description="Specialized security protocols designed for the unique regulatory, safety, and operational challenges of diverse sectors."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'Industries', href: '/industries' } ]}
      />
      <IndustriesSection />
      <ContactCTASection />
    </>
  );
}
