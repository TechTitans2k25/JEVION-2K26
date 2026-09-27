import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, Map } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const VenuePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-4 tracking-wider flex justify-center items-center gap-3">
            <MapPin className="text-[#D9A441]" size={36} />
            VENUE
          </h1>
          <p className="text-[#A9A9A5]">Navigate your way to the core of JEVION 2K26</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#111214] border border-[#5C421D]/30 rounded-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6A00]/5 rounded-bl-full pointer-events-none" />
            
            <h2 className="text-[#D9A441] font-orbitron text-sm font-bold mb-2 uppercase">Main Venue</h2>
            <div className="text-3xl font-bold text-[#F5F2EA] mb-4 font-orbitron uppercase">
              {siteConfig?.venue?.name || 'LECTURE THEATRE'}
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#A9A9A5]">
                <MapPin className="text-[#FF6A00]" size={20} />
                <span>{siteConfig?.venue?.floor || '6TH FLOOR'}, {siteConfig?.venue?.building || 'ACADEMIC BLOCK'}</span>
              </div>
              <div className="flex items-center gap-3 text-[#A9A9A5]">
                <Calendar className="text-[#FF6A00]" size={20} />
                <span>{siteConfig?.day1Date} - {siteConfig?.day2Date}</span>
              </div>
              <div className="flex items-center gap-3 text-[#A9A9A5]">
                <Clock className="text-[#FF6A00]" size={20} />
                <span>09:00 AM - 05:00 PM</span>
              </div>
            </div>

            <a 
              href={siteConfig?.venue?.mapUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-[#FF6A00] text-[#050505] font-orbitron font-bold rounded-lg hover:bg-[#FF8A1F] transition-colors"
            >
              <Navigation size={18} />
              GET DIRECTIONS
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#151618] border border-[#5C421D]/30 rounded-xl flex items-center justify-center p-8 min-h-[300px]"
          >
            <div className="text-center">
              <Map className="w-16 h-16 text-[#A9A9A5] opacity-50 mx-auto mb-4" />
              <h3 className="text-[#F5F2EA] font-orbitron font-bold text-xl mb-2">INTERACTIVE MAP</h3>
              <p className="text-[#A9A9A5] text-sm">Map visualization will be available soon.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
