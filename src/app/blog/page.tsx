import PageHero from '@/components/layout/PageHero';
import { blogPosts, blogCategories } from '@/data/blogData';

export const metadata = {
  title: 'Security Insights & News | Maa Shiva Services Blog',
  description: 'Read the latest insights, tips, and news on corporate security, event security, bodyguard services, and safety trends across India.',
  alternates: {
    canonical: 'https://maashivaservices.in/blog',
  }
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero 
        title="Security Insights & News"
        description="Stay updated with the latest trends, guides, and compliance news in the Indian security industry."
        bgImage="/home-sl2.jpeg"
        breadcrumbs={[
          { label: 'Blog', href: '/blog' }
        ]}
      />
      
      <section className="py-section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '60px' }}>
            
            {/* Blog Posts List */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {blogPosts.map((post) => (
                  <article key={post.id} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '32px' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-blue)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {post.category}
                      </span>
                    </div>
                    <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
                      <a href={`/blog/${post.slug}`} style={{ color: 'var(--color-text)', textDecoration: 'none' }}>
                        {post.title}
                      </a>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • By {post.author}</span>
                      <a href={`/blog/${post.slug}`} style={{ color: 'var(--color-primary-blue)', fontWeight: 600, textDecoration: 'none' }}>Read Article →</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ position: 'sticky', top: '120px' }}>
                <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '24px', borderRadius: '8px', border: '1px solid var(--color-border)', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Categories</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {blogCategories.map((cat, i) => (
                      <li key={i}>
                        <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>{cat}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://maashivaservices.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://maashivaservices.in/blog"
              }
            ]
          })
        }}
      />
    </>
  );
}
