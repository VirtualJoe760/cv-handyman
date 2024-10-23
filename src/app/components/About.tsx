import Link from "next/link";
import React from "react";
import { aboutSectionContent } from "@/constants/staticContent";

const About: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <p className="mt-2 max-w-lg text-pretty text-xl font-medium tracking-tight text-black sm:text-5xl">
          {aboutSectionContent.title}
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {aboutSectionContent.cards.map((card, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 || index === 1 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 text-red-600">{card.heading}</h3>
                  <p className="mt-2 text-2xl font-medium tracking-tight text-black">
                    {card.description}
                  </p>
                  <p className="mt-2 max-w-lg text-md text-black">
                    {card.body}
                    {card.link.external ? (
                      <Link
                        href={card.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-yellow-600"
                        aria-label={`Link to external site: ${card.link.text}`}
                      >
                        {card.link.text}
                      </Link>
                    ) : (
                      <Link
                        href={card.link.href}
                        className="text-blue-500 hover:text-yellow-600"
                        aria-label={`Navigate to ${card.link.text}`}
                      >
                        {card.link.text}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
