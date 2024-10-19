import React from "react";
import VariableHero from "@/components/VariableHero";
import { allServices } from "@/constants/allServices";
import path from "path"; // Import path module
import Contact from "@/app/components/Contact";

// Define the type for the service object
export interface Service {
  id: string;
  service: string;
  price: string;
  description: string;
  body: string;
  heading: string;
}

// Define the type for params
interface Params {
  serviceId: string; // This corresponds to the directory name
}

const Page: React.FC<{ params: Params }> = ({ params }) => {
  const { serviceId } = params;

  // Log the current directory
  const currentDirectory = path.resolve(__dirname); 
  console.log("Current Directory:", currentDirectory);

  // Extract the last folder from the current directory
  const lastFolder = currentDirectory.split(path.sep).pop();
  console.log("Last Folder:", lastFolder);

  // Find the corresponding service object based on the last folder
  const service: Service | undefined = allServices.find((s) => s.id === lastFolder);

  // Handle case where service is not found
  if (!service) {
    return (
      <div>
        <p>Service not found</p>
        <a href="/our-services" className="text-blue-500 hover:underline">
          Go back to services
        </a>
      </div>
    );
  }

  // Set the background image path based on the last folder
  const backgroundImagePath = `/images/service-images/${lastFolder}.jpg`;

  return (
    <>
      <VariableHero
        backgroundImage={backgroundImagePath}
        serviceName={service.service}
        description={service.description}
      />
      <div className="mx-5 md:mx-32 xl:mx-64 xl:px-64 lg:mx-40 lg:px-40 my-10 py-10 px-2">
        <h1 className="py-10 text-6xl">{service.heading}</h1>
        <h3 className="text-2xl ml-5">Estimated Price:{" "}{service.price}</h3>
        <p className="ml-5 py-10 text-3xl justify-start leading-loose">{service.body}</p>
      </div>
      <Contact />
    </>
  );
};

export default Page;
