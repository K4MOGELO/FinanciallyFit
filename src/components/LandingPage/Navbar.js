import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-white font-bold text-lg">
        <Link to="/">FinanciallyFit</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/landing" className="text-white hover:text-gray-200">
          Features
        </Link>
        <Link to="/landing" className="text-white hover:text-gray-200">
          Pricing
        </Link>
        <Link to="/landing" className="text-white hover:text-gray-200">
          About Us
        </Link>
        <Link to="/landing" className="text-white hover:text-gray-200">
          Contact
        </Link>
        <Link
          to="/signin"
          className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-500 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-500 transition duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-blue-500 flex flex-col items-center py-4">
          <Link to="/landing" className="text-white py-2 hover:text-gray-200">
            Features
          </Link>
          <Link to="/landing" className="text-white py-2 hover:text-gray-200">
            Pricing
          </Link>
          <Link to="/landing" className="text-white py-2 hover:text-gray-200">
            About Us
          </Link>
          <Link to="/landing" className="text-white py-2 hover:text-gray-200">
            Contact
          </Link>
          <Link
            to="/signin"
            className="text-white mt-4 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white mt-2 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
