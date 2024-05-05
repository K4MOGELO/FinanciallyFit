import React from "react";

import { useInventoryData, useSalesData } from "../auth/AuthProvider";
const InventoryTable = ({ selectedTable }) => {
  const { SalesData } = useSalesData();
  const { InventoryData } = useInventoryData();

  // Get the column names from the first item in the salesData array
  let data;
  if (selectedTable === "sales") {
    data = SalesData;
  } else if (selectedTable === "inventory") {
    data = InventoryData;
  }

  if (!data) {
    return null; // If selected table is neither "sales" nor "inventory", return null
  }
  const columnNames = Object.keys(data[0]);

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">{selectedTable} Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {columnNames.map((columnName) => (
                <th
                  key={columnName}
                  className="border border-gray-400 px-4 py-2"
                >
                  {columnName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((sale, index) => (
              <tr key={index}>
                {columnNames.map((columnName) => (
                  <td
                    key={columnName}
                    className="border border-gray-400 px-4 py-2"
                  >
                    {sale[columnName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
