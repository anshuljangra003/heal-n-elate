"use client"
import Header from '@/components/Header';
import React from 'react';

function Healings() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100">
      <Header />
      
      {/* Our Story Section */}
      <section className="max-w-5xl mx-auto my-16 px-4 lg:px-0">
        <h2
          className="text-3xl lg:text-4xl font-bold text-green-900 mb-8 text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Our Approach
        </h2>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
          We understand that each individuals journey is unique, and we are committed to providing
          personalized energy healing services that honor and support this individuality.
          </p>
          
          <p>
          As your healing catalyst, we provide a variety of energy healing services to support on your unique
          journey, grounded in compassion and a commitment in reclaiming your health and happiness.
          </p>

          <p>
          We are here to…
          </p>

          <div>
            We aspire to have co-founded Heal N Elate to:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Support you</li>
              <li>
              Hear your experiences, and
              </li>
              <li>
              Accompany you on your journey toward wellness.
              </li>
            </ul>
            <p className='text-xl font-bold space-y-2 py-4'>
            We invite you to ‘HEAL N ELATE’ yourself and embrace a life of fulfillment and joy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Healings;
