import React, { useEffect, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";

function Sidenav({ isOpen, ToggleSidebar }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        ToggleSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ToggleSidebar]);

  const isHomeActive = useMatch("/");
  const isLayoutsActive = useMatch("/Layouts");
  const isButtonPageActive = useMatch("/ButtonPage");

  return (
    <>
      {isOpen && (
        <aside
          className={`sidebar fixed top-0 md:top-20 lg:w-48 bottom-0 md:bottom-5 lg:left-3 p-2 space-y-5 overflow-y-auto z-10 bg-gray-800 text-white rounded-xl ${
            isOpen ? "open" : ""
          }`}
        >
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Layouts"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isLayoutsActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Layouts
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Login Page
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Navs
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ButtonPage"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isButtonPageActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Buttons
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Cards
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Inputs
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Tables
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-400 ${
                  isHomeActive ? "bg-gray-700" : ""
                }`}
              >
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Footers
                </span>
              </NavLink>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
}

export default Sidenav;
