import React from 'react';
import VariableHero from '@/components/VariableHero';
import { coachellaValleyCities } from '@/constants/citiesArray';
import ServicesList from '@/app/components/ServicesList';
import Reviews from '@/app/components/Reviews';
import { cityPageContent } from '@/constants/staticContent'; // Import the static content
import { Metadata } from 'next'; // Use Next.js metadata for SEO

// Define the types for city
export interface City {
  id: string;
  name: string;
  description: string;
  heading: string;
  population: number;
  body: string;
  keywords: {
    main: string[];
    secondary: string[];
  };
}

interface Params {
  cityId: string;
}

// Dynamic metadata function
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { cityId } = params;

  // Find the corresponding city object
  const city = coachellaValleyCities.find((c) => c.id === cityId);

  if (!city) {
    return {
      title: 'City Not Found - Coachella Valley Handyman',
      description: 'The city you are looking for does not exist.',
    };
  }

  const backgroundImagePath = `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${city.id}.jpg`;

  return {
    title: `${city.name} | Coachella Valley Handyman Services`,
    description: city.description,
    keywords: [...city.keywords.main, ...city.keywords.secondary],
    openGraph: {
      title: city.heading,
      description: city.description,
      images: [backgroundImagePath],
      url: `https://coachellavalleyhandyman.com/cities/${cityId}`,
    },
  };
}

const CityPage: React.FC<{ params: Params }> = ({ params }) => {
  const { cityId } = params;

  // Find the corresponding city object
  const city = coachellaValleyCities.find((c) => c.id === cityId);

  if (!city) {
    return (
      <div>
        <p>{cityPageContent.cityNotFound.message}</p> {/* Fallback content */}
        <a href="/cities" className="text-blue-500 hover:underline">
          {cityPageContent.cityNotFound.backToCities}
        </a>
      </div>
    );
  }

  const backgroundImagePath = `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${city.id}.jpg`;

  return (
    <>
      {/* Hero Section */}
      <VariableHero
        backgroundImage={backgroundImagePath}
        serviceName={city.name}
        description={city.description}
      />

      {/* City information section */}
      <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <h1 className="py-10 text-6xl">{city.heading}</h1>
        <h2 className="text-2xl ml-5">Population: {city.population}</h2>
        <p className="ml-5 py-10 text-2xl justify-start leading-loose">{city.body}</p>
      </section>

      {/* Display the list of services */}
      <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <ServicesList isCityPage={true} cityId={cityId} />
      </section>

      {/* Display reviews */}
      <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <Reviews />
      </section>
    </>
  );
};

export default CityPage;
