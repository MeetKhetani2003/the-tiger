export interface ServiceType {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
}

export const servicesData: ServiceType[] = [
  {
    id: 'corp',
    slug: 'corporate-security',
    title: "Corporate Security",
    shortDescription: "Comprehensive security solutions for corporate offices, IT parks, and business centers.",
    fullDescription: "Our corporate security services provide a secure environment for your employees, clients, and assets. We deploy highly trained personnel who understand the nuances of a corporate environment, ensuring safety without compromising on professionalism and courtesy.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Access Control Management",
      "Visitor Management Systems",
      "Lobby and Reception Security",
      "Emergency Evacuation Planning",
      "After-hours Patrols",
      "CCTV Monitoring"
    ]
  },
  {
    id: 'ind',
    slug: 'industrial-security',
    title: "Industrial Security",
    shortDescription: "Robust protection for manufacturing plants, warehouses, and industrial facilities.",
    fullDescription: "Industrial facilities face unique security challenges including theft, sabotage, and safety compliance issues. Our industrial security teams are specially trained in loss prevention, hazard identification, and strict access control for large-scale operations.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Perimeter Security Patrols",
      "Material Gate Passes & Vehicle Checking",
      "Loss Prevention Strategies",
      "Fire Safety & First Aid Trained Officers",
      "Weighbridge Monitoring",
      "Union & Strike Management"
    ]
  },
  {
    id: 'res',
    slug: 'residential-security',
    title: "Residential Security",
    shortDescription: "Ensuring the safety of gated communities and premium residential complexes.",
    fullDescription: "We provide peace of mind to residents through vigilant, polite, and responsive security personnel. Our teams manage high-traffic entry points, enforce community rules, and provide rapid response to residential emergencies.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920",
    features: [
      "24/7 Gate Management",
      "Vendor and Domestic Staff Verification",
      "Night Patrols",
      "CCTV Surveillance",
      "Emergency Response",
      "Traffic & Parking Management"
    ]
  },
  {
    id: 'event',
    slug: 'event-security',
    title: "Event Security",
    shortDescription: "Specialized crowd control and executive protection for corporate events.",
    fullDescription: "From AGMs to large-scale exhibitions, our event security teams ensure your gathering proceeds smoothly. We specialize in crowd management, VIP protection, and rapid incident resolution to maintain order without disrupting the event experience.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Crowd Control & Management",
      "Baggage Screening",
      "VIP & Executive Protection",
      "Emergency Evacuation Coordination",
      "Traffic & Parking Logistics",
      "Access Credentialing"
    ]
  },
  {
    id: 'vip',
    slug: 'vip-protection',
    title: "VIP Protection",
    shortDescription: "Discreet close protection services for executives and high-net-worth individuals.",
    fullDescription: "Our Close Protection Officers (CPOs) are highly trained professionals, many with military or elite law enforcement backgrounds. They provide discreet but absolute security for corporate leaders, celebrities, and their families.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Close Protection Officers (Armed/Unarmed)",
      "Secure Transportation",
      "Route Reconnaissance",
      "Risk & Threat Assessments",
      "Travel Security Planning",
      "Residential Security Details"
    ]
  },
  {
    id: 'fm',
    slug: 'facility-management',
    title: "Facility Management",
    shortDescription: "Integrated facility management services including housekeeping and maintenance.",
    fullDescription: "Beyond physical security, we offer comprehensive facility management to ensure your premises are clean, maintained, and operating efficiently. A well-managed facility is inherently a safer facility.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920",
    features: [
      "Professional Housekeeping",
      "Electro-Mechanical Maintenance",
      "Pantry Operations",
      "Pest Control",
      "Facade Cleaning",
      "Waste Management"
    ]
  }
];
