import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const announcements = [
  {
    id: 1,
    priority: 'high',
    title: 'Registration Deadline Extended',
    date: 'Sep 20, 2026',
    message: 'The early bird registration has been extended to Sep 25. Register now to secure your spot!'
  },
  {
    id: 2,
    priority: 'normal',
    title: 'E-Sports Guidelines Updated',
    date: 'Sep 18, 2026',
    message: 'New rules for BGMI and Valorant tournaments have been posted on the event pages.'
  }
];

const AnnouncementSection: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Bell className="w-6 h-6 text-[#D9A441]" />
          <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl text-[#F5F2EA] font-bold uppercase tracking-wider">
            Latest Updates
          </h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {announcements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111214] border border-[#151618] p-5 rounded-lg flex flex-col sm:flex-row gap-4 sm:items-center hover:bg-[#151618] transition-colors"
            >
              <div className="flex-shrink-0">
                {item.priority === 'high' ? (
                  <AlertCircle className="w-6 h-6 text-[#FF6A00]" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[#D9A441] m-2" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h4 className="font-inter text-base sm:text-lg text-[#F5F2EA] font-semibold">{item.title}</h4>
                  <span className="font-inter text-xs text-[#A9A9A5] bg-[#050505] px-2 py-0.5 rounded border border-[#151618] w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="font-inter text-sm text-[#A9A9A5]">{item.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-right">
          <Link to="/updates" className="font-inter text-sm text-[#D9A441] hover:text-[#FFE2A3] transition-colors">
            View All Updates →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection;
