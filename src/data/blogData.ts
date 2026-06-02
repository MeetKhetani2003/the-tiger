export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogCategories = [
  "Security Costs",
  "Security Training",
  "Industry Focus",
  "Corporate Security",
  "Event Security",
  "Residential Security"
];

export const blogPosts: BlogPost[] = [
  {
    id: "cost-of-security-guards-up",
    slug: "cost-of-security-guards-in-uttar-pradesh",
    title: "How Much Does a Security Guard Cost in Uttar Pradesh? (2026 Guide)",
    excerpt: "A comprehensive breakdown of security guard costs in major UP cities, factors affecting pricing, and what to expect when hiring private security.",
    content: "When hiring security services in Uttar Pradesh, costs vary significantly based on location, type of guard (armed vs. unarmed), and the scale of the deployment. In tier-1 cities like Lucknow or Noida, corporate security guards command a premium due to higher living costs and specialized training requirements. Unarmed guards generally cost between ₹15,000 to ₹25,000 per month, while ex-military armed guards or commandos can range from ₹35,000 to ₹60,000 per month. Always ensure the agency is PSARA compliant to avoid legal liabilities.",
    category: "Security Costs",
    date: "2026-05-10",
    author: "Maa Shiva Security Team",
    image: "/bannerindustrial.jpeg",
    tags: ["Cost Guide", "Uttar Pradesh", "Armed Guards"]
  },
  {
    id: "corporate-security-trends-2026",
    slug: "corporate-security-trends-2026",
    title: "Top 5 Corporate Security Trends for IT Parks in 2026",
    excerpt: "Explore the latest trends in corporate security, from advanced access control to rapid response deployments.",
    content: "The landscape of corporate security has evolved. Modern IT parks and commercial hubs demand more than just physical presence. Trends in 2026 highlight a hybrid approach: integrating highly trained corporate guards with advanced surveillance technology. Rapid response teams, strict access control via biometrics, and comprehensive risk assessments are now the baseline for enterprise security operations across India.",
    category: "Corporate Security",
    date: "2026-05-15",
    author: "Maa Shiva Security Team",
    image: "/home-sl1.jpeg",
    tags: ["Corporate", "IT Parks", "Trends"]
  },
  {
    id: "importance-of-psara",
    slug: "importance-of-psara-compliance",
    title: "Why PSARA Compliance is Non-Negotiable When Hiring an Agency",
    excerpt: "Understanding the Private Security Agencies Regulation Act (PSARA) and why it protects your business from legal risks.",
    content: "The Private Security Agencies Regulation Act (PSARA) of 2005 establishes the legal framework for private security operations in India. Hiring a non-compliant agency exposes your business to severe legal risks. PSARA ensures that guards undergo mandatory background checks, receive state-approved training, and operate under strict oversight. At Maa Shiva Services, our 100% PSARA compliance guarantees that you are receiving legitimate, highly trained, and legally vetted security personnel.",
    category: "Security Training",
    date: "2026-05-20",
    author: "Maa Shiva Security Team",
    image: "/sec5.jpeg",
    tags: ["Compliance", "PSARA", "Legal"]
  }
];
