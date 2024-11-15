// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaAward, FaProjectDiagram } from 'react-icons/fa';

const Home = () => (
  <div className="overflow-hidden">
    {/* Hero Section */}
    <section
      className="relative bg-cover bg-fixed h-screen flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }} // Replace with an impactful background image
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-4"
        >
          Empowering Sustainable Growth
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg max-w-2xl mx-auto mb-8"
        >
          Your partner in delivering impactful training and consultancy for a sustainable future.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Discover More
        </motion.button>
      </div>
    </section>

    {/* Training Programs Carousel */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-4xl font-bold">Our Training Programs</h3>
        <p className="text-lg mt-4">Comprehensive, expert-led training across multiple disciplines.</p>
      </div>
      <div className="flex overflow-x-scroll space-x-6 p-6">
        <div className="min-w-[300px] bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <img src="/path-to-training-image1.jpg" alt="Training" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h4 className="text-2xl font-semibold">Financial Literacy</h4>
            <p className="text-gray-600">Building essential financial skills for cooperative management and beyond.</p>
          </div>
        </div>
        <div className="min-w-[300px] bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <img src="/path-to-training-image2.jpg" alt="Training" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h4 className="text-2xl font-semibold">Dairy Management</h4>
            <p className="text-gray-600">Advanced techniques and best practices in dairy management.</p>
          </div>
        </div>
        <div className="min-w-[300px] bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <img src="/path-to-training-image3.jpg" alt="Training" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h4 className="text-2xl font-semibold">Strategic Planning</h4>
            <p className="text-gray-600">Empowering organizations with effective strategic management.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Statistics Section */}
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FaUserTie className="text-6xl mx-auto mb-4" />
            <p className="text-4xl font-bold">500+</p>
            <p className="text-lg">Clients Served</p>
          </div>
          <div className="text-center">
            <FaAward className="text-6xl mx-auto mb-4" />
            <p className="text-4xl font-bold">200+ </p>
            <p className="text-lg">Projects Completed</p>
          </div>
          <div className="text-center">
            <FaProjectDiagram className="text-6xl mx-auto mb-4" />
            <p className="text-4xl font-bold">1000+</p>
            <p className="text-lg">Training Hours Delivered</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Carousel */}
    <section className="bg-gray-100 py-16 text-gray-800">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-4xl font-bold">What Our Clients Say</h3>
      </div>
      <div className="flex overflow-x-scroll space-x-6 p-6">
        <div className="min-w-[300px] bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic">"The training from Abideb Consulting has transformed our cooperative’s financial management approach."</p>
          <p className="mt-4 font-semibold">- Client 1</p>
        </div>
        <div className="min-w-[300px] bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic">"Their strategic planning expertise gave us a clear direction for growth."</p>
          <p className="mt-4 font-semibold">- Client 2</p>
        </div>
        <div className="min-w-[300px] bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg italic">"We gained practical insights and solutions from their team."</p>
          <p className="mt-4 font-semibold">- Client 3</p>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-16 bg-yellow-400 text-blue-800 text-center">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold">Ready to Transform Your Organization?</h3>
        <p className="text-lg mt-4">Connect with us today to make a lasting impact.</p>
        <button className="mt-6 px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  </div>
);

export default Home;
