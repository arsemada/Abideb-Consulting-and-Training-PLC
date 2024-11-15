// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-800 text-white shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="w-10 h-10" /> {/* Replace with your logo path */}
        <h1 className="text-2xl font-bold">Abideb Consulting</h1>
      </div>
      
      {/* Links Section */}
      <div className="flex space-x-6 text-lg">
        <Link className="hover:text-yellow-300 transition-colors duration-300" to="/">Home</Link>
        <Link className="hover:text-yellow-300 transition-colors duration-300" to="/about">About</Link>
        <Link className="hover:text-yellow-300 transition-colors duration-300" to="/services">Services</Link>
        <Link className="hover:text-yellow-300 transition-colors duration-300" to="/projects">Projects</Link>
        <Link className="hover:text-yellow-300 transition-colors duration-300" to="/contact">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
