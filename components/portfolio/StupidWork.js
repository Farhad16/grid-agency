"use client";
import { getCategories, getClients } from "@/apis/case.api";
import React, { useEffect, useState } from "react";

const StupidWork = ({ setSelectClient, setSelectCategory }) => {
  const [cliets, setClients] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClients();
        const category = await getCategories();
        setClients(data);
        setCategories(category);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleClientChange = (event) => {
    const selectedClient = event.target.value;
    setSelectClient(selectedClient);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectCategory(selectedCategory);
  };

  return (
    <div className="flex flex-col sm:px-[100px] px-14">
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
      <div className="flex items-center gap-4 border-b border-yellow-550 h-fit pb-2 w-[400px] mt-20">
        <select
          onChange={handleClientChange}
          className="uppercase w-full text-[#e6e0d299] font-semibold focus:outline-none boder-2 bg-transparent placeholder:text-[15px] placeholder:text-shadow placeholder:pl-2 placeholder:opacity-50 placeholder:uppercase  placeholder:text-[#e6e0d299]"
        >
          <option disabled className="text-[#e6e0d299] opacity-50" selected>
            Cliets
          </option>
          {cliets &&
            cliets.length > 0 &&
            cliets.map((option, i) => (
              <option
                key={i}
                value={option.client_name}
                className="text-[#e6e0d299] opacity-50"
              >
                {option.client_name}
              </option>
            ))}
        </select>
        <p className="text-yellow-550">OR</p>
        <select
          onChange={handleCategoryChange}
          className="uppercase w-full text-[#e6e0d299] font-semibold focus:outline-none boder-2 bg-transparent placeholder:text-[15px] placeholder:text-shadow placeholder:pl-2 placeholder:opacity-50 placeholder:uppercase  placeholder:text-[#e6e0d299]"
        >
          <option disabled className="text-[#e6e0d299] opacity-50" selected>
            Category
          </option>
          {categories &&
            categories.length > 0 &&
            categories.map((option, i) => (
              <option
                key={i}
                value={option.client_name}
                className="text-[#e6e0d299] opacity-50"
              >
                {option.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default StupidWork;
