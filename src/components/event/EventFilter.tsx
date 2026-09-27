import React from 'react';
import { Search } from 'lucide-react';

interface EventFilterProps {
  search: string;
  setSearch: (val: string) => void;
  category: 'ALL' | 'TECHNICAL' | 'NON-TECHNICAL';
  setCategory: (val: 'ALL' | 'TECHNICAL' | 'NON-TECHNICAL') => void;
  day: 'ALL' | 1 | 2;
  setDay: (val: 'ALL' | 1 | 2) => void;
}

export const EventFilter: React.FC<EventFilterProps> = ({ search, setSearch, category, setCategory, day, setDay }) => {
  return (
    <div className="flex flex-col gap-6 mb-8 bg-[#111214] p-4 md:p-6 rounded-2xl border border-gray-800">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A9A9A5]" size={20} />
        <input
          type="text"
          placeholder="Search events by name or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#050505] border border-gray-800 text-[#F5F2EA] rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#FF6A00] transition-colors"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {(['ALL', 'TECHNICAL', 'NON-TECHNICAL'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-colors ${
                  category === cat
                    ? 'bg-[#FF6A00] text-[#050505]'
                    : 'bg-[#151618] text-[#A9A9A5] hover:text-[#F5F2EA] border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {(['ALL', 1, 2] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-colors flex-1 md:flex-none text-center ${
                day === d
                  ? 'bg-[#D9A441] text-[#050505]'
                  : 'bg-[#151618] text-[#A9A9A5] hover:text-[#F5F2EA] border border-gray-800'
              }`}
            >
              {d === 'ALL' ? 'ALL DAYS' : `DAY ${d}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventFilter;

