import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertCircle, ArrowRight, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const announcements = [
  {
    id: 1,
    priority: 'high',
    title: 'Registrations Open for JEVION 2K26!',
    date: 'OCT 2026',
    message: 'Online registrations are now live for all 10 events. Register with ₹200 to participate in any number of events!'
  },
  {
    id: 2,
    priority: 'normal',
    title: 'Code Hack & Tech Talk Problem Statements',
    date: 'OCT 2026',
    message: 'Guidelines and presentation submission instructions will be released 48 hours prior to Day 1.'
  }
];

const AnnouncementSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-16 px-4 md:px-6 relative z-10" id="announcements">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center border border-[#FF6A00]/40">
              <Radio className="w-5 h-5 text-[#FF8A1F] animate-pulse" />
            </div>
            <div>
              <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl text-[#F8F6F0] font-extrabold uppercase tracking-wider">
                LATEST <span className="text-gradient">TRANSMISSIONS</span>
              </h2>
              <p className="text-xs text-[#A3A5AF] font-inter">Live symposium updates & bulletin</p>
            </div>
          </div>

          <Link 
            to="/announcements" 
            className="hidden sm:inline-flex items-center gap-1.5 font-orbitron text-xs font-semibold text-[#FF8A1F] hover:text-[#FFE2A3] transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        
        {/* Announcement Glass Cards */}
        <div className="flex flex-col gap-4">
          {announcements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center relative overflow-hidden group hover:border-[#FF6A00]/50"
            >
              {/* Specular line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              
              <div className="flex-shrink-0">
                {item.priority === 'high' ? (
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#FF8A1F]" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-[#E5B842]/15 border border-[#E5B842]/30 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-[#FFE2A3]" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-1.5">
                  <h4 className="font-orbitron text-sm sm:text-base text-[#F8F6F0] font-bold group-hover:text-[#FFE2A3] transition-colors">
                    {item.title}
                  </h4>
                  <span className="font-orbitron text-[10px] text-[#A3A5AF] glass-pill px-2.5 py-0.5 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="font-inter text-xs sm:text-sm text-[#A3A5AF] leading-relaxed">
                  {item.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center sm:hidden">
          <Link to="/announcements" className="font-orbitron text-xs font-semibold text-[#FF8A1F] hover:text-[#FFE2A3] transition-colors inline-flex items-center gap-1.5">
            <span>View All Announcements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AnnouncementSection;
