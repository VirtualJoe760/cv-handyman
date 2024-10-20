import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    title: "How to Articles",
    href: "tips/how-to",
    imageUrl:
      "https://images.unsplash.com/photo-1595814432314-90095f342694?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "A person paiting a home - How to Articles",
    author: {
      name: "Coachella Valley Handyman",
    },
  },
  {
    id: 2,
    title: "Home Improvement",
    href: "/tips/home-improvement",
    imageUrl:
      "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Home renovation project in progress - Home Improvement",
    author: {
      name: "Coachella Valley Handyman",
    },
  },
  {
    id: 3,
    title: "Seasonal Home Care",
    href: "/tips/seasonal-home-care",
    imageUrl:
      "https://images.unsplash.com/photo-1561065091-4908548ee638?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Keep cool in the desert with seasonal maintenance - Seasonal Home Care",
    author: {
      name: "Coachella Valley Handyman",
    },
  },
];

const TipsCategories = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight pb-3 text-black sm:text-4xl">
            Explore Our Expert Tips
          </h2>
          <p className="mt-2 text-lg leading-8 text-black">
            Browse through our collection of handy tips tailored for homeowners. Whether you're tackling a DIY project or looking for expert advice on home improvement, we've got you covered with insights to help you every step of the way.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                width={378}
                height={412}
                alt={category.altText} // Dynamic alt text
                src={category.imageUrl}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm text-gray-300">
                <div className="-ml-4 flex items-center gap-x-4">
                  <div className="flex ml-4 ">
                    {category.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-3xl text-white">
                <Link href={category.href}>
                  <span className="absolute inset-0" />
                  {category.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsCategories;
