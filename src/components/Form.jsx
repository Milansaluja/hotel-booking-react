import React, { useState } from "react";
import { siteData } from "./sitedata";
import Input from "./Input";
import Textarea from "./Textarea";

const Form = ({ setRegister }) => {
  const [bookingStorage, setBookingStorage] = useState([]);

  const [Formdata, setFormData] = useState(
    siteData?.registrationData?.formFields?.reduce((acc, item) => {
      acc[item.name] = item.value || "";
      return acc;
    }, {}) // data is an object now. {name:"value",name:"value".....etc}
  );

  function handleInputChange(e) {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // console.log(Formdata);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data submitted", Formdata);

    // setBookingStorage((prevStorage) => {
    //   const newStorage = [...prevStorage, Formdata];
    //   localStorage.setItem("bookingData", JSON.stringify(newStorage));
    //   return newStorage;
    // });
    // console.log(bookingStorage);
  }

  return (
    <>
      <div className="form bg-[#323030be]  w-full h-full top-0 left-0 grid justify-center items-center absolute z-10">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-xl">
            <div className="flex items-center justify-between px-5">
              <h1 className="text-xl pt-4">Registration Form</h1>
              <button
                type="button"
                onClick={(prev) => {
                  setRegister(!prev);
                }}
              >
                cross
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5 w-[850px] p-5 rounded-lg bg-white ">
              {siteData?.registrationData?.formFields?.map(
                ({
                  id,
                  name,
                  type,
                  placeholder,
                  label,
                  required,
                  className,
                }) => (
                  <div
                    key={id}
                    className={`${type === "textarea" ? "col-span-2" : ""}`}
                  >
                    {type === "textarea" ? (
                      <Textarea
                        name={name}
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        className={className}
                        onChange={handleInputChange}
                        value={Formdata[name] || ""} // name contains value from state {this is sync with our useState}
                      />
                    ) : (
                      <Input
                        type={type}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                        required={required}
                        className={className}
                        onChange={handleInputChange}
                        value={Formdata[name] || ""} // name contains value from state {this is sync with our useState}
                      />
                    )}
                  </div>
                )
              )}
            </div>
            <div className="text-center bg-blue-500 ">
              <button
                type="submit"
                className=" bg-blue-300 px-20 py-3 rounded-lg my-4 tex-white text-lg"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
