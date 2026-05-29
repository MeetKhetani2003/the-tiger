export interface IndustryType {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
}

export const industriesData: IndustryType[] = [
  {
    id: 'corp',
    slug: 'corporate-offices',
    title: 'Corporate Offices',
    shortDescription: 'Secure entry protocols and floor monitoring for professional environments.',
    fullDescription: 'Our corporate security services are designed to protect your assets, employees, and sensitive information while maintaining a welcoming atmosphere for your clients and visitors. We deploy highly trained personnel who blend seamlessly into the corporate environment, offering front desk management, access control, and advanced surveillance monitoring.',
    image: '/corporate-sec.jpeg',
    features: [
      'Front Desk & Visitor Management',
      'CCTV Surveillance & Monitoring',
      'Access Control Systems',
      'Emergency Evacuation Protocols',
      'Executive Protection'
    ]
  },
  {
    id: 'res',
    slug: 'residential-security',
    title: 'Residential Security',
    shortDescription: '24/7 gate security and perimeter patrols for premium communities.',
    fullDescription: 'We provide uncompromising security solutions for premium residential complexes, gated communities, and private estates. Our personnel are trained in strict access control, maintaining visitor logs, and conducting regular night patrols to ensure the absolute safety and peace of mind of all residents.',
    image: '/residentialsec.jpeg',
    features: [
      '24/7 Main Gate Access Control',
      'Routine Perimeter Patrols',
      'Visitor & Delivery Logging',
      'Emergency Response & First Aid',
      'Resident Escort Services'
    ]
  },
  {
    id: 'ind',
    slug: 'industrial-security',
    title: 'Industrial Security',
    shortDescription: 'Loss prevention and heavy machinery oversight for manufacturing hubs.',
    fullDescription: 'Industrial sites require robust, highly disciplined security to prevent theft, sabotage, and unauthorized access. We deploy heavily trained guards who specialize in material movement tracking, labor control, perimeter security, and fire safety protocols across warehouses, factories, and construction sites.',
    image: '/industrial-sec.jpeg',
    features: [
      'Material In/Out Tracking',
      'Labor Crowd Control',
      'Perimeter & Fence Patrolling',
      'Fire Safety & Hazard Prevention',
      'Weighbridge Monitoring'
    ]
  },
  {
    id: 'hosp',
    slug: 'healthcare-security',
    title: 'Healthcare Security',
    shortDescription: 'Patient privacy and emergency room crowd control for medical facilities.',
    fullDescription: 'Healthcare facilities face unique security challenges that demand a delicate balance between public accessibility and strict safety. Our guards are specially trained in crisis de-escalation, managing aggressive visitors, protecting restricted wards, and assisting medical staff during emergencies.',
    image: '/vip-sec.jpeg',
    features: [
      'ER Crowd Management',
      'Restricted Ward Access Control',
      'Patient & Staff Safety',
      'Crisis De-escalation',
      'Asset & Pharmacy Protection'
    ]
  },
  {
    id: 'edu',
    slug: 'institutional-security',
    title: 'Institutional Security',
    shortDescription: 'Campus safety and visitor management systems for educational institutes.',
    fullDescription: 'Protecting the future generation requires vigilance, strict protocols, and approachability. We provide comprehensive campus security for schools, colleges, and universities, focusing on student safety, anti-ragging patrols, traffic management during peak hours, and unauthorized entry prevention.',
    image: '/facility-sec.jpeg',
    features: [
      'Student & Staff ID Verification',
      'Anti-Ragging Patrols',
      'Campus Traffic Management',
      'Event Security Management',
      'Hostel & Dormitory Safety'
    ]
  }
];
