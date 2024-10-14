import Image from 'next/image'
import React from 'react'
import Header from './Header'

function Approach() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-white min-h-screen">
    

      {/* Healing Catalyst Section */}
      <section className="max-w-full mx-auto my-20 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-12">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/butterflies.jpg" // Replace with your actual image path
              alt="Healing with Butterflies"
              width={500} // Adjust based on design needs
              height={400} // Adjust based on design needs
              className="rounded-lg  w-full h-auto"
            />
          </div>

          {/* Right Side Text Content */}
          <div className="w-full lg:w-1/2 text-xl text-gray-800 leading-relaxed lg:pl-10">
            {/* Heading */}
            <h2
              className="text-4xl lg:text-5xl font-bold text-green-800 mb-6 lg:mb-8"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              As your Healing Catalyst...
            </h2>

            {/* Paragraphs */}
            <p className="text-justify mb-4 text-yellow-700">
              We understand that each individualss journey is unique, and we are committed to providing personalized energy healing services that honor and support this individuality. Our healing services are designed to cater to a diverse range of individuals, including children, students, dedicated homemakers, working professionals, and seniors.
            </p>

            <p className="text-justify mb-4 text-yellow-700">
              As your healing catalyst, we provide a variety of energy healing services to support on your unique journey, grounded in compassion and a commitment in reclaiming your health and happiness.
            </p>

            {/* List of Support */}
            <ul className="list-disc list-inside mb-4 space-y-2 text-justify text-yellow-700">
              <li>Support you</li>
              <li>Hear your experiences</li>
              <li>Accompany you on your journey toward wellness</li>
            </ul>

            <p className="text-xl font-semibold text-justify text-yellow-700">
              We invite you to ‘HEAL N ELATE’ yourself and embrace a life of fulfillment and joy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Approach