import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setJsonData(json);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Upload Excel Sheet</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {jsonData && (
        <div>
          <h3>JSON Data</h3>
          <table>
            <thead>
              <tr>
                {jsonData[0].map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jsonData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
