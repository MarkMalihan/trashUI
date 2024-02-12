import React from "react";
import { NavLink } from "react-router-dom";

function Topnav({ ToggleSidebar }) {
  return (
    <>
      <div className="hidden md:block sticky top-0  z-10">
        <nav className=" p-3 bg-gray-800 flex items-center justify-between">
          <NavLink to="/" className="text-xl text-white font-bold">
            trashUI
          </NavLink>
          <a
            href="https://github.com/MarkMalihan/trashUI"
            target="_blank"
            className="px-2 py-0.5 border rounded-md bg-white hover:bg-gray-200 text-sm flex items-center gap-1"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/material-rounded/48/github.png"
              alt="github"
            />
            Visit Dumpsite
          </a>
        </nav>
      </div>

      <div className="block md:hidden sticky top-0 z-10">
        <nav className=" p-3 bg-gray-800 flex items-center justify-between">
          <NavLink to="/" className="text-xl text-white font-bold">
            trashUI
          </NavLink>
          <button onClick={ToggleSidebar} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Topnav;
