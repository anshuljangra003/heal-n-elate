"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Moon } from "lucide-react";
import "@fontsource/cormorant-garamond"; // Elegant font for spiritual slogan
import "@fontsource/poppins"; // Modern font for other text

function Header() {
  return (
    <div className="sticky top-0 z-50 shadow-xl  backdrop-blur-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
      <div className="flex justify-between items-center p-6 border-b">
        {/* Logo Section - Now clickable */}
        <div className="flex items-center space-x-4 ">
          <Link href="/">
            {" "}
            {/* Wrapping the image with the Link component */}
            <img
              src="./logo.png"
              alt="Logo"
              className=" w-48 h-52 cursor-pointer"
            />
          </Link>
        </div>

        {/* Slogan (Centered) */}
        <p
          className="text-2xl md:text-4xl font-bold tracking-wide text-green-900 flex-grow text-center "
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
      <div className="text-green-900 px-4 md:px-8 py-2 shadow-md">
        <nav className="flex justify-center space-x-10">
          <Link
            href="/"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            What is Energy Healing?
          </Link>

          <Link
            href="/our-story"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            Our Story
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            Our Services
          </Link>

          <Link
            href="/our-approach"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            Our Approach
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            Credentials
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            Testimonials
          </Link>

          <Link
            href="/healings/contact"
            className="navigation-link hover:animate-pulse hover:text-green-700"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
