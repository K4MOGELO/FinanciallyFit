import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { SalesData } from "../../../database/SalesData";

const SalesPerformanceComparisonWidget = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const salesByDate = SalesData.reduce((acc, sale) => {
      const date = sale.dateSold;
      const totalRevenue = sale.totalRevenue;
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += totalRevenue;
      return acc;
    }, {});

    const labels = Object.keys(salesByDate);
    const data = Object.values(salesByDate);

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("salesPerformanceChart");
    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sales Performance",
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 20000, // Adjust based on your data
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="sales-performance-comparison-widget bg-white shadow-md p-4 rounded-lg">
      <h2 className="widget-title">Sales Performance Comparison</h2>
      <canvas id="salesPerformanceChart" width="400" height="200"></canvas>
    </div>
  );
};

export default SalesPerformanceComparisonWidget;
