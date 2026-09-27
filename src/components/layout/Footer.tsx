import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#5C421D]/20 text-[#A9A9A5]">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <img src="/logo.jpg" alt="JEVION 2K26" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mb-3" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#F5F2EA]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              JEVION 2K26
            </h2>
            <p className="text-sm leading-relaxed">
              The premier national level technical symposium. Experience the universe of innovation, technology, and competition.
            </p>
            <div className="pt-2">
              <p className="text-xs text-[#5C421D] font-bold uppercase tracking-wider">Organized By</p>
              <p className="text-sm mt-1 text-[#F5F2EA]">Department of Information Technology</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-[#F5F2EA]" style={{ fontFamily: "'Orbitron', sans-serif" }}>Quick Links</h3>
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-[#FF6A00] transition-colors duration-300">About</Link></li>
              <li><Link to="/events" className="hover:text-[#FF6A00] transition-colors duration-300">Events</Link></li>
              <li><Link to="/schedule" className="hover:text-[#FF6A00] transition-colors duration-300">Schedule</Link></li>
              <li><Link to="/gallery" className="hover:text-[#FF6A00] transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/register" className="hover:text-[#FF6A00] transition-colors duration-300">Register</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF6A00] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-[#F5F2EA]" style={{ fontFamily: "'Orbitron', sans-serif" }}>Contact Us</h3>
            <div className="flex flex-col space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-[#D9A441] group-hover:text-[#FF6A00] transition-colors mt-0.5" />
                <a href="mailto:contact@JEVION2k26.com" className="hover:text-[#F5F2EA] transition-colors">contact@JEVION2k26.com</a>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-[#D9A441] group-hover:text-[#FF6A00] transition-colors mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-[#F5F2EA] transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#D9A441] group-hover:text-[#FF6A00] transition-colors mt-0.5 shrink-0" />
                <span className="hover:text-[#F5F2EA] transition-colors leading-relaxed">
                  Department of Information Technology<br />
                  University Engineering College<br />
                  Tech City, 600001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#5C421D]/20 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>© 2026 JEVION 2K26 — Department of Information Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
