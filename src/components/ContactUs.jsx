
import React from 'react';

const ContactUs = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl transform hover:scale-105 transition-transform duration-500">
      <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">Get in Touch</h2>
      <p className="text-lg mb-8 text-gray-700 text-center">We'd love to hear from you! Please fill out the form below to contact us.</p>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold">Your Name</label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Your Email</label>
          <input
            type="email"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Your Message</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default ContactUs;
