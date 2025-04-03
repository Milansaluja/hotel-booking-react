import React, { useState } from "react";
import { siteData } from "./sitedata";
import Input from "./Input";
import Textarea from "./Textarea";
import swal from "sweetalert";

const Form = ({
  setRegister,
  bookings,
  setBookings,
  editIndex,
  setEditIndex,
}) => {
  const [Formdata, setFormData] = useState(
    editIndex !== null
      ? bookings[editIndex]
      : siteData?.registrationData?.formFields?.reduce((acc, item) => {
          acc[item.name] = item.value || "";
          return acc;
        }, {}) // data is an object now. {name:"value",name:"value".....etc}
  );
  console.log("formData wrt condition:",Formdata);
  

  function handleInputChange(e) {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // console.log(bookingStorage);
  function handleSubmit(e) {
    e.preventDefault();
    const newBookingStorage =  JSON.parse(localStorage.getItem("bookingData")) || [];
    // console.log("fresh datan",newBookingStorage);
    
    let updateBookings;
    if (editIndex !== null) {
      updateBookings = [...newBookingStorage]; // made new array 
      updateBookings[editIndex] = Formdata;
    } else {
      updateBookings = [...newBookingStorage, Formdata];
    }

    setBookings(updateBookings);  // directly displaying the message on table component from here.
    localStorage.setItem("bookingData", JSON.stringify(updateBookings));  // now update databse browser storage.
    // // console.log("Updated bookingStorage:", formedData);

    // Clear form inputs
    setFormData(
      siteData?.registrationData?.formFields?.reduce((acc, item) => {
        acc[item.name] = ""; // Reset all values to empty string
        return acc;
      }, {})
    );
    setEditIndex(null);
    // Close the form
    setRegister(false);
   
    swal(
      "Good job!", 
      editIndex !== null ? "Booking Updated!" : "Registration Successful!", 
      "success"
    );
    console.log("Form submitted and closed");
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
