import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HomeHero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <Image
            src="/palm-tree-svgrepo-com.svg"
            alt="Your Custom Logo"
            width={72}
            height={72}
          />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Coachella Valley&apos;s Best Handymen Stand By Ready To Help.
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Our dedicated team of skilled professionals is ready to tackle any
            project, big or small. We're here to make your home improvements
            easy and stress-free.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/#contact"
              className="rounded-md scroll-smoooth bg-indigo-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a
              href="/our-services"
              className="text-sm text-black hover:text-red-600"
            >
              Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Update the src with Cloudinary URL */}
        <Image
          alt="handyman-hero-image"
          src="https://res.cloudinary.com/dcrue4vr6/image/upload/w_850,h_350,q_auto/v1729463634/handyman-home-hero.png"
          width={850}
          height={350}
        />
      </div>
    </div>
  );
};

export default HomeHero;
