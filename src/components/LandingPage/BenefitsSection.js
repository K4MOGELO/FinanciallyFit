import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Save Time</h3>
            <p className="text-gray-700">Simplify your financial management process and save valuable time.</p>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Improve Financial Health</h3>
            <p className="text-gray-700">Gain insights into your spending habits and make informed financial decisions.</p>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Stay Organized</h3>
            <p className="text-gray-700">Organize your expenses and budgets in one place for better financial organization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
