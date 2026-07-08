interface CustomCitySEO {
  intro: string;
  approach: string;
  risks: string[];
  needs: string[];
  branchInfo?: string;
}

const customCitiesSEO: Record<string, CustomCitySEO> = {
  ayodhya: {
    intro: "As Ayodhya and Faizabad experience an unprecedented boom in commercial development, tourism, and hospitality projects (especially around the Ram Mandir and new luxury hotel zones), physical safety has become a paramount concern. Local commercial establishments, multi-family residences, and event organizers require a security agency that understands this high-density urban transition.",
    approach: "Operating our corporate headquarters directly from Shakti Vihar Colony, Faizabad, Maa Shiva Services provides localized, rapid-response protection. We deploy PSARA-licensed security guards and elite bouncers trained in crowd control, local layout navigation, and prompt emergency response across Saket College, Faizabad Bypass, Civil Lines, and the temple corridors.",
    risks: [
      "Heavy pilgrim and tourist footfall managing risks around key temple zones.",
      "Vulnerability of newly constructed luxury hotels, retail complexes, and guest houses.",
      "Security challenges at transport hubs like Ayodhya Dham and Faizabad Junctions.",
      "Property and boundary disputes in fast-appreciating commercial zones."
    ],
    needs: [
      "Rigorous crowd control and VIP bouncer deployments for high-profile events.",
      "24/7 static guard presence for retail outlets, hotels, and bank branches.",
      "Patrol units specifically mapped to the Faizabad Bypass and Saket College areas.",
      "Dialect-aligned security personnel trained in local customs and hospitality."
    ],
    branchInfo: "Yes! Our central corporate headquarters is located at 277, Exchange Modha, near Faizabad Railway Station, Shakti Vihar Colony, Ayodhya, providing instant dispatch and under-30-minute rapid backup."
  },
  lucknow: {
    intro: "Lucknow, the sprawling capital of Uttar Pradesh, is a hub of corporate complexes, government departments, upscale IT corridors (such as Gomti Nagar Extension), and luxury residential townships. The security demands here are sophisticated, ranging from tech-enabled gate screening to high-end executive protection.",
    approach: "From our dedicated branch office in Chinhat, we deploy highly trained security guards, front-desk corporate receptionists, and VIP protection details. We cater extensively to the Lucknow-Faizabad Road corridor, Hazratganj commercial centers, Gomti Nagar offices, and residential communities with 24/7 supervisor check-ins.",
    risks: [
      "High-risk corporate theft and unauthorized access in IT parks and office complexes.",
      "Security breaches in sprawling high-rise apartments and residential societies.",
      "Event security challenges during major political, corporate, and cultural gatherings.",
      "Vandalism and vehicle thefts in busy retail zones like Hazratganj."
    ],
    needs: [
      "Smart visitor management and access control for corporate and IT hubs.",
      "24/7 mobile patrol teams for secure residential welfare associations (RWAs).",
      "Bilingual and tech-literate corporate security guards.",
      "Discreet and certified VIP/executive protection bouncers."
    ],
    branchInfo: "Yes! Our Lucknow branch office is situated at Plot No. 217, Faizabad Road, near Maa Vaishno Law College, Anaura, Chinhat, Lucknow, facilitating fast dispatch and regular site supervision."
  },
  basti: {
    intro: "Basti’s role as an industrial, agricultural, and logistics center in Eastern Uttar Pradesh, especially along the National Highway 28 (NH-28) corridor, makes it crucial for warehouses, processing units, and logistics yards to maintain robust asset protection to prevent inventory shrinkage and cargo tampering.",
    approach: "From our branch office in the Basti Industrial Area (Plastic Complex), we manage specialized industrial security systems, inventory gate passes, and perimeter surveillance. Our guards are trained specifically for heavy industries, weighbridges, and warehouse safety.",
    risks: [
      "Logistics and inventory theft in major cold storages and warehouses.",
      "Labor disputes and unauthorized trespass at factories and production yards.",
      "Perimeter breaches at industrial plants on the Basti outskirts.",
      "Vulnerability of trade vehicles along the NH-28 shipping lanes."
    ],
    needs: [
      "Weighbridge and cargo loading-unloading verification procedures.",
      "24/7 perimeter watchmen with intensive night-shift monitoring.",
      "Conflict resolution and access management during labor dispute situations.",
      "Emergency response protocols for industrial fires and machinery incidents."
    ],
    branchInfo: "Yes! We operate a fully staffed branch office at the Plastic Complex, Basti Industrial Area, Basti, ensuring immediate command oversight for local businesses."
  },
  "sant-kabir-nagar": {
    intro: "Sant Kabir Nagar, centered around the industrial and textile hub of Khalilabad, is home to bustling wholesale handloom markets and fast-expanding logistics parks. This concentration of cash trade, warehouses, and raw material stores demands highly alert physical guarding.",
    approach: "Managed directly by our nearby Basti branch office, we deploy specialized retail, warehousing, and cash-transit security guards across Khalilabad and Sant Kabir Nagar, trained to secure logistics hubs and busy marketplace environments.",
    risks: [
      "Inventory theft and shoplifting in high-density markets like the Khalilabad handloom hub.",
      "Fire hazards in textile warehouses storing highly flammable materials.",
      "Cash-in-transit risks for local wholesale merchants and banking units.",
      "Logistical dispatch delays due to chaotic site entry-exit management."
    ],
    needs: [
      "Experienced retail security guards to handle crowd control and shoplifting prevention.",
      "Fire-safety certified guards trained in industrial fire extinguisher usage.",
      "Secure gate-keeping and delivery validation for textile factories.",
      "Under-cover store detectives and high-visibility physical deterrence."
    ],
    branchInfo: "Yes, our Sant Kabir Nagar operations are backed directly by our Basti Branch (Plastic Complex) and Ayodhya Headquarters, deploying rapid patrol units to Khalilabad within minutes."
  },
  gorakhpur: {
    intro: "Gorakhpur is undergoing rapid modernization, fueled by the Gorakhpur Industrial Development Authority (GIDA) expansion, massive retail developments in Golghar, and high religious tourism. Such quick growth attracts rising security challenges for businesses, hospitals, and educational institutions.",
    approach: "We provide comprehensive security deployments for GIDA industrial units, large retail malls, private clinics, and educational hubs in Gorakhpur. Our personnel are backed by our regional supervisors who conduct random night audits to guarantee maximum alertness.",
    risks: [
      "Pilgrim and tourist crowd control challenges near Gorakhnath Temple and Taramandal.",
      "Inventory loss and site breaches at industrial units located in GIDA.",
      "Shoplifting and parking management disputes in premium retail hubs like Golghar.",
      "Trespassing and security threats at educational campuses and private hospitals."
    ],
    needs: [
      "Armed guards for cash counters, financial establishments, and VIP sites.",
      "Industrial safety and loss prevention guards trained for GIDA compliance.",
      "Highly trained parking and entry management staff for commercial centers.",
      "24/7 static and patrol guarding for medical institutes and schools."
    ],
    branchInfo: "Yes! Gorakhpur is a primary service region with dedicated rapid patrol cars and supervisors managed by our nearby Basti regional branch and Ayodhya command headquarters."
  },
  gonda: {
    intro: "Gonda represents a crucial logistics and trading corridor in Devipatan division. Sprawling agricultural mandis, banks, logistical distribution centers, and private educational institutes require professional security to protect property and manage visitors.",
    approach: "Maa Shiva Services deploys highly alert night watchmen, armed guards, and retail security specialists to Gonda. We focus heavily on gate-access control, cash handling safety, and regular communication with our central Ayodhya command station.",
    risks: [
      "Theft and pilferage in busy agricultural trade hubs (Mandis) and warehouses.",
      "Security breaches at remote banking kiosks, ATM centers, and bank branches.",
      "Patient crowd control and access management at healthcare facilities.",
      "Vandalism and trespassing at school and college properties."
    ],
    needs: [
      "Armed security guards for financial institutions and jewelry showrooms.",
      "24/7 security watchmen for logistical depots and warehouses on Gonda-Utraula road.",
      "Access control and gatekeeping to manage high visitor flow in schools and offices.",
      "Emergency response training for warehouse fire safety and asset loss prevention."
    ],
    branchInfo: "Yes! Gonda is fully covered by our Ayodhya Headquarters (located near Faizabad Railway Station), allowing us to dispatch bouncers and guard replacements in less than 45 minutes."
  },
  "ambedkar-nagar": {
    intro: "Ambedkar Nagar, including major hubs like Akbarpur and the industrial zones of Tanda, requires specialized security protocols to safeguard power plants, handloom factories, banks, and commercial properties along the NH-233 highway.",
    approach: "We provide industrial-grade security guards, access gate managers, and corporate security details in Akbarpur and Tanda. Our guards are specifically trained to handle visitor management, gate-pass systems, and emergency evacuation protocols.",
    risks: [
      "Machinery damage and raw material theft in handloom and power sectors of Tanda.",
      "Security vulnerabilities at corporate banks, cash centers, and commercial zones.",
      "Unplanned labor gathering and entry issues at factory sites.",
      "Perimeter breaches at remote telecom towers and commercial properties."
    ],
    needs: [
      "Factory gate-check guards to verify visitor and commercial vehicle logs.",
      "Armed guards for secure banking operations and private installations.",
      "Fire safety and emergency management response units.",
      "Regular night supervisor checks and quick replacement standby guards."
    ],
    branchInfo: "Yes! Ambedkar Nagar operations are managed directly from our Ayodhya Headquarters, ensuring local corporate sites receive rapid guard reinforcements whenever needed."
  },
  sultanpur: {
    intro: "As Sultanpur emerges as a vital commercial, retail, and institutional center in central Uttar Pradesh, protecting retail showrooms, private coaching centers, hospitals, and bank branches from physical threat and theft is critical.",
    approach: "We offer tailored commercial guarding, night watchmen, and entrance screening services across Sultanpur. Our guards are trained to offer customer assistance while maintaining strict security and keeping a close check on suspicious activities.",
    risks: [
      "Shoplifting and rowdy behavior at retail stores and commercial centers.",
      "Security breaches and student crowd control issues at major coaching centers.",
      "ATM vandalism and banking security threats in Sultanpur Junction area.",
      "Vulnerability of inventory at logistical depots on local bypass roads."
    ],
    needs: [
      "Professional uniform-clad security guards for commercial showrooms.",
      "24/7 perimeter guarding for schools, colleges, and healthcare campuses.",
      "Smart entrance log registers and metal detector screening operators.",
      "Quick-response patrol support for cash transit and night-shift security."
    ],
    branchInfo: "Yes, Sultanpur businesses are serviced by our central Ayodhya command center, facilitating round-the-clock supervisor visits and immediate backup guard support."
  },
  barabanki: {
    intro: "Barabanki is a premier industrial and logistics hub adjacent to Lucknow, characterized by vast warehousing parks, cold storages, manufacturing units, and religious landmarks like Dewa Sharif. Securing these massive assets requires comprehensive security planning.",
    approach: "Maa Shiva Services deploys specialized industrial guards, warehouse watchmen, and bouncers to Barabanki. We coordinate with both our Lucknow (Chinhat) branch and Ayodhya headquarters to monitor gate logs, enforce safety checks, and secure assets.",
    risks: [
      "Warehouse inventory theft and transport cargo pilferage on the Faizabad highway.",
      "Labor disputes and unauthorized trespass at factories and logistics complexes.",
      "Visitor control and security management during religious events at Dewa Sharif.",
      "Encroachment and vandalism on vacant commercial lands and industrial plots."
    ],
    needs: [
      "Vigilant warehouse gatekeeping, vehicle log entry, and seal verification.",
      "Industrial safety compliance guards trained in handling chemical/fire hazards.",
      "24/7 mobile patrol teams covering the Lucknow-Barabanki industrial corridor.",
      "Bouncers and crowd management guards for events and VIP security."
    ],
    branchInfo: "Yes! Barabanki is serviced directly by our Lucknow (Chinhat) branch office, which is just a short drive away, allowing us to respond to any urgent deployment within 20 minutes."
  },
  amethi: {
    intro: "Amethi, especially around the major industrial hub of Jagdishpur, hosts key manufacturing, processing, and heavy engineering plants. Protecting raw materials, machinery, and factory personnel is essential for uninterrupted business operations.",
    approach: "We provide highly disciplined industrial security guards, armed watchmen, and executive bouncers in Jagdishpur and Gauriganj. Our guards are trained in factory compliance, shift handovers, and emergency fire drills.",
    risks: [
      "Heavy machinery theft and vandalism at industrial units in Jagdishpur.",
      "Security threats to transit cargo carrying finished manufacturing goods.",
      "Labor union disputes and security issues at industrial manufacturing units.",
      "Trespassing at remote corporate projects and office centers."
    ],
    needs: [
      "Trained security guards capable of managing high-volume industrial gates.",
      "Armed security personnel for factory cash offices and high-value equipment zones.",
      "Regular night supervisor checks and quick-response backup units.",
      "Incident report logging and real-time coordination with managers."
    ],
    branchInfo: "Yes! Amethi and Jagdishpur are fully serviced by our Ayodhya command headquarters, ensuring professional security guards and bouncers are deployed with prompt local backup."
  }
};

