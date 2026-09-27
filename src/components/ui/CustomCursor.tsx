import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId: number;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      if (ringRef.current) {
        currentX += (position.x - currentX) * 0.15;
        currentY += (position.y - currentY) * 0.15;
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        * { cursor: none !important; }
      `}</style>
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF6A00] rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border ${
          isPointer 
            ? 'w-12 h-12 bg-[#FF6A00]/20 border-[#FF6A00]' 
            : 'w-8 h-8 border-[#FF6A00]/50'
        }`}
      />
    </>
  );
};

export default CustomCursor;
