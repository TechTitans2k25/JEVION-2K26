import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  const [prevValue, setPrevValue] = useState(value);
  const formattedValue = value.toString().padStart(2, '0');

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(value);
    }
  }, [value, prevValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#151618] border border-[#FF6A00]/30 rounded-lg w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 flex items-center justify-center relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {/* Glossy top highlight */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        {/* Center line */}
        <div className="absolute top-1/2 inset-x-0 h-[1px] bg-[#050505] shadow-[0_1px_0_rgba(255,255,255,0.05)] z-10" />
        
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={value}
              initial={{ y: 20, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -20, opacity: 0, rotateX: 90 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-[#F5F2EA] tracking-tighter"
            >
              {formattedValue}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <span className="mt-3 text-[10px] sm:text-xs text-[#A9A9A5] font-orbitron uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

export default CountdownUnit;
