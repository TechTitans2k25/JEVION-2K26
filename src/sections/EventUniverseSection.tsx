import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Presentation, Trophy, Camera, Link2, Terminal, Search, Film, Clapperboard, Map, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockEvents = [
  // DAY 1 - Technical
  { id: 'tech-talk', title: 'Tech Talk', shortDesc: 'Paper Presentation & Innovation Pitch', category: 'TECHNICAL', day: 'DAY 1', icon: <Presentation className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'erasex', title: 'EraseX', shortDesc: 'Code Debugging & Algorithmic Challenge', category: 'TECHNICAL', day: 'DAY 1', icon: <Code className="w-6 h-6 text-[#FF6A00]" /> },
  // DAY 1 - Non-Technical  
  { id: 'titan-11', title: 'Titan 11', shortDesc: 'Strategic IPL Player Auction Battle', category: 'NON-TECHNICAL', day: 'DAY 1', icon: <Trophy className="w-6 h-6 text-[#E5B842]" /> },
  { id: 'insta-lens', title: 'Insta Lens', shortDesc: 'Theme-Based Campus Photography Contest', category: 'NON-TECHNICAL', day: 'DAY 1', icon: <Camera className="w-6 h-6 text-[#E5B842]" /> },
  { id: 'think-link', title: 'Think & Link', shortDesc: 'Creative Pattern & Connection Trivia', category: 'NON-TECHNICAL', day: 'DAY 1', icon: <Link2 className="w-6 h-6 text-[#E5B842]" /> },
  // DAY 2 - Technical
  { id: 'code-hack', title: 'Code Hack', shortDesc: 'Mini Hackathon & Rapid Prototype Sprint', category: 'TECHNICAL', day: 'DAY 2', icon: <Terminal className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'hunt-iq', title: 'Hunt IQ', shortDesc: 'High-Stakes Technical & Logic Quiz', category: 'TECHNICAL', day: 'DAY 2', icon: <Search className="w-6 h-6 text-[#FF6A00]" /> },
  // DAY 2 - Non-Technical
  { id: 'aurora-films', title: 'Aurora Films', shortDesc: 'Cinematic Short Film Premiere Contest', category: 'NON-TECHNICAL', day: 'DAY 2', icon: <Film className="w-6 h-6 text-[#E5B842]" /> },
  { id: 'nayakan', title: 'Nayakan', shortDesc: 'Ultimate Cinema Trivia & Dialogue Game', category: 'NON-TECHNICAL', day: 'DAY 2', icon: <Clapperboard className="w-6 h-6 text-[#E5B842]" /> },
  { id: 'secret-hunt', title: 'Secret Hunt', shortDesc: 'Adventure Clue Solving & Treasure Hunt', category: 'NON-TECHNICAL', day: 'DAY 2', icon: <Map className="w-6 h-6 text-[#E5B842]" /> },
];

const EventUniverseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'TECHNICAL', 'NON-TECHNICAL'];
  
  const filteredEvents = activeFilter === 'ALL' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === activeFilter);

  return (
    <section className="py-12 sm:py-16 md:py-24 relative z-10" id="events">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(229,184,66,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              COMPETE & CONQUER
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-[#F8F6F0] mb-4 tracking-tight">
            ENTER THE <span className="text-gradient">EVENT UNIVERSE</span>
          </h2>
          <p className="text-[#A3A5AF] max-w-2xl mx-auto text-sm sm:text-base font-inter">
            Explore 10 curated technical and creative arenas with cash prizes, certificates, and glory.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs sm:text-sm px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-orbitron tracking-wider transition-all duration-300 font-semibold cursor-pointer ${
                  isActive
                    ? 'glass-btn-primary text-[#060608]'
                    : 'glass-panel text-[#A3A5AF] hover:text-[#F8F6F0] hover:border-[#FF6A00]/40'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Glass Event Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                key={event.id}
                className="glass-card rounded-2xl p-6 group flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Top Inner Specular Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div>
                  {/* Top Bar: Icon + Badges */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center border border-white/10 group-hover:border-[#FF6A00]/50 group-hover:scale-105 transition-all duration-300">
                      {event.icon}
                    </div>
                    <div className="flex flex-col gap-1.5 items-end">
                      <span className={`text-[10px] tracking-wider font-orbitron font-bold px-2.5 py-0.5 rounded-full ${
                        event.category === 'TECHNICAL'
                          ? 'bg-[#FF6A00]/15 text-[#FF8A1F] border border-[#FF6A00]/30'
                          : 'bg-[#E5B842]/15 text-[#FFE2A3] border border-[#E5B842]/30'
                      }`}>
                        {event.category}
                      </span>
                      <span className="text-[10px] tracking-wider font-orbitron font-medium px-2 py-0.5 rounded-full bg-white/[0.05] text-[#A3A5AF] border border-white/[0.08]">
                        {event.day}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-orbitron font-bold text-[#F8F6F0] mb-2 group-hover:text-[#FF8A1F] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-[#A3A5AF] text-xs sm:text-sm font-inter leading-relaxed mb-6">
                    {event.shortDesc}
                  </p>
                </div>
                
                {/* Action Link */}
                <Link 
                  to={`/events/${event.id}`}
                  className="inline-flex items-center text-xs sm:text-sm font-orbitron font-semibold text-[#FF8A1F] group-hover:text-[#FFE2A3] transition-colors mt-auto pt-4 border-t border-white/[0.06]"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-btn-secondary font-orbitron text-xs sm:text-sm font-bold tracking-wider"
          >
            <span>VIEW FULL EVENT CATALOGUE</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A1F]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EventUniverseSection;
