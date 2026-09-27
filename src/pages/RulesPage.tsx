import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { rules } from '../data/rules';
import { RuleSet } from '../types';

const RulesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'non-technical'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredRules = rules?.filter((rule: RuleSet) => 
    filter === 'all' ? true : rule.category === filter
  ) || [];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-8 tracking-wider">
            RULES & GUIDELINES
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 bg-[#111214] p-2 rounded-xl border border-[#5C421D]/30 mx-auto w-fit">
            {(['all', 'technical', 'non-technical'] as const).map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`py-2 px-4 rounded-lg font-orbitron text-sm font-bold uppercase transition-all ${
                  filter === f 
                    ? 'bg-[#FF6A00] text-[#050505]' 
                    : 'text-[#A9A9A5] hover:text-[#F5F2EA] hover:bg-[#151618]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredRules.map((rule: RuleSet) => (
              <motion.div
                key={rule.eventId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#151618] border border-[#5C421D]/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(rule.eventId)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#111214] transition-colors focus:outline-none"
                >
                  <div>
                    <h3 className="text-xl font-bold font-orbitron text-[#D9A441]">{rule.eventName}</h3>
                    <p className="text-sm text-[#A9A9A5] uppercase tracking-wider mt-1">{rule.category}</p>
                  </div>
                  {expandedId === rule.eventId ? (
                    <ChevronUp className="text-[#FF6A00]" size={24} />
                  ) : (
                    <ChevronDown className="text-[#A9A9A5]" size={24} />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedId === rule.eventId && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-[#5C421D]/20 mt-2 space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-bold text-[#FF6A00] uppercase mb-1">Eligibility</h4>
                            <p className="text-sm">{rule.eligibility || 'To be announced'}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#FF6A00] uppercase mb-1">Team Size</h4>
                            <p className="text-sm">{rule.teamSize || 'To be announced'}</p>
                          </div>
                        </div>

                        {rule.rules && rule.rules.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-[#FF6A00] uppercase mb-2">Rules</h4>
                            <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-[#A9A9A5]">
                              {rule.rules.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                        )}

                        {rule.rounds && rule.rounds.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-[#FF6A00] uppercase mb-2">Rounds</h4>
                            <div className="space-y-3">
                              {rule.rounds.map((round, i) => (
                                <div key={i} className="bg-[#0D0E10] p-3 rounded border border-[#5C421D]/10">
                                  <div className="font-bold text-[#F5F2EA] text-sm">{round.name} {round.duration && `(${round.duration})`}</div>
                                  <div className="text-sm text-[#A9A9A5] mt-1">{round.description}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {rule.judging && rule.judging.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-[#FF6A00] uppercase mb-2">Judging Criteria</h4>
                            <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-[#A9A9A5]">
                              {rule.judging.map((j, i) => <li key={i}>{j}</li>)}
                            </ul>
                          </div>
                        )}

                        {rule.submission && (
                          <div>
                            <h4 className="text-sm font-bold text-[#FF6A00] uppercase mb-1">Submission</h4>
                            <p className="text-sm text-[#A9A9A5]">{rule.submission}</p>
                          </div>
                        )}

                        {rule.restrictions && rule.restrictions.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold text-red-500 uppercase mb-2">Restrictions</h4>
                            <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-[#A9A9A5]">
                              {rule.restrictions.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                        )}
                        
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredRules.length === 0 && (
            <div className="text-center text-[#A9A9A5] py-12">
              No rules found for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
