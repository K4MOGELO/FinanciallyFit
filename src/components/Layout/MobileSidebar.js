// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
const Sidebar = () => {
  const { currentUser } = useAuth(); // Assuming you have an auth context to get current user

  return (
    <div className="bg-[#0091FF] fixed text-white h-screen w-36 flex md:hidden flex-col">
      <div className="flex-1 overflow-y-auto">
        <ul className="py-4">
          <li className="px-4 py-2">
            <Link to="/" className="text-white hover:bg-blue-700">
              Dashboard
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/inventory" className="text-white hover:bg-blue-700">
              Inventory
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/reports" className="text-white hover:bg-blue-700">
              Reports
            </Link>
          </li>

          <li className="px-4 py-2">
            <Link to="/settings" className="text-white hover:bg-blue-700">
              Settings
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/logout" className="text-white hover:bg-blue-700">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
