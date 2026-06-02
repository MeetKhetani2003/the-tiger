import PageHero from '@/components/layout/PageHero';

export const metadata = {
  title: 'Privacy Policy | Maa Shiva Services Pvt. Ltd.',
  description: 'Our Privacy Policy outlines how Maa Shiva Services collects, uses, and protects your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        title="Privacy Policy"
        description="Your privacy and data security are our top priorities."
        bgImage="/home-sl2.jpeg"
        breadcrumbs={[
          { label: 'Privacy Policy', href: '/privacy-policy' }
        ]}
      />
      
      <section className="py-section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>1. Introduction</h2>
            <p style={{ marginBottom: '24px' }}>
              Welcome to Maa Shiva Services Pvt. Ltd. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>2. Data We Collect</h2>
            <p style={{ marginBottom: '24px' }}>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
              <br/><br/>
              • <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.<br/>
              • <strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.<br/>
              • <strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>3. How We Use Your Data</h2>
            <p style={{ marginBottom: '24px' }}>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              <br/><br/>
              • Where we need to perform the contract we are about to enter into or have entered into with you.<br/>
              • Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.<br/>
              • Where we need to comply with a legal or regulatory obligation.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>4. Data Security</h2>
            <p style={{ marginBottom: '24px' }}>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>5. Contact Us</h2>
            <p style={{ marginBottom: '24px' }}>
              If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the details set out below:
              <br/><br/>
              Maa Shiva Services Pvt. Ltd.<br/>
              Email: info@maashivaservices.com<br/>
              Phone: +91 94156 10453
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
