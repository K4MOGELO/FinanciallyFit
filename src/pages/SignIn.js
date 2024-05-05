import React, { useState } from "react";
import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../components/auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log("User logged in successfully");
      // Redirect user to another page if needed

      if (currentUser) {
        navigate("/");
      } // Replace with your desired route after login
    } catch (error) {
      setError(handleFirebaseError(error.code));
      setLoading(false);
    }
  };

  if (currentUser) {
    return <Navigate to="/" replace />; // Redirect to login on unauthorized access
  }

  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-credential":
        return "Incorrect Email or Password.";
      case "auth/invalid-email":
        return "Invalid email address. Please enter a valid email.";
      case "auth/user-not-found":
        return "User not found. Please check your email address.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      default:
        return "An error occurred while logging in";
    }
  };
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="container mx-auto m-8 p-4 bg-slate-100">
        <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