const getDeterministicIndex = (str: string, max: number): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % max;
};

export const generateCityContext = (cityName: string, serviceName: string) => {
  const cityKey = cityName.toLowerCase().replace(/\s+/g, '-');
  const customSEO = customCitiesSEO[cityKey];

  if (customSEO) {
    return {
      risks: customSEO.risks,
      needs: customSEO.needs,
      intro: customSEO.intro,
      approach: customSEO.approach
    };
  }

  // Deterministic seed based on city and service name
  const seedKey = `${cityName}-${serviceName}`;
  const introIdx = getDeterministicIndex(seedKey + '-intro', 4);
  const risksIdx = getDeterministicIndex(seedKey + '-risks', 3);
  const approachIdx = getDeterministicIndex(seedKey + '-approach', 3);

  const introTemplates = [
    `As ${cityName} continues to expand its economic and residential footprint in Uttar Pradesh, the demand for highly trained ${serviceName.toLowerCase()} has reached an all-time high. Local businesses and residential welfare associations in ${cityName} are increasingly recognizing that generic security measures are no longer sufficient.`,
    `With rapid commercialization and urban development across the ${cityName} region, securing valuable assets and ensuring personal safety requires professional oversight. Maa Shiva Services offers premium, PSARA-compliant ${serviceName.toLowerCase()} tailored specifically to the unique demographic landscape of ${cityName}.`,
    `The security challenges in ${cityName} have evolved alongside its rapid growth. Standard security measures often fall short, which is why commercial enterprises, residential complexes, and event organizers in ${cityName} are turning to Maa Shiva Services for specialized, military-grade ${serviceName.toLowerCase()}.`,
    `As a major hub in Uttar Pradesh, ${cityName} experiences unique security demands ranging from crowd management to asset protection. We deploy highly trained personnel equipped to provide top-tier ${serviceName.toLowerCase()} across all commercial and residential zones of ${cityName}.`
  ];

  const riskTemplatesPool = [
    [
      `Rising commercial property disputes and unauthorized trespass in ${cityName}`,
      `Increased footfall and logistics security challenges in ${cityName}'s major business districts`,
      `Vulnerability of industrial assets and warehouse yards on the outskirts of ${cityName}`,
      `High-profile event crowd control and access management challenges in ${cityName}`
    ],
    [
      `Theft and pilferage risks in high-density retail markets and showrooms across ${cityName}`,
      `Vulnerability of commercial office spaces and IT complexes in ${cityName} to security breaches`,
      `Asset loss and vandalism in residential welfare associations (RWAs) in ${cityName}`,
      `Logistical shipping delays due to unmonitored gate entry and exit points in ${cityName}`
    ],
    [
      `Security vulnerabilities at remote banking sites, cash counters, and showrooms in ${cityName}`,
      `Labor coordination and access management issues at construction and industrial sites in ${cityName}`,
      `Unmanaged visitor flow and vehicle parking disputes in busy commercial hubs of ${cityName}`,
      `Fire watch and safety hazards in textile or raw material warehouses in the ${cityName} district`
    ]
  ];

  const needTemplatesPool = [
    [
      `Stringent access control for ${cityName} corporate offices`,
      `24/7 surveillance for ${cityName} residential complexes`,
      `Rapid response deployment across ${cityName}`,
      `Specialized guard training localized to ${cityName} dialects and norms`
    ],
    [
      `Vigilant retail security guards to handle crowd control and shoplifting prevention in ${cityName}`,
      `Access control and gatekeeping to manage high visitor flow in schools and offices in ${cityName}`,
      `24/7 mobile patrol teams covering commercial and residential zones of ${cityName}`,
      `Discreet and certified VIP/executive protection bouncers for events in ${cityName}`
    ],
    [
      `Factory gate-check guards to verify visitor and commercial vehicle logs in ${cityName}`,
      `Industrial safety compliance guards trained in handling fire hazards in ${cityName}`,
      `Armed security guards for secure banking operations and private installations in ${cityName}`,
      `Incident report logging and real-time coordination with managers in ${cityName}`
    ]
  ];

  const approachTemplates = [
    `Maa Shiva Services understands the unique topography and demographic challenges of ${cityName}. Our personnel are not just trained in advanced security protocols, but are also deeply familiar with ${cityName}'s local environment. We provide:`,
    `Our security solutions in ${cityName} are designed with local intelligence and operational excellence in mind. We deploy specialized security personnel who are familiar with the geography and customs of ${cityName}, providing:`,
    `We adapt our security methodologies to align with ${cityName}'s rapid developmental changes. By blending modern technology, PSARA standards, and locally aware guards, we deliver:`
  ];

  return {
    risks: riskTemplatesPool[risksIdx],
    needs: needTemplatesPool[risksIdx], 
    intro: introTemplates[introIdx],
    approach: approachTemplates[approachIdx]
  };
};

