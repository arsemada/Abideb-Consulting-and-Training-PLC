import React from "react";
import aboutImage from "../assets/cover4.png";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left md:px-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">About Us</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Abideb Consulting and Training PLC is a consultancy firm based in Bahir Dar, Ethiopia. We specialize in providing high-quality services in project design, training, and development, empowering businesses to reach their full potential.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            With a team of experts and a client-focused approach, we offer customized solutions that ensure your projects are successful and impactful.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-blue-700"
            >
              See More
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            At Abideb Consulting and Training PLC, we follow a proven process to ensure that every project we handle is successful:
          </p>

          {/* Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1: Understanding Needs */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Understanding Your Needs</h3>
              <p className="text-lg text-gray-700">
                We start by understanding your unique needs and goals, ensuring we align our services with your expectations.
              </p>
            </div>

            {/* Step 2: Collaboration */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Collaboration</h3>
              <p className="text-lg text-gray-700">
                We collaborate with you throughout the project, offering expert advice and guidance to ensure that the project is executed seamlessly.
              </p>
            </div>

            {/* Step 3: Technical Expertise */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Technical Expertise</h3>
              <p className="text-lg text-gray-700">
                Our team of skilled professionals takes care of the technical and operational aspects, providing you with high-quality deliverables.
              </p>
            </div>

            {/* Step 4: Training & Support */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-4">4</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Training & Support</h3>
              <p className="text-lg text-gray-700">
                We provide comprehensive training and support to ensure your team is equipped to carry the project forward after completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
