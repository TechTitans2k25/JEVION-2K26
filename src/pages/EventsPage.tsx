import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventCard } from '../components/event/EventCard';
import { EventFilter } from '../components/event/EventFilter';
// @ts-ignore - Assuming data exists
import { events } from '../data/events';
// @ts-ignore
import { Event } from '../types';

export const EventsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'ALL' | 'TECHNICAL' | 'NON-TECHNICAL'>('ALL');
  const [day, setDay] = useState<'ALL' | 1 | 2>('ALL');

  const filteredEvents = (events || []).filter((event: Event) => {
    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase()) || 
                          event.shortTitle.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'ALL' || event.category === category;
    const matchesDay = day === 'ALL' || event.day === day;
    
    return matchesSearch && matchesCategory && matchesDay;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#D9A441] mb-4">
            EVENT UNIVERSE
          </h1>
          <p className="text-[#A9A9A5] text-lg max-w-2xl mx-auto">
            Discover a galaxy of technical challenges and creative showdowns.
          </p>
        </motion.div>

        <EventFilter 
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          day={day}
          setDay={setDay}
        />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <AnimatePresence>
            {filteredEvents.map((event: Event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-[#A9A9A5]">
            <p className="text-xl">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;

