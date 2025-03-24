import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex justify-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-lg font-semibold ${
              isActive ? "underline" : "hover:text-gray-200"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-white text-lg font-semibold ${
              isActive ? "underline" : "hover:text-gray-200"
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/fav"
          className={({ isActive }) =>
            `text-white text-lg font-semibold ${
              isActive ? "underline" : "hover:text-gray-200"
            }`
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `text-white text-lg font-semibold ${
              isActive ? "underline" : "hover:text-gray-200"
            }`
          }
        >
          SignUp
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
