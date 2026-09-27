import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '../components/event/EventCard';
// @ts-ignore
import { events } from '../data/events';
// @ts-ignore
import { Event } from '../types';

export const TechnicalEventsPage: React.FC = () => {
  const technicalEvents = (events || []).filter((e: Event) => e.category === 'TECHNICAL');
  const day1Events = technicalEvents.filter((e: Event) => e.day === 1);
  const day2Events = technicalEvents.filter((e: Event) => e.day === 2);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative circuits */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 L200 100 L250 150 L500 150" stroke="#FF6A00" strokeWidth="2" fill="none" />
          <path d="M100 0 L100 200 L150 250 L150 500" stroke="#FF6A00" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-['Orbitron'] font-black text-[#FF6A00] mb-4 uppercase tracking-wider">
            Technical
          </h1>
          <p className="text-[#A9A9A5] text-lg font-mono">
            &lt;Push your limits /&gt;
          </p>
        </motion.div>

        {day1Events.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-['Orbitron'] text-[#D9A441] border-b border-gray-800 pb-2 mb-8 inline-block">DAY 1</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {day1Events.map((event: Event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {day2Events.length > 0 && (
          <div>
            <h2 className="text-2xl font-['Orbitron'] text-[#D9A441] border-b border-gray-800 pb-2 mb-8 inline-block">DAY 2</h2>
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

export default TechnicalEventsPage;

