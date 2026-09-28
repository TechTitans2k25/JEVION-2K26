import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Award, Phone, Clock, CheckCircle2, Share2, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { getEventBySlug } from '../data/events';
import { Event } from '../types';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      const found = getEventBySlug(slug);
      setEvent(found || null);
    }
  }, [slug]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 120);
    });
  }, [scrollY]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${event?.name} — JEVION 2K26`,
        text: `Check out ${event?.name} at JEVION 2K26 National Technical Symposium!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen text-[#F8F6F0] flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center">
        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border border-[#FF6A00]/40 mb-6">
          <ShieldAlert className="w-8 h-8 text-[#FF6A00]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-orbitron font-black text-[#F8F6F0] mb-3">EVENT NOT FOUND</h1>
        <p className="text-[#A3A5AF] font-inter mb-8 max-w-md">
          The requested symposium event slug does not match any current arenas.
        </p>
        <Link 
          to="/events" 
          className="px-8 py-3 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-bold text-xs uppercase tracking-wider"
        >
          Return to Event Universe
        </Link>
      </div>
    );
  }

  const isTechnical = event.category.toLowerCase() === 'technical';

  return (
    <div className="min-h-screen text-[#F8F6F0] pb-32 px-4 sm:px-6 md:px-8">
      {/* Floating Mini Header on Scroll */}
      <div className={`fixed top-0 left-0 right-0 glass-panel z-40 transition-all duration-300 transform md:hidden ${
        isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } py-3 px-4 flex justify-between items-center border-b border-white/10 shadow-lg`}>
        <div className="truncate max-w-[200px]">
          <h2 className="font-orbitron font-bold text-sm text-[#F8F6F0] truncate">{event.name}</h2>
          <span className="text-[10px] text-[#FF8A1F] font-orbitron">DAY {event.day}</span>
        </div>
        <Link 
          to="/register" 
          className="px-4 py-2 rounded-lg glass-btn-primary text-[#060608] text-xs font-orbitron font-bold tracking-wider"
        >
          REGISTER
        </Link>
      </div>

      <div className="max-w-6xl mx-auto pt-4">
        
        {/* Breadcrumb Back Link */}
        <Link 
          to="/events" 
          className="inline-flex items-center text-[#A3A5AF] hover:text-[#FFE2A3] mb-8 transition-colors text-xs sm:text-sm font-orbitron font-semibold tracking-wider group"
        >
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO EVENT UNIVERSE</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Main Event Content (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Hero Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8A1F] to-transparent" />
              
              <div className="flex flex-wrap gap-2.5 mb-5">
                <span className={`px-3 py-1 rounded-full text-xs font-orbitron font-bold tracking-wider uppercase ${
                  isTechnical 
                    ? 'bg-[#FF6A00]/15 text-[#FF8A1F] border border-[#FF6A00]/30' 
                    : 'bg-[#E5B842]/15 text-[#FFE2A3] border border-[#E5B842]/30'
                }`}>
                  {event.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-orbitron font-medium bg-white/[0.05] text-[#A3A5AF] border border-white/[0.08] tracking-wider">
                  DAY {event.day} — {event.date}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-[#F8F6F0] mb-3 tracking-tight">
                {event.name}
              </h1>
              
              <p className="text-base sm:text-lg font-orbitron text-[#E5B842] mb-6">
                {event.shortTitle}
              </p>

              <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/[0.08] leading-relaxed text-sm sm:text-base text-[#F8F6F0]/90 font-inter">
                {event.description}
              </div>
            </motion.div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="glass-card rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <Calendar className="w-5 h-5 text-[#FF8A1F] mb-1.5" />
                <span className="text-[10px] font-orbitron text-[#A3A5AF] uppercase tracking-wider">Date</span>
                <span className="font-orbitron font-bold text-xs sm:text-sm text-[#F8F6F0]">{event.date.split(',')[0]}</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <Clock className="w-5 h-5 text-[#E5B842] mb-1.5" />
                <span className="text-[10px] font-orbitron text-[#A3A5AF] uppercase tracking-wider">Timing</span>
                <span className="font-orbitron font-bold text-xs sm:text-sm text-[#F8F6F0] truncate max-w-full">{event.time || 'Day ' + event.day}</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <Users className="w-5 h-5 text-[#FF8A1F] mb-1.5" />
                <span className="text-[10px] font-orbitron text-[#A3A5AF] uppercase tracking-wider">Team Size</span>
                <span className="font-orbitron font-bold text-xs sm:text-sm text-[#FFE2A3]">{event.teamSize || '1 - 4 Members'}</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <Award className="w-5 h-5 text-[#E5B842] mb-1.5" />
                <span className="text-[10px] font-orbitron text-[#A3A5AF] uppercase tracking-wider">Registration</span>
                <span className="font-orbitron font-bold text-xs sm:text-sm text-[#FF8A1F]">₹200 Total</span>
              </div>
            </div>

            {/* Venue Box */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center border border-[#FF6A00]/30 shrink-0">
                <MapPin className="w-6 h-6 text-[#FF8A1F]" />
              </div>
              <div>
                <span className="text-[11px] font-orbitron text-[#A3A5AF] uppercase tracking-wider block">Official Venue</span>
                <span className="font-orbitron font-bold text-sm sm:text-base text-[#F8F6F0]">{event.venue}</span>
              </div>
            </div>

            {/* Rounds Section */}
            {event.rounds && event.rounds.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-[#F8F6F0] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E5B842]" />
                  <span>COMPETITION ROUNDS</span>
                </h3>
                <div className="space-y-3.5">
                  {event.rounds.map((round, idx) => (
                    <div key={idx} className="glass-card rounded-2xl p-5 relative overflow-hidden border-l-4 border-l-[#FF6A00]">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-orbitron font-bold text-sm sm:text-base text-[#FFE2A3]">
                          {round.name}
                        </h4>
                        {round.duration && (
                          <span className="text-[10px] font-orbitron px-2.5 py-0.5 rounded-full glass-pill text-[#FF8A1F] shrink-0">
                            {round.duration}
                          </span>
                        )}
                      </div>
                      <p className="font-inter text-xs sm:text-sm text-[#A3A5AF] leading-relaxed">
                        {round.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rules & Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-[#F8F6F0] flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[#FF8A1F]" />
                  <span>RULES & GUIDELINES</span>
                </h3>
                <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-3">
                  {event.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FF8A1F] shrink-0 mt-0.5" />
                      <span className="font-inter text-xs sm:text-sm text-[#F8F6F0]/90 leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Judging Criteria */}
            {event.judging && event.judging.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-[#F8F6F0] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#E5B842]" />
                  <span>JUDGING CRITERIA</span>
                </h3>
                <div className="glass-card rounded-2xl p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.judging.map((crit, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl glass-panel border border-white/[0.06] flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#E5B842] shrink-0" />
                      <span className="font-orbitron text-xs sm:text-sm font-semibold text-[#F8F6F0]">{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar (Right 1 col) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-6 sticky top-24">
              
              {/* Registration Callout */}
              <div className="text-center p-5 rounded-2xl glass-panel border border-[#FF6A00]/30">
                <span className="text-[11px] font-orbitron text-[#A3A5AF] uppercase tracking-wider block mb-1">Pass Fee</span>
                <div className="text-3xl font-orbitron font-black text-[#FFE2A3] mb-1">₹200</div>
                <p className="text-[11px] text-[#A3A5AF] font-inter mb-4">Grants full participation access across all symposium events</p>
                <Link
                  to="/register"
                  className="w-full py-3.5 px-4 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>REGISTER FOR EVENT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Event Coordinator */}
              {event.contact && (
                <div className="pt-2 border-t border-white/[0.08]">
                  <h4 className="text-xs font-orbitron font-bold text-[#E5B842] uppercase tracking-wider mb-3">
                    Event Coordinator
                  </h4>
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl glass-panel border border-white/[0.06]">
                    <div>
                      <p className="font-orbitron font-bold text-sm text-[#F8F6F0]">{event.contact.name}</p>
                      <p className="font-inter text-xs text-[#A3A5AF]">{event.contact.phone}</p>
                    </div>
                    <a
                      href={`tel:${event.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="p-2.5 rounded-xl glass-btn-primary text-[#060608] hover:scale-105 transition-transform"
                      aria-label="Call coordinator"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}

              {/* Share & Mobile QR */}
              <div className="pt-2 border-t border-white/[0.08] space-y-4">
                <button
                  onClick={handleShare}
                  className="w-full py-2.5 px-4 rounded-xl glass-panel hover:border-[#FF6A00]/40 font-orbitron font-semibold text-xs text-[#F8F6F0] inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#FF8A1F]" />
                  <span>{copied ? 'LINK COPIED!' : 'SHARE THIS ARENA'}</span>
                </button>

                <div className="p-4 rounded-2xl glass-panel text-center flex flex-col items-center">
                  <p className="text-[10px] font-orbitron text-[#A3A5AF] uppercase tracking-wider mb-3">Scan to view on mobile</p>
                  <div className="p-2.5 bg-white rounded-xl shadow-md">
                    <QRCodeSVG value={window.location.href} size={110} level="M" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Bottom Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-[#060608]/90 backdrop-blur-xl border-t border-white/10 z-40 flex justify-center md:hidden">
        <Link 
          to="/register" 
          className="w-full max-w-sm py-3 px-6 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-black text-sm tracking-wider text-center flex items-center justify-center gap-2"
        >
          <span>REGISTER FOR {event.name.toUpperCase()} (₹200)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default EventDetailPage;
