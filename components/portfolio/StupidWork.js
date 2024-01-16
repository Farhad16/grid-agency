import React from "react";

const budgetOptions = [
  { value: "", label: "Client", disabled: true, selected: true },
  { value: "750-999", label: "750-999" },
  { value: "1K", label: "1K" },
];

const StupidWork = async () => {
  return (
    <div className="flex sm:flex-row flex-col items-end justify-between sm:px-[100px] px-14">
      <div className="flex flex-col relative">
        <div className="flex gap-6">
          <img
            src="/assets/main_page/stupid.png"
            alt="stupid"
            className="md:w-[327px] md:h-[174px] w-[157px] h-[100px] z-10"
          />
          <img
            src="/assets/main_page/Sparkle.gif"
            alt="stupid"
            className="sm:w-[130px] sm:h-[130px] w-[70px] h-[70px]"
          />
        </div>
        <p className="z-0 lowercase text-[50px] md:text-[150px] text-light-50 sm:tracking-[-7.5px] tracking-[-2.5px] absolute sm:top-[30%] top-[60%] font-extrabold leading-[107.231%]">
          WORK
        </p>
      </div>
      <div className="flex items-center gap-4 border-b h-fit pb-2">
        <select className="uppercase w-full text-[#e6e0d299] font-semibold focus:outline-none boder-2 bg-transparent placeholder:text-[15px] placeholder:text-shadow placeholder:pl-2 placeholder:opacity-50 placeholder:uppercase  placeholder:text-[#e6e0d299]">
          {budgetOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              selected={option.selected}
              className="text-[#e6e0d299] opacity-50"
            >
              {option.label}
            </option>
          ))}
        </select>
        <p className="">OR</p>
        <select className="uppercase w-full text-[#e6e0d299] font-semibold focus:outline-none boder-2 bg-transparent placeholder:text-[15px] placeholder:text-shadow placeholder:pl-2 placeholder:opacity-50 placeholder:uppercase  placeholder:text-[#e6e0d299]">
          {budgetOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              selected={option.selected}
              className="text-[#e6e0d299] opacity-50"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StupidWork;
