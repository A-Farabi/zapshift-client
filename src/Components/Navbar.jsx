import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/Services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/Coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/About-Us">About-Us</NavLink>
      </li>
      <li>
        <NavLink to="/Pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/Blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <NavLink to="/">
            <a className="btn btn-ghost text-xl">
              <img src="/src/assets/logo.png" alt="" /> ZapShift
            </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink to="/login">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline">
            Sign In
          </button>
          </NavLink>
          <NavLink to="/register">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-lime-400">
            Sign Up
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
