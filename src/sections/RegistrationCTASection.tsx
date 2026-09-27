import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegistrationCTASection = () => {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-[#050505]">
      {/* Subtle radial gradient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.05)_0%,rgba(5,5,5,1)_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#0D0E10] to-[#111214] rounded-2xl border border-[#FF6A00]/30 p-6 sm:p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(255,106,0,0.05)]"
        >
          {/* Accent glow on border */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6A00] rounded-full blur-[100px] opacity-20" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D9A441] rounded-full blur-[100px] opacity-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            <div className="flex-1 space-y-6">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F2EA] leading-tight"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F]">COMPETE?</span>
              </h2>
              
              <div className="inline-block px-4 py-2 bg-[#151618] border border-[#5C421D] rounded-lg">
                <span className="text-xl sm:text-2xl font-bold text-[#D9A441]" style={{ fontFamily: "'Orbitron', sans-serif" }}>₹200</span>
                <span className="text-[#A9A9A5] ml-2 text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>/ Participant</span>
              </div>
              
              <ul className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                {[
                  'Access to all technical & non-technical events',
                  'Participation Certificate',
                  'Lunch & Refreshments',
                  'Cash prizes & goodies'
                ].map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center text-[#F5F2EA]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF6A00] mr-3 shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <Link 
                to="/register"
                className="group relative flex items-center justify-center w-full lg:w-auto px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F] text-[#050505] font-bold text-base sm:text-lg md:text-xl rounded-xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,106,0,0.3)]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <span className="relative z-10 flex items-center">
                  REGISTER NOW <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTASection;
