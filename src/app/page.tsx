import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import ProcessSection from '@/components/home/ProcessSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
