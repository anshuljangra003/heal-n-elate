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
          Our Story
        </h2>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            Welcome to our narrative—a journey crafted from personal challenge, resilience, and a collective vision to
            create a sanctuary for energy healing. Co-founded by two individuals from diverse backgrounds, our paths
            converged in the most unforeseen manner, united by our individual struggles and a deep commitment to
            positively impact the lives of others.
          </p>
          
          <p>
            While each of us were going through our own struggles and navigating the complexities of life, we discovered
            the power of healing modalities in response to our respective challenges.
          </p>

          <p>
            Since 2016, our extensive experience in healing has allowed us to create a meaningful impact and foster
            positive changes in the lives of many individuals, for which we are truly humbled.
          </p>

          <p>
            We aspire to have co-founded Heal N Elate to:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Act as catalysts for healing and</li>
              <li>
                Empower individuals to achieve holistic healing at - physical, emotional, and mental levels, enabling
                them to lead lives filled with purpose and joy.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Healings;
