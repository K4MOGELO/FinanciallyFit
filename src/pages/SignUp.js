import React, { useEffect, useState } from "react";
import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../components/auth/AuthProvider";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const { currentUser, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    businessName: "",
    businessSize: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (currentUser) {
    return <Navigate to="/" replace />; // Redirect to login on unauthorized access
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setError("");
    const { email, password, fullName, businessName, businessSize } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid; // Get the user ID
        // Add user data to Firestore users collection with user ID
        const userRef = doc(db, "users", userId); // Specify the collection reference and document ID separately
        return setDoc(userRef, {
          email,
          fullName,
          userId, // Include the user ID
        });
      })
      .then(() => {
        // Add business data to Firestore businesses collection with user ID
        const businessRef = doc(collection(db, "stores"));
        return setDoc(businessRef, {
          name: businessName,
          size: businessSize,
          ownerId: auth.currentUser.uid, // Link business to current user ID
        });
      })
      .then(() => {
        // Automatic sign-in after successful account creation
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        setSuccessMessage("User signed up successfully!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError(
            "This email is already in use. Please try a different email."
          );
        } else {
          setError("Error signing up: " + error.message);
        }
      });
  };

  return (
    <div className=" bg-slate-100">
      <Navbar />
      <div className="container mx-auto m-8 p-4 bg-slate-100">
        <h1 className="text-4xl font-bold text-center mb-8">
          Create an Account
        </h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {successMessage && (
          <div className="text-green-500 text-center mb-4">
            {successMessage}d
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
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
          <div className="mb-6">
            <label
              htmlFor="businessName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Business Name
            </label>
            <input
              required
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your business name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="businessSize"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Business Size
            </label>
            <select
              required
              id="businessSize"
              name="businessSize"
              value={formData.businessSize}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select business size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
