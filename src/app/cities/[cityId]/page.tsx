import React from 'react';
import VariableHero from '@/components/VariableHero';
import { coachellaValleyCities } from '@/constants/citiesArray';
import ServicesList from '@/app/components/ServicesList';
import Reviews from '@/app/components/Reviews';

// Define the types for city
export interface City {
  id: string;
  name: string;
  description: string;
  heading: string;
  population: number;
  body: string;
}

interface Params {
  cityId: string;
}

const CityPage: React.FC<{ params: Params }> = ({ params }) => {
  const { cityId } = params;

  // Find the corresponding city object
  const city = coachellaValleyCities.find((c) => c.id === cityId);

  if (!city) {
    return (
      <div>
        <p>City not found</p>
        <a href="/cities" className="text-blue-500 hover:underline">
          Go back to cities
        </a>
      </div>
    );
  }

  const backgroundImagePath = `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${city.id}.jpg`;

  return (
    <>
      <VariableHero
        backgroundImage={backgroundImagePath}
        serviceName={city.name}
        description={city.description}
      />

      <section className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <h1 className="py-10 text-6xl">{city.heading}</h1>
        <h2 className="text-2xl ml-5">Population: {city.population}</h2>
        <p className="ml-5 py-10 text-3xl justify-start leading-loose">{city.body}</p>
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
