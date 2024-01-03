import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Wrapper from "../shared/Wrapper";

const ContactFooter = () => {
  return (
    <Wrapper className="w-full flex flex-col bg-black pt-[80px] sm:pt-[100px]">
      <div className="sm:tracking-[3px] flex sm:flex-row flex-col sm:justify-between sm:items-center text-xs sm:text-[15px] gap-4">
        <div className="uppercase flex flex-col text-light-50 gap-1">
          <p>DO YOU LIKE STUPID IDEAS?</p>
          <p className="underline">jointheteam@gridagenyinc.ca</p>
        </div>
        <div className="uppercase flex flex-col text-light-50 gap-1">
          <p>242 Applewood Cres</p>
          <p>Concord, ON L4K 4E5</p>
        </div>
        <div className="flex flex-row gap-4 justify-between sm:justify-start">
          <div className="uppercase flex flex-col text-light-50 sm:items-end gap-1">
            <p className="text-left underline">info@gridagenyinc.ca</p>
            <p className="text-left underline">(416) 557-4773</p>
          </div>
          <div className="flex items-center gap-2 text-light-50">
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between py-10 border-t border-1 border-light-50 border-dotted mt-[80px] gap-1">
        <p className="text-light-50 text-light-50 text-[10px]">
          © 2023, Grid Creative Advertising Inc.
        </p>
        <p className="text-light-50 text-light-50 text-[10px]">
          privacy and cookie policy
        </p>
      </div>
    </Wrapper>
  );
};

export default ContactFooter;
