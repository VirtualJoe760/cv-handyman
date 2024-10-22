'use client';

import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { REVIEWS } from '@/constants/reviews';
import { reviewsSectionContent } from '@/constants/staticContent'; // Import static content
import Image from 'next/image';

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface Review {
  name: string;
  rating: number;
  review: string;
}

const Reviews: React.FC = () => {
  return (
    <section className="bg-white pt-10 mt-10 mx-2" aria-labelledby="reviews-title">
      <div className="text-center">
        <h1 id="reviews-title" className="mx-auto text-5xl">{reviewsSectionContent.title}</h1>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        {/* Left column: Review summary */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            {reviewsSectionContent.subheading}
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className="text-yellow-400 h-5 w-5 flex-shrink-0"
                  />
                ))}
              </div>
              <p className="sr-only">{reviewsSectionContent.ratingText}</p>
            </div>
            <p className="ml-2 text-sm text-black">
              {reviewsSectionContent.basedOn}
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">
              {reviewsSectionContent.description}
            </h3>

            <a
              href={reviewsSectionContent.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more reviews on Yelp"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-red-500 bg-red-600 px-8 py-2 text-sm font-medium text-white hover:bg-red-700 sm:w-auto lg:w-full"
            >
              {reviewsSectionContent.ctaText}
            </a>
          </div>
        </div>

        {/* Right column: Individual reviews */}
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {REVIEWS.map((review: Review, index: number) => (
                <div key={index} className="py-12">
                  <div className="flex items-center">
                    <Image
                      alt={`Photo of ${review.name}`}
                      src={`/images/reviews/${review.name
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .replace('.', '')}.jpg`}
                      className="h-12 w-12 rounded-full"
                      width={24}
                      height={24}
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-black">
                        {review.name}
                      </h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              review.rating > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-6 text-base text-black">
                    <p>{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
