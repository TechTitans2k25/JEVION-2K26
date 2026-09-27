import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Tag } from 'lucide-react';
// Assuming schedule is exported from data
import { schedule } from '../data/schedule';
import { ScheduleItem } from '../types';

const SchedulePage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  // Group events by day and category
  const daySchedule = schedule?.filter((item: ScheduleItem) => item.day === activeDay) || [];
  const technical = daySchedule.filter((item: ScheduleItem) => item.category === 'technical');
  const nonTechnical = daySchedule.filter((item: ScheduleItem) => item.category === 'non-technical');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const renderTimeline = (events: ScheduleItem[], title: string) => (
    <div className="mb-12">
      <h2 className="text-2xl font-orbitron font-bold text-[#D9A441] mb-6">{title}</h2>
      <div className="relative border-l-2 border-[#5C421D] ml-4 md:ml-6 space-y-8">
        {events.map((event, index) => (
          <motion.div variants={itemVariants} key={event.id || index} className="relative pl-8 md:pl-10">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-[#050505] border-2 border-[#FF6A00]" />
            
            <div className="bg-[#151618] border border-[#5C421D]/30 p-5 rounded-lg shadow-lg hover:border-[#FF6A00]/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-[#F5F2EA] mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#A9A9A5] mb-3">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-[#FF6A00]" />
                      <span>{event.time || 'TBA'} {event.endTime ? `- ${event.endTime}` : ''}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-[#FF6A00]" />
                      <span>{event.venue || 'TBA'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} className="text-[#FF6A00]" />
                      <span className="capitalize">{event.category}</span>
                    </div>
                  </div>
                </div>
                
                {event.status === 'upcoming' && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-[#FF6A00] border border-[#FF6A00] uppercase tracking-wider self-start shrink-0">
                    {event.status}
                  </span>
                )}
                {event.status !== 'upcoming' && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-[#A9A9A5] bg-[#111214] border border-[#5C421D]/50 uppercase tracking-wider self-start shrink-0">
                    {event.status}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {events.length === 0 && (
          <div className="pl-8 text-[#A9A9A5]">No events scheduled.</div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-8 tracking-wider">
            EVENT SCHEDULE
          </h1>
          
          <div className="flex justify-center gap-4 bg-[#111214] p-2 rounded-xl border border-[#5C421D]/30 max-w-md mx-auto">
            <button 
              onClick={() => setActiveDay(1)}
              className={`flex-1 py-3 px-6 rounded-lg font-orbitron font-bold transition-all ${
                activeDay === 1 
                  ? 'bg-[#FF6A00] text-[#050505]' 
                  : 'text-[#A9A9A5] hover:text-[#F5F2EA]'
              }`}
            >
              DAY 1
            </button>
            <button 
              onClick={() => setActiveDay(2)}
              className={`flex-1 py-3 px-6 rounded-lg font-orbitron font-bold transition-all ${
                activeDay === 2 
                  ? 'bg-[#FF6A00] text-[#050505]' 
                  : 'text-[#A9A9A5] hover:text-[#F5F2EA]'
              }`}
            >
              DAY 2
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeDay}
        >
          {renderTimeline(technical, 'TECHNICAL EVENTS')}
          {renderTimeline(nonTechnical, 'NON-TECHNICAL EVENTS')}
        </motion.div>
      </div>
    </div>
  );
};

export default SchedulePage;
