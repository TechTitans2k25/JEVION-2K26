import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  // Generate particles once on mount
  const [particles, setParticles] = useState<{ id: number; left: string; size: number; duration: string; delay: string; opacity: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-[#050505] flex flex-col justify-center items-center">
      {/* CSS Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -50px) scale(1.1); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(0.9); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, -20px) scale(1.05); }
        }
        @keyframes floatOrb4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 60px) scale(0.95); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100svh); }
          100% { transform: translateY(100svh); }
        }
        @keyframes floatParticle {
          0% { transform: translateY(100svh); opacity: 0; }
          10% { opacity: var(--particle-opacity); }
          90% { opacity: var(--particle-opacity); }
          100% { transform: translateY(-20vh); opacity: 0; }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}} />

      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Floating Orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]" 
             style={{ background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)', top: '10%', left: '20%', animation: 'floatOrb1 15s ease-in-out infinite' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]" 
             style={{ background: 'radial-gradient(circle, #D9A441 0%, transparent 70%)', top: '50%', right: '-10%', animation: 'floatOrb2 20s ease-in-out infinite' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[90px]" 
             style={{ background: 'radial-gradient(circle, #FF8A1F 0%, transparent 70%)', bottom: '-10%', left: '10%', animation: 'floatOrb3 18s ease-in-out infinite' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-25 blur-[80px]" 
             style={{ background: 'radial-gradient(circle, #FFE2A3 0%, transparent 70%)', top: '20%', right: '30%', animation: 'floatOrb4 12s ease-in-out infinite' }} />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: `
                 linear-gradient(to right, rgba(92, 66, 29, 0.2) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(92, 66, 29, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'gridMove 5s linear infinite'
             }}>
          {/* Grid fade mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        </div>

        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className="absolute rounded-full bg-[#FFE2A3]"
               style={{
                 left: p.left,
                 width: p.size,
                 height: p.size,
                 '--particle-opacity': p.opacity,
                 animation: `floatParticle ${p.duration} linear infinite`,
                 animationDelay: p.delay,
                 opacity: 0,
                 boxShadow: '0 0 10px 2px rgba(255, 226, 163, 0.4)'
               } as React.CSSProperties} />
        ))}

        {/* Scan line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-30 z-10"
             style={{ background: 'linear-gradient(to right, transparent, #FF6A00, transparent)', animation: 'scanline 8s linear infinite' }} />

        {/* 3D Geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
          {/* Rotating cube outline */}
          <div className="absolute" style={{ top: '15%', right: '10%', width: '80px', height: '80px', animation: 'float3d 12s ease-in-out infinite' }}>
            <div style={{ width: '100%', height: '100%', border: '1px solid rgba(217, 164, 65, 0.2)', transform: 'rotateX(45deg) rotateY(45deg)', transformStyle: 'preserve-3d' }} />
          </div>
          
          {/* Floating diamond */}
          <div className="absolute" style={{ bottom: '25%', left: '8%', width: '60px', height: '60px', animation: 'float3d 10s ease-in-out infinite reverse' }}>
            <div style={{ width: '100%', height: '100%', border: '1px solid rgba(255, 106, 0, 0.15)', transform: 'rotate(45deg)', background: 'linear-gradient(135deg, rgba(255,106,0,0.05), transparent)' }} />
          </div>
          
          {/* Triangle */}
          <div className="absolute" style={{ top: '60%', right: '15%', animation: 'float3d 14s ease-in-out infinite 2s' }}>
            <div style={{ width: 0, height: 0, borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '52px solid rgba(217, 164, 65, 0.1)' }} />
          </div>
          
          {/* Hexagon ring */}
          <div className="absolute hidden md:block" style={{ top: '30%', left: '5%', width: '100px', height: '100px', animation: 'float3d 16s ease-in-out infinite 4s' }}>
            <div style={{ width: '100%', height: '100%', border: '1px solid rgba(255, 138, 31, 0.1)', borderRadius: '50%', transform: 'rotateX(60deg)' }} />
          </div>

          {/* Small dots constellation */}
          {[...Array(6)].map((_, i) => (
            <div key={`dot-${i}`} className="absolute rounded-full bg-[#D9A441]" style={{
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              opacity: 0.15 + Math.random() * 0.2,
              animation: `float3d ${8 + i * 2}s ease-in-out infinite ${i * 1.5}s`,
            }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl">
        <motion.img 
          src={`${import.meta.env.BASE_URL}logo.jpg`} 
          alt="JEVION 2K26" 
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 sm:mb-6 shadow-[0_0_30px_rgba(255,106,0,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tracking-[0.3em] text-sm md:text-base text-[#A9A9A5] mb-4 uppercase font-inter"
        >
          A National Level Technical Symposium
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-2"
        >
          <h1 className="font-orbitron text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FFE2A3] via-[#D9A441] to-[#5C421D] text-3d">
            JEVION
          </h1>
          <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-[#FF6A00]" style={{ textShadow: '0 0 20px rgba(255, 106, 0, 0.5)' }}>
            2K26
          </h2>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-orbitron text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#F5F2EA] mb-6 tracking-wider"
        >
          TECH TITANS
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-2 mb-10 text-[#A9A9A5] font-inter"
        >
          <p className="text-lg md:text-xl">Department of Information Technology</p>
          <p className="text-base md:text-lg">Dhanalakshmi Srinivasan University</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link 
            to="/register" 
            className="text-sm px-6 py-2.5 sm:px-8 sm:py-3 bg-[#FF6A00] hover:bg-[#FF8A1F] text-[#050505] font-bold font-inter uppercase tracking-wide transition-all duration-300 transform hover:scale-105 rounded-sm"
            style={{ boxShadow: '0 0 20px rgba(255, 106, 0, 0.4)' }}
          >
            Register Now
          </Link>
          <Link 
            to="/events" 
            className="text-sm px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-[#D9A441] text-[#D9A441] hover:bg-[#D9A441] hover:text-[#050505] font-bold font-inter uppercase tracking-wide transition-all duration-300 rounded-sm"
          >
            Explore Events
          </Link>
        </motion.div>
      </div>

      {/* Date Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 z-10 px-4 py-1.5 sm:px-6 sm:py-2 border border-[#5C421D] rounded-full bg-[#0D0E10]/80 backdrop-blur-md"
      >
        <p className="font-orbitron text-[#D9A441] tracking-widest text-[10px] sm:text-xs md:text-sm flex items-center gap-3">
          <span>14 OCT 2026</span>
          <span className="w-[2px] h-4 bg-[#A9A9A5] opacity-50"></span>
          <span>15 OCT 2026</span>
        </p>
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-0 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
