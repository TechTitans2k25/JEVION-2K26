import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { faq } from '../data/faq';
import { FAQItem } from '../types';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaq = faq?.filter((item: FAQItem) => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-[#FF6A00] mb-8 tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#A9A9A5]" />
            </div>
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#111214] border border-[#5C421D]/50 rounded-xl py-3 pl-10 pr-4 text-[#F5F2EA] placeholder-[#A9A9A5] focus:outline-none focus:border-[#FF6A00] transition-colors"
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaq.map((item: FAQItem) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#151618] border border-[#5C421D]/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#111214] transition-colors focus:outline-none"
                >
                  <h3 className="text-lg font-bold text-[#F5F2EA] pr-4">{item.question}</h3>
                  {expandedId === item.id ? (
                    <ChevronUp className="text-[#FF6A00] shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-[#A9A9A5] shrink-0" size={24} />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-[#5C421D]/20 mt-2">
                        <p className="text-[#A9A9A5] leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredFaq.length === 0 && (
            <div className="text-center text-[#A9A9A5] py-12">
              No questions found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
