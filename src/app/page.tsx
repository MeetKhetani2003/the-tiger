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
      
      {/* SEO Content Block */}
      <section className="py-section" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '16px', textAlign: 'center' }}>
              The Premier Security Agency in India
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px', textAlign: 'center' }}>
              Maa Shiva Services Pvt. Ltd. is recognized as the <strong>best security guard services company in India</strong>, offering unparalleled protection for corporate offices, industrial sites, and residential complexes. With a deep commitment to excellence, we provide highly trained personnel, including elite <strong>bouncer services</strong>, <strong>commando security</strong>, and armed guards.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px', textAlign: 'center' }}>
              Whether you need rapid deployment for event security or a comprehensive <strong>facility management service</strong>, our robust infrastructure and 24/7 command center ensure absolute safety. We pride ourselves on being the top security agency in Uttar Pradesh and expanding our footprint nationwide. Trust us to secure what matters most to you.
            </p>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
