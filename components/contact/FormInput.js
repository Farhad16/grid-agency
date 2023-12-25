import React from "react";

const FormInput = ({ label, value, textarea }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <label className="text-[15px] text-shadow pl-2 opacity-50 uppercase">
          {label}
        </label>
        {textarea ? (
          <textarea
            type="text"
            className="border-t focus:outline-none boder-2 border-[#E6E0D2] bg-[#0E0E0E]"
            rows="10"
          />
        ) : (
          <input
            type="text"
            className="border-t focus:outline-none boder-2 border-[#E6E0D2] bg-transparent"
            multiple
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
