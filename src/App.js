import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { AuthProvider, useAuth } from "./components/auth/AuthProvider";
import Navbar from "./components/Layout/Navbar";
import Layout from "./components/Layout/Layout";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Predictions from "./pages/Predictions";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/predictions" element={<Predictions />} />
          </Route>
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoute = ({ children }) => {
  // Return the Navbar and children components for authenticated users
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default App;
