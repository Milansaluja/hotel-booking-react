import React, { useState, useEffect } from "react";
import { siteData } from "./sitedata";

const Archive = () => {
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const storeKey = storedUser.email.split("@")[0];
  const [archive, setArchive] = useState([]);

  // Load initial data and setup storage listener
  useEffect(() => {
    // First load
    const loadData = () => {
      const data =
        JSON.parse(localStorage.getItem(`${storeKey}_ArchiveData`)) || [];
      setArchive(data);
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

  //   format date code...........
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

  function handleDelete(id) {
    let afterDelete = archive.filter((_, index) => index !== id);
    localStorage.setItem(
      `${storeKey}_ArchiveData`,
      JSON.stringify(afterDelete)
    ),
      setArchive(afterDelete);
    window.dispatchEvent(new Event("storage"));
    swal("Deleted!", "Booking removed from archive", "success");
  }

  return (
    <>
      <div className="flex justify-evenly mt-5 mb-10">
     
        <div className="bg-blue-500 px-5 py-2 rounded-xl text-white">
          <button>Print</button>
        </div>
        <div className="bg-blue-500 px-5 py-2 rounded-xl text-white">
          <button>Total Archive</button>
        </div>
      </div>

      {/* table............. */}
      <div className="w-[99%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right ">
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
            {archive &&
              archive.map((item, index) => (
                <tr key={index} className="border-b border-gray-400">
                  {/* data comes from object user submit data */}
                  <td className="px-4 py-4">{index + 1}</td>
                  <td className="px-4 py-4">{item.fullname}</td>
                  <td className="px-4 py-4">{item.location}</td>
                  <td className="px-4 py-4">{item.roomNo}</td>
                  <td className="px-4 py-4">{item.totalPeople}</td>
                  <td className="px-4 py-4">{item.checkInDate}</td>
                  <td className="px-4 py-4">{item.checkOutDate}</td>
                  <td className="px-4 py-4">₹{item.price}</td>
                  <td className="px-4 py-4">{item.mobileNumber}</td>
                  <td className="px-4 py-4">{item.textarea}</td>
                  <td className="px-4 py-4">
                    {formatDate(item.createdAt, true)}
                  </td>

                  <td>
                    {/* <td
                      //  onClick={() => handleEdit(index)}
                      className="px-4 py-4 cursor-pointer text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </td>
                    <td
                      //  onClick={() => handleInhouse(index)}
                      className="px-4 py-4 cursor-pointer text-green-600 hover:text-green-800"
                    >
                      Inhouse
                    </td> */}
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-4 cursor-pointer text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Archive;
