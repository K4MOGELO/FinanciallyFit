import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to get started?</h2>
        <p className="text-lg mb-8">Join thousands of businesses already managing their finances with FinanciallyFit.</p>
        <button className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-md transition duration-300">Sign Up Now</button>
      </div>
    </section>
  );
};

export default CallToActionSection;
