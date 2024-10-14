"use client";
// import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import "@fontsource/cormorant-garamond"; // Elegant font for spiritual slogan
import "@fontsource/poppins"; // Modern font for other text

function Header() {
  return (
    <div className="sticky top-0 z-50 shadow-xl backdrop-blur-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
      <div className="flex flex-wrap justify-between items-center p-4 lg:p-6 border-b">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4 px-4 lg:px-20">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-20 sm:w-28 md:w-32 lg:w-40 h-auto cursor-pointer items-center" // Adjusted for mobile
            />
          </Link>
        </div>

        {/* Slogan (Centered) */}
        <p
          className=" items-center text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-green-900 text-center flex-grow"
          style={{ fontFamily: "Cormorant Garamond, serif", whiteSpace: "nowrap" }} // Prevent text wrap
        >
          Embrace Healing, Empower Your Journey!
        </p>

        {/* User Controls */}
       
      </div>

      {/* Navigation Links */}
      <div className="bg-yellow-600 py-2 text-white shadow-md">
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-10 px-2 md:px-8">
          <Link
            href="/"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            What is Energy Healing?
          </Link>

          <Link
            href="/our-story"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Story
          </Link>

          <Link
            href="/#healing-types"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Services
          </Link>

          <Link
            href="/our-approach"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Our Approach
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Credentials
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Testimonials
          </Link>

          <Link
            href="/form"
            className="navigation-link text-sm md:text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
