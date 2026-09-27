import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Wrench, Trophy, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { icon: Lightbulb, label: 'IDEATE' },
    { icon: Wrench, label: 'CREATE' },
    { icon: Trophy, label: 'COMPETE' },
    { icon: Users, label: 'CONNECT' },
    { icon: Zap, label: 'EXPERIENCE' }
  ];

  const stats = [
    { value: '2 Days', label: 'Tech & Fun' },
    { value: '5+', label: 'Technical Events' },
    { value: '5+', label: 'Non-Technical' },
    { value: 'National', label: 'Level Symposium' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#050505] text-[#F5F2EA] relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            What is <span className="text-[#D9A441]">JEVION?</span>
          </h2>
          <p className="text-[#A9A9A5] max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-inter leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            JEVION 2K26 is a premier national-level technical symposium that brings together the brightest minds to showcase innovation, creativity, and technological excellence.
          </p>
        </motion.div>

        {/* Feature Icons */}
        <div className="relative mb-24 max-w-4xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#5C421D]/50 -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="flex items-center justify-center bg-[#0D0E10] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-[#5C421D] group-hover:border-[#D9A441] group-hover:shadow-[0_0_15px_rgba(217,164,65,0.4)] transition-all duration-300">
                    <Icon size={24} className="text-[#FF6A00] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-orbitron text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#F5F2EA]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative p-[1px] rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#D9A441]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-[#111214] h-24 sm:h-28 md:h-32 rounded-xl p-4 sm:p-6 border border-[#5C421D]/40 group-hover:border-[#5C421D] relative z-10 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.15)]">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-[#FF8A1F] mb-1 sm:mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  {stat.value}
                </h3>
                <p className="text-[#A9A9A5] font-inter text-sm md:text-base uppercase tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
