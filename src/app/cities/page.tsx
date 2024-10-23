'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Use Next.js Head component for meta tags
import VariableHero from '@/components/VariableHero';
import { coachellaValleyCities, City } from '@/constants/citiesArray'; // Import the cities array and City type
import CityCard from '@/components/CityCard'; // Adjusted path to use alias
import { citiesPageContent } from '@/constants/staticContent'; // Import the static content
import { SeoData, fetchSeoData } from '@/utils/fetchSeoData'; // Import SEO fetch function and SeoData type

const Cities: React.FC = () => {
  const [seoData, setSeoData] = useState<SeoData | null>(null);

  // Find the corresponding city object for Coachella Valley
  const city: City | undefined = coachellaValleyCities.find(
    (c) => c.id === citiesPageContent.hero.cityId
  );

  // Fetch SEO data dynamically
  useEffect(() => {
    const fetchSeo = async () => {
      if (city) {
        const seo = await fetchSeoData('city', city.id, citiesPageContent.hero.backgroundImage);
        setSeoData(seo);
      }
    };

    fetchSeo();
  }, [city]);

  if (!city) {
    return (
      <div className="text-red-500 text-center">
        {citiesPageContent.cityNotFound}
      </div>
    ); // Handle case where city is not found
  }

  return (
    <>
      {/* Use Next.js Head component for meta tags */}
      <Head>
        <title>{seoData?.title || 'Coachella Valley Service Areas'}</title>
        <meta
          name="description"
          content={
            seoData?.description ||
            'Explore our wide range of handyman services across various cities in the Coachella Valley. Contact us today to find the right service for your area.'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={seoData?.ogTitle || 'Handyman Services in the Coachella Valley'} />
        <meta
          property="og:description"
          content={
            seoData?.ogDescription || 'Discover expert handyman services across the Coachella Valley. Contact us today for reliable service in your city.'
          }
        />
        <meta property="og:image" content={seoData?.ogImage || citiesPageContent.hero.backgroundImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData?.ogUrl || 'https://coachellavalleyhandyman.com/cities'} />
        <meta name="robots" content="index, follow" />
      </Head>

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
