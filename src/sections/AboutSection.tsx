import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Wrench, Trophy, Users, Zap, Compass } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { icon: Lightbulb, label: 'IDEATE', desc: 'Brainstorm concepts' },
    { icon: Wrench, label: 'CREATE', desc: 'Build solutions' },
    { icon: Trophy, label: 'COMPETE', desc: 'Challenge best minds' },
    { icon: Users, label: 'CONNECT', desc: 'Network with peers' },
    { icon: Zap, label: 'EXPERIENCE', desc: 'Grand tech celebration' }
  ];

  const stats = [
    { value: '2 Days', label: 'Tech & Non-Tech', sub: 'Non-stop Action' },
    { value: '10+', label: 'Flagship Events', sub: 'Technical & Creative' },
    { value: '₹200', label: 'Registration Fee', sub: 'All Events Access' },
    { value: 'National', label: 'Level Stage', sub: 'Across Colleges' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden" id="about">
      {/* Ambient background bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(255,106,0,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl" ref={ref}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Compass className="w-3.5 h-3.5 text-[#FF8A1F]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              THE VISION
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-[#F8F6F0] mb-5 tracking-tight">
            What is <span className="text-gradient">JEVION?</span>
          </h2>
          <p className="text-[#A3A5AF] max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-inter leading-relaxed">
            <strong className="text-[#F8F6F0]">JEVION 2K26</strong> is the flagship National-Level Technical Symposium organized by the 
            <span className="text-[#FFE2A3]"> Department of Information Technology</span>, Dhanalakshmi Srinivasan University, in association with 
            <span className="text-[#FF8A1F]"> Tech Titans</span>. A battleground of innovation, logic, coding, and creativity designed for future pioneers.
          </p>
        </motion.div>

        {/* Feature Progression Journey */}
        <div className="relative mb-20 sm:mb-24 max-w-5xl mx-auto">
          {/* Glowing Energy Track for Desktop */}
          <div className="hidden lg:block absolute top-[42px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-card flex items-center justify-center mb-3.5 relative overflow-hidden group-hover:border-[#FF6A00]/60 group-hover:scale-105 transition-all duration-300">
                    {/* Glowing Aura inside card */}
                    <div className="absolute inset-0 bg-radial-gradient from-[#FF6A00]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF8A1F] group-hover:text-[#FFE2A3] transition-colors relative z-10" />
                  </div>
                  <span className="font-orbitron text-xs sm:text-sm font-bold tracking-wider text-[#F8F6F0] mb-1">
                    {item.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A3A5AF] font-inter">
                    {item.desc}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics / Stat Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden group hover:border-[#FF6A00]/50"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5B842] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-extrabold text-[#F8F6F0] mb-1 group-hover:text-[#FF8A1F] transition-colors"
                  style={{ textShadow: '0 0 20px rgba(255, 106, 0, 0.3)' }}>
                {stat.value}
              </h3>
              <p className="font-orbitron text-xs sm:text-sm font-semibold tracking-wider text-[#FFE2A3] mb-1">
                {stat.label}
              </p>
              <p className="font-inter text-[11px] sm:text-xs text-[#A3A5AF]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
