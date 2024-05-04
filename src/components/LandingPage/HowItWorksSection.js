import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
            <p className="text-gray-700">Create your FinanciallyFit account in minutes and get started.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Track Expenses</h3>
            <p className="text-gray-700">Log your expenses and categorize them for better financial management.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Set Budgets</h3>
            <p className="text-gray-700">Set budget limits for different expense categories and stay on track.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
