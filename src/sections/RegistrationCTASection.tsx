import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegistrationCTASection: React.FC = () => {
  const benefits = [
    'Full access to all Technical & Non-Technical events',
    'Official Participation Certificate from Dhanalakshmi Srinivasan University',
    'Lunch & Refreshments provided for both days',
    'Cash prizes, trophies & Tech Titans certificates'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 relative z-10 overflow-hidden" id="register-cta">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle,rgba(255,106,0,0.12)_0%,rgba(229,184,66,0.05)_50%,transparent_75%)] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden relative border border-[#FF6A00]/35 hover:border-[#FF6A00]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Top Specular Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8A1F] to-transparent" />
          
          {/* Decorative Corner Orbs */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#FF6A00] rounded-full blur-[120px] opacity-25 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[#E5B842] rounded-full blur-[120px] opacity-20 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill">
                <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
                <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
                  LIMITED SEATS AVAILABLE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-[#F8F6F0] leading-tight tracking-tight">
                READY TO <span className="text-gradient">COMPETE?</span>
              </h2>
              
              {/* Fee Pill */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-panel border border-[#E5B842]/40 shadow-[0_0_20px_rgba(229,184,66,0.15)]">
                <Award className="w-5 h-5 text-[#FF8A1F]" />
                <div>
                  <span className="text-2xl sm:text-3xl font-orbitron font-extrabold text-[#FFE2A3]">₹200</span>
                  <span className="text-xs sm:text-sm text-[#A3A5AF] font-inter ml-2">/ Participant (All Events Included)</span>
                </div>
              </div>
              
              {/* Benefits List */}
              <ul className="space-y-3 font-inter">
                {benefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.08) }}
                    className="flex items-center text-xs sm:text-sm md:text-base text-[#F8F6F0]"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8A1F] mr-3 shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Right Action Button */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center">
              <Link 
                to="/register"
                className="group relative inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 sm:px-10 sm:py-5 rounded-2xl glass-btn-primary text-[#060608] font-orbitron font-extrabold text-sm sm:text-base md:text-lg tracking-wider overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>CONFIRM REGISTRATION</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </span>
              </Link>
              <p className="text-[11px] sm:text-xs text-[#A3A5AF] font-inter mt-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#FF8A1F]" />
                <span>Instant confirmation pass generated with QR code</span>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTASection;