export const generateServiceFAQs = (serviceName: string, cityName?: string) => {
  const locationText = cityName ? ` in ${cityName}` : '';
  const providerText = cityName ? `Maa Shiva Services is the leading provider of ${serviceName.toLowerCase()}${locationText}. ` : '';

  const faqs = [
    {
      question: `What is included in your ${serviceName.toLowerCase()}${locationText}?`,
      answer: `${providerText}Our ${serviceName.toLowerCase()} include comprehensive risk assessment, deployment of trained personnel, 24/7 monitoring, and rapid emergency response tailored to your specific requirements.`
    },
    {
      question: `Are your security personnel trained for high-risk situations${locationText}?`,
      answer: `Yes, all our guards undergo rigorous physical and tactical training. Depending on the tier of service, this includes fire safety, crowd control, first aid, and conflict de-escalation.`
    },
    {
      question: `How much do ${serviceName.toLowerCase()} cost${locationText}?`,
      answer: `The cost of ${serviceName.toLowerCase()}${locationText} depends on the scale of deployment, whether the guards are armed or unarmed, and the specific risk profile of the site. Contact us for a customized quote.`
    },
    {
      question: `Do you provide customized security plans${locationText}?`,
      answer: `Absolutely. We conduct a thorough audit of your premises before deploying our ${serviceName.toLowerCase()} to ensure every vulnerability is addressed.`
    }
  ];

  if (cityName) {
    const cityKey = cityName.toLowerCase().replace(/\s+/g, '-');
    const customSEO = customCitiesSEO[cityKey];
    if (customSEO?.branchInfo) {
      faqs.push({
        question: `Do you have a physical branch or rapid response support in ${cityName}?`,
        answer: customSEO.branchInfo
      });
    }
  }

  return faqs;
};

