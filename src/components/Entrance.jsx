import React from "react";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Entrance = () => {
  return (
    <div className=" w-full min-h-screen bg-[#ededed]">
      {/* Navigation Buttons */}
      <div className=" pt-10 px-6 gap-10 flex text-lg">
        <NavLink
          to="/signup"
          className={({
            isActive,
          }) => ` rounded-lg  text-white hover:bg-blue-600
          ${isActive ? "bg-blue-500" : "bg-blue-300 "}`}
        >
          <button className="px-5 py-2 rounded-xl  text-white hover:bg-blue-600">
            Signup
          </button>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `rounded-lg  text-white hover:bg-blue-600 ${
              isActive ? "bg-blue-500" : "bg-blue-300"
            }`
          }
        >
          <button className="px-5 py-2 ">Login</button>
        </NavLink>
      </div>

      {/* Dynamic Content */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Entrance;
