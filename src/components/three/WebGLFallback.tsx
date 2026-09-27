import React from 'react';

export const WebGLFallback: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 w-full h-full bg-[#050505] overflow-hidden flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at center, #111214 0%, #050505 100%)'
      }}
    >
      {/* Abstract glow */}
      <div 
        className="absolute w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #FF6A00 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite alternate'
        }}
      />
      
      {/* Gold accents */}
      <div 
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[80px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #D9A441 0%, transparent 70%)',
          transform: 'translate(-20%, 20%)'
        }}
      />

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-32 h-32 rounded-full border border-[#5C421D] flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 rounded-full border border-[#FF6A00] opacity-50 animate-ping" />
          <div className="w-24 h-24 rounded-full bg-[#111214] border border-[#FF8A1F] flex items-center justify-center shadow-[0_0_30px_rgba(255,106,0,0.3)]">
            <span className="text-[#FF8A1F] font-orbitron text-xl font-bold">JEVION</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.15; }
          100% { transform: scale(1.05); opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default WebGLFallback;

