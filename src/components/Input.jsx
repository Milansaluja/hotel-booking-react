import React from "react";

const Input = ({ label, type, name, required, className,onChange,value,placeholder }) => {
  return (
    <>
      <div>
        <label htmlFor="email" className="block font-medium text-gray-900">
          {label && label}
        </label>
        <div className="mt-2">
          <input
            type={type}
            name={name}
            required={required}
            className={className && className}
            placeholder={placeholder && placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
