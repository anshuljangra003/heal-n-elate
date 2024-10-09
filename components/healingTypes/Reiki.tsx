"use client";
import React from "react";

function ServicesTable() {
  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gray-50">
      <div className="overflow-x-auto shadow-lg rounded-lg w-full max-w-6xl">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="py-5 px-8 text-left font-semibold text-lg whitespace-nowrap border-b border-gray-200">
                Lifestyle Conditions
              </th>
              <th className="py-5 px-8 text-left font-semibold text-lg whitespace-nowrap border-b border-gray-200">
                Chronic Conditions
              </th>
              <th className="py-5 px-8 text-left font-semibold text-lg whitespace-nowrap border-b border-gray-200">
                Emotional & Cognitive Challenges
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="bg-gray-50">
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Gastrointestinal
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Chronic Pain
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Stress, Anxiety, Depression
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Headache or Migraine
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Difficulty Concentrating
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Phobias, Traumas
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Insomnia
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Rheumatoid Arthritis
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Addictions
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Fever, Viral or Bacterial Infections
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Autoimmune Disorders
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Relationship
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Overall Wellbeing
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Recovery after Surgery
              </td>
              <td className="py-5 px-8 border-t border-gray-300 text-md">
                Restoring Balance
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServicesTable;
