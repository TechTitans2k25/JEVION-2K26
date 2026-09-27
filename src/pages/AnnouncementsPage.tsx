import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, AlertTriangle, Info, Zap } from 'lucide-react';
import { announcements } from '../data/announcements';
import { Announcement } from '../types';

const AnnouncementsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'urgent' | 'high' | 'general'>('all');

  const filteredAnnouncements = announcements?.filter((item: Announcement) => {
    if (filter === 'all') return true;
    if (filter === 'urgent') return item.priority === 'urgent';
    if (filter === 'high') return item.priority === 'high';
    return item.priority === 'medium' || item.priority === 'low';
  }) || [];

  const getPriorityIcon = (priority: string) => {
    switch(priority) {
      case 'urgent': return <AlertTriangle className="text-red-500" size={24} />;
      case 'high': return <Zap className="text-[#FF6A00]" size={24} />;
      default: return <Info className="text-[#A9A9A5]" size={24} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'urgent': return 'border-red-500/50 bg-red-500/10 text-red-500';
      case 'high': return 'border-[#FF6A00]/50 bg-[#FF6A00]/10 text-[#FF6A00]';
      default: return 'border-[#5C421D]/30 bg-[#111214] text-[#A9A9A5]';
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-8 tracking-wider flex justify-center items-center gap-3">
            <Bell className="text-[#D9A441]" size={36} />
            ANNOUNCEMENTS
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 bg-[#111214] p-2 rounded-xl border border-[#5C421D]/30 mx-auto w-fit">
            {[
              { id: 'all', label: 'LATEST' },
              { id: 'urgent', label: 'URGENT' },
              { id: 'high', label: 'IMPORTANT' },
              { id: 'general', label: 'GENERAL' }
            ].map((f) => (
              <button 
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`py-2 px-4 rounded-lg font-orbitron text-sm font-bold uppercase transition-all ${
                  filter === f.id 
                    ? 'bg-[#FF6A00] text-[#050505]' 
                    : 'text-[#A9A9A5] hover:text-[#F5F2EA] hover:bg-[#151618]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredAnnouncements.map((item: Announcement, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-lg p-5 flex gap-4 ${
                  item.priority === 'urgent' ? 'border-red-500/30 bg-gradient-to-r from-red-500/10 to-[#111214]' :
                  item.priority === 'high' ? 'border-[#FF6A00]/30 bg-gradient-to-r from-[#FF6A00]/10 to-[#111214]' :
                  'border-[#5C421D]/30 bg-[#151618]'
                }`}
              >
                <div className="shrink-0 mt-1">
                  {getPriorityIcon(item.priority)}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#F5F2EA]">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#A9A9A5] font-orbitron">{item.date}</span>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#A9A9A5] text-sm leading-relaxed whitespace-pre-line">{item.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredAnnouncements.length === 0 && (
            <div className="text-center text-[#A9A9A5] py-12 border border-dashed border-[#5C421D]/30 rounded-lg bg-[#111214]/50">
              No announcements found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
