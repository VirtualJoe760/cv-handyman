import React from 'react';
import ServicesHero from '@/components/ServicesHero';
import ServicesList from '@/components/ServicesList';
import { allServices } from '@/constants/allServices';
import { Metadata } from 'next';

// Generate metadata for the Our Services page
export const generateMetadata = (): Metadata => {
  const topServiceKeywords = allServices.map((service) => service.service).slice(0, 5);

  return {
    title: 'Our Services - Coachella Valley Handyman',
    description: 'Explore the wide range of handyman services offered by Coachella Valley Handyman. From repairs to remodeling, we handle it all with care and expertise.',
    keywords: [
      'handyman', 
      'Coachella Valley', 
      'home improvement', 
      'repair services', 
      'maintenance', 
      ...topServiceKeywords,
    ],
    openGraph: {
      title: 'Expert Handyman Services | Coachella Valley Handyman',
      description: 'Providing expert handyman services across Coachella Valley.',
      url: 'https://coachellavalleyhandyman.com/our-services',
      images: [
        {
          url: 'https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/general-handyman.jpg',
          alt: 'Coachella Valley Handyman',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Handyman Services | Coachella Valley Handyman',
      description: 'Providing expert handyman services across Coachella Valley.',
      images: ['https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/general-handyman.jpg'],
    },
  };
};

const OurServicesPage: React.FC = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList isCityPage={false} />
    </>
  );
};

export default OurServicesPage;
