import React, { useState, useRef } from 'react';
import { CreditCard, Copy, Check, ExternalLink, ShieldCheck, Zap, Info, UploadCloud, CheckCircle2, RefreshCw, Trash2, Eye, FileImage } from 'lucide-react';

interface PaymentInfoProps {
  teamSize?: number;
  transactionId: string;
  setTransactionId: (val: string) => void;
  screenshot?: string | null;
  setScreenshot?: (val: string | null) => void;
}

export const PaymentInfo: React.FC<PaymentInfoProps> = ({
  teamSize = 1,
  transactionId,
  setTransactionId,
  screenshot,
  setScreenshot
}) => {
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<string>('');
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const processImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }
    
    setIsProcessing(true);
    setFileName(file.name);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Compress and resize image using canvas to ensure lightweight payload
        const maxDimension = 1200;
        let width = img.width;
        let height = img.height;
        
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
          const sizeInKb = Math.round((compressedDataUrl.length * 3) / 4 / 1024);
          setFileSize(`${sizeInKb} KB`);
          if (setScreenshot) {
            setScreenshot(compressedDataUrl);
          }
        }
        setIsProcessing(false);
      };
      img.onerror = () => {
        setIsProcessing(false);
        alert('Failed to load image file. Please try another screenshot.');
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };
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

        {/* Payment Screenshot Upload Section */}
        <div className="w-full max-w-md pt-5 border-t border-white/[0.08] text-left">
          <label className="block text-xs font-orbitron font-bold text-[#F8F6F0] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Upload Payment Screenshot Proof</span>
            <span className="text-[10px] text-[#E5B842] font-semibold tracking-normal normal-case">
              (Optional / Recommended)
            </span>
          </label>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/jpg, image/webp"
            className="hidden"
          />

          {!screenshot ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="border-2 border-dashed border-white/20 hover:border-[#FF6A00] rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 glass-panel group hover:bg-[#FF6A00]/[0.05]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF6A00]/15 text-[#FF8A1F] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-5 h-5" />
              </div>
              <p className="font-orbitron font-bold text-xs sm:text-sm text-[#F8F6F0] mb-1">
                {isProcessing ? 'Compressing & processing screenshot...' : 'Tap to Upload Payment Screenshot'}
              </p>
              <p className="text-[11px] text-[#A3A5AF] font-inter">
                Upload screenshot of GPay / PhonePe / Paytm payment success screen (JPG, PNG)
              </p>
            </div>
          ) : (
            <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-emerald-500/40 flex items-center justify-between gap-3 bg-emerald-500/[0.04]">
              <div className="flex items-center gap-3 overflow-hidden">
                <div 
                  onClick={() => setShowPreviewModal(true)}
                  className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-emerald-500/40 cursor-pointer group shadow"
                  title="Click to preview full screenshot"
                >
                  <img src={screenshot} alt="Payment Proof" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div className="truncate">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Screenshot Attached</span>
                  </div>
                  <p className="text-xs font-inter text-[#F8F6F0] truncate max-w-[170px] sm:max-w-[210px] mt-0.5">
                    {fileName || 'payment_proof.jpg'}
                  </p>
                  <p className="text-[10px] text-[#A3A5AF] font-inter">{fileSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowPreviewModal(true)}
                  className="p-2 rounded-xl glass-panel text-[#FFE2A3] hover:text-white transition-colors"
                  title="View full preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 rounded-xl glass-panel text-[#A3A5AF] hover:text-[#FFE2A3] transition-colors"
                  title="Change Screenshot"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (setScreenshot) setScreenshot(null);
                    setFileName('');
                    setFileSize('');
                  }}
                  className="p-2 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 hover:text-red-300 transition-colors"
                  title="Remove Screenshot"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Lightbox Modal */}
          {showPreviewModal && screenshot && (
            <div 
              onClick={() => setShowPreviewModal(false)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-md w-full p-4 rounded-3xl border border-white/20 relative shadow-2xl space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FileImage className="w-4 h-4 text-[#FF8A1F]" />
                    <span className="font-orbitron font-bold text-xs text-[#F8F6F0]">Payment Screenshot Preview</span>
                  </div>
                  <button 
                    onClick={() => setShowPreviewModal(false)}
                    className="p-1 rounded-lg text-[#A3A5AF] hover:text-white cursor-pointer font-bold text-sm"
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
                    onClick={() => setShowPreviewModal(false)}
                    className="py-2 px-5 rounded-xl glass-btn-primary text-[#060608] font-orbitron text-xs font-bold"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          )}
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
