import HeroSection from '@/components/home/HeroSection';
import HomeIntroSection from '@/components/home/HomeIntroSection';
import ServicesSection from '@/components/home/ServicesSection';
import SLASection from '@/components/home/SLASection';
import FAQSection from '@/components/home/FAQSection';
import ContactCTASection from '@/components/home/ContactCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeIntroSection />
      <ServicesSection />
      <SLASection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
