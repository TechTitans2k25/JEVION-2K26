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
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-[#FF6A00]/50"
      >
        {/* Top Specular Line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div>
          {/* Header Row: Icon + Badges */}
          <div className="flex justify-between items-start mb-2.5 sm:mb-4 gap-1.5">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl glass-panel flex items-center justify-center border border-white/10 group-hover:border-[#FF6A00]/50 group-hover:scale-105 transition-all duration-300 shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
              {eventIcon}
            </div>
            <div className="flex flex-col gap-1 items-end shrink-0">
              <span className={`text-[8px] sm:text-[10px] font-orbitron font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full tracking-wider uppercase ${
                isTechnical 
                  ? 'bg-[#FF6A00]/15 text-[#FF8A1F] border border-[#FF6A00]/30' 
                  : 'bg-[#E5B842]/15 text-[#FFE2A3] border border-[#E5B842]/30'
              }`}>
                {event.category === 'technical' ? 'TECHNICAL' : 'NON-TECH'}
              </span>
              <span className="text-[8px] sm:text-[10px] font-orbitron font-medium px-1.5 sm:px-2 py-0.5 rounded-full bg-white/[0.05] text-[#A3A5AF] border border-white/[0.08] tracking-wider">
                DAY {event.day}
              </span>
            </div>
          </div>
          
          {/* Title & Short Title */}
          <h3 className="text-xs sm:text-base md:text-xl font-orbitron font-bold text-[#F8F6F0] mb-1 sm:mb-1.5 group-hover:text-[#FF8A1F] transition-colors truncate">
            {event.name}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm text-[#A3A5AF] font-inter mb-2.5 sm:mb-4 line-clamp-1 sm:line-clamp-2 leading-tight sm:leading-relaxed">
            {event.shortTitle}
          </p>
        </div>

        {/* Footer Details: Venue & Team Size */}
        <div className="pt-2.5 sm:pt-3.5 border-t border-white/[0.08] mt-auto space-y-1.5 sm:space-y-2">
          <div className="flex items-center justify-between text-[9px] sm:text-xs text-[#A3A5AF] font-inter">
            <div className="flex items-center gap-1 truncate max-w-[65%]">
              <MapPin size={11} className="text-[#FF8A1F] shrink-0 sm:w-3.5 sm:h-3.5" />
              <span className="truncate">{event.venue}</span>
            </div>
            {event.teamSize && (
              <div className="flex items-center gap-1 text-[#FFE2A3] font-orbitron text-[9px] sm:text-[11px] shrink-0">
                <Users size={11} className="text-[#E5B842] sm:w-3.5 sm:h-3.5" />
                <span className="truncate">{event.teamSize.replace(' Members', 'M').replace(' Member', 'M')}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-0.5">
            <span className="text-[9px] sm:text-[11px] font-orbitron text-[#E5B842] flex items-center gap-1">
              <Clock size={11} className="sm:w-3 sm:h-3" /> 
              <span className="truncate">{event.time?.split('-')[0]?.trim() || 'Day ' + event.day}</span>
            </span>
            <span className="inline-flex items-center text-[9px] sm:text-xs font-orbitron font-semibold text-[#FF8A1F] group-hover:text-[#FFE2A3] transition-colors">
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">Details</span>
              <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ml-0.5 sm:ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default EventCard;
