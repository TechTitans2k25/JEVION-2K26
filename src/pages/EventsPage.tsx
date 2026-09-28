import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventCard } from '../components/event/EventCard';
import { EventFilter } from '../components/event/EventFilter';
import { events } from '../data/events';
import { Event } from '../types';
import { Sparkles } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'ALL' | 'TECHNICAL' | 'NON-TECHNICAL'>('ALL');
  const [day, setDay] = useState<'ALL' | 1 | 2>('ALL');

  const filteredEvents = (events || []).filter((event: Event) => {
    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase()) || 
                          event.shortTitle.toLowerCase().includes(search.toLowerCase()) ||
                          event.description.toLowerCase().includes(search.toLowerCase());
    
    const eventCatUpper = event.category.toUpperCase();
    const matchesCategory = category === 'ALL' || eventCatUpper === category;
    const matchesDay = day === 'ALL' || event.day === day;
    
    return matchesSearch && matchesCategory && matchesDay;
  });

  return (
    <div className="min-h-screen text-[#F8F6F0] pb-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              10 ARENAS • 2 EPIC DAYS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#FFD269] to-[#FF6A00] mb-3 tracking-tight">
            EVENT UNIVERSE
          </h1>
          <p className="text-[#A3A5AF] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-inter">
            Explore our complete lineup of technical challenges and creative showdowns for JEVION 2K26.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <EventFilter 
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          day={day}
          setDay={setDay}
        />

        {/* Events Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6 mt-8 sm:mt-10">
          <AnimatePresence>
            {filteredEvents.map((event: Event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-[#A3A5AF] glass-card rounded-2xl max-w-md mx-auto mt-12 p-8">
            <p className="text-lg font-orbitron text-[#F8F6F0] mb-2">No Events Found</p>
            <p className="text-sm font-inter">Try adjusting your search keyword, category, or day filter.</p>
            <button 
              onClick={() => { setSearch(''); setCategory('ALL'); setDay('ALL'); }}
              className="mt-4 px-6 py-2 rounded-xl glass-btn-primary text-[#060608] font-orbitron text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default EventsPage;
