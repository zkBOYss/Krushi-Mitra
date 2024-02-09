import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5 shadow-lg rounded-2xl mx-2 sticky top-2 backdrop-blur-lg z-40">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link
          to="/"
          className="flex items-center text-lg text-lightred font-grotesk cursor-pointer"
        >
          <img src={logo} alt="Logo" className="w-12 h-12 max-sm:w-8 max-sm:h-8 mr-2" />
          <span className="lg:text-3xl md:text-3xl">Krushi Mitra</span>
        </Link>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-lightyellow focus:outline-none focus:text-lightyellow"
            onClick={toggleNavbar}
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 14H5v-1h14v1zm0-5H5v1h14V9zm0-5H5v1h14V4z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v-1H4v1zm0 5h16V10H4v1zm0 5h16v-1H4v1z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block lg:items-center md:items-center lg:space-x-4 md:space-x-4 md:py-1 lg:py-1 lg:text-base md:text-base lg:text-black md:text-black lg:font-medium font-poppins  md:font-medium`}
        >
          <Link to="/" className="py-1 px-2 hover:text-lightyellow ease-in transition-all">
            Home
          </Link>
          <Link
            to="/dashboard"
            className="py-1 px-2 hover:text-lightyellow ease-in transition-all"
          >
            Dashboard
          </Link>
          <Link
            to="/marketplace"
            className="py-1 px-2 hover:text-lightyellow ease-in transition-all"
          >
            Marketplace
          </Link>
          <Link
            to="/events"
            className="py-1 px-2 hover:text-lightyellow ease-in transition-all"
          >
            Events
          </Link>
          <Link
            to="/add-products"
            className="py-1 px-2 hover:text-lightyellow ease-in transition-all"
          >
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
