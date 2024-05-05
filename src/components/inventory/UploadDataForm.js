import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import all functions from 'xlsx'

const UploadDataForm = ({ onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        // Convert sheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        // Pass the JSON data to the onSubmit function
        onSubmit(jsonData);
        console.log(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
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
      <button
        onClick={handleFileUpload}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadDataForm;
