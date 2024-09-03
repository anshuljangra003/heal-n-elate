import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HealingList() {
  const healings = [
    {
      title: "Spiritual Counseling Session",
      description: "A personalized spiritual counseling session to help you find clarity and peace.",
      duration: "60 minutes",
      price: "$150",
    },
    {
      title: "Reiki Healing Session",
      description: "Experience the healing power of Reiki energy to balance and harmonize your body and mind.",
      duration: "60 minutes",
      price: "$120",
    },
    {
      title: "Chakra Balancing Session",
      description: "Align and balance your chakras for overall wellbeing and spiritual alignment.",
      duration: "90 minutes",
      price: "$200",
    },
    {
      title: "Crystal Healing Session",
      description: "Utilize the energy of crystals to promote healing and energy flow.",
      duration: "60 minutes",
      price: "$130",
    },
    {
      title: "Past Life Regression Therapy",
      description: "Explore your past lives to gain insights and resolve present-day challenges.",
      duration: "120 minutes",
      price: "$250",
    },
  ];

  return (
    <div className="flex justify-center items-center py-12">
      <div className="max-w-7xl w-full px-4 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Healing Sessions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {healings.map((healing, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-2xl font-medium text-green-500 mb-4">{healing.title}</h3>
              <p className="text-gray-700 mb-4">{healing.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>{healing.duration}</span>
                <span className="font-semibold text-green-600">{healing.price}</span>
              </div>
              <Button
                asChild
                className="mt-6 w-full bg-green-400 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200 ease-in-out"
              >
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
