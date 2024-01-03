import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
const NoDataFound = ({ className, data }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-light-50 gap-4 ${className}`}
    >
      <p className="text-base">{`No ${data} found or there is no ${data} available`}</p>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: "80px" }} />
    </div>
  );
};

export default NoDataFound;
