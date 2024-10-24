import React from 'react';
import VariableHero from '@/components/VariableHero';
import { coachellaValleyCities, City } from '@/constants/citiesArray'; // Import the cities array and City type
import CityCard from '@/components/CityCard'; // Adjusted path to use alias
import { citiesPageContent } from '@/constants/staticContent'; // Import the static content
import { Metadata } from 'next';

interface CityPageProps {
  params: {
    cityId: string;
  };
}

// Generate metadata for the Cities page
export const generateMetadata = ({ params }: CityPageProps): Metadata => {
  const city = coachellaValleyCities.find((c) => c.id === params.cityId);

  if (!city) {
    return {
      title: 'Coachella Valley Service Areas',
      description: 'Explore our wide range of handyman services across various cities in the Coachella Valley. Contact us today to find the right service for your area.',
      openGraph: {
        title: 'Handyman Services in the Coachella Valley',
        description: 'Discover expert handyman services across the Coachella Valley. Contact us today for reliable service in your city.',
        images: [
          {
            url: citiesPageContent.hero.backgroundImage,
            alt: 'Coachella Valley Handyman',
          },
        ],
        url: 'https://coachellavalleyhandyman.com/cities',
      },
    };
  }

  return {
    title: `${city.name} - Coachella Valley Handyman Services`,
    description: city.description,
    openGraph: {
      title: city.heading,
      description: city.description,
      images: [
        {
          url: `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${city.id}.jpg`,
          alt: city.name,
        },
      ],
      url: `https://coachellavalleyhandyman.com/cities/${city.id}`,
    },
  };
};

const Cities: React.FC = () => {
  const city = coachellaValleyCities.find(
    (c) => c.id === citiesPageContent.hero.cityId
  );

  if (!city) {
    return (
      <div className="text-red-500 text-center">
        {citiesPageContent.cityNotFound}
      </div>
    ); // Handle case where city is not found
  }

  return (
    <>
      {/* Hero Section */}
      <VariableHero
        backgroundImage={citiesPageContent.hero.backgroundImage}
        serviceName={city.name} // City name to be displayed in the hero
        description={city.description} // City description to be displayed in the hero
      />

      {/* Main city details section */}
      <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <h1 className="py-10 text-6xl">{city.heading}</h1>
        <h2 className="text-2xl ml-5">Population: {city.population}</h2>
        <p className="ml-5 py-10 text-2xl justify-start leading-loose">{city.body}</p>
      </section>

      {/* Cities List Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl pb-8 text-black sm:text-6xl">
              {citiesPageContent.sections.serviceAreas.heading}
            </h1>
            <p className="mt-5 text-xl leading-8 text-black">
              {citiesPageContent.sections.serviceAreas.description}
            </p>

            {/* City cards for each service area */}
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {coachellaValleyCities
                .filter(city => city.id !== citiesPageContent.hero.cityId) // Exclude Coachella Valley from the list
                .map((city) => (
                  <CityCard key={city.id} city={city} /> // Use the CityCard component
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cities;
