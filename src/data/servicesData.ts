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
    image: "/corporate-sec.jpeg",
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
    image: "/industrial-sec.jpeg",
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
    image: "/residentialsec.jpeg",
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
    image: "/event-sec.jpeg",
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
    image: "/vip-sec.jpeg",
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
    image: "/facility-sec.jpeg",
    features: [
      "Professional Housekeeping",
      "Electro-Mechanical Maintenance",
      "Pantry Operations",
      "Pest Control",
      "Facade Cleaning",
      "Waste Management"
    ]
  },
  {
    id: 'armed',
    slug: 'armed-security-services',
    title: "Armed Security Services",
    shortDescription: "Highly trained armed security personnel for high-risk environments and critical asset protection.",
    fullDescription: "Our armed security services offer a robust line of defense for situations requiring elevated security measures. We provide rigorously trained and licensed armed guards capable of protecting financial institutions, cash transit operations, high-profile individuals, and sensitive locations. Each guard undergoes continuous firearms training and conflict resolution protocols to ensure absolute safety.",
    image: "/sec6.jpeg",
    features: [
      "Licensed & Trained Armed Guards",
      "Cash-in-Transit Protection",
      "High-Value Asset Security",
      "Deterrence of Severe Threats",
      "Quick Emergency Response",
      "Strict Firearm Protocols"
    ]
  },
  {
    id: 'commando',
    slug: 'commando-security-services',
    title: "Commando Security Services",
    shortDescription: "Elite security commando units for specialized operations and maximum protection.",
    fullDescription: "For unparalleled security needs, our Commando Security Services deploy elite personnel with advanced tactical training. Often recruited from ex-military or specialized law enforcement backgrounds, these commandos are equipped to handle extreme threats, secure high-risk zones, and provide an imposing physical presence that deters any potential security breaches.",
    image: "/commando-sec.jpeg",
    features: [
      "Ex-Military & Special Forces Personnel",
      "Advanced Tactical Training",
      "Crisis & Hostage Management",
      "Anti-Terrorism Protocols",
      "Maximum Physical Deterrence",
      "Rapid Deployment & Strike Capabilities"
    ]
  },
  {
    id: 'bouncer',
    slug: 'bouncer-security-services',
    title: "Bouncer Security Services",
    shortDescription: "Professional bouncers for crowd control, nightlife security, and event safety.",
    fullDescription: "Our Bouncer Security Services ensure the safety and orderliness of your venues, events, and nightlife establishments. Our bouncers are physically imposing yet professionally trained in de-escalation techniques. They manage entry points, verify identification, handle disruptive individuals peacefully, and maintain a secure environment for all patrons.",
    image: "/bouncer-sec.jpeg",
    features: [
      "Strict Access Control & ID Verification",
      "Crowd Dynamics & Flow Management",
      "Conflict De-escalation",
      "Physical Intervention (When Necessary)",
      "VVIP Area Protection",
      "Event & Nightlife Security"
    ]
  },
  {
    id: 'security-services',
    slug: 'security-services',
    title: "Security Services",
    shortDescription: "Comprehensive, tailored security solutions for various industries and private needs.",
    fullDescription: "Our holistic Security Services encompass a wide range of protective measures designed to safeguard your people, property, and assets. From risk assessment to the implementation of integrated security systems, we provide end-to-end solutions tailored to your specific vulnerabilities, ensuring a safe and secure environment across all operational fronts.",
    image: "/security-sec.jpeg",
    features: [
      "Comprehensive Risk Assessments",
      "Integrated Security Planning",
      "Manned Guarding",
      "Technology & Surveillance Integration",
      "Security Audits & Consulting",
      "24/7 Security Command Center"
    ]
  },
  {
    id: 'security-guard',
    slug: 'security-guard-services',
    title: "Security Guard Services",
    shortDescription: "Professional and vigilant security guards for everyday protection and peace of mind.",
    fullDescription: "Our foundational Security Guard Services provide reliable, alert, and courteous personnel to maintain safety in everyday environments. Whether for retail spaces, corporate offices, or residential buildings, our guards act as the first line of defense, monitoring premises, reporting irregularities, and assisting visitors while upholding the highest standards of professionalism.",
    image: "/sec-guard.jpeg",
    features: [
      "Uniformed Security Personnel",
      "Patrolling & Premise Monitoring",
      "Incident Reporting & Logging",
      "Visitor Assistance & Direction",
      "Theft & Vandalism Deterrence",
      "Basic First Aid & Fire Safety"
    ]
  }
];
