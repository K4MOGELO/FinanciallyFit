// components/Navbar.js

import React, { useState } from "react";
import Sidebar from "./MobileSidebar";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    // Handle profile click action
  };

  const handleLogoutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/landing");
      })
      .catch((error) => {
        // An error happened.
      });
    // Handle logout click action
  };
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

          <div className="relative">
            {/* User avatar or icon */}
            <img
              src={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPvFqD-oo4WMdikaau1qoCReBs1-aJSKEKRXubxk03-5MTDjJJ"
              }
              alt="Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                {/* Profile button */}
                <Link to="/profile" className="text-white hover:bg-blue-700">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleProfileClick}
                  >
                    Profile
                  </button>
                </Link>

                {/* Logout button */}
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {showSideBar && <Sidebar />}
    </>
  );
};

export default Navbar;
