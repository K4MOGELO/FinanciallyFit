import React, { useState } from "react";

const TopSellingProductsWidget = () => {
  // Dummy data for top selling products
  const dummyData = [
    { id: 1, name: "Product A", sales: 150 },
    { id: 2, name: "Product B", sales: 120 },
    { id: 3, name: "Product C", sales: 100 },
    { id: 4, name: "Product D", sales: 90 },
    { id: 5, name: "Product E", sales: 80 },
  ];

  // State to hold top selling products data
  const [topProducts] = useState(dummyData);

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-lg font-bold mb-4">Top Selling Products</h2>
      <ul>
        {topProducts.map((product) => (
          <li key={product.id} className="flex justify-between mb-2">
            <span className="font-semibold">{product.name}</span>
            <span className="text-blue-500">{product.sales} units</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellingProductsWidget;
