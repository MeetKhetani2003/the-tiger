import PageHero from '@/components/layout/PageHero';
import { blogPosts } from '@/data/blogData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  const url = `https://maashivaservices.in/blog/${post.slug}`;

  return {
    title: `${post.title} | Maa Shiva Services Blog`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Maa Shiva Services',
      images: [
        {
          url: `https://maashivaservices.in${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://maashivaservices.in${post.image}`],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={post.title}
        description={post.excerpt}
        bgImage={post.image}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` }
        ]}
      />
      
      <section className="py-section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: 600 }}>{post.category}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span style={{ color: 'var(--color-text-muted)' }}>•</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>By {post.author}</span>
          </div>

          <article style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', whiteSpace: 'pre-wrap' }}>
            {post.content}
          </article>

          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {post.tags.map((tag, i) => (
              <span key={i} style={{ padding: '6px 12px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://maashivaservices.in/blog/${post.slug}`
            },
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://maashivaservices.in${post.image}`,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Maa Shiva Services Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://maashivaservices.in/logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date
          })
        }}
      />

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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://maashivaservices.in/blog/${post.slug}`
              }
            ]
          })
        }}
      />
    </>
  );
}
