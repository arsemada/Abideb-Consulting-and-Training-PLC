import React from "react";
import { FaChalkboardTeacher, FaRegLightbulb, FaCogs, FaUsers, FaProjectDiagram, FaHandshake } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-white mt-[-50px]" id="services">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Services</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          At Abideb Consulting and Training PLC, we offer a range of services tailored to your business needs. Our goal is to empower your organization with the right tools and expertise.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1: Consulting */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400">
            <FaRegLightbulb className="text-blue-600 text-5xl mb-6 mx-auto transition-transform duration-300 transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Consulting</h3>
            <p className="text-lg text-gray-700 mb-6">
              We provide expert consulting services to help you navigate complex challenges and achieve your business goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold text-blue-600 border border-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
          </div>

          {/* Service 2: Training */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400">
            <FaChalkboardTeacher className="text-blue-600 text-5xl mb-6 mx-auto transition-transform duration-300 transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Training</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our comprehensive training programs ensure your team has the skills to execute projects successfully and sustainably.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold text-blue-600 border border-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
          </div>

          {/* Service 3: Project Management */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400">
            <FaProjectDiagram className="text-blue-600 text-5xl mb-6 mx-auto transition-transform duration-300 transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Project Management</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our expert project management services help you plan, execute, and monitor your projects efficiently and effectively.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold text-blue-600 border border-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
          </div>

          {/* Service 4: Technical Solutions */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400">
            <FaCogs className="text-blue-600 text-5xl mb-6 mx-auto transition-transform duration-300 transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Technical Solutions</h3>
            <p className="text-lg text-gray-700 mb-6">
              We provide cutting-edge technical solutions to optimize your operations, ensuring efficiency and growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold text-blue-600 border border-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
          </div>

          {/* Service 5: Strategy & Planning */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400">
            <FaUsers className="text-blue-600 text-5xl mb-6 mx-auto transition-transform duration-300 transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Strategy & Planning</h3>
            <p className="text-lg text-gray-700 mb-6">
              We offer strategic planning services to ensure that your business growth is sustainable and aligned with your goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold text-blue-600 border border-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
          </div>

          {/* Service 6: Partnership Development */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400">
            <FaHandshake className="text-blue-600 text-5xl mb-6 mx-auto transition-transform duration-300 transform hover:rotate-12" />
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Partnership Development</h3>
            <p className="text-lg text-gray-700 mb-6">
              We assist in building strategic partnerships, fostering collaboration to achieve common goals and drive impactful results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold text-blue-600 border border-blue-600 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
