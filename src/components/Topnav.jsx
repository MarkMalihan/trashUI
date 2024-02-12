import React from "react";
import { NavLink } from "react-router-dom";

function Topnav({ ToggleSidebar }) {
  return (
    <>
      <div className="hidden md:block">
        <nav className="sticky top-0 z-10 p-3 bg-gray-800 flex items-center justify-between">
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

      <div className="block md:hidden">
        <nav className="sticky top-0 z-10 p-3 bg-gray-800 flex items-center justify-between">
          <NavLink to="/" className="text-xl text-white font-bold">
            trashUI
          </NavLink>
          <button onClick={ToggleSidebar} className="text-white">
            Open
          </button>
        </nav>
      </div>
    </>
  );
}

export default Topnav;
