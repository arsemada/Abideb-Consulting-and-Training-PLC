import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/cover.jpg"; 

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Abideb Consulting and Training PLC
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Empowering businesses with tailored solutions and expertise.
        </p>
        <div className="flex space-x-4">
          {/* First button */}
          <Link
            to="/services"
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-blue-700"
          >
            Get Started
          </Link>
          {/* Second button */}
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-white hover:text-blue-600"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
