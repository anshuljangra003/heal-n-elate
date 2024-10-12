"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
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
      <div className="flex justify-between items-center p-6 border-b">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 px-20">
          <Link href="/">
            {/* Wrapping the image with the Link component */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Slogan (Centered) */}
        <p
          className="text-5xl md:text-6xl font-bold tracking-wide whitespace-nowrap text-green-900 absolute left-1/2 transform -translate-x-1/2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Embrace Healing, Empower Your Journey!
        </p>

        {/* User Controls */}
        <SignedIn>
          <div className="flex items-center space-x-5">
            <Button
              asChild
              className="hidden md:flex bg-green-100 text-green-700 hover:bg-green-200 transition ease-in-out duration-150 font-light p-2 rounded-full"
              variant="outline"
            >
              <Moon className="text-green-600 hover:text-green-900" />
            </Button>
            <UserButton />
          </div>
        </SignedIn>
      </div>

      {/* Navigation Links */}
      <div className="text-white px-4 md:px-8 py-2 shadow-md bg-yellow-600">
        <nav className="flex justify-center space-x-10">
          <Link
            href="/"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            What is Energy Healing?
          </Link>

          <Link
            href="/our-story"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Our Story
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Our Services
          </Link>

          <Link
            href="/our-approach"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Our Approach
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Credentials
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Testimonials
          </Link>

          <Link
            href="/form"
            className="navigation-link text-xl hover:animate-pulse hover:text-green-700"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
