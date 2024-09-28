"use client"
import Header from '@/components/Header'; // Assuming you have a reusable Header component
import React from 'react';

function Approach() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100">
      <Header />
      <section className="mt-10 p-6 bg-white shadow-lg rounded-lg text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
          Our Approach
        </h1>
        <p className="text-lg text-green-700 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          We understand that each individuals journey is unique, and we are committed to providing personalized energy healing services that honor and support this individuality.
        </p>
        <p className="text-lg text-green-700 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          As your healing catalyst, we provide a variety of energy healing services to support your unique journey, grounded in compassion and a commitment to reclaiming your health and happiness.
        </p>
        <p className="text-lg text-green-700 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          We are here to…
        </p>
        <ul className="text-lg text-green-700 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          <li>Support you</li>
          <li>Hear your experiences, and</li>
          <li>Accompany you on your journey toward wellness.</li>
        </ul>
        <p className="text-lg text-green-700" style={{ fontFamily: "Poppins, sans-serif" }}>
          We invite you to ‘HEAL N ELATE’ yourself and embrace a life of fulfillment and joy.
        </p>
      </section>
    </main>
  );
}

export default Approach;
