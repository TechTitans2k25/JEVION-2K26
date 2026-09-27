import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left', className = '' }) => {
  const alignmentClass = align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left';

  return (
    <div className={`flex flex-col mb-10 ${alignmentClass} ${className}`}>
      <div className="flex items-center space-x-3 mb-2">
        {align !== 'right' && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#FF6A00]"
          />
        )}
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5F2EA] to-[#D9A441] uppercase tracking-wider">
          {title}
        </h2>
        {align === 'right' && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#FF6A00]"
          />
        )}
      </div>
      {subtitle && (
        <p className="text-[#A9A9A5] max-w-2xl font-inter text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
