import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Search, Filter } from 'lucide-react';
// Assuming leaderboard data exists
import { leaderboard } from '../data/leaderboard';
import { LeaderboardEntry } from '../types';

const LeaderboardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = leaderboard?.filter((entry: LeaderboardEntry) => 
    entry.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.college.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const top3 = filteredData.slice(0, 3);
  const rest = filteredData.slice(3);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FF6A00]/20 border border-[#FF6A00]/50 text-[#FF6A00] p-3 rounded-lg mb-8 text-center text-sm font-bold tracking-wide">
          DEMO MODE: Showing mock data for testing purposes
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-4 tracking-wider flex items-center justify-center gap-4">
            <Trophy className="text-[#D9A441]" size={40} />
            LEADERBOARD
            <Trophy className="text-[#D9A441]" size={40} />
          </h1>
          <p className="text-[#A9A9A5]">Overall Championship Standings</p>
        </motion.div>

        {/* Podium for Top 3 */}
        {top3.length > 0 && (
          <div className="flex justify-center items-end h-64 mb-16 gap-2 md:gap-4 px-2">
            {/* Rank 2 */}
            {top3[1] && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-1/3 max-w-[200px] flex flex-col items-center"
              >
                <div className="text-center mb-2 px-1">
                  <div className="font-bold text-sm md:text-base text-[#F5F2EA] truncate w-full">{top3[1].teamName}</div>
                  <div className="text-xs text-[#A9A9A5] truncate w-full">{top3[1].college}</div>
                  <div className="font-orbitron font-bold text-[#FF6A00] mt-1">{top3[1].points} pts</div>
                </div>
                <div className="w-full bg-gradient-to-t from-[#151618] to-[#111214] border border-[#5C421D]/50 rounded-t-lg h-32 flex justify-center pt-4 relative">
                  <span className="text-2xl md:text-4xl font-orbitron font-black text-[#C0C0C0] opacity-50">2</span>
                </div>
              </motion.div>
            )}
            
            {/* Rank 1 */}
            {top3[0] && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-1/3 max-w-[220px] flex flex-col items-center z-10"
              >
                <div className="text-center mb-2 px-1">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[#D9A441]">
                    <Trophy size={32} />
                  </div>
                  <div className="font-bold text-base md:text-lg text-[#F5F2EA] truncate w-full">{top3[0].teamName}</div>
                  <div className="text-xs text-[#A9A9A5] truncate w-full">{top3[0].college}</div>
                  <div className="font-orbitron font-bold text-[#FF6A00] mt-1">{top3[0].points} pts</div>
                </div>
                <div className="w-full bg-gradient-to-t from-[#FF6A00]/20 to-[#111214] border border-[#FF6A00]/50 rounded-t-lg h-44 flex justify-center pt-4 relative shadow-[0_-5px_20px_rgba(255,106,0,0.2)]">
                  <span className="text-3xl md:text-5xl font-orbitron font-black text-[#D9A441]">1</span>
                </div>
              </motion.div>
            )}

            {/* Rank 3 */}
            {top3[2] && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-1/3 max-w-[200px] flex flex-col items-center"
              >
                <div className="text-center mb-2 px-1">
                  <div className="font-bold text-sm md:text-base text-[#F5F2EA] truncate w-full">{top3[2].teamName}</div>
                  <div className="text-xs text-[#A9A9A5] truncate w-full">{top3[2].college}</div>
                  <div className="font-orbitron font-bold text-[#FF6A00] mt-1">{top3[2].points} pts</div>
                </div>
                <div className="w-full bg-gradient-to-t from-[#151618] to-[#111214] border border-[#5C421D]/50 rounded-t-lg h-24 flex justify-center pt-4 relative">
                  <span className="text-2xl md:text-4xl font-orbitron font-black text-[#CD7F32] opacity-50">3</span>
                </div>
              </motion.div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A9A9A5] w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search team or college..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111214] border border-[#5C421D]/50 rounded-lg py-3 pl-10 pr-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00]"
            />
          </div>
        </div>

        {/* Table for rest */}
        <div className="bg-[#111214] border border-[#5C421D]/30 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#151618] border-b border-[#5C421D]/30 text-[#A9A9A5] text-sm uppercase tracking-wider font-orbitron">
                  <th className="p-4 w-16 text-center">Rank</th>
                  <th className="p-4">Team</th>
                  <th className="p-4 hidden sm:table-cell">College</th>
                  <th className="p-4 text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                {rest.map((entry, index) => (
                  <tr key={index} className="border-b border-[#5C421D]/10 hover:bg-[#151618]/50 transition-colors">
                    <td className="p-4 text-center font-orbitron font-bold text-[#A9A9A5]">{entry.rank}</td>
                    <td className="p-4">
                      <div className="font-bold text-[#F5F2EA]">{entry.teamName}</div>
                      <div className="text-xs text-[#A9A9A5] sm:hidden mt-1">{entry.college}</div>
                    </td>
                    <td className="p-4 hidden sm:table-cell text-[#A9A9A5]">{entry.college}</td>
                    <td className="p-4 text-right font-orbitron font-bold text-[#FF6A00]">{entry.points}</td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-[#A9A9A5]">No results found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
