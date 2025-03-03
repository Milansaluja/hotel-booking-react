import Login from "./Login";

export const inputdata = {
  title: "Register",
  signUp: "Sign up to your account",
  Login: "Login in to your account",
  email: "Email address",
  password: "Password",
  forgetPass: "Forgot password?",
  logIn: " Log in",
  notMember: " Not a member?",
  try: "Start a 14 day free trial",


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
};
