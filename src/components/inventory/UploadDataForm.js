import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import all functions from 'xlsx'
import { useAuth } from "../auth/AuthProvider";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const UploadDataForm = ({ selectedTable, onSubmit }) => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false); // State to track if data has been uploaded
  const { currentUser } = useAuth();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileUpload = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array", cellDates: true }); // Specify cellDates: true
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        // Convert sheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: true }); // Ensure raw mode to keep dates as strings
        try {
          // Convert date fields to strings
          const convertedData = jsonData.map((entry) => {
            return Object.entries(entry).reduce((acc, [key, value]) => {
              if (value instanceof Date) {
                acc[key] = value.toISOString().split("T")[0]; // Convert Date object to string in 'YYYY-MM-DD' format
              } else {
                acc[key] = value;
              }
              return acc;
            }, {});
          });

          // Upload JSON data to Firestore
          await setDoc(doc(db, selectedTable, currentUser.userId), {
            userId: currentUser.userId, // Add userId
            data: convertedData, // Add converted JSON data
            dateAdded: new Date().toISOString(), // Add dateAdded field
          });
          console.log("JSON data successfully added to Firestore!");
          setUploaded(true); // Set uploaded state to true after successful upload
        } catch (error) {
          console.error("Error adding JSON data: ", error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Upload Data</h2>
      <div className="mb-4">
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          Select Excel File:
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      {!uploaded && (
        <button
          onClick={handleFileUpload}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload
        </button>
      )}
      {uploaded && (
        <button
          onClick={handleRefresh}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Refresh
        </button>
      )}
    </div>
  );
};

export default UploadDataForm;
