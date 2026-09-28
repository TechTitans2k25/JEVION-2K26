import React, { useState } from 'react';
import { CreditCard, Copy, Check, ExternalLink, ShieldCheck, Zap, Info } from 'lucide-react';

interface PaymentInfoProps {
  teamSize?: number;
  transactionId: string;
  setTransactionId: (val: string) => void;
}

export const PaymentInfo: React.FC<PaymentInfoProps> = ({
  teamSize = 1,
  transactionId,
  setTransactionId
}) => {
  const [copied, setCopied] = useState(false);
  const upiId = 'sankarank1977-1@okaxis';
  const payeeName = 'Sudalai S';
  const feePerPerson = 200;
  const totalAmount = teamSize * feePerPerson;

  // Standard UPI URI format
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${totalAmount}&cu=INR&tn=${encodeURIComponent('JEVION2K26-Registration')}`;
  
  // Google Pay intent URI
  const gpayUrl = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${totalAmount}&cu=INR&tn=${encodeURIComponent('JEVION2K26-Registration')}`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6" id="payment-screen">
      {/* Step Header */}
      <div className="text-center mb-1">
        <span className="text-[10px] sm:text-xs font-orbitron font-bold tracking-widest text-[#FF8A1F] uppercase px-3.5 py-1 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/30 inline-block mb-2">
          STEP 4 OF 5 • PAYMENT SCREEN
        </span>
        <h3 className="text-lg sm:text-2xl font-orbitron font-bold text-[#F8F6F0]">
          COMPLETE REGISTRATION PAYMENT
        </h3>
      </div>

      {/* Amount Summary Header */}
      <div className="glass-card rounded-2xl p-5 sm:p-6 text-center border border-[#FF6A00]/40 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8A1F] to-transparent" />
        
        <span className="text-[11px] font-orbitron font-semibold tracking-widest text-[#A3A5AF] uppercase block mb-1">
          TOTAL REGISTRATION FEE
        </span>
        
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-4xl sm:text-5xl font-orbitron font-black text-[#FFE2A3]"
                style={{ textShadow: '0 0 25px rgba(255, 106, 0, 0.4)' }}>
            ₹{totalAmount}
          </span>
          <span className="text-xs text-[#A3A5AF] font-inter">
            ({teamSize} {teamSize > 1 ? 'Members' : 'Participant'} × ₹200)
          </span>
        </div>
        
        <p className="text-xs text-[#E5B842] font-inter">
          Grants full entry to all registered technical and non-technical symposium events
        </p>
      </div>

      {/* Official UPI QR Code Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col items-center text-center">
        
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-[#FF8A1F]" />
          <h4 className="font-orbitron font-bold text-base sm:text-lg text-[#F8F6F0]">
            Scan & Pay via Any UPI App
          </h4>
        </div>

        {/* QR Code Container with Glowing Frame */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#E5B842] opacity-30 blur-md group-hover:opacity-60 transition-opacity" />
          <div className="relative p-3 bg-white rounded-2xl shadow-xl max-w-[220px] sm:max-w-[240px]">
            <img 
              src={`${import.meta.env.BASE_URL}payment-qr.jpg`} 
              alt="Google Pay UPI QR Code" 
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Payee Details */}
        <div className="space-y-1 mb-5">
          <p className="font-orbitron font-bold text-sm sm:text-base text-[#F8F6F0]">
            Payee: <span className="text-[#FFE2A3]">{payeeName}</span>
          </p>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-white/10 text-xs font-mono text-[#F8F6F0]">
            <span>{upiId}</span>
            <button
              type="button"
              onClick={handleCopyUpi}
              className="p-1 rounded hover:bg-white/10 text-[#FF8A1F] hover:text-[#FFE2A3] transition-colors cursor-pointer"
              title="Copy UPI ID"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
          {copied && <p className="text-[10px] text-green-400 font-inter">UPI ID copied to clipboard!</p>}
        </div>

        {/* Instant Mobile UPI Launch Buttons */}
        <div className="w-full max-w-md space-y-3 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Google Pay Direct Button */}
            <a
              href={gpayUrl}
              className="py-3 px-4 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Zap className="w-4 h-4" />
              <span>Pay via GPay</span>
            </a>

            {/* Any UPI App Button */}
            <a
              href={upiUrl}
              className="py-3 px-4 rounded-xl glass-btn-secondary font-orbitron font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-[#FF8A1F]" />
              <span>Any UPI App</span>
            </a>
          </div>

          <p className="text-[11px] text-[#A3A5AF] font-inter">
            Tap button on mobile to open Google Pay / PhonePe / Paytm with ₹{totalAmount} prefilled.
          </p>
        </div>

        {/* Transaction Reference / UTR Input */}
        <div className="w-full max-w-md pt-5 border-t border-white/[0.08] text-left">
          <label className="block text-xs font-orbitron font-bold text-[#F8F6F0] uppercase tracking-wider mb-2">
            Enter 12-Digit UPI Transaction ID / UTR Number *
          </label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="e.g. 426895123456"
            className="w-full px-4 py-3 rounded-xl glass-panel text-[#F8F6F0] border border-white/15 focus:border-[#FF6A00] focus:outline-none font-mono text-sm tracking-widest uppercase placeholder:font-inter placeholder:tracking-normal"
            required
          />
          <p className="text-[11px] text-[#A3A5AF] font-inter mt-1.5 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#E5B842] shrink-0" />
            <span>Find this 12-digit number in your UPI app payment receipt / SMS.</span>
          </p>
        </div>

      </div>

      {/* Safety Notice */}
      <div className="p-4 rounded-xl glass-panel border border-[#FF6A00]/20 flex items-center gap-3 text-xs text-[#A3A5AF] font-inter">
        <ShieldCheck className="w-5 h-5 text-[#FF8A1F] shrink-0" />
        <span>Your registration pass will be immediately issued with status <strong className="text-[#FFE2A3]">PENDING VERIFICATION</strong> and confirmed upon checking the UTR number at the welcome desk.</span>
      </div>
    </div>
  );
};

export default PaymentInfo;
