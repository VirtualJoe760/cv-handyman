'use client';

import React from 'react';
import VariableHero from '../components/VariableHero';
import { coachellaValleyCities } from '@/constants/citiesArray'; // Import your updated cities array
import CityCard from '../components/CityCard'; // Import the CityCard component

const Cities: React.FC = () => {
  const backgroundImagePath = `/images/city-images/coachella-valley.jpg`; // Static path to the valley's background image

  // Find the corresponding city object for Coachella Valley
  const city = coachellaValleyCities.find((c) => c.id === "coachella-valley");

  if (!city) {
    return <div className="text-red-500 text-center">City not found</div>; // Handle case where city is not found
  }

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
        <p className="ml-5 py-10 text-4xl justify-start leading-loose">{city.body}</p> {/* Increased size of the paragraph */}
      </section>

      {/* Cities List Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-5xl md:pb-8 font-bold text-black sm:text-6xl">Our Service Areas here in the Coachella Valley</h1> {/* Changed to h1 and increased font size */}
            <p className="mt-2 text-2xl leading-8 text-black">
              We proudly offer handyman services in the following cities. Please note that we charge a $99 service fee, which will be applied towards your bill, before arriving at your home.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {coachellaValleyCities
                .filter(city => city.id !== "coachella-valley") // Exclude Coachella Valley from the list
                .map((city) => (
                  <CityCard key={city.id} city={city} /> // Use the CityCard component
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
