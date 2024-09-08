import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FilePlus2, Moon } from "lucide-react";
import '@fontsource/cormorant-garamond'; // Importing Cormorant Garamond font for spiritual elegance
import '@fontsource/poppins'; // Importing Poppins for a modern touch

function Header() {
  return (
    <div className="sticky top-0 z-50 rounded-b-3xl shadow-xl bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300/80 backdrop-blur-lg transition duration-300 ease-in-out transform hover:shadow-2xl">
      <div className="flex justify-between items-center p-6 border-b border-yellow-300">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-4xl font-semibold text-yellow-800" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Heal and{" "}
            <span className="text-yellow-600 font-normal" style={{ fontFamily: "Poppins, sans-serif" }}>
              Elate
            </span>
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className="text-yellow-800 hover:text-yellow-700 transition ease-in-out duration-200 font-light relative text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
          </Link>
          <Link
            href="/offerings"
            className="text-yellow-800 hover:text-yellow-700 transition ease-in-out duration-200 font-light relative text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Offerings
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
          </Link>
          <Link
            href="/healings/about"
            className="text-yellow-800 hover:text-yellow-700 transition ease-in-out duration-200 font-light relative text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            About Us
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
          </Link>
          <Link
            href="/healings/contact"
            className="text-yellow-800 hover:text-yellow-700 transition ease-in-out duration-200 font-light relative text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
          </Link>
        </nav>
        {/* Right Side (User Actions) */}
        <SignedIn>
          <div className="flex items-center space-x-5">
            <Button
              asChild
              className="hidden md:flex font-light text-yellow-800 hover:text-yellow-600"
              variant="link"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Link href="/healings/upgrade">Pricing</Link>
            </Button>
            <Button
              asChild
              className="hidden md:flex font-light border-yellow-600 text-yellow-800 hover:bg-yellow-300"
              variant="outline"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Link href="/healings/about">About the Healers</Link>
            </Button>
            <Button
              asChild
              className="hidden md:flex bg-yellow-200 text-yellow-800 hover:bg-yellow-400 transition ease-in-out duration-150 font-light"
              variant="outline"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <p>
                <Moon className="text-yellow-600 hover:text-white" />
              </p>
            </Button>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
