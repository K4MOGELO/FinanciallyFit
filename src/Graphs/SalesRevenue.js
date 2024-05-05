import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SalesRevenue = ({ data }) => {
  const chartContainer = useRef(null);

  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer.current && data.length > 0) {
      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((entry) => entry.dateSold),
          datasets: [
            {
              label: "Sales Revenue",
              data: data.map((entry) => entry.totalRevenue),
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Revenue ",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="  p-2">
      <canvas ref={chartContainer} style={{ width: "100%", height: "300px" }} />
    </div>
  );
};

export default SalesRevenue;
