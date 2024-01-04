import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col overflow-y-auto font-manrope">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
