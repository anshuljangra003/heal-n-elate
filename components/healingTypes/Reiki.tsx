"use client";
import React from "react";

function ServicesTable() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-green-800 text-white">
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
}

export default ServicesTable;
