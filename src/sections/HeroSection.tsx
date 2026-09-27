import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; size: number; duration: string; delay: string; opacity: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1.5,
      duration: `${Math.random() * 8 + 8}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#060608] flex flex-col justify-center items-center select-none pt-24 pb-16 md:py-0">
      {/* Dynamic Keyframes for Hero */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatParticle {
          0% { transform: translateY(100svh); opacity: 0; }
          15% { opacity: var(--p-opacity); }
          85% { opacity: var(--p-opacity); }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
        @keyframes meteor {
          0% { transform: translate(120px, -120px) rotate(-35deg); opacity: 0; }
          15% { opacity: 0.9; }
          60% { opacity: 0.9; }
          100% { transform: translate(-250px, 250px) rotate(-35deg); opacity: 0; }
        }
        @keyframes portalAura {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.1); opacity: 0.85; }
        }
      `}} />

      {/* Cinematic Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}hero-bg.png`} 
          alt="JEVION 2K26 Gateway" 
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-1000 scale-[1.02]"
        />

        {/* Atmospheric Overlays */}
        {/* Top Dark Vignette for Navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#060608] via-[#060608]/75 to-transparent z-[1]" />
        
        {/* Central Portal Pulsing Aura */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-[15%] md:bottom-[20%] w-[380px] h-[380px] md:w-[650px] md:h-[650px] rounded-full pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 106, 0, 0.4) 0%, rgba(229, 184, 66, 0.2) 35%, transparent 70%)',
            animation: 'portalAura 6s ease-in-out infinite'
          }}
        />

        {/* Ambient Warm Corner Lights */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FF6A00]/15 blur-[120px] z-[1]" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#E5B842]/15 blur-[120px] z-[1]" />

        {/* Shooting Stars / Meteors */}
        <div 
          className="absolute top-[18%] right-[22%] w-[140px] h-[2px] bg-gradient-to-r from-transparent via-[#FFE2A3] to-[#FF6A00] rounded-full z-[2] opacity-0"
          style={{ animation: 'meteor 7s ease-in-out infinite 1s' }}
        />
        <div 
          className="absolute top-[28%] left-[28%] w-[100px] h-[2px] bg-gradient-to-r from-transparent via-[#FFE2A3] to-[#FF6A00] rounded-full z-[2] opacity-0"
          style={{ animation: 'meteor 9s ease-in-out infinite 4s' }}
        />

        {/* Drifting Golden Embers */}
        {particles.map(p => (
          <div 
            key={p.id} 
            className="absolute rounded-full bg-[#FFE2A3] z-[2]"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--p-opacity': p.opacity,
              animation: `floatParticle ${p.duration} linear infinite`,
              animationDelay: p.delay,
              boxShadow: '0 0 8px 1px rgba(255, 170, 0, 0.6)'
            } as React.CSSProperties}
          />
        ))}

        {/* Bottom Smooth Transition to Dark Body */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#060608] via-[#060608]/85 to-transparent z-[2]" />
      </div>

      {/* Main Hero Content with Glass UX */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-5xl my-auto">
        
        {/* Symposium Emblem / Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-5"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FF6A00] via-[#E5B842] to-[#FF8A1F] opacity-40 blur-lg animate-pulse" />
          <img 
            src={`${import.meta.env.BASE_URL}logo.jpg`} 
            alt="JEVION 2K26 Emblem" 
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#E5B842]/50 shadow-[0_0_35px_rgba(255,106,0,0.5)]"
          />
        </motion.div>

        {/* Tagline Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5B842] animate-pulse" />
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] text-[#FFE2A3] uppercase font-orbitron">
            A National Level Technical Symposium
          </span>
        </motion.div>
        
        {/* Main Title: JEVION 2K26 */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-3"
        >
          <h1 
            className="font-orbitron text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#FFFDF7] via-[#FFD269] to-[#E5B842] text-3d tracking-tight"
            style={{ textShadow: '0 0 40px rgba(255, 106, 0, 0.45), 0 0 80px rgba(229, 184, 66, 0.25)' }}
          >
            JEVION
          </h1>
          <h2 
            className="font-orbitron text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FF6A00] tracking-tight"
            style={{ textShadow: '0 0 30px rgba(255, 106, 0, 0.7), 0 0 60px rgba(255, 138, 31, 0.4)' }}
          >
            2K26
          </h2>
        </motion.div>

        {/* Association & Organizers */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="space-y-1 sm:space-y-2 mb-8"
        >
          <p className="font-orbitron text-base sm:text-lg md:text-xl font-bold tracking-widest text-[#F8F6F0]">
            IN ASSOCIATION WITH <span className="text-[#FF8A1F] text-glow-portal">TECH TITANS</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm md:text-base text-[#A3A5AF] font-inter">
            <span>Department of Information Technology</span>
            <span className="hidden sm:inline text-[#E5B842]">•</span>
            <span>School of Engineering and Technology</span>
            <span className="hidden sm:inline text-[#E5B842]">•</span>
            <span className="text-[#E5B842] font-medium">Dhanalakshmi Srinivasan University</span>
          </div>
        </motion.div>

        {/* Glass Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto"
        >
          <Link 
            to="/register" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-btn-primary text-[#060608] font-bold font-inter text-sm sm:text-base uppercase tracking-wider group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            to="/events" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-btn-secondary font-semibold font-inter text-sm sm:text-base uppercase tracking-wider group"
          >
            <span>Explore Events</span>
            <span className="text-[#E5B842] transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Date Glass Capsule */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 sm:mt-12 inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel border border-[#E5B842]/30 shadow-[0_0_20px_rgba(229,184,66,0.15)]"
        >
          <Calendar className="w-4 h-4 text-[#FF8A1F]" />
          <div className="font-orbitron text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2.5 text-[#F8F6F0]">
            <span className="text-[#FFE2A3]">14 OCT 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#FF6A00]" />
            <span className="text-[#FFE2A3]">15 OCT 2026</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF6A00]/20 text-[#FF8A1F] font-bold uppercase tracking-wider">
            2 Days
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
