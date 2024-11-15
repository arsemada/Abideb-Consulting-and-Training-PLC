// src/pages/Services.js
import React from 'react';

const services = [
  { title: 'Project Design', description: 'Comprehensive program design services tailored to client needs.' },
  { title: 'Monitoring & Evaluation', description: 'Robust evaluation methodologies for impactful insights.' },
  { title: 'Capacity Development', description: 'Building skills and resilience through targeted training.' },
  // Additional services...
];

const Services = () => (
  <section className="container mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 bg-blue-50 rounded-lg shadow-lg hover:bg-blue-100 transition-colors duration-200"
        >
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
