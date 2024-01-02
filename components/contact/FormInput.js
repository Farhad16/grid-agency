import React from "react";

const FormInput = ({
  name,
  placeholder,
  label,
  textarea,
  errors,
  defaultValue,
  register,
}) => {
  const error = errors[name];

  return (
    <div className="w-full">
      {textarea ? (
        <div className="flex flex-col gap-3">
          <label className="font-semibold text-[15px] text-shadow pl-2 opacity-50 uppercase text-[#e6e0d299]">
            {label}
          </label>
          <div className="flex flex-col">
            <textarea
              defaultValue={defaultValue}
              className={`border rounded-sm focus:outline-none border-1.5 border-light-50 bg-[#0E0E0E] ${
                error ? "border-[#FDA29B]" : "border-light-50"
              }`}
              rows="10"
              {...register}
            />
            {error && (
              <span className="text-red-500 text-xs mt-1">{error.message}</span>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <input
            type="text"
            className={`w-full font-semibold border-b focus:outline-none boder-2 bg-transparent placeholder:text-[15px] placeholder:text-shadow placeholder:pl-2 placeholder:opacity-50 placeholder:uppercase pb-3 placeholder:text-[#e6e0d299] ${
              error ? "border-[#FDA29B]" : "border-light-50"
            }`}
            placeholder={placeholder}
            {...register}
          />
          {error && (
            <span className="text-red-500 text-xs mt-1">{error.message}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default FormInput;
