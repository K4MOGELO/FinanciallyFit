import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expense Tracking</h3>
            <p className="text-gray-700">Easily track all your expenses and categorize them for better insights into your spending habits.</p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Budget Management</h3>
            <p className="text-gray-700">Set personalized budgets for different categories and monitor your spending to stay within your limits.</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Income Tracking</h3>
            <p className="text-gray-700">Log your income sources and compare them against your expenses to understand your financial health.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
