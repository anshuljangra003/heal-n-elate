import React from 'react'
import Header from './Header'
import Image from 'next/image'

function Story() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-white min-h-screen">
     

      {/* Our Story Section */}
      <section className="max-w-full mx-auto my-20 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-12">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/Our_Story.jpg" // Correct path if the image is in 'public'
              alt="Demo Healing"
              width={750} // Adjusted width for better responsiveness
              height={500} // Adjusted height for consistency
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Right Side Text Content */}
          <div className="w-full lg:w-1/2 text-xl text-yellow-800 leading-relaxed lg:pl-10">
            {/* Heading */}
            <h2
              className="text-4xl lg:text-5xl font-bold text-green-800 mb-8 lg:mb-12 text-center lg:text-left"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              How It All Started
            </h2>

            {/* Paragraphs */}
            <p className="text-justify mb-4">
              Welcome to our story—a journey crafted from personal challenges, resilience, and a shared vision to create a
              sanctuary for energy healing. Co-founded by two individuals from diverse backgrounds, our paths converged in
              the most unexpected way, united by our struggles and a deep commitment to positively impact others.
            </p>

            <p className="text-justify mb-4">
              While navigating our individual challenges, we discovered the profound power of healing modalities as a
              response to life’s complexities.
            </p>

            <p className="text-justify mb-4">
              Since 2016, our extensive experience in healing has allowed us to create meaningful impact and foster
              positive changes in the lives of many individuals, for which we are truly humbled.
            </p>

            {/* List of Objectives */}
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
  )
}

export default Story