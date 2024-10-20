import React from 'react';
import Link from 'next/link'; // You can link the button to another page if needed

const QuickContact = () => {
  return (
    <div className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
      {/* Horizontal Rule */}
      <hr className="border-t-2 border-gray-300 mb-10" />

      <div className="flex items-center justify-between p-5">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black">Let's Talk</h1>

        {/* Button */}
        <Link
        href="/#contact"
        className="bg-indigo-500 hover:bg-blue-400 text-white py-2 px-6 rounded-md transition-colors duration-300">
        Contact Us</Link>
      </div>
      <hr className="border-t-2 2xl:px-80 lg:px-40 my-10 py-10 border-gray-300 mb-10" />
    </div>
  );
};

export default QuickContact;
