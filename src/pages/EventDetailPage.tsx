import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Phone } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { ShareButton } from '../components/event/ShareButton';
// @ts-ignore
import { getEventBySlug } from '../data/events';
// @ts-ignore
import { Event } from '../types';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const foundEvent = getEventBySlug ? getEventBySlug(slug) : null;
    setEvent(foundEvent);
  }, [slug]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 100);
    });
  }, [scrollY]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#F5F2EA] flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-['Orbitron'] text-[#FF6A00] mb-4">404 - EVENT NOT FOUND</h1>
        <Link to="/events" className="text-[#A9A9A5] hover:text-[#F5F2EA] underline">
          Return to Events
        </Link>
      </div>
    );
  }

  const isTechnical = event.category === 'TECHNICAL';
  const accentColor = isTechnical ? '#FF6A00' : '#D9A441';

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pb-32">
      {/* Sticky Header Mobile */}
      <div className={`fixed top-0 left-0 right-0 bg-[#0D0E10]/90 backdrop-blur-md z-40 transition-transform duration-300 transform md:hidden ${isScrolled ? 'translate-y-0' : '-translate-y-full'} pt-4 pb-4 px-4 flex justify-between items-center border-b border-gray-800`}>
        <h2 className="font-['Orbitron'] font-bold text-sm truncate max-w-[200px]">{event.name}</h2>
        <a href="#register" className="bg-[#FF6A00] text-[#050505] px-4 py-2 rounded text-xs font-bold whitespace-nowrap">
          REGISTER
        </a>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-24">
        <Link to="/events" className="inline-flex items-center text-[#A9A9A5] hover:text-[#F5F2EA] mb-8 transition-colors text-sm font-bold tracking-wider">
          <ArrowLeft size={16} className="mr-2" /> BACK TO EVENTS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className={`px-3 py-1 rounded text-xs font-bold bg-[#151618] border ${isTechnical ? 'border-[#FF6A00]/50 text-[#FF6A00]' : 'border-[#D9A441]/50 text-[#D9A441]'}`}>
                  {event.category}
                </span>
                <span className="px-3 py-1 rounded text-xs font-bold bg-[#151618] border border-gray-800 text-[#F5F2EA]">
                  DAY {event.day}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-['Orbitron'] font-black text-[#F5F2EA] mb-2 uppercase">
                {event.name}
              </h1>
              <h2 className="text-xl text-[#A9A9A5] font-light mb-8">{event.shortTitle}</h2>
              
              <p className="text-lg text-[#F5F2EA]/90 leading-relaxed bg-[#0D0E10] p-6 rounded-xl border border-gray-800/50 shadow-inner">
                {event.description}
              </p>
            </motion.div>

            {/* Info Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              <div className="bg-[#151618] p-4 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center">
                <Calendar size={24} className="text-[#A9A9A5] mb-2" />
                <span className="text-xs text-[#A9A9A5] uppercase tracking-wider mb-1">Day</span>
                <span className="font-bold">DAY {event.day}</span>
              </div>
              <div className="bg-[#151618] p-4 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center">
                <MapPin size={24} className="text-[#A9A9A5] mb-2" />
                <span className="text-xs text-[#A9A9A5] uppercase tracking-wider mb-1">Venue</span>
                <span className="font-bold">{event.venue || 'TBA'}</span>
              </div>
              <div className="bg-[#151618] p-4 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center">
                <Users size={24} className="text-[#A9A9A5] mb-2" />
                <span className="text-xs text-[#A9A9A5] uppercase tracking-wider mb-1">Team Size</span>
                <span className="font-bold">{event.teamSize || 'Individual'}</span>
              </div>
              <div className="bg-[#151618] p-4 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center">
                <DollarSign size={24} className="text-[#A9A9A5] mb-2" />
                <span className="text-xs text-[#A9A9A5] uppercase tracking-wider mb-1">Fee</span>
                <span className="font-bold text-[#FF8A1F]">{event.fee || 'Free'}</span>
              </div>
            </motion.div>

            {/* Sections */}
            <div className="space-y-12">
              <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-['Orbitron'] mb-6 flex items-center">
                  <span className={`w-2 h-8 mr-4 bg-[${accentColor}]`} style={{ backgroundColor: accentColor }}></span>
                  RULES & GUIDELINES
                </h3>
                {event.rules && event.rules.length > 0 ? (
                  <ul className="list-disc list-inside space-y-3 text-[#A9A9A5] ml-6">
                    {event.rules.map((rule, idx) => (
                      <li key={idx} className="leading-relaxed">{rule}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#A9A9A5] italic bg-[#111214] p-4 rounded">Rules will be published soon.</p>
                )}
              </motion.section>

              {event.rounds && event.rounds.length > 0 && (
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <h3 className="text-2xl font-['Orbitron'] mb-6 flex items-center">
                    <span className={`w-2 h-8 mr-4 bg-[${accentColor}]`} style={{ backgroundColor: accentColor }}></span>
                    ROUNDS
                  </h3>
                  <div className="space-y-4">
                    {event.rounds.map((round, idx) => (
                      <div key={idx} className="bg-[#111214] p-5 rounded-lg border border-gray-800 border-l-4" style={{ borderLeftColor: accentColor }}>
                        <h4 className="font-bold mb-2">Round {idx + 1}</h4>
                        <p className="text-[#A9A9A5]">{round}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {event.judgingCriteria && event.judgingCriteria.length > 0 && (
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <h3 className="text-2xl font-['Orbitron'] mb-6 flex items-center">
                    <span className={`w-2 h-8 mr-4 bg-[${accentColor}]`} style={{ backgroundColor: accentColor }}></span>
                    JUDGING CRITERIA
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-[#A9A9A5] ml-6">
                    {event.judgingCriteria.map((crit, idx) => (
                      <li key={idx}>{crit}</li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#151618] border border-gray-800 rounded-xl p-6 sticky top-24">
              {event.coordinator && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[#A9A9A5] uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Event Coordinator</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0D0E10] flex items-center justify-center text-[#FF6A00]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-bold">{event.coordinator.name}</p>
                      <a href={`tel:${event.coordinator.phone}`} className="text-sm text-[#FF8A1F] hover:underline">
                        {event.coordinator.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-sm font-bold text-[#A9A9A5] uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Share Event</h4>
                <ShareButton event={event} />
              </div>

              <div className="flex flex-col items-center p-6 bg-[#050505] rounded-lg border border-gray-800">
                <p className="text-xs text-[#A9A9A5] mb-4 uppercase tracking-widest text-center">Scan to open on mobile</p>
                <div className="p-3 bg-white rounded-lg">
                  <QRCodeSVG value={window.location.href} size={120} level="L" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-40 flex justify-center">
        <a 
          href="#register" 
          className="bg-[#FF6A00] hover:bg-[#FF8A1F] text-[#050505] font-['Orbitron'] font-black text-lg py-4 px-12 rounded-lg shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all hover:scale-105 active:scale-95 w-full md:w-auto text-center"
        >
          REGISTER FOR THIS EVENT
        </a>
      </div>
    </div>
  );
};

export default EventDetailPage;

