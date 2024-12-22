import React from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-blue-600 text-2xl font-semibold">ACT</div>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
          >
            Services
          </NavLink>
          <NavLink
            to="/partnership"
            className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
          >
            Partnership
          </NavLink>
          <NavLink
            to="/contact"
            className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-blue-600">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <NavLink
                to="/"
                className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partnership"
                className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
              >
                Partnership
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-blue-600 font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-100"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
