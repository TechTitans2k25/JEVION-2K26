import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useIsMobile, useScrollDirection } from '../../hooks';
import ThemeToggle from '../../components/ui/ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Gallery', path: '/gallery' }
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

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === 'down' && scrolled && !isOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#5C421D]/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3">
                <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="JEVION 2K26" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                <span className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#D9A441] to-[#FFE2A3]">
                  JEVION
                </span>
                <span className="font-orbitron font-bold text-lg sm:text-xl md:text-2xl text-[#FF6A00]">
                  2K26
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative font-inter text-sm font-medium transition-colors hover:text-[#D9A441] ${
                        isActive ? 'text-[#D9A441]' : 'text-[#F5F2EA]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#D9A441] to-[#FF6A00]"
                            initial={false}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        )}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D9A441] transition-all duration-300 group-hover:w-full opacity-0 hover:opacity-100 hover:w-full"></span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            )}

            {/* CTA Button / Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {!isMobile && (
                <Link
                  to="/register"
                  className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F] rounded-full hover:shadow-[0_0_15px_rgba(255,106,0,0.5)] transition-all duration-300"
                >
                  Register Now
                </Link>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-[#F5F2EA] hover:text-[#D9A441] focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-20"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 h-full flex flex-col items-center justify-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-xl font-orbitron font-medium text-center ${
                      isActive ? 'text-[#FF6A00]' : 'text-[#F5F2EA]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <ThemeToggle />
              <Link
                to="/register"
                className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F] rounded-full shadow-[0_0_15px_rgba(255,106,0,0.4)]"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
