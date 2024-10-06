import React from "react";

function HealingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className="min-h-screen h-screen overflow-hidden flex flex-col ">
        {children}
      </div>
    </div>
  );
}

export default HealingLayout;
