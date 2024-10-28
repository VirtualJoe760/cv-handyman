import React, { useEffect, useState } from "react";
import VariableHero from "@/components/VariableHero";
import { allServices } from "@/constants/allServices";
import Contact from "@/app/components/Contact";
import { servicePageContent } from "@/constants/staticContent"; 

export interface Service {
  id: string;
  service: string;
  price: string;
  description: string;
  body: string;
  heading: string;
  keywords: string[];
}

interface Params {
  serviceId: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { serviceId } = params;
  const service: Service | undefined = allServices.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found - Coachella Valley Handyman",
      description: "The service you are looking for does not exist.",
    };
  }

  const backgroundImagePath = `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${serviceId}.jpg`;

  return {
    title: `${service.service} | Coachella Valley Handyman`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.service,
      description: service.description,
      images: [backgroundImagePath],
      url: `https://coachellavalleyhandyman.com/our-services/${serviceId}`,
    },
  };
}

const Page: React.FC<{ params: Params }> = ({ params }) => {
  const { serviceId } = params;
  const service: Service | undefined = allServices.find((s) => s.id === serviceId);
  
  if (!service) {
    return (
      <div>
        <p>{servicePageContent.serviceNotFound.message}</p>
        <a href="/our-services" className="text-blue-500 hover:underline">
          {servicePageContent.serviceNotFound.backToServices}
        </a>
      </div>
    );
  }

  const backgroundImagePath = `https://res.cloudinary.com/dcrue4vr6/image/upload/v1729459742/${serviceId}.jpg`;

  return (
    <>
      <VariableHero
        backgroundImage={backgroundImagePath}
        serviceName={service.service}
        description={service.description}
      />
      <div className="mx-5 2xl:px-80 lg:px-40 my-10 py-10 px-2">
        <h1 className="py-10 text-6xl">{service.heading}</h1>
        <h3 className="text-2xl ml-5">Estimated Price: {service.price}</h3>
        <p className="ml-5 py-10 text-xl justify-start leading-loose">{service.body}</p>
      </div>
      <Contact />
    </>
  );
};

export default Page;
