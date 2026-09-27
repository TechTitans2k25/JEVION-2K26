import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';
// @ts-ignore
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isTechnical = event.category === 'TECHNICAL';

  return (
    <Link to={`/events/${event.slug}`} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="h-full bg-[#151618] border border-gray-800 rounded-xl p-5 hover:border-[#FF6A00] transition-colors relative overflow-hidden group flex flex-col"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <div className="flex justify-between items-start mb-4">
          <div className="bg-[#0D0E10] w-12 h-12 rounded-lg border border-gray-800 flex items-center justify-center text-[#FF6A00]">
            {/* Displaying icon or fallback initial */}
            {event.icon || <span className="font-['Orbitron'] font-bold text-xl">{event.name.charAt(0)}</span>}
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span className={`text-[10px] font-bold px-2 py-1 rounded tracking-wider ${isTechnical ? 'bg-[#FF6A00]/10 text-[#FF6A00] border border-[#FF6A00]/20' : 'bg-[#D9A441]/10 text-[#D9A441] border border-[#D9A441]/20'}`}>
              {event.category}
            </span>
            <span className="text-[10px] font-bold bg-[#050505] text-[#A9A9A5] px-2 py-1 rounded border border-gray-800 tracking-wider">
              DAY {event.day}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-['Orbitron'] font-bold text-[#F5F2EA] mb-2 group-hover:text-[#FF6A00] transition-colors line-clamp-1">{event.name}</h3>
        <p className="text-sm text-[#A9A9A5] mb-6 flex-grow line-clamp-2">{event.shortTitle}</p>
        
        <div className="flex gap-4 text-xs text-[#A9A9A5] border-t border-gray-800/50 pt-4 mt-auto">
          <div className="flex items-center gap-1.5"><MapPin size={14} className="text-[#FF8A1F]"/> <span className="truncate">{event.venue || 'TBA'}</span></div>
          {event.teamSize && <div className="flex items-center gap-1.5"><Users size={14} className="text-[#D9A441]"/> <span className="whitespace-nowrap">{event.teamSize}</span></div>}
        </div>
      </motion.div>
    </Link>
  );
};

export default EventCard;

