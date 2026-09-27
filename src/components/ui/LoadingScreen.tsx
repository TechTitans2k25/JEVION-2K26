import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  'INITIALIZING EXPERIENCE',
  'LOADING ENVIRONMENT',
  'LOADING EVENTS',
  'LOADING SYSTEM',
  'WELCOME TO JEVION'
];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5s total
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(100, (currentStep / steps) * 100);
      setProgress(newProgress);
      
      const newMsgIndex = Math.floor((newProgress / 100) * messages.length);
      setMessageIndex(Math.min(newMsgIndex, messages.length - 1));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait a bit at 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D9A441] via-[#FFE2A3] to-[#D9A441] mb-12 text-center"
        >
          JEVION 2K26
        </motion.h1>
        
        <div className="w-full mb-4">
          <div className="h-1 w-full bg-[#151618] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F]"
              style={{ width: `${progress}%` }}
              layoutId="loading-bar"
            />
          </div>
        </div>
        
        <div className="flex justify-between w-full text-xs font-orbitron text-[#A9A9A5] tracking-widest uppercase">
          <span>
            <AnimatePresence mode="wait">
              <motion.span
                key={messageIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="inline-block"
              >
                {messages[messageIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
