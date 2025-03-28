import React, { useState } from "react";
import { siteData } from "./sitedata";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Input from "./Input";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev, // used becoz there r 2 inputs & we want both to store it in object & dont want to loose prev data when state updates.
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // 1. Retrieve stored users from localStorage
    let existingUsers = JSON.parse(localStorage.getItem("formData")) || [];

    // 2. Check if email & password exist in the stored data

    const user = existingUsers.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      swal("Success!", "Login Successful!", "success").then(() =>
        navigate("/profile")
      );
      console.log("userExist", user);
    } else {
      swal("Error!", "Check your Email or password ", "error");
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 max-w-[1200px] mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {siteData?.inputData.Login}
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full max-w-sm">
          {/* form............................................... */}
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            {/* Map through the form fields */}
            {siteData?.signInData?.formData
              .filter((field) => ["email", "password"].includes(field.name))
              .map((field) => (
                <div key={field.name} className="space-y-0">
                  <Input
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    value={loginData[field.name] || ""} // Avoid undefined error, means ..loginData.email, loginData.password
                    onChange={handleChange}
                    className={field.className}
                  />
                </div>
              ))}

            <div className="text-sm text-[#4f46e5]">
              <a href="#">Forget Password</a>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {siteData?.inputData.logIn}
              </button>
            </div>
          </form>
          {/* form end.................................................................................... */}
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {siteData?.inputData.notMember}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {siteData?.inputData.try}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
