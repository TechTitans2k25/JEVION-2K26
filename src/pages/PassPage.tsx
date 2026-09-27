import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PassPage: React.FC = () => {
  const navigate = useNavigate();
  const passUrl = "https://JEVION2k26.com/verify/JEVION-1234";

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] flex flex-col items-center justify-center p-4">
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center gap-2 text-[#A9A9A5] hover:text-[#F5F2EA] transition-colors"
      >
        <ChevronLeft className="w-5 h-5" /> Back
      </button>

      <div className="w-full max-w-sm relative mt-16 md:mt-0">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-[#D9A441]/20 blur-2xl rounded-[2rem]"></div>
        
        {/* Pass Card */}
        <div className="relative bg-[#0D0E10] border-2 border-[#5C421D] rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#111214] to-[#151618] p-6 border-b border-[#5C421D] text-center">
            <h1 className="text-3xl font-orbitron font-bold tracking-widest text-[#F5F2EA]">JEVION</h1>
            <h2 className="text-[#D9A441] font-orbitron font-bold tracking-[0.2em] text-sm mt-1">2K26</h2>
            <div className="mt-4 inline-block bg-[#FF6A00] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Participant
            </div>
          </div>

          {/* Body */}
          <div className="p-8 flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl mb-6 shadow-[0_0_15px_rgba(255,106,0,0.3)]">
              <QRCodeSVG 
                value={passUrl} 
                size={180}
                level="H"
                includeMargin={false}
              />
            </div>
            
            <div className="w-full text-center space-y-4">
              <div>
                <p className="text-[#A9A9A5] text-xs uppercase tracking-widest mb-1">ID Number</p>
                <p className="text-xl font-orbitron font-bold text-[#D9A441]">JEVION-1234</p>
              </div>
              
              <div>
                <p className="text-[#A9A9A5] text-xs uppercase tracking-widest mb-1">Name</p>
                <p className="text-lg font-bold">John Doe</p>
              </div>
              
              <div>
                <p className="text-[#A9A9A5] text-xs uppercase tracking-widest mb-1">College</p>
                <p className="text-sm">Engineering College</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#111214] p-4 text-center border-t border-[#151618]">
            <p className="text-[10px] text-[#A9A9A5] uppercase tracking-widest">Valid for entry on all days</p>
          </div>
        </div>
      </div>

      <button className="mt-8 flex items-center gap-2 px-6 py-3 bg-[#151618] border border-[#111214] hover:border-[#FF6A00] rounded-full text-[#F5F2EA] transition-all">
        <Download className="w-4 h-4" /> Save to Device
      </button>
    </div>
  );
};

export default PassPage;
