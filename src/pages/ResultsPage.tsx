import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Lock } from 'lucide-react';
import { results } from '../data/results';
import { siteConfig } from '../data/siteConfig';
import { Result } from '../types';

const ResultsPage: React.FC = () => {
  const isPublished = siteConfig?.resultsPublished ?? false;

  const groupedResults = results?.reduce((acc, result) => {
    if (!acc[result.eventId]) acc[result.eventId] = { name: result.eventName, results: [] };
    acc[result.eventId].results.push(result);
    return acc;
  }, {} as Record<string, { name: string, results: Result[] }>) || {};

  if (!isPublished) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl bg-[#111214] border border-[#5C421D]/30 p-12 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent pointer-events-none" />
          <Lock className="w-20 h-20 text-[#A9A9A5] mx-auto mb-6 opacity-50" />
          <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-[#D9A441] mb-4">
            RESULTS SECURED
          </h1>
          <p className="text-[#A9A9A5] text-lg">
            Results will be announced after the events conclude. Check back later to see the champions of JEVION 2K26.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-4 tracking-wider flex items-center justify-center gap-4">
            <Trophy className="text-[#D9A441]" size={40} />
            RESULTS
            <Trophy className="text-[#D9A441]" size={40} />
          </h1>
          <p className="text-[#A9A9A5]">The champions of JEVION 2K26</p>
        </motion.div>

        <div className="space-y-16">
          {Object.values(groupedResults).map((eventGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111214] rounded-xl border border-[#5C421D]/40 p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-center text-[#D9A441] mb-8 pb-4 border-b border-[#5C421D]/30">
                {eventGroup.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                {/* Runner Up */}
                {eventGroup.results.find(r => r.category === 'runner-up') && (
                  <div className="order-2 md:order-1 flex flex-col items-center p-4 bg-[#151618] rounded-t-lg border border-b-0 border-[#5C421D]/30 relative pt-8 h-[90%]">
                    <div className="absolute -top-6 bg-[#C0C0C0] p-3 rounded-full border-4 border-[#151618]">
                      <Medal className="text-[#050505]" size={24} />
                    </div>
                    <div className="text-center mt-4 w-full">
                      <div className="text-[#C0C0C0] font-orbitron font-bold mb-1">RUNNER UP</div>
                      <div className="text-lg font-bold text-[#F5F2EA] truncate w-full px-2">
                        {eventGroup.results.find(r => r.category === 'runner-up')?.participantName}
                      </div>
                      <div className="text-sm text-[#A9A9A5] mt-1">
                        {eventGroup.results.find(r => r.category === 'runner-up')?.college}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Winner */}
                {eventGroup.results.find(r => r.category === 'winner') && (
                  <div className="order-1 md:order-2 flex flex-col items-center p-6 bg-gradient-to-t from-[#FF6A00]/20 to-[#151618] rounded-t-lg border border-b-0 border-[#FF6A00]/50 relative pt-10 h-full shadow-[0_-10px_30px_rgba(255,106,0,0.15)] z-10">
                    <div className="absolute -top-8 bg-[#D9A441] p-4 rounded-full border-4 border-[#111214] shadow-[0_0_20px_rgba(217,164,65,0.4)]">
                      <Trophy className="text-[#050505]" size={32} />
                    </div>
                    <div className="text-center mt-4 w-full">
                      <div className="text-[#D9A441] font-orbitron font-bold text-lg mb-2">WINNER</div>
                      <div className="text-xl font-bold text-white truncate w-full px-2">
                        {eventGroup.results.find(r => r.category === 'winner')?.participantName}
                      </div>
                      <div className="text-sm text-[#A9A9A5] mt-1">
                        {eventGroup.results.find(r => r.category === 'winner')?.college}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Special Mention */}
                {eventGroup.results.find(r => r.category === 'special-mention') && (
                  <div className="order-3 md:order-3 flex flex-col items-center p-4 bg-[#151618] rounded-t-lg border border-b-0 border-[#5C421D]/30 relative pt-8 h-[80%]">
                    <div className="absolute -top-5 bg-[#CD7F32] p-2 rounded-full border-4 border-[#151618]">
                      <Award className="text-[#050505]" size={20} />
                    </div>
                    <div className="text-center mt-4 w-full">
                      <div className="text-[#CD7F32] font-orbitron font-bold text-sm mb-1">SPECIAL MENTION</div>
                      <div className="text-base font-bold text-[#F5F2EA] truncate w-full px-2">
                        {eventGroup.results.find(r => r.category === 'special-mention')?.participantName}
                      </div>
                      <div className="text-xs text-[#A9A9A5] mt-1">
                        {eventGroup.results.find(r => r.category === 'special-mention')?.college}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          
          {Object.keys(groupedResults).length === 0 && (
            <div className="text-center text-[#A9A9A5] py-12">
              No results have been published yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
