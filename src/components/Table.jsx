import React, { useState } from "react";
import { siteData } from "./sitedata";
import Form from "./Form";

const Table = () => {
  const [Register, setRegister] = useState(false);
  // fetching data from local storage.............................
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookingData")) || []
  );
  // console.log("",bookingData);

  // console.log(data);

  function handleDelete(id) {
    const newData = bookings.filter(
      (_,index) =>
        index !== id // true ayega har jage bas 1 ko chodkar wahi extract ho jaygea.
    );
    setBookings(newData); // render the page again.
    localStorage.setItem("bookingData", JSON.stringify(newData));
  }

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
      <div className="w-[95%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-[14px] text-gray-700 up dark:text-gray-400">
            <tr className="text-black text-center">
              {siteData?.tableData?.dataArray?.map((item, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {item.points}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-center">
            {bookings &&
              bookings.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  {/* data comes from object user submit data */}
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.fullname}</td>
                  <td className="px-6 py-4">{item.location}</td>
                  <td className="px-6 py-4">{item.roomNo}</td>
                  <td className="px-6 py-4">{item.totalPeople}</td>
                  <td className="px-6 py-4">{item.checkInDate}</td>
                  <td className="px-6 py-4">{item.checkOutDate}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">{item.mobileNumber}</td>
                  <td className="px-6 py-4">{item.textarea}</td>
                  <td className="px-6 py-4 cursor-pointer">Edit</td>
                  <td
                    onClick={() => handleDelete(index)}
                    className="px-6 py-4 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/*  calling the components wrt 2-tabs data */}

      {Register && <Form setRegister={setRegister} setBookings={setBookings} />}
    </>
  );
};

export default Table;
