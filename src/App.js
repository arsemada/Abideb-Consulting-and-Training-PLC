import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import PartnersSection from './components/PartnersSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <div className="font-sans bg-gray-50 pt-20">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <Services />
        <Testimonials />
        <PartnersSection />
        <ContactUs />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
