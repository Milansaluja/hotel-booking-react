import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    // console.log("fetching",storedUser);

    if (storedUser) {
      setUserName(storedUser.FullName); // Set user name
    } else {
      navigate("/login"); // If no user found, redirect to login
    }
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to the page, {userName}! 🎉
      </h1>
    </div>
  );
};

export default Welcome;
