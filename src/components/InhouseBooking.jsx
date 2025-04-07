import React,{useState} from 'react'
import { siteData } from "./sitedata";
import Form from "./Form";
import HouseForm from './HouseForm';

const InhouseBooking = () => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const storeKey= storedUser.email.split("@")[0];

    const [Register, setRegister] = useState(false); // state for form open/closed.
    // fetching data from local storage.............................
    const [houseBookings, setHouseBookings] = useState(
      JSON.parse(localStorage.getItem(`${storeKey}_InHbookingData`)) || []
    );
    // console.log("ui data",bookings);
  
    const [editIndex, setEditIndex] = useState(null);
  
    function handleDelete(id) {
      const newData = houseBookings.filter(
        (_, index) => index !== id // true ayega har jage bas 1 ko chodkar wahi extract ho jaygea.
      );
      setHouseBookings(newData); // render the page again.
      localStorage.setItem(`${storeKey}_InHbookingData`, JSON.stringify(newData));
    }
  
    function handleEdit(index) {
      setEditIndex(index);
      setRegister(true);
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
                  <tr key={index} className="border-b border-gray-400">
                    {/* data comes from object user submit data */}
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-4 py-4">{item.fullname}</td>
                    <td className="px-4 py-4">{item.location}</td>
                    <td className="px-4 py-4">{item.roomNo}</td>
                    <td className="px-4 py-4">{item.totalPeople}</td>
                    <td className="px-4 py-4">{item.checkInDate}</td>
                    <td className="px-4 py-4">{item.checkOutDate}</td>
                    <td className="px-4 py-4">{item.price}</td>
                    <td className="px-4 py-4">{item.mobileNumber}</td>
                    <td className="px-4 py-4">{item.textarea}</td>
                    <td
                      onClick={() => handleEdit(index)}
                      className="px-4 py-4 cursor-pointer"
                    >
                      Edit
                    </td>
                    <td
                      onClick={() => handleDelete(index)}
                      className="px-4 py-4 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
  
        {/*  calling the components wrt 2-tabs data */}
  
        {Register && <HouseForm setRegister={setRegister} houseBookings={houseBookings} setHouseBookings={setHouseBookings} editIndex={editIndex} setEditIndex={setEditIndex} storeKey={storeKey} />}
      </>
    );
  
}

export default InhouseBooking
