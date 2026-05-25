import PageHero from '@/components/layout/PageHero';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export const metadata = {
  title: "Client Testimonials | Maha Shiva Security",
  description: "Read reviews from industry leaders who trust Maha Shiva Security for their protection needs.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero 
        title="Trusted by Leaders"
        description="Don't just take our word for it. Read verified reviews from operations directors and facility managers across India."
        bgImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920"
        breadcrumbs={[ { label: 'Testimonials', href: '/testimonials' } ]}
      />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
