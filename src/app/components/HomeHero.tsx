import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HomeHero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <Image
            src="/palm-tree-svgrepo-com.svg"
            alt="Your Custom Logo"
            width={72}
            height={72}
          />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Coachella Valley&apos;s Best Handymen Stand By Ready To Help.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our dedicated team of skilled professionals is ready to tackle any
            project, big or small. We're here to make your home improvements
            easy and stress-free.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <Image
          alt="handyman-hero-image"
          src="/images/handyman-home-hero.png"
          width={850}
          height={350}
        />
      </div>
    </div>
  );
};

export default HomeHero;
