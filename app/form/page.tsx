"use client"
import Header from '@/components/Header'
import React, { useState } from 'react'

function Healings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    howDidYouHear: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Form submission logic here
  };

  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-10 bg-gradient-to-b from-white to-green-200 min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row justify-between items-start  py-8 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left side */}
        <div className="w-full lg:w-1/2 text-left space-y-6 p-6 shadow-lg rounded-lg">
        <h1 className='text-5xl font-bold '>Lets Begin The Transformation</h1>
        <br/>
          <h2 className="text-3xl font-semibold text-green-600">Book Your Healings</h2>
          <p className="text-gray-700 text-lg">
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Email:</strong> your-email@example.com
          </p>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Healing Registration Form</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Country:</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  required
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {/* Dropdown with countries */}
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Thailand">Thailand</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Russia">Russia</option>
                  <option value="Argentina">Argentina</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">How did you hear about us?</label>
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend">Friend</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled
              className=" w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Book Now!
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Healings;
