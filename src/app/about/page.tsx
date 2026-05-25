import PageHero from '@/components/layout/PageHero';
import AboutSection from '@/components/home/AboutSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export const metadata = {
  title: "About Us | Maha Shiva Security",
  description: "Learn about our mission, vision, and core values that drive our premier security services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Our Enterprise"
        description="Setting the benchmark for professional security and facility management across India through discipline, technology, and rigorous training."
        bgImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'About Us', href: '/about' } ]}
      />
      <AboutSection />
      <ContactCTASection />
    </>
  );
}
