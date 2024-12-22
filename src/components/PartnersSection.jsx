import React from 'react';
import snv from '../assets/snv.png';
import helvetas from '../assets/helvetas.jpg';
import agroBig from '../assets/agro-big.png';
import ccrda from '../assets/ccrda.png';
import giz from '../assets/giz.jpg';
import wlrc from '../assets/WLRC.jpg';

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="partners">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Our Partners</h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {/* Partner Logos */}
          <img
            src={snv}
            alt="Partner 1"
            className="h-28 md:h-32 mx-auto object-contain"
          />
          <img
            src={helvetas}
            alt="Partner 2"
            className="h-28 md:h-32 mx-auto object-contain"
          />
          <img
            src={agroBig}
            alt="Partner 3"
            className="h-28 md:h-32 mx-auto object-contain"
          />
          <img
            src={ccrda}
            alt="Partner 4"
            className="h-28 md:h-32 mx-auto object-contain"
          />
          <img
            src={giz}
            alt="Partner 5"
            className="h-28 md:h-32 mx-auto object-contain"
          />
          <img
            src={wlrc}
            alt="Partner 6"
            className="h-28 md:h-32 mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
