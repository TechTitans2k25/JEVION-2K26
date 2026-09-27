import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 max-w-lg"
      >
        <motion.div
          animate={{ 
            textShadow: ['0px 0px 10px #FF6A00', '0px 0px 20px #FF6A00', '0px 0px 10px #FF6A00']
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl md:text-9xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-b from-[#F5F2EA] to-[#A9A9A5] mb-4"
        >
          404
        </motion.div>
        
        <div className="flex items-center justify-center gap-3 text-[#FF6A00] mb-6">
          <AlertCircle size={28} />
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold tracking-widest">
            PAGE NOT FOUND
          </h2>
        </div>
        
        <p className="text-[#A9A9A5] text-lg mb-10 leading-relaxed">
          The portal you seek does not exist in this dimension. The coordinates might be corrupted or the signal was lost.
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF6A00] text-[#050505] font-orbitron font-bold rounded-lg hover:bg-[#FF8A1F] hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all transform hover:-translate-y-1"
        >
          <Home size={20} />
          RETURN TO HOME
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
