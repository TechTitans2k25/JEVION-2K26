import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  icon,
  className = '',
  type = 'button'
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || window.innerWidth < 768) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.2;
    const y = (e.clientY - top - height / 2) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-orbitron font-semibold tracking-wider overflow-hidden transition-all duration-300 ease-out z-10 group rounded-md cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const variants = {
    primary: "bg-[#111214] text-[#F5F2EA] border border-[#FF6A00]/50 hover:border-[#FF6A00] hover:shadow-[0_0_15px_rgba(255,106,0,0.5)]",
    secondary: "bg-transparent text-[#D9A441] border border-[#D9A441]/50 hover:border-[#D9A441] hover:bg-[#D9A441]/10",
    ghost: "bg-transparent text-[#F5F2EA] hover:text-[#FF6A00] border border-transparent hover:bg-white/5"
  };

  const content = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="flex items-center space-x-2 relative z-20"
    >
      <span>{children}</span>
      {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
    </motion.div>
  );

  const lightSweep = variant === 'primary' && (
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
  );
  
  const underline = variant === 'ghost' && (
    <div className="absolute bottom-1 left-4 right-4 h-[1px] bg-[#FF6A00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  );

  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {lightSweep}
        {content}
        {underline}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      type={type}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {lightSweep}
      {content}
      {underline}
    </button>
  );
};

export default CTAButton;
