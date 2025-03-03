import Login from "./components/Login";
import Signup from "./components/Signup";
import Entrance from "./components/Entrance";
import Welcome from "./components/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Entrance />, // entrance is my parent and i want it in every children rendered.
      children: [
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { index: true, element: <Signup /> }, // Default to Signup on
      ],
    },
    {path:"/welcome",element:<Welcome/>},
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// What Happens Without children?
// If you don't use children, you would need to define routes individually like this:

// const router = createBrowserRouter([
//   { path: "/", element: <Entrance /> },
//   {
//     path: "/signup",
//     element: (
//       <>
//         {" "}
//         <Entrance /> <Signup />{" "}
//       </>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <>
//         {" "}
//         <Entrance /> <Login />{" "}
//       </>
//     ),
//   },
// ]);
// return (
//   <>
//     <RouterProvider router={router} />
//   </>
// );
