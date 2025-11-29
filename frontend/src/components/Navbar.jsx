import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Navbar() {
 const linkClass =
    "hover:text-amber-500 transition text-sm font-medium";

  const activeClass =
    "text-amber-500 font-semibold";


  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-gray-900 text-gray-100 shadow">
      <div className="flex items-center gap-6">
        
        <Link to="/" className="text-2xl font-bold">
          Food<span className="text-amber-500">Box</span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          {/* <Link to="/" className="hover:underline">Home</Link> */}
         



  <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClass : linkClass
          }
        >
         Home
        </NavLink>




<NavLink
          to="/recipe"
          className={({ isActive }) =>
            isActive ? activeClass : linkClass
          }
        >
        Recipes
        </NavLink>






 <NavLink
          to="/submit"
          className={({ isActive }) =>
            isActive ? activeClass : linkClass
          }
        >
        Submit Recipes
        </NavLink>




       
        </div>
      </div>

      <div>
        <Link
          to="/login"
          className="hidden sm:inline-block px-3 py-1 rounded-md bg-amber-500 text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
