import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Zap, Calendar, UserPlus, MoreHorizontal } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Events', path: '/events', icon: <Zap size={20} /> },
    { name: 'Schedule', path: '/schedule', icon: <Calendar size={20} /> },
    { name: 'Register', path: '/register', icon: <UserPlus size={20} /> },
    { name: 'More', path: '/menu', icon: <MoreHorizontal size={20} /> },
  ];

  return (
    <div className="mobile-bottom-nav md:hidden fixed bottom-0 left-0 right-0 z-40 pb-[env(safe-area-inset-bottom)] bg-[#0D0E10]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_25px_rgba(0,0,0,0.5)]">
      <nav className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive ? 'text-[#FF6A00] font-bold' : 'text-[#A3A5AF] hover:text-[#F8F6F0]'
              }`
            }
          >
            {item.icon}
            <span className="text-[10px] font-medium tracking-wider uppercase font-orbitron">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileBottomNav;
