import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-800 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Culinary Nourish</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique urna nec massa tempor, vel tempor libero accumsan.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Useful Links</h2>
            <ul className="mt-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Meals</a></li>
              <li><a href="#" className="hover:text-gray-300">Cuisine</a></li>
              <li><a href="#" className="hover:text-gray-300">Healthy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ml-3">Contact Us</h2>
            <p className="mt-2">123 Street, City</p>
            <p>Email: culinaryNourish@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
