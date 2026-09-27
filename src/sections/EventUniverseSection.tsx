import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, MonitorPlay, Presentation, Gamepad2, Mic, ArrowRight, Trophy, Camera, Link2, Terminal, Search, Film, Clapperboard, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockEvents = [
  // DAY 1 - Technical
  { id: 'tech-talk', title: 'Tech Talk', shortDesc: 'Paper Presentation', category: 'TECHNICAL', day: 'DAY 1', icon: <Presentation className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'erasex', title: 'EraseX', shortDesc: 'Debugging Challenge', category: 'TECHNICAL', day: 'DAY 1', icon: <Code className="w-6 h-6 text-[#FF6A00]" /> },
  // DAY 1 - Non-Technical  
  { id: 'titan-11', title: 'Titan 11', shortDesc: 'IPL Auction', category: 'NON-TECHNICAL', day: 'DAY 1', icon: <Trophy className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'insta-lens', title: 'Insta Lens', shortDesc: 'Photography Contest', category: 'NON-TECHNICAL', day: 'DAY 1', icon: <Camera className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'think-link', title: 'Think & Link', shortDesc: 'Connection Game', category: 'NON-TECHNICAL', day: 'DAY 1', icon: <Link2 className="w-6 h-6 text-[#FF6A00]" /> },
  // DAY 2 - Technical
  { id: 'code-hack', title: 'Code Hack', shortDesc: 'Mini Hackathon', category: 'TECHNICAL', day: 'DAY 2', icon: <Terminal className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'hunt-iq', title: 'Hunt IQ', shortDesc: 'Technical Quiz', category: 'TECHNICAL', day: 'DAY 2', icon: <Search className="w-6 h-6 text-[#FF6A00]" /> },
  // DAY 2 - Non-Technical
  { id: 'aurora-films', title: 'Aurora Films', shortDesc: 'Short Film Contest', category: 'NON-TECHNICAL', day: 'DAY 2', icon: <Film className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'nayakan', title: 'Nayakan', shortDesc: 'Guess the Movie', category: 'NON-TECHNICAL', day: 'DAY 2', icon: <Clapperboard className="w-6 h-6 text-[#FF6A00]" /> },
  { id: 'secret-hunt', title: 'Secret Hunt', shortDesc: 'Treasure Hunt', category: 'NON-TECHNICAL', day: 'DAY 2', icon: <Map className="w-6 h-6 text-[#FF6A00]" /> },
];

const EventUniverseSection = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'TECHNICAL', 'NON-TECHNICAL'];
  
  const filteredEvents = activeFilter === 'ALL' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === activeFilter);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#050505] relative z-10" id="events">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F2EA] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            EVENT UNIVERSE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#A9A9A5] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore our stellar lineup of technical and non-technical challenges.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] sm:text-xs md:text-sm px-4 py-2 sm:px-6 sm:py-2 rounded-full border transition-all duration-300 font-medium ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F] border-transparent text-[#050505] shadow-[0_0_15px_rgba(255,106,0,0.5)]'
                  : 'bg-[#111214] border-[#5C421D] text-[#F5F2EA] hover:border-[#FF6A00] hover:text-[#FF6A00]'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              key={event.id}
              className="bg-[#0D0E10] border border-[#151618] rounded-xl p-6 group hover:border-[#FF6A00]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,106,0,0.1)] flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#151618] to-[#111214] border border-[#5C421D]/30 flex items-center justify-center group-hover:border-[#FF6A00]/30 transition-colors">
                  {event.icon}
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className="text-[10px] tracking-wider font-bold px-2 py-1 bg-[#111214] text-[#D9A441] border border-[#5C421D]/50 rounded-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {event.category}
                  </span>
                  <span className="text-[10px] tracking-wider font-bold px-2 py-1 bg-[#111214] text-[#A9A9A5] border border-[#151618] rounded-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {event.day}
                  </span>
                </div>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#F5F2EA] mb-2 group-hover:text-[#FF8A1F] transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {event.title}
              </h3>
              <p className="text-[#A9A9A5] text-sm mb-6 flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                {event.shortDesc}
              </p>
              
              <Link 
                to={`/event/${event.id}`}
                className="inline-flex items-center text-sm font-semibold text-[#FF6A00] hover:text-[#FF8A1F] transition-colors mt-auto"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventUniverseSection;
