import React, { useState, useEffect } from "react";
import { siteData } from "./sitedata";
import HouseForm from "./HouseForm";
import swal from "sweetalert";

const InhouseBooking = () => {
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const storeKey = storedUser.email.split("@")[0];
  const [Register, setRegister] = useState(false);
  const [houseBookings, setHouseBookings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load initial data and setup storage listener
  useEffect(() => {
    // First load
    const loadData = () => {
      const data =
        JSON.parse(localStorage.getItem(`${storeKey}_InHbookingData`)) || [];
      setHouseBookings(data);
    };

    loadData();

    // Listen for storage changes
    const handleStorageChange = () => {
      loadData();
    };
    //  yai code tab chalega jab koi bhi tab mai storage ka data change hoga .
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [storeKey]);

  function handleDelete(id) {
    const newData = houseBookings.filter((_, index) => index !== id);
    updateBookings(newData);
    swal("Deleted!", "Booking removed successfully", "success");
  }

  function handleEdit(index) {
    setEditIndex(index);
    setRegister(true);
  }

  function handleArchive(id) {
     // 1. Get the item to archive
     const itemToArchive = houseBookings[id];
     // 2. Remove from current housebookings
     const updatedBookings = houseBookings.filter((_, i) => i !== id);
     // 3. Get existing Archive from localStorage
     const existingInHouse =
       JSON.parse(localStorage.getItem(`${storeKey}_ArchiveData`)) || [];
     // 4. Update both in localStorage only
     localStorage.setItem(
       `${storeKey}_HouseBookings`,
       JSON.stringify(updatedBookings)
     );
     // for Archive data.........
     localStorage.setItem(
       `${storeKey}_ArchiveData`,
       JSON.stringify([...existingInHouse, itemToArchive])
     );
     // 5. Update local state to trigger re-render
     setHouseBookings(updatedBookings);
 
     swal("Archived!", "Booking moved to in-house", "success");
  }

  // Helper function to update both state and localStorage
  const updateBookings = (newBookings) => {
    setHouseBookings(newBookings);
    localStorage.setItem(
      `${storeKey}_HouseBookings`,
      JSON.stringify(newBookings)
    );
    // Trigger storage event for other tabs/components
    // Aur tum chahte ho ki ek component update kare, to dusra automatically refresh ho... Tab window.dispatchEvent ka use karte hai!❌ Bina dispatchEvent Ke:Table se archive karo → InhouseBooking refresh nahi hoga (kyuki use pata hi nahi ki data change hua).
    window.dispatchEvent(new Event("storage"));
  };
  //   dispatchEvent = Signal bhejna ("Bhai, data update kar diya!")
  //   addEventListener = Signal sunna ("Haan bhai, update kar leta hu!")

  // Format date for display
  const formatDate = (dateString, showTime) => {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      ...(showTime && {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <div className="flex justify-evenly mt-5 mb-10">
        <div
          className="relative bg-blue-500 px-5 py-2 rounded-xl text-white cursor-pointer"
          onClick={() => setRegister((prev) => !prev)}
        >
          <button>Register</button>
        </div>
        <div className="bg-blue-500 px-5 py-2 rounded-xl text-white">
          <button>Print</button>
        </div>
        <div className="bg-blue-500 px-5 py-2 rounded-xl text-white">
          <button>Total Booking</button>
        </div>
      </div>

      <div className="w-[95%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-[14px] text-gray-700 dark:text-gray-400">
            <tr className="text-white bg-black">
              {siteData?.tableData?.dataArray?.map((item, index) => (
                <th key={index} scope="col" className="px-4 py-3">
                  {item.points}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-[aliceblue]">
            {houseBookings &&
              houseBookings.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-400 hover:bg-gray-100"
                >
                  <td className="px-4 py-4">{index + 1}</td>
                  <td className="px-4 py-4">{item.fullname}</td>
                  <td className="px-4 py-4">{item.location}</td>
                  <td className="px-4 py-4">{item.roomNo}</td>
                  <td className="px-4 py-4">{item.totalPeople}</td>
                  <td className="px-4 py-4">{formatDate(item.checkInDate)}</td>
                  <td className="px-4 py-4">{formatDate(item.checkOutDate)}</td>
                  <td className="px-4 py-4">₹{item.price}</td>
                  <td className="px-4 py-4">{item.mobileNumber}</td>
                  <td className="px-4 py-4 max-w-xs truncate">
                    {item.textarea}
                  </td>
                  <td className="px-4 py-4">
                    {formatDate(item.createdAt, true)}
                  </td>
                  <td className="px-4 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleArchive(index)}
                      className="text-red-800 hover:text-red-950"
                    >
                      Archive
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {Register && (
        <HouseForm
          setRegister={setRegister}
          houseBookings={houseBookings}
          setHouseBookings={updateBookings}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          storeKey={storeKey}
        />
      )}
    </>
  );
};

export default InhouseBooking;
