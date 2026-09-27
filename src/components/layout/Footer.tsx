import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060608] border-t border-white/[0.08] text-[#A3A5AF] overflow-hidden z-20">
      {/* Ambient background bloom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[radial-gradient(circle,rgba(255,106,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          
          {/* Column 1: Emblem & About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={`${import.meta.env.BASE_URL}logo.jpg`} 
                alt="JEVION 2K26" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-[#E5B842]/40" 
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-orbitron font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FFFDF7] via-[#FFD269] to-[#E5B842]">
                  JEVION 2K26
                </h2>
                <p className="text-[10px] font-orbitron font-semibold text-[#FF8A1F] tracking-widest uppercase">
                  TECH TITANS SYMPOSIUM
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-inter leading-relaxed text-[#A3A5AF]">
              A National Level Technical Symposium uniting collegiate innovators, engineers, and visionaries for 2 intense days of competition.
            </p>

            <div className="pt-2 text-xs font-inter space-y-1">
              <p className="text-[11px] font-orbitron font-bold text-[#E5B842] uppercase tracking-wider">Organized By</p>
              <p className="text-[#F8F6F0] font-medium">Department of Information Technology</p>
              <p className="text-[#A3A5AF]">School of Engineering and Technology</p>
              <p className="text-[#FFE2A3]">Dhanalakshmi Srinivasan University, Trichy</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base sm:text-lg font-orbitron font-bold text-[#F8F6F0] tracking-wider">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-orbitron">
              <li><Link to="/" className="hover:text-[#FF8A1F] transition-colors py-1 block">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FF8A1F] transition-colors py-1 block">About</Link></li>
              <li><Link to="/events" className="hover:text-[#FF8A1F] transition-colors py-1 block">Events (10)</Link></li>
              <li><Link to="/schedule" className="hover:text-[#FF8A1F] transition-colors py-1 block">Schedule</Link></li>
              <li><Link to="/rules" className="hover:text-[#FF8A1F] transition-colors py-1 block">Rules</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FF8A1F] transition-colors py-1 block">Gallery</Link></li>
              <li><Link to="/register" className="text-[#FF8A1F] font-bold hover:text-[#FFE2A3] transition-colors py-1 block">Register (₹200)</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF8A1F] transition-colors py-1 block">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Venue Details from Poster */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-base sm:text-lg font-orbitron font-bold text-[#F8F6F0] tracking-wider">
              Contact & Venue
            </h3>
            <div className="flex flex-col space-y-3.5 text-xs sm:text-sm font-inter">
              <div className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-[#FF8A1F] mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <a href="tel:+919944481587" className="hover:text-[#FFE2A3] transition-colors block font-medium text-[#F8F6F0]">
                    +91 99444 81587 (Mrs. M. Sheeba)
                  </a>
                  <a href="tel:+919360729933" className="hover:text-[#FFE2A3] transition-colors block text-[#A3A5AF]">
                    +91 93607 29933 (Vishva S)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-[#E5B842] mt-0.5 shrink-0" />
                <span className="text-[#A3A5AF] leading-relaxed">
                  <strong className="text-[#F8F6F0] block">Lecture Theatre, 6th Floor, Academic Block</strong>
                  Dhanalakshmi Srinivasan University,<br />
                  Samayapuram, Tiruchirappalli — 621 112, Tamil Nadu
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] py-5 bg-[#030304]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-inter text-[#6B6D77]">
          <p>© 2026 JEVION 2K26 — Department of Information Technology, Dhanalakshmi Srinivasan University.</p>
          <p className="flex items-center gap-1.5 text-[#A3A5AF]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
            <span>Built by Tech Titans</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
