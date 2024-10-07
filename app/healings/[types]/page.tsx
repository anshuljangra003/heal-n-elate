"use client";
import Header from "@/components/Header";
import React from "react";
import { usePathname } from "next/navigation";
import ServicesTable from "@/components/healingTypes/Reiki";
import Image from "@/node_modules/next/image";
import { HEALING_TYPES_CONSTANTS } from "@/app/constants/healing-types-constant";

type ServiceType =
  | "reiki"
  | "tarot_reading"
  | "numberology"
  | "life_coach"
  | "switch_words"
  | "vastu"
  | "pranic_healing";

const getComponent = (routeName: string) => {
  switch (routeName) {
    case "reiki":
      return <ServicesTable />;

    default:
      return (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad
          laboriosam aspernatur dolore voluptatem dolorum distinctio doloribus
          tempore repellendus repudiandae voluptatibus voluptatum expedita
          saepe, consequatur cumque laudantium incidunt quam dolores.
        </div>
      );
      break;
  }
};

function Component() {
  const pathName = usePathname();
  let serviceType:
    | "reiki"
    | "tarot_reading"
    | "numberology"
    | "life_coach"
    | "switch_words"
    | "vastu"
    | "pranic_healing";
  const routeName = pathName.split("/")[2] as ServiceType;

  serviceType = routeName; // This could be dynamic
  const healingTypeDetails = HEALING_TYPES_CONSTANTS[serviceType];

  const { image, heading } = healingTypeDetails;
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100">
      <Header />
      <div className="flex flex-col md:flex-row justify-center py-10">
        <div className="flex-1 flex justify-center items-center">
          <Image
            width="560"
            height="315"
            src={image}
            className="rounded-lg shadow-lg"
            alt="placeholder"
          />
        </div>
        <div className="flex-1 flex-col items-start justify-center mt-12 space-y-8 px-4 lg:px-0">
          <h1 className="text-3xl md:text-5xl font-normal text-green-900">
            {heading}
          </h1>
          <div> {getComponent(routeName)}</div>
        </div>
      </div>
    </main>
  );
}

export default Component;
