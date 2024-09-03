import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Moon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex-col overflow-y-scroll p-4 lg:p-7 bg-gradient-to-b from-white to-green-100">
      {/* Header Section */}
     <Header/>

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center mt-12 space-y-8 px-4 lg:px-0">
        <h1 className="text-4xl lg:text-5xl font-normal text-gray-800">Welcome</h1>
        <p className="text-center text-gray-700 font-light text-lg max-w-xl">
          Our spiritual practice is dedicated to helping clients overcome life obstacles. We aim to create a safe environment where individuals can undergo personal growth, foster inner healing, and achieve overall well-being.
          <br />
          <br />
          Please see our offering list for virtual and in-person sessions, events & gatherings, and join our corporate wellness program - Healing Haven.
          <br />
          <br />
          All of our services can be paid on a sliding scale. We are so grateful you are here and look forward to working with you.
        </p>
        <Button
          asChild
          className="bg-green-500 text-white font-light py-3 px-8 rounded-full shadow-md hover:bg-green-700 transition duration-200 ease-in-out transform hover:scale-105"
        >
          <Link href="/healings">Book Now</Link>
        </Button>
      </div>
    </main>
  );
}
