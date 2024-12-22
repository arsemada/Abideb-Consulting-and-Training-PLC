import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Bahir Dar, Ethiopia</p>
            <p className="mb-2">Phone: +251935982717</p>
            <p>Email: abdegu2@gmail.com</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-gray-500">Home</a></li>
              <li><a href="#about" className="hover:text-gray-500">About Us</a></li>
              <li><a href="#services" className="hover:text-gray-500">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-800 hover:text-gray-500">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" className="text-gray-800 hover:text-gray-500">
                <FaTwitter size={30} />
              </a>
              <a href="https://linkedin.com" className="text-gray-800 hover:text-gray-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com" className="text-gray-800 hover:text-gray-500">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center mt-12">
          <p className="text-sm">© 2024 Abideb Consulting and Training PLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
