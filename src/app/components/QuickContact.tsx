import React from 'react';
import Link from 'next/link';

interface QuickContactProps {
  section: string; // Define the type for section
}

const QuickContact: React.FC<QuickContactProps> = ({ section }) => {
  return (
    <div className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
      {/* Horizontal Rule */}
      <hr className="border-t-2 lg:hidden border-gray-300 mb-10" aria-hidden="true" />

      <div className="flex items-center justify-between md:mx-10 xl:mx-96">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black">Let's Talk</h1>

        {/* Link to Read More Articles */}
        <Link
          href={`/tips/${section}`}
          className="text-red-600 text-xl hover:text-blue-500"
          aria-label={`Read more about ${section}`}
        >
          Read More?
        </Link>

        {/* Link to Contact Us */}
        <Link
          href="/#contact"
          className="bg-indigo-500 hover:bg-blue-400 px-4 text-white py-3 lg:px-7 text-lg rounded-md transition-colors duration-300"
          aria-label="Contact us"
        >
          Contact Us
        </Link>
      </div>
      <hr className="border-t-2 lg:hidden border-gray-300 my-10" aria-hidden="true" />
    </div>
  );
};

export default QuickContact;
