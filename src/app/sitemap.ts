import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { upCities } from '@/data/citiesData';

const baseUrl = 'https://maashivaservices.com';

export async function generateSitemaps() {
  return [
    { id: 'core' },
    { id: 'services' },
    { id: 'cities' },
    { id: 'blog' }
  ];
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  
  if (id === 'core') {
    return [
      { url: baseUrl, lastModified: new Date(), changeFrequency: 'yearly', priority: 1.0 },
      { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
      { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
      { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    ];
  }

  if (id === 'services') {
    return servicesData.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  }

  if (id === 'cities') {
    const cityPages: MetadataRoute.Sitemap = [];
    servicesData.forEach((service) => {
      upCities.forEach((city) => {
        cityPages.push({
          url: `${baseUrl}/services/${service.slug}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    });
    return cityPages;
  }

  if (id === 'blog') {
    const { blogPosts } = await import('@/data/blogData');
    const blogIndex = {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
    
    const posts = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    
    return [blogIndex, ...posts];
  }

  return [];
}
