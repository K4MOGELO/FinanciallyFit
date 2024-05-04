import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} FinanciallyFit. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mr-4">Privacy Policy</a>
          <a href="#" className="mr-4">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
