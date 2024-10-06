"use client";
import Header from "@/components/Header";
import React from "react";

const ServicesTable = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-4">At Reiki Healing</h1>
      <p className="text-lg mb-6">
        We provide healing services for a range of conditions listed below.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-4 px-6 text-left font-semibold">
                Lifestyle Conditions
              </th>
              <th className="py-4 px-6 text-left font-semibold">
                Chronic Conditions
              </th>
              <th className="py-4 px-6 text-left font-semibold">
                Emotional & Cognitive Challenges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 border-t">Gastrointestinal</td>
              <td className="py-4 px-6 border-t">Chronic Pain</td>
              <td className="py-4 px-6 border-t">
                Stress, Anxiety, Depression
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-6 border-t">Headache or Migraine</td>
              <td className="py-4 px-6 border-t">Difficulty Concentrating</td>
              <td className="py-4 px-6 border-t">Phobias, Traumas</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 border-t">Insomnia</td>
              <td className="py-4 px-6 border-t">Rheumatoid Arthritis</td>
              <td className="py-4 px-6 border-t">Addictions</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-6 border-t">
                Fever, Viral or Bacterial Infections
              </td>
              <td className="py-4 px-6 border-t">Autoimmune Disorders</td>
              <td className="py-4 px-6 border-t">Relationship</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 border-t">Overall Wellbeing</td>
              <td className="py-4 px-6 border-t">Recovery after Surgery</td>
              <td className="py-4 px-6 border-t">Restoring Balance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Reiki() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100">
      <Header />
      <div className=" flex-row">
        <img src="./Mandala.svg" alt="" className=" w-24 h-24" />
        <ServicesTable />
      </div>
    </main>
  );
}

export default Reiki;
