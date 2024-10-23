import React from 'react';
import Head from 'next/head'; // Import the Head component for meta tags
import ServicesHero from '@/components/ServicesHero'; // Adjusted path to use alias
import ServicesList from '@/components/ServicesList'; // Adjusted path to use alias
import { fetchSeoData } from '@/utils/fetchSeoData'; // Import the SEO fetch function

const OurServicesPage: React.FC = async () => {
  // Fetch SEO data for the general handyman service
  const seoData = await fetchSeoData(
    'service',
    'general-handyman',
    'https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/general-handyman.jpg'
  );

  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>{seoData?.title || 'Coachella Valley Handyman - General Handyman Services'}</title>
        <meta
          name="description"
          content={
            seoData?.description ||
            'Coachella Valley Handyman provides general handyman services for all your home repair and maintenance needs.'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={seoData?.ogTitle || 'General Handyman Services | Coachella Valley Handyman'} />
        <meta
          property="og:description"
          content={
            seoData?.ogDescription ||
            'From repairs to home improvement, we offer expert general handyman services to residents in the Coachella Valley.'
          }
        />
        <meta
          property="og:image"
          content={
            seoData?.ogImage ||
            'https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/general-handyman.jpg'
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData?.ogUrl || 'https://coachellavalleyhandyman.com/our-services'} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Page Content */}
      <ServicesHero />
      <ServicesList isCityPage={false} /> {/* Set to false since this is not a city-specific page */}
    </>
  );
};

export default OurServicesPage;
