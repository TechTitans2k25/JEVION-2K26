import React from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { RegistrationFormData } from '../../pages/RegisterPage';
import { Check } from 'lucide-react';

interface EventSelectorProps {
  setValue: UseFormSetValue<RegistrationFormData>;
  watch: UseFormWatch<RegistrationFormData>;
  error?: string;
}

const jevionEvents = [
  { id: 'tech-talk', name: 'Tech Talk (Paper Presentation)', day: 'Day 1', category: 'Technical' },
  { id: 'erasex', name: 'EraseX (Debugging)', day: 'Day 1', category: 'Technical' },
  { id: 'titan-11', name: 'Titan 11 (IPL Auction)', day: 'Day 1', category: 'Non-Technical' },
  { id: 'insta-lens', name: 'Insta Lens (Photography)', day: 'Day 1', category: 'Non-Technical' },
  { id: 'think-link', name: 'Think & Link (Connection)', day: 'Day 1', category: 'Non-Technical' },
  { id: 'code-hack', name: 'Code Hack (Mini Hackathon)', day: 'Day 2', category: 'Technical' },
  { id: 'hunt-iq', name: 'Hunt IQ (Quiz)', day: 'Day 2', category: 'Technical' },
  { id: 'aurora-films', name: 'Aurora Films (Short Film)', day: 'Day 2', category: 'Non-Technical' },
  { id: 'nayakan', name: 'Nayakan (Guess the Movie)', day: 'Day 2', category: 'Non-Technical' },
  { id: 'secret-hunt', name: 'Secret Hunt (Treasure Hunt)', day: 'Day 2', category: 'Non-Technical' },
];

export const EventSelector: React.FC<EventSelectorProps> = ({ setValue, watch, error }) => {
  const selectedEvents = watch('events') || [];

  const toggleEvent = (eventId: string) => {
    if (selectedEvents.includes(eventId)) {
      setValue('events', selectedEvents.filter(id => id !== eventId), { shouldValidate: true });
    } else {
      setValue('events', [...selectedEvents, eventId], { shouldValidate: true });
    }
  };

  const days = Array.from(new Set(jevionEvents.map(e => e.day)));

  return (
    <div className="space-y-8">
      {error && <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">{error}</div>}
      
      {days.map(day => (
        <div key={day} className="space-y-4">
          <h3 className="text-xl font-bold font-orbitron text-[#D9A441]">{day}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jevionEvents.filter(e => e.day === day).map(event => {
              const isSelected = selectedEvents.includes(event.id);
              return (
                <div 
                  key={event.id}
                  onClick={() => toggleEvent(event.id)}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    isSelected 
                      ? 'bg-[#151618] border-[#FF6A00]' 
                      : 'bg-[#111214] border-[#151618] hover:border-[#5C421D]'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-[#F5F2EA]">{event.name}</h4>
                      <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-[#0D0E10] text-[#A9A9A5]">
                        {event.category}
                      </span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                      isSelected ? 'bg-[#FF6A00] border-[#FF6A00]' : 'border-[#A9A9A5]'
                    }`}>
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventSelector;

