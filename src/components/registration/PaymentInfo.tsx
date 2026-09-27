import React from 'react';
import { CreditCard, Info } from 'lucide-react';

export const PaymentInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#111214] border border-[#5C421D] rounded-xl p-6 text-center">
        <h3 className="text-2xl font-orbitron font-bold text-[#F5F2EA] mb-2">REGISTRATION FEE</h3>
        <div className="text-4xl font-bold text-[#FF8A1F] mb-2">₹200</div>
        <p className="text-[#A9A9A5] uppercase tracking-widest text-sm">Per Participant</p>
      </div>

      <div className="bg-[#151618] rounded-xl p-6 border border-[#111214]">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="text-[#D9A441]" />
          <h4 className="font-bold text-[#F5F2EA]">Payment Instructions</h4>
        </div>
        <p className="text-[#A9A9A5] mb-4">
          Please pay the registration fee at the registration desk on the day of the event, or use the UPI QR code provided at the venue.
        </p>
        
        <div className="flex items-start gap-3 p-4 bg-[#050505] rounded-lg">
          <Info className="text-[#FF6A00] shrink-0 mt-0.5 w-5 h-5" />
          <p className="text-sm text-[#F5F2EA]">
            Payment verification will be confirmed by the organizers at the venue. Your current payment status is <span className="font-bold text-[#FF8A1F]">PENDING</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;

