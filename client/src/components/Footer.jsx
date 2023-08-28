import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Culinary Nourish</h2>
           <footer> &copy; 2023 Krise Rohalia</footer>
          </div>
          <div>
            <h2 className="text-xl font-semibold ml-3">Contact Us</h2>
            <p className="mt-2"></p>
            <p>Email: culinaryNourish@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
