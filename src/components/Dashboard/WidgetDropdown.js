import React from "react";

const WidgetDropdown = ({ onSelect }) => {
  const handleWidgetClick = (widgetId) => {
    onSelect(widgetId);
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
      <div className="py-1">
        <button
          onClick={() => handleWidgetClick("widget1")}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          Widget 1
        </button>
        <button
          onClick={() => handleWidgetClick("widget2")}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          Widget 2
        </button>
        {/* Add more widget options as needed */}
      </div>
    </div>
  );
};

export default WidgetDropdown;
