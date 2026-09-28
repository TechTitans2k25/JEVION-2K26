import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useIsMobile, useScrollDirection } from '../../hooks';
import ThemeToggle from '../../components/ui/ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Rules', path: '/rules' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const scrollDirection = useScrollDirection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isHome = location.pathname === '/';

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' && scrolled && !isOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'glass-panel border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)] py-3' 
            : 'bg-gradient-to-b from-[#060608]/90 via-[#060608]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#E5B842] opacity-0 group-hover:opacity-60 blur-sm transition-opacity" />
                  <img 
                    src={`${import.meta.env.BASE_URL}logo.jpg`} 
                    alt="JEVION 2K26" 
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#E5B842]/40" 
                  />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-orbitron font-extrabold text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFFDF7] via-[#FFD269] to-[#E5B842]">
                    JEVION
                  </span>
                  <span className="font-orbitron font-extrabold text-lg sm:text-xl md:text-2xl text-[#FF6A00]">
                    2K26
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2 glass-panel px-4 py-1.5 rounded-full border border-white/[0.08]">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-1 rounded-full font-orbitron text-xs font-semibold tracking-wider transition-all duration-300 ${
                        isActive 
                          ? 'text-[#060608] glass-btn-primary' 
                          : 'text-[#A3A5AF] hover:text-[#F8F6F0] hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}

            {/* CTA Button & Controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              {!isMobile && (
                <Link
                  to="/register"
                  className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs font-orbitron font-bold tracking-wider rounded-xl glass-btn-primary text-[#060608] uppercase"
                >
                  <span>REGISTER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}

              {/* Mobile Menu Toggle Button */}
              {isMobile && (
                <button
                  onClick={toggleMenu}
                  aria-label="Toggle Navigation Menu"
                  className="inline-flex items-center justify-center p-2 rounded-xl glass-panel text-[#F8F6F0] hover:text-[#FF8A1F] border border-white/10"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              )}
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen Glass Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(25px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060608]/95 flex flex-col justify-center items-center px-6 pt-20 pb-10"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 w-72 h-72 rounded-full bg-[#FF6A00]/15 blur-[120px] pointer-events-none" />

            <div className="flex flex-col items-center gap-5 w-full max-w-sm relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="w-full text-center"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 font-orbitron text-lg font-bold tracking-widest transition-colors ${
                        isActive ? 'text-[#FF8A1F]' : 'text-[#F8F6F0] hover:text-[#FFE2A3]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full pt-4 mt-2 border-t border-white/10 flex flex-col items-center gap-4"
              >
                <Link
                  to="/register"
                  className="w-full py-3.5 rounded-xl glass-btn-primary font-orbitron font-bold text-sm tracking-wider text-[#060608] text-center"
                >
                  REGISTER NOW (₹200)
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