import { upCities } from '@/data/citiesData';

export const generateCustomCityMetadata = (citySlug: string, serviceTitle: string, cityName: string) => {
  const serviceLower = serviceTitle.toLowerCase();
  const cityObj = upCities.find(c => c.slug === citySlug);
  const cityAlias = cityObj?.alias;
  
  const metadataMap: Record<string, { title: string; description: string }> = {
    ayodhya: {
      title: `Best ${serviceTitle} in Ayodhya (Faizabad) | Security Agency`,
      description: `Need professional ${serviceLower} in Ayodhya or Faizabad, UP? Maa Shiva Services offers PSARA-licensed guards and bouncers near Saket College and Faizabad Railway Station. Contact us for a free audit.`
    },
    prayagraj: {
      title: `Best ${serviceTitle} in Prayagraj (Allahabad) | Security Agency`,
      description: `Need professional ${serviceLower} in Prayagraj or Allahabad, UP? Maa Shiva Services offers PSARA-certified security guards and elite bouncers. Contact us today.`
    },
    lucknow: {
      title: `Best ${serviceTitle} in Lucknow | Security Guard Company`,
      description: `Hire licensed ${serviceLower} in Lucknow, Uttar Pradesh. Maa Shiva Services offers top-tier security for offices and residences in Gomti Nagar, Chinhat, and Hazratganj.`
    },
    basti: {
      title: `Best ${serviceTitle} in Basti | Licensed Security Agency`,
      description: `Get reliable ${serviceLower} in Basti, UP. We secure factories, warehouses, and commercial sites in Basti Industrial Area and along NH-28. PSARA Certified.`
    },
    'sant-kabir-nagar': {
      title: `Best ${serviceTitle} in Sant Kabir Nagar (Khalilabad) | Security Company`,
      description: `Protect your enterprise in Sant Kabir Nagar, UP. Maa Shiva Services provides elite ${serviceLower} for Khalilabad handloom markets, textile warehouses, and retail sectors.`
    },
    gorakhpur: {
      title: `Best ${serviceTitle} in Gorakhpur | Elite Security Services`,
      description: `Top-rated ${serviceLower} in Gorakhpur, UP. Secure your GIDA industrial plants, Golghar showrooms, and clinical centers with PSARA-licensed guards.`
    },
    gonda: {
      title: `Best ${serviceTitle} in Gonda | Security Guard Services`,
      description: `Hire highly trained ${serviceLower} in Gonda, Uttar Pradesh. Secure warehouses, logistics depots, educational campuses, and banks near Gonda Junction.`
    },
    'ambedkar-nagar': {
      title: `Best ${serviceTitle} in Ambedkar Nagar (Akbarpur) | Security Agency`,
      description: `Professional ${serviceLower} in Ambedkar Nagar, UP. Secure factories, industrial sites, and infrastructure in Akbarpur and Tanda. 24/7 supervisor command.`
    },
    sultanpur: {
      title: `Best ${serviceTitle} in Sultanpur | Private Security Agency`,
      description: `Trusted ${serviceLower} in Sultanpur, UP. Deploy certified guards for retail showrooms, private coaching centers, and banks near Sultanpur Junction.`
    },
    barabanki: {
      title: `Best ${serviceTitle} in Barabanki | Security Guard Services`,
      description: `Hire professional ${serviceLower} in Barabanki, UP. Spanning Barabanki Industrial Area, Dewa Sharif, and warehouses along the Lucknow-Faizabad highway.`
    },
    amethi: {
      title: `Best ${serviceTitle} in Amethi (Jagdishpur) | Security Company`,
      description: `Optimize site safety in Amethi, UP. Maa Shiva Services delivers certified ${serviceLower} for Jagdishpur heavy industries, manufacturing plants, and events.`
    }
  };

  if (metadataMap[citySlug]) {
    return metadataMap[citySlug];
  }

  const titleText = cityAlias 
    ? `Top ${serviceTitle} in ${cityName} (${cityAlias}), UP | Maa Shiva Services`
    : `Top ${serviceTitle} in ${cityName}, UP | Maa Shiva Services`;

  const descText = cityAlias
    ? `Looking for reliable ${serviceLower} in ${cityName} or ${cityAlias}, Uttar Pradesh? Maa Shiva Services provides elite protection, 24/7 surveillance, and highly trained guards.`
    : `Looking for reliable ${serviceLower} in ${cityName}, Uttar Pradesh? Maa Shiva Services provides elite protection, 24/7 surveillance, and highly trained guards tailored to ${cityName}'s security landscape.`;

  return {
    title: titleText,
    description: descText
  };
};
