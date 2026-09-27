import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock } from 'lucide-react';

const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown('2026-10-14T00:00:00');

  const timeBlocks = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden flex items-center justify-center">
      {/* Ambient Portal Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[radial-gradient(ellipse,rgba(255,106,0,0.18)_0%,rgba(229,184,66,0.06)_45%,transparent_75%)] pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Clock className="w-3.5 h-3.5 text-[#FF8A1F]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              COUNTDOWN TO LAUNCH
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-[#F8F6F0] tracking-wider">
            <span className="text-gradient">JEVION 2K26</span> PORTAL OPENS IN
          </h2>
        </div>

        {/* Glass Countdown Cards */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-[4/5] sm:aspect-square max-w-[150px] glass-card rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-2 sm:p-4 relative overflow-hidden group-hover:border-[#FF6A00]/50">
                {/* Top Inner Specular Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                {/* Subtle Amber Core Radial */}
                <div className="absolute inset-0 bg-radial-gradient from-[#FF6A00]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span 
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-[#F8F6F0] tracking-tight relative z-10"
                  style={{ 
                    textShadow: "0 0 20px rgba(255, 106, 0, 0.4), 0 0 40px rgba(229, 184, 66, 0.2)"
                  }}
                >
                  {block.value.toString().padStart(2, '0')}
                </span>

                <span className="font-orbitron text-[#A3A5AF] text-[9px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] mt-1 sm:mt-2 relative z-10 group-hover:text-[#FFE2A3] transition-colors">
                  {block.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Status Glass Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 glass-panel px-5 sm:px-6 py-2.5 rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF8A1F]" />
            </span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-orbitron font-medium text-[#F8F6F0]">
              <span className="text-[#A3A5AF]">DAY 1: OCT 14</span>
              <span className="text-[#FF6A00]">•</span>
              <span className="text-[#FFE2A3] font-semibold">DAY 2: OCT 15, 2026</span>
            </div>
            <Flame className="w-3.5 h-3.5 text-[#FF6A00] animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CountdownSection;
