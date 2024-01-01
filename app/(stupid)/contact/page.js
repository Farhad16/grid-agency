import React from "react";
import GridAgency from "@/components/contact/GridAgency";
import ContactFooter from "@/components/contact/ContactFooter";
import ContactHeader from "@/components/contact/ContactHeader";

const Page = () => {
  return (
    <div className="flex flex-col text-white bg-[#0A0808] pt-[150px] sm:pt-[200px]">
      <ContactHeader />
      <GridAgency />
      <ContactFooter />
    </div>
  );
};

export default Page;
