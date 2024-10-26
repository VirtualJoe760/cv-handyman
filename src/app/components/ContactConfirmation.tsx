// components/ContactConfirmation.tsx

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ContactConfirmationProps {
  onTimeout: () => void; // Callback to remove component after timeout
}

const ContactConfirmation: React.FC<ContactConfirmationProps> = ({ onTimeout }) => {
  // Set the component to disappear after 24 hours
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div className="flex flex-col items-center justify-center h-full py-16 px-8 sm:flex-row sm:max-w-3xl sm:mx-auto mb-0 pb-0">
      {/* Left Column - Message */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-4xl font-semibold text-gray-800">Thank you!</h2>
        <p className="mt-4 text-xl text-gray-700">
          We will be in contact soon. Check your email for further communication.
        </p>
      </div>
      
      {/* Right Column - Image */}
      <div className="flex-1 mt-8 sm:mt-0 sm:ml-8">
        <Image
          src="/path-to-your-image.jpg"
          alt="Thank you image"
          width={630}
          height={630}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ContactConfirmation;
