export interface CityType {
  name: string;
  slug: string;
  division: string;
  alias?: string;
}

export const primaryCities: CityType[] = [
  { name: 'Faizabad / Ayodhya', slug: 'ayodhya', division: 'Ayodhya' },
  { name: 'Basti', slug: 'basti', division: 'Basti' },
  { name: 'Sant Kabir Nagar', slug: 'sant-kabir-nagar', division: 'Basti' },
  { name: 'Gorakhpur', slug: 'gorakhpur', division: 'Gorakhpur' },
  { name: 'Gonda', slug: 'gonda', division: 'Devipatan' },
  { name: 'Ambedkar Nagar', slug: 'ambedkar-nagar', division: 'Ayodhya' },
  { name: 'Sultanpur', slug: 'sultanpur', division: 'Ayodhya' },
  { name: 'Barabanki', slug: 'barabanki', division: 'Lucknow' },
  { name: 'Lucknow', slug: 'lucknow', division: 'Lucknow' },
  { name: 'Amethi', slug: 'amethi', division: 'Ayodhya' },
];

export const upCities: CityType[] = [
  // Lucknow Division
  { name: 'Lucknow', slug: 'lucknow', division: 'Lucknow' },
  { name: 'Barabanki', slug: 'barabanki', division: 'Lucknow' },
  
  // Kanpur Division
  { name: 'Kanpur', slug: 'kanpur', division: 'Kanpur' },
  
  // Meerut Division
  { name: 'Meerut', slug: 'meerut', division: 'Meerut' },
  { name: 'Noida', slug: 'noida', division: 'Meerut' },
  { name: 'Ghaziabad', slug: 'ghaziabad', division: 'Meerut' },
  
  // Bareilly Division
  { name: 'Bareilly', slug: 'bareilly', division: 'Bareilly' },
  
  // Aligarh Division
  { name: 'Aligarh', slug: 'aligarh', division: 'Aligarh' },
  
  // Moradabad Division
  { name: 'Moradabad', slug: 'moradabad', division: 'Moradabad' },
  
  // Saharanpur Division
  { name: 'Saharanpur', slug: 'saharanpur', division: 'Saharanpur' },
  { name: 'Muzaffarnagar', slug: 'muzaffarnagar', division: 'Saharanpur' },
  
  // Jhansi Division
  { name: 'Jhansi', slug: 'jhansi', division: 'Jhansi' },
  
  // Agra Division
  { name: 'Agra', slug: 'agra', division: 'Agra' },
  { name: 'Mathura', slug: 'mathura', division: 'Agra' },
  { name: 'Firozabad', slug: 'firozabad', division: 'Agra' },

  // Ayodhya Division
  { name: 'Ayodhya', slug: 'ayodhya', division: 'Ayodhya', alias: 'Faizabad' },
  { name: 'Ambedkar Nagar', slug: 'ambedkar-nagar', division: 'Ayodhya' },
  { name: 'Amethi', slug: 'amethi', division: 'Ayodhya' },
  { name: 'Sultanpur', slug: 'sultanpur', division: 'Ayodhya' },
  
  // Gorakhpur Division
  { name: 'Gorakhpur', slug: 'gorakhpur', division: 'Gorakhpur' },
  { name: 'Deoria', slug: 'deoria', division: 'Gorakhpur' },
  { name: 'Kushinagar', slug: 'kushinagar', division: 'Gorakhpur' },
  { name: 'Maharajganj', slug: 'maharajganj', division: 'Gorakhpur' },

  // Varanasi Division
  { name: 'Varanasi', slug: 'varanasi', division: 'Varanasi' },
  { name: 'Chandauli', slug: 'chandauli', division: 'Varanasi' },
  { name: 'Ghazipur', slug: 'ghazipur', division: 'Varanasi' },
  { name: 'Jaunpur', slug: 'jaunpur', division: 'Varanasi' },

  // Azamgarh Division
  { name: 'Azamgarh', slug: 'azamgarh', division: 'Azamgarh' },
  { name: 'Ballia', slug: 'ballia', division: 'Azamgarh' },
  { name: 'Mau', slug: 'mau', division: 'Azamgarh' },

  // Basti Division
  { name: 'Basti', slug: 'basti', division: 'Basti' },
  { name: 'Sant Kabir Nagar', slug: 'sant-kabir-nagar', division: 'Basti' },
  { name: 'Siddharth Nagar', slug: 'siddharth-nagar', division: 'Basti' },

  // Devipatan Division
  { name: 'Gonda', slug: 'gonda', division: 'Devipatan' },
  { name: 'Bahraich', slug: 'bahraich', division: 'Devipatan' },
  { name: 'Balrampur', slug: 'balrampur', division: 'Devipatan' },
  { name: 'Shravasti', slug: 'shravasti', division: 'Devipatan' },

  // Prayagraj Division
  { name: 'Prayagraj', slug: 'prayagraj', division: 'Prayagraj', alias: 'Allahabad' },
  { name: 'Kaushambi', slug: 'kaushambi', division: 'Prayagraj' },
  { name: 'Pratapgarh', slug: 'pratapgarh', division: 'Prayagraj' },
  { name: 'Fatehpur', slug: 'fatehpur', division: 'Prayagraj' },

  // Mirzapur Division
  { name: 'Mirzapur', slug: 'mirzapur', division: 'Mirzapur' },
  { name: 'Sonbhadra', slug: 'sonbhadra', division: 'Mirzapur' },
  { name: 'Bhadohi', slug: 'bhadohi', division: 'Mirzapur' }
];
