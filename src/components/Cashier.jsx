import React from "react";
import { siteData } from "./sitedata";

const Cashier = () => {
  return (
    <>
      <div className="flex justify-evenly mt-5 mb-10">
        <div className="bg-blue-500 px-5 py-2 rounded-xl text-white">
          <button>Print</button>
        </div>
        <div className="bg-blue-500 px-5 py-2 rounded-xl text-white">
          <button>Total Cash</button>
        </div>
      </div>
      
      {/* tables.......... */}
      <div className="w-[95%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-[14px] text-gray-700 dark:text-gray-400">
            <tr className="text-white bg-black">
              {siteData?.tableData?.cashierDataArray?.map((item, index) => (
                <th key={index} scope="col" className="px-4 py-3">
                  {item.points}
                </th>
              ))}
            </tr>
          </thead>

          {/* <tbody className="bg-[aliceblue]">
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
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default Cashier;
