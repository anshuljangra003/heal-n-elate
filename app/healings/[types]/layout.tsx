import Header from "@/components/Header";
// import { ThemeProvider } from '@/components/theme-provider';
import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";

function HealingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkLoaded>
      <div lang="en">
        <div className="min-h-screen h-screen overflow-hidden flex flex-col ">
          {children}
        </div>
      </div>
    </ClerkLoaded>
  );
}

export default HealingLayout;
