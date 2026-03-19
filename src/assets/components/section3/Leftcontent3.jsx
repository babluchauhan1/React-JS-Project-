import React from 'react';

const Leftcontent3 = () => {
  return (
    <section className="max-w-xl py-12 px-6 font-sans text-gray-800">
      {/* Heading with pill highlight */}
      <h2 className="text-4xl font-extrabold mb-8 flex items-center gap-2 flex-wrap">
        <span>The</span>
        <span className="relative inline-block px-4 py-1">
          {/* The Lime Pill Background */}
          <span className="absolute inset-0 bg-lime-400 rounded-full -z-10 transform translate-y-1"></span>
          <span className="relative">opportunity</span>
        </span>
      </h2>

      {/* Body Text */}
      <div className="space-y-6 text-lg leading-relaxed text-gray-600">
        <p>
          Our deep experience in credit products, advanced 
          proprietary payment and information technologies, 
          and successful collaborations with XXX clients 
          globally position us to succeed.
        </p>
        
        <p>
          Combined with favorable market trends, we are 
          confident in our ability to build a unique platform for 
          SMEs in Lorem.
        </p>
      </div>

    </section>
  );
};

export default Leftcontent3;