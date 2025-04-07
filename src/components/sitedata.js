import Table from "./Table";
import InhouseBooking from "./InhouseBooking";
export const siteData = {
  inputData: {
    title: "Register",
    signUp: "Sign up to your account",
    Login: "Login in to your account",
    email: "Email address",
    password: "Password",
    forgetPass: "Forgot password?",
    logIn: " Log in",
    notMember: " Not a member?",
    try: "Start a 14 day free trial",
  },

  signInData: {
    formData: [
      {
        label: "Full Name",
        type: "text",
        name: "FullName",
        required: true,
        className:
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
      },
      {
        label: "Hotel Name",
        type: "text",
        name: "HotelName",
        required: true,
        className:
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
      },
      {
        label: "No Of Hotel Rooms",
        type: "number",
        name: "totalRooms",
        required: true,
        className:
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
      },
      {
        label: "Mobile Number",
        type: "number",
        name: "mobile",
        required: true,
        className:
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        required: true,
        className:
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        required: true,
        className:
          "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
      },
    ],
  },

  tabs: {
    tabsArray1: [
      { id: "Booking", label: "Booking" },
      { id: "InHouse", label: "In House" },
      { id: "Archieve", label: "Archieve" },
      { id: "Cashier", label: "Cashier" },
    ],
    tabsArray2: [
      {
        id: "Booking",
        content: "Dashboard tab's associated content.",
        Comp: Table,
      },
      {
        id: "InHouse",
        content: "Dashboard tab's associated content.",
        Comp: InhouseBooking,
      },
      {
        id: "Archieve",
        content: "Settings tab's associated content.",
        Comp: Table,
      },
      {
        id: "Cashier",
        content: "Contacts tab's associated content.",
        Comp: Table,
      },
    ],
  },

  tableData: {
    dataArray: [
      { points: " Sr" },
      { points: "Full Name" },
      { points: "Location" },
      { points: "Room No" },
      { points: "Total Persons" },
      { points: "Checkin" },
      { points: "Checkout" },
      { points: "Price" },
      { points: "Mobile" },
      { points: "Notice" },
      { points: "Created At" },
      { points: "Action" },
    ],
  },

  registrationData: {
    formFields: [
      { id:1,
        name: "fullname",
        type: "text",
        placeholder: "Full Name",
        required: true,
        className:"p-3 rounded-lg w-full border border-black "
      },
      { id:2,
        name: "location",
        type: "text",
        placeholder: "Location",
        required: true,
        className:"p-3 rounded-lg w-full border border-black"

      },
      { id:3,
        name: "roomNo",
        type: "text",
        placeholder: "Room No",
        required: false,
        className:"p-3 rounded-lg w-full border border-black "
      },
      { id:4,
        name: "totalPeople",
        type: "text",
        placeholder: "Total People",
        required: true,
        className:"p-3 rounded-lg w-full border border-black"
      },
      { id:5,
        name: "checkInDate",
        type: "date",
        label: "Check in date",
        required: true,
        className:"p-3 rounded-lg w-full border border-black"
      },
      { id:6,
        name: "checkOutDate",
        type: "date",
        label: "Check out date",
        required: true, 
        className:"p-3 rounded-lg w-full border border-black"
      },
      { id:7,
        name: "price",
        type: "number",
        placeholder: "Price",
        required: false,
        className:"p-3 rounded-lg w-full border border-black"
      },
      { id:8,
        name: "mobileNumber",
        type: "number",
        placeholder: "Mobile",
        required: true,
        className:"p-3 rounded-lg w-full border border-black"
      },
      {
        id: 9, // Adding a textarea field
        name: "textarea",
        type: "textarea", // Indicate this is a textarea
        placeholder: "Notice",
        required: false,
        className: "p-3 rounded-lg w-full border border-black"
      }
    ],
  },
};
