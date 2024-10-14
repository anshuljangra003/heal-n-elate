"use client";
import React from "react";
import Image from "next/image";
import Carousal from "./carousal/Crousal";

function Healer() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4 lg:px-0">
      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10">
        {/* Left Side Chakra Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src="/Energy Healings.jpg" // Ensure the correct path for the image
            alt="Chakra Healing"
            width={300}
            height={300}
            className="w-auto h-auto rounded-lg"
          />
        </div>

        {/* Middle Text Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Energy Healing Services
          </h2>
          <p className="text-lg text-yellow-800 leading-relaxed lg:whitespace-normal whitespace-normal">
            We offer healing services using different modalities that cater to a large spectrum of ailments and issues.
            
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default Healer;
