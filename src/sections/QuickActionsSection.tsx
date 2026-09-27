import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Compass, UserPlus, Phone } from 'lucide-react';

const QuickActionsSection: React.FC = () => {
  const actions = [
    { label: 'Explore Events', icon: <Compass className="w-6 h-6" />, link: '/events' },
    { label: 'Schedule', icon: <Calendar className="w-6 h-6" />, link: '/schedule' },
    { label: 'Register', icon: <UserPlus className="w-6 h-6" />, link: '/register' },
    { label: 'Contact', icon: <Phone className="w-6 h-6" />, link: '/contact' },
  ];

  return (
    <div className="w-full px-4 py-8 md:hidden bg-[#0D0E10] border-y border-[#151618]">
      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        {actions.map((action, idx) => (
          <Link
            key={idx}
            to={action.link}
            className="flex flex-col items-center justify-center p-6 bg-[#151618] rounded-lg border border-[#111214] hover:border-[#FF6A00]/50 transition-colors shadow-[0_0_10px_rgba(255,106,0,0.05)] hover:shadow-[0_0_15px_rgba(255,106,0,0.2)]"
          >
            <div className="text-[#FF6A00] mb-3">
              {action.icon}
            </div>
            <span className="font-orbitron text-xs text-[#F5F2EA] tracking-wide text-center uppercase">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsSection;
