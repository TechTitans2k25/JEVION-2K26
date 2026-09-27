import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Share2, MessageCircle } from 'lucide-react';

export const RegisterSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const regId = location.state?.regId || 'JEVION-9999';

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#0D0E10] border border-[#111214] rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h1 className="text-3xl font-orbitron font-bold text-[#F5F2EA] mb-2">SUCCESS!</h1>
        <p className="text-[#A9A9A5] mb-8">Your registration for JEVION 2K26 is confirmed.</p>

        <div className="bg-[#111214] border border-[#5C421D] rounded-xl p-6 mb-8 text-left">
          <p className="text-[#A9A9A5] text-sm uppercase">Registration ID</p>
          <p className="text-2xl font-bold font-orbitron text-[#D9A441]">{regId}</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => navigate('/pass')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FF6A00] hover:bg-[#FF8A1F] text-white font-bold rounded-lg transition-colors"
          >
            <Eye className="w-5 h-5" /> VIEW DIGITAL PASS
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#151618] hover:bg-[#111214] text-[#F5F2EA] border border-[#5C421D] font-bold rounded-lg transition-colors">
              <Share2 className="w-5 h-5" /> SHARE
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#128C7E] hover:bg-[#075E54] text-white font-bold rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5" /> WHATSAPP
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterSuccessPage;
