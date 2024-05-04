import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"FinanciallyFit has helped me gain better control over my finances. It's intuitive and easy to use, and I love the insights it provides."</p>
            <p className="text-gray-600">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"I highly recommend FinanciallyFit to any business owner looking to streamline their financial management process. It's been a game-changer for me."</p>
            <p className="text-gray-600">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">"Since using FinanciallyFit, I've been able to save more and spend wisely. It's a must-have tool for anyone serious about their finances."</p>
            <p className="text-gray-600">- Michael Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
