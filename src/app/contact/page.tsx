import PageHero from '@/components/layout/PageHero';
import ContactCTASection from '@/components/home/ContactCTASection';

export const metadata = {
  title: "Contact Us | Maha Shiva Security",
  description: "Connect with our senior security consultants for a comprehensive risk assessment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Secure Your Enterprise"
        description="Our command center is operational 24/7. Reach out for a comprehensive threat assessment or immediate deployment requests."
        bgImage="https://images.unsplash.com/photo-1551836022-b06985bceb24?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'Contact', href: '/contact' } ]}
      />
      <ContactCTASection />
    </>
  );
}
