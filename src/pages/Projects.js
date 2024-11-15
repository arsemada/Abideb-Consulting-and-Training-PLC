// src/pages/Projects.js
import React from 'react';

const projects = [
  { title: 'Dairy Management Training', client: 'SNV-BRIDGE', description: 'Training on dairy business management for farmers.' },
  { title: 'Financial Literacy for Cooperatives', client: 'WLRC', description: 'Enhanced financial literacy for cooperative members.' },
  // More projects...
];

const Projects = () => (
  <section className="container mx-auto py-12 px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700"><strong>Client:</strong> {project.client}</p>
          <p className="text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
