import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const scheduleData = {
  'DAY 1': [
    { time: 'TBA', title: 'Inauguration Ceremony', loc: 'Main Auditorium' },
    { time: 'TBA', title: 'Tech Talk - Paper Presentation', loc: 'IT Seminar Hall' },
    { time: 'TBA', title: 'EraseX - Debugging', loc: 'Lab' },
    { time: 'TBA', title: 'Titan 11 - IPL Auction', loc: 'Seminar Hall' },
    { time: 'TBA', title: 'Insta Lens - Photography', loc: 'Campus' },
    { time: 'TBA', title: 'Think & Link', loc: 'Seminar Hall' }
  ],
  'DAY 2': [
    { time: 'TBA', title: 'Code Hack - Mini Hackathon', loc: 'Lab' },
    { time: 'TBA', title: 'Hunt IQ - Quiz', loc: 'Seminar Hall' },
    { time: 'TBA', title: 'Aurora Films - Short Film', loc: 'Auditorium' },
    { time: 'TBA', title: 'Nayakan - Guess the Movie', loc: 'Seminar Hall' },
    { time: 'TBA', title: 'Secret Hunt - Treasure Hunt', loc: 'Campus' },
    { time: 'TBA', title: 'Valedictory Function', loc: 'Main Auditorium' }
  ]
};

const SchedulePreviewSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'DAY 1' | 'DAY 2'>('DAY 1');

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0D0E10] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D9A441] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F2EA] mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#D9A441]">SCHEDULE</span>
          </h2>
          <p className="text-[#A9A9A5] max-w-2xl mx-auto">
            Mark your calendars for two days of non-stop technical brilliance.
          </p>
        </div>

        {/* Day Toggles */}
        <div className="flex justify-center space-x-4 mb-16">
          {(['DAY 1', 'DAY 2'] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                activeDay === day
                  ? 'bg-gradient-to-r from-[#FF6A00] to-[#D9A441] text-[#050505] border-transparent shadow-[0_0_20px_rgba(255,106,0,0.3)]'
                  : 'bg-transparent text-[#A9A9A5] border-[#5C421D] hover:border-[#D9A441] hover:text-[#F5F2EA]'
              }`}
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6A00] via-[#D9A441] to-transparent transform md:-translate-x-1/2 opacity-30" />

          <div className="space-y-8">
            {scheduleData[activeDay].map((item, index) => (
              <motion.div
                key={`${activeDay}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[16px] md:left-1/2 w-3 h-3 rounded-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00] transform -translate-x-1/2 mt-6 md:mt-0 z-10 border-2 border-[#050505]" />
                
                <div className={`ml-8 md:ml-0 md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'} w-full`}>
                  <div className="bg-[#111214] border border-[#5C421D]/30 p-5 sm:p-6 rounded-xl w-full max-w-md group hover:border-[#D9A441]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,164,65,0.1)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 text-[#D9A441] mb-2 text-xs sm:text-sm font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#F5F2EA] mb-3" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-[#A9A9A5] text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{item.loc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/schedule"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border border-[#5C421D] hover:border-[#FF6A00] text-[#F5F2EA] rounded-lg font-bold transition-all duration-300 hover:bg-[#111214] group"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span>VIEW FULL SCHEDULE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FF6A00]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchedulePreviewSection;
