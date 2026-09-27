import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: isDark ? 'rgba(255, 106, 0, 0.15)' : 'rgba(217, 164, 65, 0.2)',
        border: `1px solid ${isDark ? 'rgba(255, 106, 0, 0.3)' : 'rgba(217, 164, 65, 0.4)'}`,
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-[#D9A441]" />
        ) : (
          <Sun className="w-5 h-5 text-[#FF6A00]" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
