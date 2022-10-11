import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Header from "../Header/Header";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-100 py-4 font-bold">
        <nav className="flex px-2 justify-between items-center container mx-auto">
          <section className="text-2xl">
            <h2 className="">QuizCode</h2>
          </section>
          <section
            className={`inline-block nav text-2xl bg-orange-200 p-2 w-full  md:bg-blue-100 text-center md:text-right md:static absolute right-[1px] md:right-0  top-16 duration-1000 ease-in-out ${
              open ? "top-5 " : "top-[-520px]"
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "md:active bg-red-400 rounded-md p-1" : undefined
              }
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "md:active bg-red-400 rounded-md p-1" : undefined
              }
              to="/statistics"
            >
              Statistics
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "md:active bg-red-400 rounded-md p-1" : undefined
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </section>

          {/* hamburger menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="h-8 w-6 cursor-pointer md:hidden "
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
