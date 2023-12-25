import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Wrapper from "../shared/Wrapper";

const ContactFooter = () => {
  return (
    <Wrapper className="w-full flex flex-col">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:mt-[200px] mt-[100px] text-xs sm:text-[15px] gap-4">
        <div className="uppercase flex flex-col text-[#E6E0D2]">
          <p>DO YOU LIKE STUPID IDEAS?</p>
          <p>jointheteam@gridagenyinc.ca</p>
        </div>
        <div className="uppercase flex flex-col text-[#E6E0D2]">
          <p>242 Applewood Cres</p>
          <p>Concord, ON L4K 4E5</p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="uppercase flex flex-col text-[#E6E0D2] sm:items-end">
            <p className="text-left">info@gridagenyinc.ca</p>
            <p className="text-left">(416) 557-4773</p>
          </div>
          <div className="flex items-center gap-2">
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between pt-10 border-t border-1 border-[#E6E0D2] border-dotted mt-[80px]">
        <p className="text-[#E6E0D2] font-light text-[10px]">
          © 2023, Grid Creative Advertising Inc.
        </p>
        <p className="text-[#E6E0D2] font-light text-[10px]">
          privacy and cookie policy
        </p>
      </div>
    </Wrapper>
  );
};

export default ContactFooter;
