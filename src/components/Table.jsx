import React, { useState } from "react";
import { siteData } from "./sitedata";
import Form from "./Form";

const Table = () => {
  //  getting data of logged in user profile....
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // console.log("userProfile",storedUser);
  const storeKey = storedUser.email.split("@")[0];
  // console.log(storeKey);

  const [Register, setRegister] = useState(false);
  // fetching data from local storage.............................
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem(`${storeKey}_bookingData`)) || []
  );
  // console.log("ui data",bookings);

  const [editIndex, setEditIndex] = useState(null);
  const [archieveIndex, setArchieveIndex] = useState(null);

  function handleDelete(id) {
    const newData = bookings.filter(
      (_, index) => index !== id // true ayega har jage bas 1 ko chodkar wahi extract ho jaygea.
    );
    setBookings(newData); // render the page again.
    localStorage.setItem(`${storeKey}_bookingData`, JSON.stringify(newData));
  }

  function handleEdit(index) {
    setEditIndex(index);
    setRegister(true);
  }

  function handleInhouse(index) {
    // 1. Get the item to archive
    const itemToArchive = bookings[index];
    // 2. Remove from current bookings
    const updatedBookings = bookings.filter((_, i) => i !== index);
    // 3. Get existing in-house bookings from localStorage
    const existingInHouse =
      JSON.parse(localStorage.getItem(`${storeKey}_InHbookingData`)) || [];
    // 4. Update both in localStorage only
    localStorage.setItem(
      `${storeKey}_bookingData`,
      JSON.stringify(updatedBookings)
    );
    localStorage.setItem(
      `${storeKey}_InHbookingData`,
      JSON.stringify([...existingInHouse, itemToArchive])
    );
    // 5. Update local state to trigger re-render
    setBookings(updatedBookings);

    swal("Archived!", "Booking moved to in-house", "success");
  }

  console.log("2nd", archieveIndex);

  // custom date format.............
  const formatDate = (data, isTime) => {
    const date = new Date(data);
    const yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    const time = date.toLocaleTimeString();
    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;
    return `${dd}-${mm}-${yy} / ${isTime ? time : ""}`;
  };

  console.log("date-check", bookings);

  return (
    <>
      {/*  2nd tabs buttons....................... */}
      <div className="flex justify-evenly mt-5 mb-10">
        <div
          className="relative bg-blue-500 px-5 py-2 rounded-xl text-white"
          onClick={() => {
            setRegister((prev) => !prev);
          }}
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
            {bookings &&
              bookings.map((item, index) => (
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
                    <td
                      onClick={() => handleEdit(index)}
                      className="px-4 py-4 cursor-pointer text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </td>
                    <td
                      onClick={() => handleInhouse(index)}
                      className="px-4 py-4 cursor-pointer text-green-600 hover:text-green-800"
                    >
                      Inhouse
                    </td>
                    <td
                      onClick={() => handleDelete(index)}
                      className="px-4 py-4 cursor-pointer text-red-600 hover:text-red-800"
                    >
                      Delete
                    </td>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/*  calling the components wrt 2-tabs data */}

      {Register && (
        <Form
          setRegister={setRegister}
          bookings={bookings}
          setBookings={setBookings}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          storeKey={storeKey}
        />
      )}
    </>
  );
};

export default Table;
