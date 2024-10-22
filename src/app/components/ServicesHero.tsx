import * as React from 'react';
import { HomeIcon, IdentificationIcon, ForwardIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { servicesHeroContent } from '@/constants/staticContent'; // Import static content

const iconMap = {
  HomeIcon,
  IdentificationIcon,
  ForwardIcon,
  FaceSmileIcon,
};

const ServicesHero: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="services-hero-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* Heading */}
          <h2 id="services-hero-title" className="mt-2 text-3xl font-bold text-black sm:text-4xl">
            {servicesHeroContent.heading}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {servicesHeroContent.description}
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {servicesHeroContent.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]; // Dynamically choose icon

              return (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-lg text-black">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    <span className="sr-only">{`${feature.name} icon`}</span>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
