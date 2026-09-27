import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const SponsorsPage: React.FC = () => {
  const categories = ['TITLE PARTNER', 'TECHNOLOGY PARTNER', 'MEDIA PARTNER'];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-4 tracking-wider flex justify-center items-center gap-3">
            <Handshake className="text-[#D9A441]" size={40} />
            PARTNERS & SPONSORS
          </h1>
          <p className="text-[#A9A9A5] max-w-2xl mx-auto">
            The organizations that make JEVION 2K26 possible.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-xl font-orbitron font-bold text-[#D9A441] mb-8 uppercase tracking-widest relative inline-block">
                {category}
                <div className="absolute -bottom-2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#FF6A00]/50 to-transparent"></div>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-8">
                {[1, 2, 3].slice(0, idx === 0 ? 1 : idx === 1 ? 2 : 3).map((item) => (
                  <div 
                    key={item}
                    className="w-48 h-32 bg-[#111214] border border-[#5C421D]/30 rounded-lg flex items-center justify-center relative overflow-hidden group hover:border-[#FF6A00]/50 transition-colors"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[#A9A9A5] font-orbitron text-sm opacity-50 text-center px-4">
                      To be announced
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 border border-dashed border-[#5C421D]/50 rounded-xl bg-[#111214]/50 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-orbitron text-[#F5F2EA] mb-2">INTERESTED IN SPONSORING?</h3>
          <p className="text-[#A9A9A5] mb-6 text-sm">Join us in shaping the future of technology and connect with thousands of brilliant minds.</p>
          <a href="mailto:sponsors@JEVION2k26.com" className="inline-block px-8 py-3 bg-transparent border border-[#FF6A00] text-[#FF6A00] font-orbitron font-bold rounded-lg hover:bg-[#FF6A00]/10 transition-colors">
            CONTACT SPONSORSHIP TEAM
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsPage;
