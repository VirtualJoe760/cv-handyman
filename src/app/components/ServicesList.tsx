'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Correct import for App Router
import { allServices } from '@/constants/allServices'; // Using alias for better pathing
import { coachellaValleyCities } from '@/constants/citiesArray'; // Import the cities array

interface Service {
  id: string;
  service: string;
  description: string;
  price: string;
}

interface ServicesListProps {
  isCityPage: boolean;
  cityId?: string; // Make cityId optional since it's not needed when isCityPage is false
}

const ServicesList: React.FC<ServicesListProps> = ({ isCityPage, cityId }) => {
  const router = useRouter();
  const pathname = usePathname(); 
  const lastFolder = pathname.split('/').pop(); 

  // Find the corresponding city object based on the cityId or last folder when isCityPage is true
  const city = isCityPage ? coachellaValleyCities.find((c) => c.id === cityId) : null;

  const handleContactClick = (service: Service) => {
    if (isCityPage && city) {
      router.push(`/cities/${city.id}/${service.id}`); // Use city.id for routing
    } else {
      router.push(`/#contact`); // Navigate to contact section
    }
  };

  return (
    <section className="bg-white" aria-labelledby="services-list-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 id="services-list-heading" className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
            Services & Pricing
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {allServices.map((service: Service) => (
              <div key={service.id} className="pt-6"> {/* Use service.id here */}
                <dt>
                  <div className="flex justify-between">
                    <span 
                      className="text-base font-semibold leading-7"
                      aria-label={`Service: ${service.service}`}
                    >
                      <span
                        onClick={() => handleContactClick(service)}
                        className="cursor-pointer text-black hover:border-b-2 hover:border-red-500 transition duration-200"
                      >
                        {service.service}
                      </span>
                    </span>
                    <span className="ml-6" aria-label={`Price: ${service.price}`}>{service.price}</span>
                  </div>
                </dt>
                <dd className="mt-2 pr-12 text-base leading-7 text-black">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
