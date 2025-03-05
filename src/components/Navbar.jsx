import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false); // Disable button temporarily

  function handleLogout() {
    setIsDisabled(true);
    
// settimeout for delay and satisfication to user.................
    setTimeout(() => {
      localStorage.removeItem("loggedInUser");
      swal("Logged Out!", "Successfully logged out!", "success");
      navigate("/login");
      setIsDisabled(false);
    }, 2000);
  }
 
  return (
    <nav className="navbar flex justify-between items-center bg-blue-400 shadow-lg p-2">
      <div className="flex items-center mx-5">
        <div className="flex items-center rounded-lg">
          <a href="/">
            <img
              src="siteLogo.webp"
              alt="logo"
              width="60"
              height="60"
              className="rounded-full"
            />
          </a>
        </div>
        <span className="text-white mx-4"> HMS </span>
      </div>

      <div className="mx-5">
        {location.pathname === "/welcome" ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            disabled={isDisabled} // Disable button while waiting
          >
            <p>{isDisabled?"please Wait":"Logout"}</p>
          </button>
        ) : (
          <p className="nav-item text-white fw-bold mx-3">MLN Agencies</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
