import React from "react";
import GridAgency from "@/components/contact/GridAgency";
import ContactFooter from "@/components/contact/ContactFooter";
import ContactHeader from "@/components/contact/ContactHeader";

const Page = () => {
  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808]">
      <ContactHeader />
      <GridAgency />
      <ContactFooter />
    </div>
  );
};

export default Page;
