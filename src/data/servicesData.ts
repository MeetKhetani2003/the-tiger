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
    id: 'armed',
    slug: 'armed-security-guards',
    title: "Armed Security Guards",
    shortDescription: "Armed security guards are employed where higher levels of protection are necessary. These guards are trained to carry firearms and use them only in extreme situations.",
    fullDescription: "Armed security guards are employed where higher levels of protection are necessary. These guards are trained to carry firearms and use them only in extreme situations. Their presence alone acts as a strong deterrent for potential criminals.\n\nWhile they are often deployed in high-risk areas such as banks, governmental buildings, and large-scale events, armed security guards are also suitable for businesses that handle valuable goods. They must possess a specific set of certifications and skills to handle dangerous situations professionally.",
    image: "/sec6.jpeg",
    features: [
      "Licensed & Trained Armed Guards",
      "Cash-in-Transit Protection",
      "High-Value Asset Security",
      "Deterrence of Severe Threats"
    ]
  },
  {
    id: 'unarmed',
    slug: 'unarmed-security-guards',
    title: "Unarmed Security Guards",
    shortDescription: "Unarmed security guards provide surveillance, monitor access, and see through general safety without carrying weapons.",
    fullDescription: "Unarmed security guards are the most common type of security personnel. They provide surveillance, monitor access, and see through general safety without carrying weapons. These guards are often seen in malls, corporate offices, and residential complexes.\n\nAlthough they do not carry firearms, unarmed security guards are trained in conflict de-escalation and basic first aid. They are ideal for businesses and properties that do not face imminent security threats but require a visible security presence.",
    image: "/sec-guard.jpeg",
    features: [
      "Uniformed Security Personnel",
      "Patrolling & Premise Monitoring",
      "Visitor Assistance",
      "Theft & Vandalism Deterrence"
    ]
  },
  {
    id: 'mobile',
    slug: 'mobile-patrol-security-guards',
    title: "Mobile Patrol Security Guards",
    shortDescription: "Mobile patrol guards move between locations to provide a broad range of surveillance over larger areas.",
    fullDescription: "Mobile patrol guards move between locations to provide a broad range of surveillance over larger areas. They may work in a vehicle or on foot, patrolling multiple properties or sectors within a community.\n\nThis type of security guard is ideal for warehouses, parking lots, or neighborhoods. The flexibility of mobile patrols allows them to respond to emergencies more quickly than a stationary guard, making them a great fit for properties that need regular, unpredictable oversight.",
    image: "/guard-patrol.png",
    features: [
      "Rapid Response Times",
      "Expansive Area Coverage",
      "Random & Scheduled Patrols",
      "GPS Tracking & Reporting"
    ]
  },
  {
    id: 'res',
    slug: 'residential-security-guards',
    title: "Residential Security Guards",
    shortDescription: "Residential security guards focus on protecting homes, gated communities, and residential complexes.",
    fullDescription: "Residential security guards focus on protecting homes, gated communities, and residential complexes. They maintain secure perimeters, monitor visitors, and manage access control for residents.\n\nThis type of guard helps communities or apartment complexes where peace of mind and safety are top priorities. They typically patrol the premises, seeing to it that only authorized individuals are allowed entry.",
    image: "/generated/residential_guard.png",
    features: [
      "24/7 Gate Management",
      "Vendor Verification",
      "Night Patrols",
      "Emergency Response"
    ]
  },
  {
    id: 'corp',
    slug: 'corporate-security-guards',
    title: "Corporate Security Guards",
    shortDescription: "Corporate security guards specialize in safeguarding office buildings, corporate events, and sensitive business areas.",
    fullDescription: "Corporate security guards specialize in safeguarding office buildings, corporate events, and sensitive business areas. They often monitor surveillance systems, restrict access to certain areas, and make sure that employees and visitors are safe.\n\nThese guards are particularly useful in industries where sensitive information or valuable equipment needs protection. A corporate guard’s role includes managing day-to-day security measures, which can help maintain a professional environment.",
    image: "/generated/corporate_guard.png",
    features: [
      "Access Control Management",
      "Visitor Management Systems",
      "Lobby Security",
      "CCTV Monitoring"
    ]
  },
  {
    id: 'event',
    slug: 'event-security-guards',
    title: "Event Security Guards",
    shortDescription: "Event security guards are best needed for concerts, festivals, sports events, and other large gatherings.",
    fullDescription: "Event security guards are best needed for concerts, festivals, sports events, and other large gatherings. Their responsibilities include managing crowds, preventing theft, and watching over the safety of all attendees.\n\nEvent security guards undergo specific training in crowd control and emergency response. They see to it that events run smoothly, handling any disturbances or incidents that may arise.",
    image: "/generated/event_guard.png",
    features: [
      "Crowd Control & Management",
      "Baggage Screening",
      "Traffic Logistics",
      "Access Credentialing"
    ]
  },
  {
    id: 'retail',
    slug: 'retail-security-guards',
    title: "Retail Security Guards",
    shortDescription: "Retail security guards protect stores, malls, and shopping centers from theft and other forms of crime.",
    fullDescription: "Retail security guards protect stores, malls, and shopping centers from theft and other forms of crime. They are skilled in spotting suspicious behavior and preventing shoplifting, which helps reduce losses for retail businesses.\n\nThese guards can be stationed at entrances or roam the store floor, providing a visible deterrent to would-be thieves. Retail guards may also assist in customer service, helping to maintain order in busy retail environments.",
    image: "/security-sec.jpeg",
    features: [
      "Loss Prevention Strategy",
      "Shoplifting Deterrence",
      "Store Patrols",
      "Customer Assistance"
    ]
  },
  {
    id: 'gov',
    slug: 'government-security-guards',
    title: "Government Security Guards",
    shortDescription: "Government security guards protect public buildings, government officials, and sensitive information.",
    fullDescription: "Government security guards protect public buildings, government officials, and sensitive information. They are often deployed in federal buildings, embassies, and research facilities where the risk level is higher.\n\nThese guards undergo strict background checks and are trained to handle high-level security breaches. Their role includes safeguarding confidential data and the safety of government personnel.",
    image: "/facility-sec.jpeg",
    features: [
      "Strict Regulatory Compliance",
      "Infrastructure Protection",
      "Access Control",
      "Crisis Management"
    ]
  },
  {
    id: 'hospital',
    slug: 'hospital-security-guards',
    title: "Hospital Security Guards",
    shortDescription: "Hospital security guards protect patients, staff, and visitors in healthcare facilities.",
    fullDescription: "Hospital security guards protect patients, staff, and visitors in healthcare facilities. They monitor entrances, manage disturbances, and assist in emergencies to create a safe environment.\n\nGiven the sensitive nature of healthcare settings, hospital guards are trained in managing crises while maintaining a calm demeanor. Their presence is critical to prevent theft, manage aggressive behavior, and respond to emergencies.",
    image: "/bouncer-sec.jpeg",
    features: [
      "Patient & Staff Safety",
      "Conflict De-escalation",
      "Asset Protection",
      "Emergency Code Response"
    ]
  },
  {
    id: 'construction',
    slug: 'construction-site-security-guards',
    title: "Construction Site Security Guards",
    shortDescription: "Construction site security guards prevent unauthorized access, vandalism, and theft at building sites.",
    fullDescription: "Construction site security guards prevent unauthorized access, vandalism, and theft at building sites. Since these areas often contain valuable materials and equipment, a security presence helps protect against potential losses.\n\nThese guards often work at night or during off-hours when the site is most vulnerable. They may also manage access control for workers and visitors during the day, so that only authorized personnel enter the site.",
    image: "/bannerindustrial.jpeg",
    features: [
      "Perimeter Security",
      "Material Gate Passes",
      "Night Watch",
      "Hazard Reporting"
    ]
  },
  {
    id: 'vip',
    slug: 'executive-protection-security-guards',
    title: "Executive Protection Security Guards",
    shortDescription: "Executive protection guards, also known as bodyguards, offer personal protection to high-profile individuals.",
    fullDescription: "Executive protection guards, also known as bodyguards, offer personal protection to high-profile individuals such as celebrities, politicians, and corporate executives. These guards are highly trained in both physical defense and threat detection.\n\nTheir role goes beyond standard security, focusing on protecting their client from potential harm at all times. Executive protection guards often travel with their clients and assess risk factors to avoid dangerous situations.",
    image: "/vip-sec.jpeg",
    features: [
      "Close Protection",
      "Route Reconnaissance",
      "Risk Assessments",
      "Secure Transportation"
    ]
  },
  {
    id: 'fire',
    slug: 'fire-watch-security-guards',
    title: "Fire Watch Security Guards",
    shortDescription: "Fire watch security guards are specialized personnel who monitor fire hazards in high-risk areas.",
    fullDescription: "Fire watch security guards are specialized personnel who monitor fire hazards in high-risk areas. They patrol buildings and construction sites where fire risks are elevated, making sure that fire prevention measures are followed.\n\nThese guards are needed in places where fire suppression systems are down or during construction projects with high fire risk. They can quickly alert emergency services if a fire breaks out, preventing large-scale disasters.",
    image: "/sec5.jpeg",
    features: [
      "Continuous Area Patrols",
      "Hazard Identification",
      "Evacuation Coordination",
      "Fire Department Liaison"
    ]
  },
  {
    id: 'ind',
    slug: 'industrial-security-guards',
    title: "Industrial Security Guards",
    shortDescription: "Industrial security guards protect factories, warehouses, and manufacturing facilities.",
    fullDescription: "Industrial security guards protect factories, warehouses, and manufacturing facilities, where valuable equipment and materials are stored. Their duties often include monitoring access points, conducting regular patrols, and checking the safety of both employees and assets.\n\nThese guards are trained to respond to emergencies such as machinery malfunctions, chemical spills, or unauthorized access. Industrial settings often require guards with specialized knowledge of hazardous materials and safety protocols, making them an important part of the facility’s overall security strategy.",
    image: "/industrial-sec.jpeg",
    features: [
      "Perimeter Patrols",
      "Vehicle Checking",
      "Safety Compliance",
      "Weighbridge Monitoring"
    ]
  },
  {
    id: 'school',
    slug: 'school-security-guards',
    title: "School Security Guards",
    shortDescription: "School security guards provide protection in educational environments, working for the safety of students and staff.",
    fullDescription: "School security guards provide protection in educational environments, working for the safety of students, staff, and visitors. They monitor access to the premises, oversee security during events, and respond to any disturbances or emergencies.\n\nSchool security guards play a significant role in creating a safe learning environment, whether they are stationed at elementary schools or universities. Their responsibilities also include de-escalating conflicts, addressing bullying, and making sure the school follows safety protocols in emergencies like fire drills or lockdowns.",
    image: "/by client/school-security.jpeg",
    features: [
      "Campus Patrols",
      "Visitor Screening",
      "Lockdown Coordination",
      "Student Safety"
    ]
  },
  {
    id: 'transport',
    slug: 'transportation-security-guards',
    title: "Transportation Security Guards",
    shortDescription: "Transportation security guards are tasked with safeguarding airports, train stations, bus terminals, and other transportation hubs.",
    fullDescription: "Transportation security guards are tasked with safeguarding airports, train stations, bus terminals, and other transportation hubs. They make sure that passengers, cargo, and vehicles are safe from theft, vandalism, or terrorist activities.\n\nThese guards are trained to detect suspicious behavior, manage crowds, and perform security screenings. Their presence helps with the smooth operation of transportation systems, providing both safety and efficiency in high-traffic areas.",
    image: "/commando-sec.jpeg",
    features: [
      "Cargo Protection",
      "Hub Surveillance",
      "Supply Chain Security",
      "Transit Escorts"
    ]
  },
  {
    id: 'bouncer',
    slug: 'bouncer-security-services',
    title: "Bouncer Security Service",
    shortDescription: "Professional bouncer security services for events, clubs, and personal protection.",
    fullDescription: "Our bouncer security services provide strong, authoritative personnel trained to maintain order at high-profile events, clubs, and private gatherings. They ensure the safety of guests, manage access control, and swiftly handle any disruptive behavior to keep the environment secure and enjoyable.",
    image: "/by client/bouncer-security.jpeg",
    features: [
      "Access Control",
      "Crowd Management",
      "Conflict Resolution",
      "VIP Protection"
    ]
  },
  {
    id: 'female-bouncer',
    slug: 'female-bouncer-security',
    title: "Female Bouncer Security Service",
    shortDescription: "Trained and professional female bouncers for specialized security needs and events.",
    fullDescription: "We offer highly trained female bouncer security services to cater to events and venues that require a diverse and sensitive security approach. Our female bouncers excel in de-escalation, crowd management, and providing a safe environment, particularly in situations where female guests need specific assistance or security checks.",
    image: "/by client/female-security.jpeg",
    features: [
      "Specialized Security Checks",
      "De-escalation Skills",
      "Event Security",
      "Guest Assistance"
    ]
  },
  {
    id: 'gunman',
    slug: 'gunman-security',
    title: "Gunman Security Service",
    shortDescription: "Armed gunman security services for high-risk assets and VIP protection.",
    fullDescription: "Our gunman security services provide highly trained, armed personnel capable of handling extreme security threats. Deployed for high-value asset transit, banking sectors, and high-profile individual protection, our gunmen ensure absolute security through rigorous training and strategic vigilance.",
    image: "/by client/gunman-seecurity.jpeg",
    features: [
      "Armed Protection",
      "High-Risk Security",
      "Asset Protection",
      "Threat Deterrence"
    ]
  },
  {
    id: 'x-army',
    slug: 'x-army-man-security',
    title: "Ex-Army Man Security Service",
    shortDescription: "Elite security services provided by highly disciplined ex-army personnel.",
    fullDescription: "For unparalleled security and discipline, our Ex-Army Man Security Services offer veterans who bring their military-grade training, strategic planning, and unmatched dedication to civilian security. Ideal for high-stakes corporate environments, critical infrastructure, and VIP protection, they offer the highest level of vigilance and operational readiness.",
    image: "/by client/x-army-man-security.jpeg",
    features: [
      "Military-Grade Discipline",
      "Strategic Security Planning",
      "Elite Protection",
      "Rapid Threat Assessment"
    ]
  },
  {
    id: 'security-guard',
    slug: 'security-guard-services',
    title: "Security Guard Services",
    shortDescription: "Professional, reliable, and police-verified security guard services for corporate, industrial, and residential sectors.",
    fullDescription: "Maa Shiva Services Pvt. Ltd. provides highly trained, disciplined, and police-verified security guards to safeguard your assets, staff, and facilities. Our security guard services are tailored to meet the dynamic security challenges of modern commercial offices, gated residential complexes, and busy industrial sites.\n\nOur guards are trained in access control, visitor logging, patrolling, fire safety, and emergency response. We conduct rigorous background verification and police checks on every candidate to ensure absolute integrity and reliability.",
    image: "/sec-guard.jpeg",
    features: [
      "Police Verified Personnel",
      "24/7 Gate & Access Control",
      "Regular Patrols & Surveillance",
      "Emergency First-Aid & Fire Training"
    ]
  },
  {
    id: 'facility-mgmt',
    slug: 'facility-management',
    title: "Facility Management",
    shortDescription: "Comprehensive facility management, housekeeping, and corporate maintenance services to keep operations running smoothly.",
    fullDescription: "Maa Shiva Services offers integrated facility management services designed to ensure clean, safe, and highly functional environments for corporate offices, retail hubs, healthcare units, and industrial facilities.\n\nFrom professional housekeeping, electrical maintenance, plumbing support, and pantry management to complete building sanitization and waste disposal, we handle all non-core business activities with top-tier efficiency. Our staff is fully compliant with statutory corporate norms.",
    image: "/facility-sec.jpeg",
    features: [
      "Professional Housekeeping",
      "Electrical & Plumbing Maintenance",
      "Pantry & Corporate Support Staff",
      "Statutorily Compliant Operations"
    ]
  }
];
