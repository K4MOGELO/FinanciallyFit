import React from "react";
import SalesRevenue from "../../../Graphs/SalesRevenue"; // Assuming SalesRevenue component is in the correct path
import { SalesData } from "../../../database/SalesData";

const SalesRevenueWidget = () => {
  // Step 1: Transform Data
  const revenueByDate = SalesData.reduce((acc, sale) => {
    const date = sale.dateSold;
    const totalRevenue = sale.totalRevenue;
    if (acc[date]) {
      acc[date] += totalRevenue;
    } else {
      acc[date] = totalRevenue;
    }
    return acc;
  }, {});

  // Step 2: Prepare Data for Chart
  const revenueData = Object.keys(revenueByDate).map((date) => ({
    timestamp: new Date(date),
    revenue: revenueByDate[date],
  }));

  // Step 3: Render Chart
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md p-4 ">
      <h2 className="text-lg font-semibold mb-4">Sales Revenue Over Time</h2>
      <SalesRevenue data={revenueData} />
    </div>
  );
};

export default SalesRevenueWidget;
