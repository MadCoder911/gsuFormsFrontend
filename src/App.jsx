import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/Login";
import Responses from "./components/Responses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Responses />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}

export default App;
