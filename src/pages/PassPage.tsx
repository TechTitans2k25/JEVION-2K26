import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, ChevronLeft, CheckCircle2, FileImage, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PassPage: React.FC = () => {
  const navigate = useNavigate();
  const [passData, setPassData] = useState<any>(null);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jevion-last-pass');
      if (stored) {
        setPassData(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading saved pass:', e);
    }
  }, []);

  const regId = passData?.registrationId || 'JEVION-2026';
  const name = passData?.name || 'Participant';
  const college = passData?.college || 'Dhanalakshmi Srinivasan University';
  const department = passData?.department || 'Information Technology';
  const isTeam = passData?.isTeam;
  const teamName = passData?.teamName;
  const events = passData?.events || ['Technical Events'];
  const transactionId = passData?.transactionId;
  const screenshot = passData?.paymentScreenshot;
  const passUrl = `https://techtitans2k25.github.io/JEVION-2K26/#/pass?id=${regId}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen text-[#F5F2EA] flex flex-col items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6A00]/15 via-[#D9A441]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <button 
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center gap-2 text-[#A9A9A5] hover:text-[#F5F2EA] transition-colors glass-panel px-4 py-2 rounded-xl text-xs font-orbitron"
      >
        <ChevronLeft className="w-4 h-4" /> Back
      </button>

      <div className="w-full max-w-sm relative mt-12 sm:mt-4">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/25 to-[#D9A441]/25 blur-2xl rounded-[2.5rem]"></div>
        
        {/* Pass Card */}
        <div className="relative glass-card border-2 border-[#D9A441]/40 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="p-6 border-b border-white/10 text-center relative overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#D9A441]" />
              <h1 className="text-3xl font-orbitron font-black tracking-widest text-[#F5F2EA]">JEVION</h1>
            </div>
            <h2 className="text-[#D9A441] font-orbitron font-bold tracking-[0.25em] text-xs">2K26 SYMPOSIUM PASS</h2>
            
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="bg-[#FF6A00] text-white text-[10px] font-orbitron font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {isTeam ? 'Team Leader' : 'Participant'}
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-orbitron font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 flex flex-col items-center">
            <div className="bg-white p-3.5 rounded-2xl mb-5 shadow-[0_0_25px_rgba(255,106,0,0.35)] border-2 border-[#D9A441]/30">
              <QRCodeSVG 
                value={passUrl} 
                size={160}
                level="H"
                includeMargin={false}
              />
            </div>
            
            <div className="w-full text-center space-y-3.5">
              <div>
                <p className="text-[#A9A9A5] text-[10px] uppercase font-orbitron tracking-widest mb-0.5">Registration ID</p>
                <p className="text-2xl font-orbitron font-black text-[#FFE2A3] tracking-wider">{regId}</p>
              </div>
              
              <div className="pt-2 border-t border-white/[0.08]">
                <p className="text-[#A9A9A5] text-[10px] uppercase font-orbitron tracking-widest mb-0.5">Participant Name</p>
                <p className="text-base font-bold text-[#F8F6F0]">{name}</p>
                {isTeam && teamName && (
                  <p className="text-xs text-[#E5B842] font-semibold mt-0.5">Team: {teamName}</p>
                )}
              </div>
              
              <div className="pt-2 border-t border-white/[0.08]">
                <p className="text-[#A9A9A5] text-[10px] uppercase font-orbitron tracking-widest mb-0.5">Institution</p>
                <p className="text-xs font-medium text-[#F8F6F0]">{college}</p>
                <p className="text-[11px] text-[#A3A5AF]">{department}</p>
              </div>

              {events && events.length > 0 && (
                <div className="pt-2 border-t border-white/[0.08]">
                  <p className="text-[#A9A9A5] text-[10px] uppercase font-orbitron tracking-widest mb-1">Registered Events</p>
                  <p className="text-xs text-[#FFE2A3] font-inter line-clamp-2">
                    {Array.isArray(events) ? events.join(', ') : events}
                  </p>
                </div>
              )}

              {/* Payment Proof Badge if screenshot attached */}
              {screenshot && (
                <div className="pt-2 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => setShowScreenshotModal(true)}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center justify-between text-xs font-orbitron cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileImage className="w-3.5 h-3.5" />
                      <span>Payment Receipt</span>
                    </span>
                    <span className="text-[10px] text-emerald-300 underline uppercase">View Proof</span>
                  </button>
                </div>
              )}

              {transactionId && (
                <div className="text-[10px] font-mono text-[#A3A5AF]">
                  UTR: {transactionId}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="glass-panel p-4 text-center border-t border-white/10 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
            <p className="text-[10px] text-[#A9A9A5] font-orbitron uppercase tracking-widest">
              Valid for Entry • Oct 14 & 15, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {showScreenshotModal && screenshot && (
        <div 
          onClick={() => setShowScreenshotModal(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 text-left"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-md w-full p-4 rounded-3xl border border-white/20 relative shadow-2xl space-y-3"
          >
            <div className="flex justify-between items-center">
              <span className="font-orbitron font-bold text-xs text-[#F8F6F0]">Payment Receipt</span>
              <button 
                onClick={() => setShowScreenshotModal(false)}
                className="p-1 text-[#A3A5AF] hover:text-white cursor-pointer font-bold text-sm"
              >
                ✕
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 max-h-[65vh] flex items-center justify-center">
              <img src={screenshot} alt="Payment Proof Full" className="w-full h-auto max-h-[65vh] object-contain rounded-lg" />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowScreenshotModal(false)}
                className="py-2 px-5 rounded-xl glass-btn-primary text-[#060608] font-orbitron text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={handlePrint}
        className="mt-8 flex items-center gap-2 px-8 py-3.5 glass-btn-primary text-[#060608] font-orbitron font-bold text-xs tracking-wider rounded-full shadow-lg hover:scale-105 transition-all cursor-pointer"
      >
        <Download className="w-4 h-4" /> Download / Print Pass
      </button>
    </div>
  );
};

export default PassPage;
