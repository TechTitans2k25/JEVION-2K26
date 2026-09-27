import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '../components/event/EventCard';
// @ts-ignore
import { events } from '../data/events';
// @ts-ignore
import { Event } from '../types';

export const NonTechnicalEventsPage: React.FC = () => {
  const nonTechEvents = (events || []).filter((e: Event) => e.category === 'NON-TECHNICAL');
  const day1Events = nonTechEvents.filter((e: Event) => e.day === 1);
  const day2Events = nonTechEvents.filter((e: Event) => e.day === 2);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Energetic Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9A441] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-black text-[#D9A441] mb-4 uppercase tracking-wider">
            Non-Technical
          </h1>
          <p className="text-[#A9A9A5] text-lg">
            Unleash your creativity and energy.
          </p>
        </motion.div>

        {day1Events.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-['Orbitron'] text-[#FF6A00] border-b border-gray-800 pb-2 mb-8 inline-block">DAY 1</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {day1Events.map((event: Event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {day2Events.length > 0 && (
          <div>
            <h2 className="text-2xl font-['Orbitron'] text-[#FF6A00] border-b border-gray-800 pb-2 mb-8 inline-block">DAY 2</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {day2Events.map((event: Event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NonTechnicalEventsPage;

