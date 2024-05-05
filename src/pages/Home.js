import React, { useState } from "react";
import WidgetDropdown from "../components/Dashboard/WidgetDropdown";
import SalesRevenueWidget from "../components/Dashboard/Widgets/SalesRevenue";
import SalesRevenue from "../Graphs/SalesRevenue";
import { SalesData } from "../database/SalesData";
import TopProductsWidget from "../components/Dashboard/Widgets/TopProductsWidget";
import SalesPerformanceComparisonWidget from "../components/Dashboard/Widgets/SalesPerformanceComparisonWidget";
import InventoryWidget from "../components/Dashboard/Widgets/InventoryWidget";
import {
  useInventoryData,
  useSalesData,
} from "../components/auth/AuthProvider";

const Home = () => {
  const { SalesData } = useSalesData();
  const { InventoryData } = useInventoryData();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleWidgetSelect = (widgetId) => {
    // Logic to handle widget selection
    console.log("Selected Widget:", widgetId);
    // Implement logic to add the selected widget to the dashboard
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Inventory Overview</h2>
      {SalesData && InventoryData ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SalesRevenueWidget />

            <TopProductsWidget />
          </div>

          <div className=" grid grid-cols-2 gap-6 space-x-4 bg-white mt-6 rounded-lg shadow-md ">
            <SalesPerformanceComparisonWidget />
            <InventoryWidget />
          </div>
        </>
      ) : (
        <div>
          <h1>no data found</h1>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Home;
