import React from "react";

const Textarea = ({name,type,required,placeholder,className,onChange,value}) => {
  return (
    <>
      <textarea
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
};

export default Textarea;
