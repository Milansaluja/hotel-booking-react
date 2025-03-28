import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Table from "./Table";
import TopTabsSection from "./TopTabsSection"

const Profile = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    // console.log("fetching",storedUser);

    if (storedUser) {
      setUserName(storedUser.FullName); // Set user name
    } else {
      navigate("/login"); // If no user found, redirect to login (this is used for ..jab banda url copy karke search mare tab bhi login par hi shift ho agar data nhi hai to database mai ,it means wo logged in)
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-right mt-8 mx-4">
        <h1 className="text-xl font-bold text-gray-900 pb-10 ">
        Currently active agent - <i>  {userName} 🎉 </i>
        </h1>
      </div>
<TopTabsSection/>

    </>
  );
};

export default Profile;

// data local storage mai rakhunga to website sai jane k bad bhi save rahega
//  session storage mai data rakhunga to website sai jane k bad delete ho jayega
// cookie mai bhi rakh sakta hu.....
