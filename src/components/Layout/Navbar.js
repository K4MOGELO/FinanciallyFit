// components/Navbar.js

import React, { useState } from "react";
import Sidebar from "./MobileSidebar";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 z-10 w-full bg-[#0091FF] py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="text-white text-2xl md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <div className="text-white text-lg font-semibold">
              FinanciallyFit
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Your user avatar or icon */}
            <div className="w-8 h-8 rounded-full bg-gray-500"></div>{" "}
          </div>
        </div>
      </nav>
      {showSideBar && <Sidebar />}
    </>
  );
};

export default Navbar;
