'use client';

import React, { ReactNode } from 'react';
import VariableHero from '@/components/VariableHero';
import { coachellaValleyCities } from '@/constants/citiesArray'; // Import your updated cities array
import { usePathname } from 'next/navigation';
import Reviews from '@/app/components/Reviews';
import ServicesList from '@/app/components/ServicesList';

// Define the City type to ensure proper type checking
interface City {
  name: string;
  population: number;
  id: string;
  heading: string;
  description: string;
  body: string;
}

const Cities: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname(); // Get the current path
  const lastFolder = pathname.split('/').pop(); // Extract the last segment from the path
  
  // Find the corresponding city object based on the last folder
  const city: City | undefined = coachellaValleyCities.find((c) => c.id === lastFolder);

  if (!city) {
    return <div className="text-red-500 text-center">City not found</div>; // Handle case where city is not found
  }

  const backgroundImagePath = `/images/city-images/${city.id}.jpg`; // Path to the city's background image

  return (
    <div>
      <VariableHero
        backgroundImage={backgroundImagePath}
        serviceName={city.name} // City name to be displayed in the hero
        description={city.description} // City description to be displayed in the hero
      />
      <section className="mx-5 md:mx-32 xl:mx-64 xl:px-64 lg:mx-40 lg:px-40 my-10 py-10 px-2">
        <h1 className="py-10 text-6xl">{city.heading}</h1>
        <h2 className="text-2xl ml-5">Population: {city.population}</h2>
        <p className="ml-5 py-10 text-3xl justify-start leading-loose">{city.body}</p>
      </section>
      <ServicesList city={city.name} isCityPage={true} /> {/* Pass city name and isCityPage prop */}
      <Reviews />
    </div>
  );
};

export default Cities;
