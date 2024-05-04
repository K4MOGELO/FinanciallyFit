import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FinanciallyFit</h1>
        <p className="text-lg md:text-xl mb-8">Your ultimate financial management tool for businesses</p>
        <Link to="/signup">
          <button className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-md transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
