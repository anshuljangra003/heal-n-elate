"use client";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

function ReikiPage() {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto p-4 lg:p-7 bg-white min-h-screen">
      <Header />
      <section className="max-w-7xl mx-auto my-20 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-12">
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/reiki.png" // Ensure this path is correct or use '/public/reikii.png'
              alt="Reiki Healing"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
              // Added margin-right for spacing
              style={{ marginRight: "1.5rem" }} 
            />
          </div>

          {/* Right Side Text */}
          <div className="w-full lg:w-1/2 text-lg text-gray-700 leading-relaxed">
            {/* Heading */}
            <h1
              className="text-3xl lg:text-5xl font-bold text-green-700 mb-6 lg:mb-10 text-center lg:text-left"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Reiki: Healing from Within, Transform Your World
            </h1>

            {/* Description */}
            <p className="mb-6 text-justify">
              Reiki is a Japanese healing practice that involves the use of symbols and hand positions to channel universal
              life energy (Reiki). Practitioners often use specific symbols that represent different aspects of healing,
              such as emotional healing, distance healing, and spiritual growth. The symbols are typically introduced
              during Reiki training and are used to enhance the practitioners ability to focus energy and intention. The
              practice is generally intuitive, allowing practitioners to adapt their approach based on the needs of the
              recipient.
            </p>

            {/* Benefits Section */}
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-4">
                Benefits of Reiki:
              </h2>
              <ul className="list-decimal list-inside space-y-2">
                <li>Stress Reduction: Reiki helps calm the mind and body, leading to a significant decrease in stress levels.</li>
                <li>Emotional Balance: It can assist in releasing emotional blockages, promoting a sense of peace and emotional stability.</li>
                <li>Pain Relief: Many people report reduced pain and discomfort after a Reiki session, making it a complementary therapy for various conditions.</li>
                <li>Enhanced Healing: Reiki supports the bodys natural healing processes, beneficial during recovery from illness or surgery.</li>
                <li>Improved Sleep: Regular sessions can lead to better sleep quality and help with insomnia.</li>
                <li>Increased Energy: Recipients often feel revitalized and more energetic after a session.</li>
              </ul>
            </div>

            {/* Conclusion */}
            <p className="mt-6 text-justify">
              In summary, Reiki is a gentle, non-invasive way to enhance your physical, emotional, and spiritual health,
              making it an appealing option for those seeking holistic wellness solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ReikiPage;
