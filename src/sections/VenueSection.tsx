import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const VenueSection = () => {
  return (
    <section className="py-24 relative z-10 bg-[#050505] overflow-hidden" id="venue">
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D9A441] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF6A00] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111214]/80 backdrop-blur-sm border border-[#5C421D]/50 hover:border-[#D9A441]/50 rounded-2xl p-6 sm:p-8 md:p-12 text-center transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#FF6A00] bg-[#0D0E10] mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-[#FF6A00] blur-md opacity-20" />
            <MapPin className="w-10 h-10 text-[#FF8A1F] relative z-10" />
          </div>
          
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F5F2EA] mb-6 tracking-wide"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            VENUE
          </h2>
          
          <div className="space-y-2 mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p className="text-sm sm:text-base md:text-lg font-medium text-[#F5F2EA]">
              Lecture Theatre, 6th Floor, Academic Block
            </p>
            <p className="text-[#A9A9A5] text-xs sm:text-sm md:text-base">
              Dhanalakshmi Srinivasan University, Trichy
            </p>
          </div>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#151618] border border-[#5C421D] text-[#D9A441] hover:text-[#FFE2A3] hover:border-[#D9A441] rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,164,65,0.2)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Navigation className="w-5 h-5 mr-3" />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
