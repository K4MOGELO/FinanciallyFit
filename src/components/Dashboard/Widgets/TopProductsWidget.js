import React from "react";
import { InventoryData } from "../../../database/Inventory";
import { SalesData } from "../../../database/SalesData";

const TopSoldProductsWidget = () => {
  // Merge sales and inventory data based on product code
  const mergedData = InventoryData.map((inventoryItem) => {
    const salesItem = SalesData.find(
      (sale) => sale.productCode === inventoryItem.productCode
    );
    if (salesItem) {
      return { ...inventoryItem, totalQuantitySold: salesItem.quantitySold };
    }
    return { ...inventoryItem, totalQuantitySold: 0 };
  });

  // Sort merged data by total quantity sold
  const sortedProducts = mergedData.sort(
    (a, b) => b.totalQuantitySold - a.totalQuantitySold
  );

  // Select top 5 products
  const topProducts = sortedProducts.slice(0, 5);

  return (
    <div className=" overflow-y-auto  top-sold-products-widget bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Top 5 Sold Products</h2>
      <ul>
        {topProducts.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between border-b py-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{product.productName}</h3>
              <p className="text-gray-500">
                Quantity Sold: {product.totalQuantitySold}
              </p>
              <p className="text-gray-500">Category: {product.category}</p>
            </div>
            <span className="text-blue-500">R{product.unitPrice * 10} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSoldProductsWidget;
