import React from 'react';
import { Share2, Copy, MessageCircle } from 'lucide-react';
// @ts-ignore
import { Event } from '../../types';

interface ShareButtonProps {
  event: Event;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ event }) => {
  const url = window.location.href;
  const title = `${event.name} at JEVION 2K26`;
  const text = `Check out ${event.name} (${event.shortTitle}) at JEVION 2K26 Symposium!`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col gap-3">
      <button 
        onClick={handleNativeShare}
        className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF6A00]/10 hover:bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30 rounded-lg transition-colors font-bold text-sm"
      >
        <Share2 size={16} /> SHARE EVENT
      </button>
      
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={handleWhatsAppShare}
          className="flex items-center justify-center gap-2 py-2 bg-[#151618] hover:bg-[#111214] border border-[#25D366]/50 text-[#25D366] rounded-lg transition-colors text-xs font-bold"
        >
          <MessageCircle size={14} /> WHATSAPP
        </button>
        <button 
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-2 py-2 bg-[#151618] hover:bg-[#111214] border border-gray-700 text-[#A9A9A5] hover:text-[#F5F2EA] rounded-lg transition-colors text-xs font-bold"
        >
          <Copy size={14} /> COPY LINK
        </button>
      </div>
    </div>
  );
};

export default ShareButton;

