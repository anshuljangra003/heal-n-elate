import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FilePlus2, Moon } from 'lucide-react'

function Header() {
  return (
    
    

          <div className="rounded-b-3xl shadow-lg bg-white/80 backdrop-blur-md transition duration-300 ease-in-out transform hover:shadow-2xl">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-3xl font-light text-gray-800">
              Heal and <span className="text-green-600 font-normal">Elate</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition ease-in-out duration-200 font-light relative"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
            </Link>
            <Link
              href="/offerings"
              className="text-gray-700 hover:text-green-600 transition ease-in-out duration-200 font-light relative"
              >
              Offerings
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
            </Link>
            <Link
              href="/healings/about"
              className="text-gray-700 hover:text-green-600 transition ease-in-out duration-200 font-light relative"
              >
              About Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
            </Link>
            <Link
              href="/healings/contact"
              className="text-gray-700 hover:text-green-600 transition ease-in-out duration-200 font-light relative"
              >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-200 ease-out origin-left hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* Right Side (User Actions) */}
          <SignedIn>
            <div className="flex items-center space-x-4">
              <Button asChild className="hidden md:flex font-light" variant="link">
                <Link href="/healings/upgrade">Pricing</Link>
              </Button>
              <Button asChild className="hidden md:flex font-light" variant="outline">
                <Link href="/healings/about">About the Healers</Link>
              </Button>
              <Button
                asChild
                className="hidden md:flex hover:bg-black hover:text-white transition ease-in-out duration-150 font-light"
                variant="outline"
                >
                    <p>
                <Moon className="text-gray-600 hover:text-white" />
                    </p>
              </Button>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    
    
  )
}

export default Header