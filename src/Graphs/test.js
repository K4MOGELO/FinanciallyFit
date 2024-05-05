import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const RevenueOverview = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (myChart) {
      myChart.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Revenue",
            data: [1000, 1200, 900, 1100, 1000, 1300],
            borderColor: "rgb(54, 162, 235)",
            tension: 0.1,
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: true,
            },
          },
          x: {
            ticks: {
              display: true,
            },
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div style={{ maxWidth: "300px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RevenueOverview;
