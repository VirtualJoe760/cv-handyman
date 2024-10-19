import React from 'react';
import { City } from '@/constants/citiesArray'; // Adjust the import based on your file structure
import Link from 'next/link'; // Import Link for navigation

interface CityCardProps {
  city: City; // Expecting a city object as a prop
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <Link href={`/cities/${city.id}`} className="relative flex items-center cursor-pointer">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:w-80 lg:h-52"> {/* Make image bigger on large screens */}
        <img
          alt={city.name}
          src={`/images/city-images/${city.id}.jpg`} // Dynamic image path based on city id
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="border-l-2 border-black h-40 mx-10" /> {/* Added horizontal margin for spacing */}
      <div className="flex flex-col "> {/* Add padding to the text section */}
        <h3 className="text-6xl font-semibold leading-6 text-gray-900">
          {city.name}
        </h3>
      </div>
    </Link>
  );
};

export default CityCard;
