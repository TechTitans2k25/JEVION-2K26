import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Building2, Layers } from 'lucide-react';

const VenueSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative z-10 overflow-hidden" id="venue">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle,rgba(255,106,0,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-7 sm:p-10 md:p-14 text-center relative overflow-hidden group hover:border-[#FF6A00]/50"
        >
          {/* Top Specular Line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Glowing Map Pin Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-panel border border-[#FF6A00]/40 mb-6 sm:mb-8 relative group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 rounded-2xl bg-[#FF6A00] blur-md opacity-25" />
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF8A1F] relative z-10" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-extrabold text-[#F8F6F0] mb-4 tracking-tight">
            SYMPOSIUM <span className="text-gradient">VENUE</span>
          </h2>
          
          {/* Details */}
          <div className="space-y-3 mb-8 sm:mb-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl glass-panel text-xs sm:text-sm font-orbitron text-[#FFE2A3] border border-[#E5B842]/30 mb-2">
              <Layers className="w-4 h-4 text-[#FF8A1F]" />
              <span>6TH FLOOR, ACADEMIC BLOCK</span>
            </div>
            <p className="text-lg sm:text-xl font-orbitron font-bold text-[#F8F6F0]">
              Lecture Theatre (LT-01)
            </p>
            <p className="text-[#A3A5AF] text-sm sm:text-base font-inter flex items-center justify-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#E5B842]" />
              <span>Dhanalakshmi Srinivasan University, Samayapuram, Tiruchirappalli — 621 112, Tamil Nadu</span>
            </p>
          </div>
          
          {/* Get Directions Button */}
          <a 
            href="https://maps.google.com/?q=Dhanalakshmi+Srinivasan+University+Trichy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl glass-btn-primary text-[#060608] font-bold font-inter text-xs sm:text-sm uppercase tracking-wider group"
          >
            <Navigation className="w-4 h-4 transition-transform group-hover:rotate-45" />
            <span>Open in Google Maps</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
