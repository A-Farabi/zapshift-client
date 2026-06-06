import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Coverage from "./Pages/Coverage";
import About from "./Pages/About";
import AuthLayout from "./Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
    ],

  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login"

      },
      {
        path: "register"
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist">
      <div className="full-width bg-[#EAECED]">
        <div className="w-[90%] mx-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  </StrictMode>,
);
