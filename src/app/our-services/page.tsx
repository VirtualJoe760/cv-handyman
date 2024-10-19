import React from 'react';
import ServicesHero from '@/components/ServicesHero'; // Adjusted path to use alias
import ServicesList from '@/components/ServicesList'; // Adjusted path to use alias

const OurServicesPage: React.FC = () => {
  return (
    <>
      <ServicesHero />
      {/* Pass the required 'isCityPage' prop */}
      <ServicesList isCityPage={false} /> {/* Set to false since this is not a city-specific page */}
    </>
  );
};

export default OurServicesPage;
