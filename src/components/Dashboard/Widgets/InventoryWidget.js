import React from "react";
import { useInventoryData, useSalesData } from "../../auth/AuthProvider";

const InventoryWidget = () => {
  // Total products in stock
  const { SalesData } = useSalesData();
  const { InventoryData } = useInventoryData();
  const totalProductsInStock = InventoryData.length;

  // Filter products running low on stock
  const lowStockProducts = InventoryData.filter(
    (product) => product.quantityInStock < 20
  );

  // Find expired or expiring soon products
  const today = new Date();
  const expiryThreshold = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000); // 30 days from today
  const expiredOrExpiringSoon = InventoryData.filter(
    (product) =>
      product.expiryDate && new Date(product.expiryDate) <= expiryThreshold
  );

  // Total revenue generated
  const totalRevenueGenerated = SalesData.reduce(
    (total, sale) => total + sale.totalRevenue,
    0
  );

  // Total quantity sold
  const totalQuantitySold = SalesData.reduce(
    (total, sale) => total + sale.quantitySold,
    0
  );

  // Find the most profitable product
  const mostProfitableProduct = SalesData.reduce((maxSale, sale) => {
    const correspondingProduct = InventoryData.find(
      (product) => product.productCode === sale.productCode
    );
    return sale.totalRevenue > maxSale.totalRevenue ? sale : maxSale;
  }, SalesData[0]);

  // Average revenue per product
  const averageRevenuePerProduct =
    totalQuantitySold > 0 ? totalRevenueGenerated / totalQuantitySold : 0;

  return (
    <div className="inventory-widget m-3">
      <h2 className="text-lg  mb-4">Inventory Overview</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Total Products in Stock
          </h3>
          <p>{totalProductsInStock}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Products Running Low on Stock
          </h3>
          <ul>
            {lowStockProducts.map((product) => (
              <li key={product.id}>
                {product.productName} (Stock: {product.quantityInStock})
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Expired or Expiring Soon
          </h3>
          <ul>
            {expiredOrExpiringSoon.map((product) => (
              <li key={product.id}>
                {product.productName} -{" "}
                <span className="text-red-500">{product.expiryDate}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Total Revenue Generated
          </h3>
          <p>R {totalRevenueGenerated.toFixed(2)}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Total Quantity Sold</h3>
          <p>{totalQuantitySold}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Most Profitable Product
          </h3>
          {mostProfitableProduct && (
            <p>
              {
                InventoryData.find(
                  (product) =>
                    product.productCode === mostProfitableProduct.productCode
                ).productName
              }{" "}
              ({mostProfitableProduct.productCode})
            </p>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Average Revenue Per Product
          </h3>
          <p>R {averageRevenuePerProduct.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryWidget;
