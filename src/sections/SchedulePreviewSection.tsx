import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';

const scheduleData = {
  'DAY 1': [
    { time: '09:00 AM', title: 'Grand Inauguration Ceremony', loc: 'Main Auditorium', category: 'General' },
    { time: '10:30 AM', title: 'Tech Talk — Paper Presentation', loc: 'IT Seminar Hall', category: 'Technical' },
    { time: '11:45 AM', title: 'EraseX — Debugging Battle', loc: 'Programming Lab 1 & 2', category: 'Technical' },
    { time: '01:30 PM', title: 'Titan 11 — IPL Auction Arena', loc: 'Seminar Hall B', category: 'Non-Technical' },
    { time: '02:45 PM', title: 'Insta Lens — Photography Submission', loc: 'DSU Campus Ground', category: 'Non-Technical' },
    { time: '03:30 PM', title: 'Think & Link — Connection Challenge', loc: 'Lecture Theatre 6th Floor', category: 'Non-Technical' }
  ],
  'DAY 2': [
    { time: '09:30 AM', title: 'Code Hack — Mini Hackathon Sprint', loc: 'Innovation Lab', category: 'Technical' },
    { time: '11:00 AM', title: 'Hunt IQ — Rapid Technical Quiz', loc: 'IT Seminar Hall', category: 'Technical' },
    { time: '01:30 PM', title: 'Aurora Films — Short Film Screening', loc: 'Central Auditorium', category: 'Non-Technical' },
    { time: '02:30 PM', title: 'Nayakan — Cinema Trivia Battle', loc: 'Seminar Hall A', category: 'Non-Technical' },
    { time: '03:30 PM', title: 'Secret Hunt — Campus Treasure Hunt', loc: 'University Campus', category: 'Non-Technical' },
    { time: '04:30 PM', title: 'Valedictory & Award Ceremony', loc: 'Main Auditorium', category: 'General' }
  ]
};

const SchedulePreviewSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'DAY 1' | 'DAY 2'>('DAY 1');

  return (
    <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden" id="schedule">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(255,106,0,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#FF8A1F]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              SYMPOSIUM TIMELINE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-[#F8F6F0] mb-4 tracking-tight">
            SYMPOSIUM <span className="text-gradient">SCHEDULE</span>
          </h2>
          <p className="text-[#A3A5AF] max-w-xl mx-auto text-sm sm:text-base font-inter">
            Two packed days of innovation, competitions, screenings, and celebrations.
          </p>
        </div>

        {/* Day Toggles */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-14">
          {(['DAY 1', 'DAY 2'] as const).map((day) => {
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-orbitron font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'glass-btn-primary text-[#060608]'
                    : 'glass-panel text-[#A3A5AF] hover:text-[#F8F6F0] hover:border-[#FF6A00]/40'
                }`}
              >
                {day} — {day === 'DAY 1' ? '14 OCT' : '15 OCT'}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Luminous Central / Left Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF6A00] via-[#E5B842]/60 to-transparent transform md:-translate-x-1/2 opacity-40 z-0" />

          <div className="space-y-6 sm:space-y-8">
            <AnimatePresence mode="wait">
              {scheduleData[activeDay].map((item, index) => (
                <motion.div
                  key={`${activeDay}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#FF6A00] shadow-[0_0_12px_#FF6A00] transform -translate-x-1/2 mt-5 md:mt-0 z-10 border-2 border-[#060608]" />
                  
                  <div className={`ml-10 md:ml-0 md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start md:pl-10' : 'md:justify-end md:pr-10'} w-full`}>
                    <div className="glass-card rounded-2xl p-5 sm:p-6 w-full max-w-md group hover:border-[#FF6A00]/50 relative overflow-hidden">
                      {/* Top Specular Line */}
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-1.5 text-[#FF8A1F] text-xs sm:text-sm font-orbitron font-semibold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{item.time}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-orbitron font-medium bg-white/[0.05] text-[#A3A5AF] border border-white/[0.08]">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-orbitron font-bold text-[#F8F6F0] mb-2 group-hover:text-[#FF8A1F] transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-[#A3A5AF] text-xs sm:text-sm font-inter">
                        <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                        <span>{item.loc}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View Full Schedule CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            to="/schedule"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-btn-secondary font-orbitron text-xs sm:text-sm font-bold tracking-wider group"
          >
            <span>VIEW FULL TIMETABLE & ROUNDS</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A1F] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SchedulePreviewSection;
