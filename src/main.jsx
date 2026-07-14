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
import Register from "./Pages/Auth/Register";
import AuthProvider from "../Context/AuthProvider";
import Login from "./Pages/Auth/Login";
import PrivateRoutes from "./routes/privateRoutes";

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
        element: <PrivateRoutes><About></About></PrivateRoutes>,
      },
    ],

  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register> </Register>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist">
      <div className="full-width bg-[#EAECED]">
        <div className="w-[90%] mx-auto">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
      </div>
    </div>
  </StrictMode>,
);
