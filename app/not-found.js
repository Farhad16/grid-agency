import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NotFound = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-light-50 bg-black flex items-center justify-center min-h-screen gap-4`}
    >
      <p className="text-xl">Page not found or there is no page available</p>
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: "80px" }} />
    </div>
  );
};

export default NotFound;
