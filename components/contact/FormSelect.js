import React from "react";

const FormSelect = ({ register, errors, name }) => {
  const error = errors[name];

  const budgetOptions = [
    { value: "", label: "Budget", disabled: true, selected: true },
    { value: "750-999", label: "750-999" },
    { value: "1K", label: "1K" },
    { value: "5K", label: "5K" },
    { value: "5K-10K", label: "5K-10K" },
    { value: "10K+", label: "10K+" },
  ];

  return (
    <div className="w-full flex fle-col">
      <select
        className={`uppercase w-full text-[#e6e0d299] font-semibold border-b focus:outline-none boder-2 bg-transparent placeholder:text-[15px] placeholder:text-shadow placeholder:pl-2 placeholder:opacity-50 placeholder:uppercase pb-3 placeholder:text-[#e6e0d299] ${
          error ? "border-[#FDA29B]" : "border-white"
        }`}
        {...register}
      >
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
      {error && (
        <span className="text-red-500 text-xs mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default FormSelect;
