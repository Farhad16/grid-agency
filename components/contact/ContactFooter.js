import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Wrapper from "../shared/Wrapper";

const ContactFooter = () => {
  return (
    <Wrapper className="w-full flex flex-col bg-black sm:py-16 py-8 sm:!px-[100px] xs:!px-14 px-8">
      <div className="sm:tracking-[3px] flex flex-row justify-between items-center sm:mt-[150px] mt-[50px] text-[10px] md:text-[15px] gap-4">
        <div className="uppercase sm:flex flex-col text-light-50 gap-1 hidden">
          <p>DO YOU LIKE STUPID IDEAS?</p>
          <p className="underline">jointheteam@gridagenyinc.ca</p>
        </div>
        <div className="uppercase flex flex-col text-light-50 gap-1">
          <p>242 Applewood Cres</p>
          <p>Concord, ON L4K 4E5</p>
        </div>
        <div className="items-center gap-2 text-light-50 sm:hidden">
          <InstagramIcon />
          <LinkedInIcon />
        </div>
        <div className="flex flex-row gap-4 justify-between sm:justify-start">
          <div className="uppercase flex flex-col text-light-50 sm:items-end gap-1">
            <p className="text-left underline">info@gridagenyinc.ca</p>
            <p className="text-left underline">(416) 557-4773</p>
          </div>
          <div className="sm:flex items-center gap-2 text-light-50 hidden">
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="uppercase w-full flex flex-col sm:flex-row justify-between sm:pt-10 pt-6 border-t border-1 border-light-50 border-dotted sm:mt-[80px] mt-[40px] gap-1">
        <p className="text-light-50 text-light-50 text-[10px] sm:text-left text-center">
          © 2023, Grid Creative Advertising Inc.
        </p>
        <p className="text-light-50 text-light-50 text-[10px] sm:text-left text-center">
          privacy and cookie policy
        </p>
      </div>
    </Wrapper>
  );
};

export default ContactFooter;
