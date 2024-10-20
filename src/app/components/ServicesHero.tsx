import * as React from 'react';
import { ForwardIcon, IdentificationIcon, FaceSmileIcon, HomeIcon } from '@heroicons/react/24/outline';
import { ForwardRefExoticComponent, SVGProps } from 'react';

interface Feature {
  name: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;
}

const features: Feature[] = [
  {
    name: 'Years of experience',
    description:
      'With over 10 years of experience here in the Coachella Valley, We pride ourselves on building lasting relationships with our clients, grounded in honesty, transparency, and a commitment to excellence.',
    icon: HomeIcon,
  },
  {
    name: 'Honest & Affordable',
    description:
      'We believe in providing honest and affordable solutions for every homeowner. Each visit comes with an upfront $99 service-call fee, which is deducted from your total bill—no hidden costs. For your convenience, online or over the phone credit card payments.',
    icon: IdentificationIcon,
  },
  {
    name: 'Fast & Reliable',
    description:
      'Whether it is an urgent repair or a planned renovation, you can count on us to deliver prompt, professional service that gets the job done right the first time.',
    icon: ForwardIcon,
  },
  {
    name: 'Satisfaction Guaranteed',
    description:
      'Your satisfaction is our top priority. We stand behind the quality of our work with a satisfaction guarantee, ensuring that every job meets your expectations. If you’re not happy, we’re not done – that’s our promise.',
    icon: FaceSmileIcon,
  },
];

const ServicesHero: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold text-black sm:text-4xl">
            Expert Handyman Services: Reliable Solutions for Every Home Project
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand that your home is your sanctuary. That&apos;s why our team of skilled professionals is dedicated to delivering top-quality workmanship on every project, no matter how big or small.
            From routine maintenance to complete home renovations, we offer a wide range of services to keep your home in perfect condition.
            With a focus on reliability and customer satisfaction, you can trust us to handle your home with care and precision.
            Let us take the stress out of home improvement – we&apos;re here to help every step of the way.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg text-black">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
