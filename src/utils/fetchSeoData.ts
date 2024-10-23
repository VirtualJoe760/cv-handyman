import { allServices } from '@/constants/allServices';
import { coachellaValleyCities, City } from '@/constants/citiesArray'; // Ensure correct imports

// Define the interface for SEO data
export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
}

// Helper function to find city SEO data
const findCitySeoData = (cityId: string) => {
  const city: City | undefined = coachellaValleyCities.find(c => c.id === cityId);
  if (city) {
    return {
      title: `${city.name} - ${city.heading}`,
      description: city.description,
      // Combine main and secondary keywords for cities
      keywords: [...city.keywords.main, ...city.keywords.secondary],
      ogTitle: city.heading,
      ogDescription: city.description,
      ogImage: `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${city.id}.jpg`, // City-specific OG image
      ogUrl: `https://coachellavalleyhandyman.com/cities/${city.id}`,
    };
  }
  return null;
};

// Helper function to find service SEO data
const findServiceSeoData = (serviceId: string) => {
  const service = allServices.find(s => s.id === serviceId);
  if (service) {
    return {
      title: `${service.service} - ${service.heading}`,
      description: service.description,
      // Use keywords directly for services
      keywords: service.keywords,
      ogTitle: service.heading,
      ogDescription: service.description,
      ogImage: `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${serviceId}.jpg`, // Service-specific OG image
      ogUrl: `https://coachellavalleyhandyman.com/services/${service.id}`,
    };
  }
  return null;
};

// Main fetchSeoData function
export async function fetchSeoData(
  pageType: 'city' | 'service',
  pageId: string,
  heroImageUrl?: string // Optional parameter for VariableHero's image
): Promise<SeoData | null> {
  if (pageType === 'city') {
    const citySeo = findCitySeoData(pageId);
    if (citySeo) {
      return {
        ...citySeo,
        ogImage: heroImageUrl || citySeo.ogImage, // Use VariableHero image or default OG image
      };
    }
  } else if (pageType === 'service') {
    const serviceSeo = findServiceSeoData(pageId);
    if (serviceSeo) {
      return {
        ...serviceSeo,
        ogImage: heroImageUrl || serviceSeo.ogImage, // Use VariableHero image or default OG image
      };
    }
  }
  return null; // Return null if no SEO data is found
}
