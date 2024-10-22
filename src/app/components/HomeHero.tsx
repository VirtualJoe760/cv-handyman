import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link"; // Use Link from Next.js
import { homeHeroContent } from "@/constants/staticContent"; // Import static content

const HomeHero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* Logo */}
          <Image
            src="/palm-tree-svgrepo-com.svg"
            alt="Palm tree logo representing Coachella Valley Handyman"
            width={72}
            height={72}
          />

          {/* Heading */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-black sm:text-6xl">
            {homeHeroContent.heading}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-black">
            {homeHeroContent.description}
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={homeHeroContent.ctaOne.href}
              className="rounded-md scroll-smooth bg-indigo-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label="Contact us"
            >
              {homeHeroContent.ctaOne.text}
            </Link>
            <Link
              href={homeHeroContent.ctaTwo.href}
              className="text-sm text-black hover:text-red-600"
              aria-label="View our services"
            >
              {homeHeroContent.ctaTwo.text} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <Image
          src={homeHeroContent.heroImage.src}
          alt={homeHeroContent.heroImage.alt}
          width={homeHeroContent.heroImage.width}
          height={homeHeroContent.heroImage.height}
        />
      </div>
    </div>
  );
};

export default HomeHero;
