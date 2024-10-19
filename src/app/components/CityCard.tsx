import React from 'react';
import { City } from '@/constants/citiesArray'; 
import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image';

interface CityCardProps {
  city: City; // Expecting a city object as a prop
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <Link href={`/cities/${city.id}`} className="relative flex items-center cursor-pointer">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:w-80 lg:h-52"> {/* Make image bigger on large screens */}
        <Image
          src={`/images/city-images/${city.id}.jpg`}
          alt={city.name}
          layout="responsive" // Use responsive layout for automatic sizing
          width={400} // Set the desired width
          height={300} // Set the desired height
          className="rounded-2xl object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="border-l-2 border-black h-40 mx-10" style={{ marginLeft: '2rem', marginRight: '2rem' }} /> {/* Added horizontal margin for spacing */}
      <div className="flex flex-col p-4"> {/* Add padding to the text section */}
        <h3 className="text-6xl font-semibold leading-6 text-gray-900 mt-4">
          {city.name}
        </h3>
      </div>
    </Link>
  );
};

export default CityCard;
