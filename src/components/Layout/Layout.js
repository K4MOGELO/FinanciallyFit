import React from "react";
import Navbar from "./Navbar";

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import Sidebar from "./DesktopSidebar";

const Layout = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>; // Display loading message while checking authentication
  }

  if (!currentUser) {
    return <Navigate to="/landing" replace />; // Redirect to landing page if user is not logged in
  }
  return (
    <div className=" bg-slate-50 ">
      <Navbar />
      <div className="flex mt-16 bg-slate-50 ">
        <Sidebar />
        <div className="flex-grow md:ml-36 ">
          <div className="m-2 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
