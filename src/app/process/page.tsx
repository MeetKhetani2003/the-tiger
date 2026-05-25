import PageHero from '@/components/layout/PageHero';
import ProcessSection from '@/components/home/ProcessSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export const metadata = {
  title: "Our Process | Maha Shiva Security",
  description: "Learn about our systematic, military-grade methodology ensuring flawless execution and absolute protection.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero 
        title="Our Methodology"
        description="A rigorous, strategic six-step approach from initial risk assessment to active command center monitoring."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'Process', href: '/process' } ]}
      />
      <ProcessSection />
      <ContactCTASection />
    </>
  );
}
