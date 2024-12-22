import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Alice Johnson",
    position: "Project Manager at XYZ Corp.",
    feedback:
      "The training provided by Abideb Consulting was instrumental in enhancing our team's skills. They are experts in their field and made the process easy to follow.",
  },
  {
    name: "Bob Williams",
    position: "CEO at Acme Solutions",
    feedback:
      "Abideb Consulting's strategic planning services helped us align our vision with actionable goals. Their insights have been invaluable to our success.",
  },
  {
    name: "Charles Davis",
    position: "Operations Lead at Global Tech",
    feedback:
      "The project management assistance we received from Abideb Consulting has greatly improved our team's efficiency. They are highly professional and reliable.",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // Function to go to the previous testimonial
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Function to go to a specific testimonial based on the index
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-white" id="testimonials">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">What Our Clients Say</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Our clients' satisfaction is our priority. Here's what some of them have to say about our services.
        </p>

        <div className="relative mx-auto max-w-4xl bg-white p-10 rounded-xl shadow-lg overflow-hidden">
          {/* Testimonial content */}
          <div className="text-center">
            <p className="text-3xl text-gray-700 italic mb-8 px-6 max-w-3xl mx-auto">
              "{testimonialsData[currentIndex].feedback}"
            </p>
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-2xl flex items-center justify-center">
                {testimonialsData[currentIndex].name.charAt(0)}
              </div>
              <div className="ml-4 text-left">
                <p className="font-bold text-blue-600 text-2xl">{testimonialsData[currentIndex].name}</p>
                <p className="text-lg text-gray-500">{testimonialsData[currentIndex].position}</p>
              </div>
            </div>
          </div>

          {/* Navigation circles */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3.5 h-3.5 rounded-full ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"} transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
