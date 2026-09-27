import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, Clock } from 'lucide-react';
// import { globalSearch } from '../../utils/searchUtils'; 

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
      const saved = localStorage.getItem('JEVION_recent_searches');
      if (saved) setRecent(JSON.parse(saved));
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Handle '/' key is tricky here since it needs global listener, handled elsewhere usually
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim()) {
      // Mock search results since we don't have the full util implemented yet
      setResults([
        { title: `Event matching '${query}'`, type: 'Technical Event' },
        { title: `Guidelines for ${query}`, type: 'Document' }
      ]);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (term: string) => {
    if (term.trim() && !recent.includes(term.trim())) {
      const newRecent = [term.trim(), ...recent].slice(0, 5);
      setRecent(newRecent);
      localStorage.setItem('JEVION_recent_searches', JSON.stringify(newRecent));
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl flex flex-col p-4 sm:p-8"
        >
          <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-8 mt-4 sm:mt-12">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF6A00]" size={24} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                  placeholder="Search events, guidelines, schedules..."
                  className="w-full bg-[#111214] border border-[#5C421D]/50 text-[#F5F2EA] rounded-full py-4 pl-12 pr-4 focus:outline-none focus:border-[#FF6A00] font-orbitron transition-colors text-lg"
                />
              </div>
              <button onClick={onClose} className="p-4 bg-[#111214] rounded-full text-[#A9A9A5] hover:text-[#FF6A00] transition-colors border border-[#5C421D]/30">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              {!query && recent.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-[#A9A9A5] uppercase tracking-wider mb-4 flex items-center"><Clock size={16} className="mr-2" /> Recent Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {recent.map((r, i) => (
                      <button key={i} onClick={() => setQuery(r)} className="px-4 py-2 bg-[#151618] border border-[#5C421D]/30 rounded-full text-sm text-[#F5F2EA] hover:border-[#FF6A00] transition-colors">
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {query && results.length > 0 ? (
                <div className="space-y-2">
                   {results.map((result: any, i: number) => (
                      <button key={i} onClick={() => handleSearch(result.title)} className="w-full text-left p-4 bg-[#111214] hover:bg-[#151618] rounded-xl flex items-center justify-between group border border-transparent hover:border-[#5C421D]/50 transition-all">
                          <div>
                              <h4 className="font-orbitron text-[#F5F2EA] group-hover:text-[#FF8A1F] transition-colors">{result.title}</h4>
                              <p className="text-sm text-[#A9A9A5]">{result.type}</p>
                          </div>
                          <ChevronRight className="text-[#5C421D] group-hover:text-[#FF6A00] transition-colors transform group-hover:translate-x-1" />
                      </button>
                   ))}
                </div>
              ) : query && (
                <div className="text-center py-12">
                  <p className="text-[#A9A9A5] font-orbitron">No results found for "{query}"</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
