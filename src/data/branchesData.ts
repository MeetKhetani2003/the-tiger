export interface BranchType {
  slug: string;
  name: string;
  shortName: string;
  address: string;
  rawAddress: string;
  city: string;
  postalCode: string;
  telephone: string;
  email: string;
  mapEmbedUrl: string;
  mapDirectionUrl: string;
  seoTitle: string;
  seoDescription: string;
  localIntro: string;
  latitude: string;
  longitude: string;
}

export const branchesData: BranchType[] = [
  {
    slug: "ayodhya",
    name: "MAA SHIVA SERVICES PVT. LTD. (Ayodhya Headquarters)",
    shortName: "Ayodhya Headquarters",
    address: "277, Exchange Modha, Near Faizabad Railway Station, Faizabad, Ayodhya, Uttar Pradesh 224001",
    rawAddress: "277 xchange modha near faizabad relway station, Faizabad ayodhya, Uttar Pradesh 224001",
    city: "Ayodhya",
    postalCode: "224001",
    telephone: "+919415610453",
    email: "info@maashivaservices.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.85404455434!2d82.1264259!3d26.7820617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07ef3f2a1b1d%3A0xe54e6ac2f57b6f6f!2sMAA%20SHIVA%20SERIVCES%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1716768000000!5m2!1sen!2sin",
    mapDirectionUrl: "https://maps.app.goo.gl/enMoXp57LSQ3Tzjx9",
    seoTitle: "Security Guard Agency in Ayodhya | Maa Shiva Services Pvt. Ltd.",
    seoDescription: "Need a premium security agency in Ayodhya & Faizabad? Visit our corporate headquarters for PSARA licensed security guard and bouncer deployments.",
    localIntro: "Maa Shiva Services Pvt. Ltd. operates its central command headquarters from Ayodhya (Faizabad). We coordinate state-wide deployments, physical risk audits, and immediate command escalations directly from this center.",
    latitude: "26.7820617",
    longitude: "82.1264259"
  },
  {
    slug: "lucknow",
    name: "MAA SHIVA SERVICES PVT. LTD. (Lucknow Branch)",
    shortName: "Lucknow Branch Office",
    address: "Plot No. 217, Faizabad Road, Near Maa Vaishno Law College, Anaura, Chinhat, Lucknow, Uttar Pradesh 226028",
    rawAddress: "Plot no 217, Faizabad Rd, near maa vishano law collage, anaura, Chinhat, Lucknow, Uttar Pradesh 226028",
    city: "Lucknow",
    postalCode: "226028",
    telephone: "+919415610453",
    email: "lucknow@maashivaservices.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1158661899144!2d81.0456121!3d26.8998822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be276f5555555%3A0x6b8b0e8b8b8b8b8b!2sFaizabad%20Rd%2C%20Chinhat%2C%20Lucknow%2C%20Uttar%20Pradesh%20226028!5e0!3m2!1sen!2sin!4v1716768000000!5m2!1sen!2sin",
    mapDirectionUrl: "https://maps.google.com/?q=Plot+no+217,+Faizabad+Rd,+Chinhat,+Lucknow",
    seoTitle: "Best Security Guard Services in Lucknow | Maa Shiva Services",
    seoDescription: "Looking for top security guard services in Lucknow? Maa Shiva Services Lucknow branch provides PSARA licensed office, event, and corporate security.",
    localIntro: "Our Lucknow branch office provides localized, rapid-response security coverage for the capital city's corporate parks, government offices, IT zones, and residential hubs.",
    latitude: "26.8998822",
    longitude: "81.0456121"
  },
  {
    slug: "basti",
    name: "MAA SHIVA SERVICES PVT. LTD. (Basti Branch)",
    shortName: "Basti Branch Office",
    address: "Plastic Complex, Basti Industrial Area, Basti, Uttar Pradesh 272008",
    rawAddress: "Plastic Complex, Basti Industrial Area, Basti, Uttar Pradesh 272008",
    city: "Basti",
    postalCode: "272008",
    telephone: "+919415610453",
    email: "basti@maashivaservices.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4149635032585!2d82.7212456!3d26.8048259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990e5aaaaaa5555%3A0x7b7b7b7b7b7b7b7b!2sBasti%20Industrial%20Area%2C%20Basti%2C%20Uttar%20Pradesh%20272008!5e0!3m2!1sen!2sin!4v1716768000000!5m2!1sen!2sin",
    mapDirectionUrl: "https://maps.google.com/?q=Plastic+Complex,+Basti+Industrial+Area,+Basti",
    seoTitle: "Security Guard Agency in Basti | Maa Shiva Services Pvt. Ltd.",
    seoDescription: "Searching for high-quality security services in Basti? Contact Maa Shiva Services Basti branch for factory, warehousing, and commercial guard deployments.",
    localIntro: "Serving the industrial sector of Basti, our branch office focuses heavily on loss prevention, labor dispute security, weighbridge monitoring, and warehousing site surveillance.",
    latitude: "26.8048259",
    longitude: "82.7212456"
  }
];
