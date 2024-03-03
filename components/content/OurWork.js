import React from "react";
import Marquee from "react-fast-marquee";

const OurWork = () => {
  return (
    <div
      style={{
        background: "url('/assets/content/work.png') center/cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col py-[150px] items-center justify-center z-10">
        <h2>Our work</h2>
        <Marquee speed={100}>
          <div className="flex flex-row gap-12 mr-12 py-12">
            {[...Array(6)].map((_, i) => (
              <img
                src={`/assets/content/img${i + 1}.png`}
                alt={`img${i}`}
                className="w-[250px] sm:w-[300px] lg:w-[350px] rounded-[30px] sm:rounded-[40px]"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default OurWork;
