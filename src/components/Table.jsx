import React, { useState } from "react";
import { siteData } from "./sitedata";
import Form from "./Form";

const Table = () => {
  const [Register, setRegister] = useState(false);
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
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {/* data comes from object user submit data */}
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/*  calling the components wrt 2-tabs data */}

      {Register && <Form Register={Register} setRegister={setRegister} />}


    </>
  );
};

export default Table;
