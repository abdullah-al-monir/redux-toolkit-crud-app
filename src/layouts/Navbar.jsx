import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-200 px-4 py-2 flex justify-center items-center md:gap-10 flex-col md:flex-row text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-red-600"
            : " hover:text-red-600 "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/show-books"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-red-600"
            : " hover:text-red-600"
        }
      >
        Show Books
      </NavLink>
      <NavLink
        to="/add-book"
        className={({ isActive }) =>
          isActive
            ? "font-semibold text-red-600"
            : " hover:text-red-600"
        }
      >
        Add Book
      </NavLink>
    </nav>
  );
};

export default Navbar;
