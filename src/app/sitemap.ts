import { MetadataRoute } from 'next';
import { servicesData } from '@/data/servicesData';
import { upCities } from '@/data/citiesData';
import { branchesData } from '@/data/branchesData';

const baseUrl = 'https://maashivaservices.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Core Pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'yearly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ];

  // 2. Services Pages
  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. City Pages
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

  // 4. Branch Pages
  const branchPages: MetadataRoute.Sitemap = branchesData.map((branch) => ({
    url: `${baseUrl}/branches/${branch.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 5. Blog Pages
  const { blogPosts } = await import('@/data/blogData');
  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  };
  
  const blogPostsPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...cityPages,
    ...branchPages,
    blogIndex,
    ...blogPostsPages
  ];
}
