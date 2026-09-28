import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Users, Clock, ArrowRight, Presentation, Code, Trophy, Camera, Link2, Terminal, Search, Film, Clapperboard, Map } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const iconMap: Record<string, React.ReactNode> = {
  'tech-talk': <Presentation className="w-6 h-6 text-[#FF6A00]" />,
  'erasex': <Code className="w-6 h-6 text-[#FF6A00]" />,
  'titan-11': <Trophy className="w-6 h-6 text-[#E5B842]" />,
  'insta-lens': <Camera className="w-6 h-6 text-[#E5B842]" />,
  'think-link': <Link2 className="w-6 h-6 text-[#E5B842]" />,
  'code-hack': <Terminal className="w-6 h-6 text-[#FF6A00]" />,
  'hunt-iq': <Search className="w-6 h-6 text-[#FF6A00]" />,
  'aurora-films': <Film className="w-6 h-6 text-[#E5B842]" />,
  'nayakan': <Clapperboard className="w-6 h-6 text-[#E5B842]" />,
  'secret-hunt': <Map className="w-6 h-6 text-[#E5B842]" />,
};

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isTechnical = event.category.toLowerCase() === 'technical';
  const eventIcon = iconMap[event.slug] || iconMap[event.id] || (
    <span className="font-orbitron font-bold text-xl text-[#FF8A1F]">{event.name.charAt(0)}</span>
  );

  return (
    <Link to={`/events/${event.slug}`} className="block h-full group">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="h-full glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-[#FF6A00]/50"
      >
        {/* Top Specular Line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div>
          {/* Header Row: Icon + Badges */}
          <div className="flex justify-between items-start mb-5">
            <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center border border-white/10 group-hover:border-[#FF6A00]/50 group-hover:scale-105 transition-all duration-300">
              {eventIcon}
            </div>
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`text-[10px] font-orbitron font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase ${
                isTechnical 
                  ? 'bg-[#FF6A00]/15 text-[#FF8A1F] border border-[#FF6A00]/30' 
                  : 'bg-[#E5B842]/15 text-[#FFE2A3] border border-[#E5B842]/30'
              }`}>
                {event.category}
              </span>
              <span className="text-[10px] font-orbitron font-medium px-2 py-0.5 rounded-full bg-white/[0.05] text-[#A3A5AF] border border-white/[0.08] tracking-wider">
                DAY {event.day}
              </span>
            </div>
          </div>
          
          {/* Title & Short Title */}
          <h3 className="text-xl font-orbitron font-bold text-[#F8F6F0] mb-2 group-hover:text-[#FF8A1F] transition-colors line-clamp-1">
            {event.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#A3A5AF] font-inter mb-4 line-clamp-2 leading-relaxed">
            {event.shortTitle}
          </p>
        </div>

        {/* Footer Details: Venue & Team Size */}
        <div className="pt-4 border-t border-white/[0.08] mt-auto space-y-2">
          <div className="flex items-center justify-between text-xs text-[#A3A5AF] font-inter">
            <div className="flex items-center gap-1.5 truncate max-w-[65%]">
              <MapPin size={13} className="text-[#FF8A1F] shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
            {event.teamSize && (
              <div className="flex items-center gap-1.5 text-[#FFE2A3] font-orbitron text-[11px] shrink-0">
                <Users size={13} className="text-[#E5B842]" />
                <span>{event.teamSize}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-orbitron text-[#E5B842] flex items-center gap-1">
              <Clock size={12} /> {event.time?.split('-')[0]?.trim() || 'Day ' + event.day}
            </span>
            <span className="inline-flex items-center text-xs font-orbitron font-semibold text-[#FF8A1F] group-hover:text-[#FFE2A3] transition-colors">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default EventCard;
