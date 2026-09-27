import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

const CountdownSection = () => {
  // Target date: '2026-10-14T00:00:00'
  const { days, hours, minutes, seconds } = useCountdown('2026-10-14T00:00:00');

  const timeBlocks = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds }
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#050505] relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Radial gradient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(217,164,65,0.12)_0%,rgba(5,5,5,0)_70%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-orbitron font-bold text-[#F5F2EA] tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-[#D9A441]">JEVION 2K26</span> STARTS IN
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-32 lg:h-36 bg-[#111214]/80 backdrop-blur-md border border-[#5C421D]/50 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(217,164,65,0.1)] relative overflow-hidden group">
                {/* Pulsing glow animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6A00]/10 to-transparent opacity-50 animate-pulse duration-2000"></div>
                
                <span 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-[#F5F2EA] z-10"
                  style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: "0 0 10px rgba(255,138,31,0.5), 0 0 20px rgba(217,164,65,0.3)"
                  }}
                >
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="font-inter text-[#A9A9A5] text-xs md:text-sm font-semibold tracking-[0.2em]" style={{ fontFamily: "'Inter', sans-serif" }}>
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#0D0E10] border border-[#5C421D]/70 px-6 py-3 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6A00]"></span>
            </span>
            <span className="font-orbitron text-sm md:text-base font-medium text-[#F5F2EA] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              DAY 2: 15 OCTOBER 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
