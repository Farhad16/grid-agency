import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col overflow-hidden overflow-y-auto font-manrope bg-black">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
