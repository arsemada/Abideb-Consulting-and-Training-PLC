// src/pages/Contact.js
import React from 'react';

const Contact = () => (
  <section className="container mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md" />
        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" />
        <textarea placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded-md"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
      <div>
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.406690!2d37.383134!3d11.598943"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;
