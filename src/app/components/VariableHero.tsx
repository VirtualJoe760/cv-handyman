import React from 'react';
import Head from 'next/head';

interface VariableHeroProps {
  backgroundImage: string;
  serviceName: string;
  description: string;
}

const VariableHero: React.FC<VariableHeroProps> = ({ backgroundImage, serviceName, description }) => {
  return (
    <>
      <Head>
        <title>{`${serviceName} | Coachella Valley Handyman`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${serviceName} | Coachella Valley Handyman`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
      </Head>
      
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-label={`Hero image for ${serviceName}`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <span className="sr-only">{`Background image for ${serviceName}`}</span>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{serviceName}</h1>
          <p className="mt-4 max-w-lg mx-auto text-lg sm:text-xl lg:text-2xl">{description}</p>
        </div>
      </div>
    </>
  );
};

export default VariableHero;
