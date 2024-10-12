"use client";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image"; // Ensure you have 'next/image' imported

function Healings() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-white min-h-screen">
      <Header />

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto my-20 px-4 lg:px-0">
        <h2
          className="text-4xl lg:text-5xl font-bold text-green-800 mb-12 text-center"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          How It All Started
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-12">
          {/* Left Side Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/numerology.png" // Correct path if the image is in 'public'
              alt="Demo Healing"
              width={500}
              height={350}
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Right Side Text Content */}
          <div
            className="lg:w-1/2 text-xl text-yellow-800 leading-relaxed lg:pl-10"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            <p className="text-justify">
              Welcome to our story—a journey crafted from personal challenges, resilience, and a shared vision to create a
              sanctuary for energy healing. Co-founded by two individuals from diverse backgrounds, our paths converged in
              the most unexpected way, united by our struggles and a deep commitment to positively impact others.
            </p>

            <p className="text-justify">
              While navigating our individual challenges, we discovered the profound power of healing modalities as a
              response to life’s complexities.
            </p>

            <p className="text-justify">
              Since 2016, our extensive experience in healing has allowed us to create meaningful impact and foster
              positive changes in the lives of many individuals, for which we are truly humbled.
            </p>

            <div>
              <strong>We co-founded Heal N Elate to:</strong>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Act as catalysts for healing</li>
                <li>
                  Empower individuals to achieve holistic healing at physical, emotional, and mental levels, enabling them
                  to lead lives filled with purpose and joy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Healings;
