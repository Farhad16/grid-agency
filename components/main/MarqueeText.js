import Marquee from "react-fast-marquee";

const Context = () => {
  return (
    <div className="flex items-center">
      <img
        src="/assets/main_page/msg.png"
        alt="msg"
        className="mr-4 w-8 sm:w-12 mt-1"
      />
      <span>FOSTERING HUMAN CONNECTIONS THROUGH IMPACTFUL CREATIVE</span>
    </div>
  );
};

const MarqueeText = () => {
  return (
    <div className="flex flex-col relative z-10 w-full h-[55px] sm:h-[90px]">
      <div className="rotate-[4.2deg] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-black w-[110%]">
        <Marquee
          className="flex items-center gap-2 sm:text-[30px] text-sm text-light-50 sm:tracking-[10.5px] tracking-[4.5px] p-1.5 sm:p-3 border-t border-b border-[#E6E0D2]"
          speed={200}
        >
          <Context />
          <Context />
        </Marquee>
      </div>
      <div className="-rotate-[4.2deg] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-black w-[110%]">
        <Marquee
          className="flex items-center gap-2 sm:text-[30px] text-sm text-light-50 sm:tracking-[10.5px] tracking-[4.5px] p-1.5 sm:p-3 border-t border-b border-[#E6E0D2]"
          speed={200}
        >
          <Context />
          <Context />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeText;
