// src/pages/About.js
import React from 'react';

const About = () => (
  <section className="container mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
    <p className="text-lg text-gray-700 mb-12 text-center">
      Established in 2010, Abideb Consulting provides expertise in program design, monitoring, evaluation, and strategic planning.
      With a team of experts, we empower businesses to achieve sustainable growth and community resilience.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Team member cards */}
      <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src="/path/to/image.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">John Doe</h3>
        <p className="text-blue-600">Senior Consultant</p>
        <p className="text-gray-600">Expert in project evaluation and strategic development.</p>
      </div>
      {/* Additional team members */}
    </div>
  </section>
);

export default About;
