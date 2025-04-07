import { React, useState } from "react";
import { siteData } from "./sitedata";
import Input from "./Input";
import swal from "sweetalert";

const Signup = () => {
  const [data, setData] = useState(
    siteData?.signInData?.formData?.reduce((acc, item) => {
      acc[item.name] = item.value || "";
      return acc;
    }, {}) // data is an object now. {name:"value",name:"value".....etc}
  );
  
  console.log("Initial state data:", data);
  // The reduce function in your useState initialization is used to transform an array (siteData?.signInData?.formData) into an object

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev, // saving previous data too (data variable previous or current input data 2no ko save kr
      [name]: value, // name dynamic fetch hoga jis input pr work ho rha hoga : or value user type krega wah sai aagyegi.
      // remember the data which is going from here is converting into object {} when state upadted it becomes {name:"value"}...
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data submitted", data);

    //  1. Get existing data from localStorage
    let existingData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("Existing Data Type:", typeof existingData);

    // Check if email already exists
    const emailExists = existingData.some(
      (entry) => entry.email === data.email
    );

    if (emailExists) {
      swal("Error!", "This email is already registered!", "error");
      return; // Stop further execution
    }
    // 2. Append new form data to existing array
    existingData.push(data);

    //  3. Save updated array back to localStorage
    localStorage.setItem("formData", JSON.stringify(existingData));

    swal("Good job!", "Registration Successful!", "success");
    // ek bar to array [] banega or data jaeyga hi jayega , uske bad sai checking/comparing hona start ho jayegi.✔❤❤
  }

  return (
    <>
      <div className="flex min-h-full mx-auto max-w-[1200px] flex-col px-6 lg:px-8">
        <div className="sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {siteData?.inputData?.signUp}
          </h2>
        </div>

        {/* Input section */}
        <div className="mt-10 w-full flex flex-col sm:flex-row items-center gap-16">
          <form
            onSubmit={handleSubmit}
            className="space-y-3 w-full sm:w-[40%]"
            action="#"
            method="POST"
          >
            {siteData?.signInData?.formData?.map((item, index) => (
              <div key={index}>
                <Input
                  label={item.label}
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  className={item.className}
                  onChange={handleInputChange}
                  value={data[item.name] || ""}
                />
              </div>
            ))}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {siteData?.inputData?.title}
              </button>
            </div>
          </form>

          <div className="sm:mt-10 lg:mt-0 w-[40%]">
            <img src="/homeImg3.jpg" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

// summaray....... json data array [😘]---->reducer---->convert in obj {❤}.......made new array for storage [👵]-----insert----- prev obj{❤}------> result [{}]....
