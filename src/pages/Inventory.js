import React, { useState } from "react";
import InventoryTable from "../components/inventory/InventoryTable";
import UploadDataForm from "../components/inventory/UploadDataForm";

const Inventory = () => {
  const [selectedTable, setSelectedTable] = useState("inventory");

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleAddData = () => {
    // Implement logic to handle adding data (upload spreadsheet)
  };

  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleAddDataClick = () => {
    setShowUploadForm(!showUploadForm);
  };

  const handleUploadSubmit = (file) => {
    // Implement file upload logic here
    console.log("File uploaded:", file);
    // After successful upload, close the form
    setShowUploadForm(false);
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-3xl font-semibold mb-4">Inventory Management</h1>

      {/* Table selection */}
      <div className="mb-4">
        <label htmlFor="table" className="block font-medium mb-1">
          Select Table:
        </label>
        <select
          id="table"
          className="border rounded-md px-4 py-2"
          value={selectedTable}
          onChange={handleTableChange}
        >
          <option value="inventory">Inventory</option>
          <option value="sales">Sales</option>
          {/* Add more options for other tables */}
        </select>
      </div>

      {/* Add data button */}
      {showUploadForm ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
          onClick={handleAddDataClick}
        >
          cancel
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
          onClick={handleAddDataClick}
        >
          Add Data
        </button>
      )}

      {showUploadForm && (
        <UploadDataForm
          selectedTable={selectedTable}
          onSubmit={handleUploadSubmit}
        />
      )}

      {/* Placeholder for displaying selected table */}
      <div className=" border  border-gray-300 rounded-md  m-2">
        {/* Placeholder for table display */}
        <InventoryTable selectedTable={selectedTable} />
      </div>
    </div>
  );
};

export default Inventory;
