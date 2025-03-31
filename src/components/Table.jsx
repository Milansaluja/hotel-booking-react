import React, { useState } from "react";
import { siteData } from "./sitedata";
import Form from "./Form";

const Table = () => {
  const [Register, setRegister] = useState(false);
  // fetching data from local storage.............................
  let data = JSON.parse(localStorage.getItem("bookingData")) || [];
  // console.log(data);

function handleDelete(){
  
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
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            {data &&
              data.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                  {/* data comes from object user submit data */}
                  <td className="px-6 py-4">{index+1}</td>
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
                  <td onClick={handleDelete} className="px-6 py-4 cursor-pointer">Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/*  calling the components wrt 2-tabs data */}

      {Register && <Form Register={Register} setRegister={setRegister} />}
    </>
  );
};

export default Table;
