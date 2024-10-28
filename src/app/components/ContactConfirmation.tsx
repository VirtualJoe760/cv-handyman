// components/ContactConfirmation.tsx

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";

interface ContactConfirmationProps {
  onTimeout: () => void; // Callback to remove component after timeout
}

const ContactConfirmation: React.FC<ContactConfirmationProps> = ({
  onTimeout,
}) => {
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
        <h2 className="text-4xl font-semibold text-black">Thank you!</h2>
        <p className="mt-4 text-xl text-black mb-5">
          We have received your information and look forward to helping you
          soon. Please feel free to message us via direct messaging on our
          website, or if you need to book another appointment click below.
        </p>

        <Link
          href={"https://tidycal.com/cv-handyman/handyman-appointment"}
          className="mt-10 my-10 text-blue-500 hover:text-red-500 text-xl flex items-center"
        >
          Book Appointment
          <CalendarDateRangeIcon className="w-[24px] h-[24px] ml-2 mb-1" />
        </Link>
      </div>

      {/* Right Column - Image */}
      <div className="flex-1 mt-8 sm:mt-0 sm:ml-8">
        <Image
          src="https://res.cloudinary.com/dcrue4vr6/image/upload/v1729904343/AdobeStock_822254361.png"
          alt="Thank you image"
          width={315}
          height={315}
        />
      </div>
    </div>
  );
};

export default ContactConfirmation;
