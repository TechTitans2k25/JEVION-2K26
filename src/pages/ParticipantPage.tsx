import React from 'react';
import { Calendar, Bell, Trophy, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ParticipantPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Demo Mode Banner */}
        <div className="bg-[#FF6A00]/10 border border-[#FF6A00]/50 rounded-lg p-4 text-center text-[#FF8A1F]">
          <p className="font-bold">DEMO MODE</p>
          <p className="text-sm text-[#A9A9A5]">This is a preview of the participant dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#0D0E10] border border-[#111214] rounded-2xl p-6">
              <h2 className="text-2xl font-orbitron font-bold mb-6 text-[#D9A441]">YOUR REGISTRATION</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-[#A9A9A5] uppercase">Status</p>
                  <p className="text-lg font-bold text-green-500">CONFIRMED</p>
                </div>
                <div>
                  <p className="text-sm text-[#A9A9A5] uppercase">Payment</p>
                  <p className="text-lg font-bold text-[#FF8A1F]">PENDING</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#A9A9A5] uppercase mb-2">Selected Events</p>
                <div className="space-y-3">
                  <div className="bg-[#111214] p-3 rounded-lg border border-[#151618] flex justify-between items-center">
                    <span className="font-bold">Hackathon</span>
                    <span className="text-xs bg-[#050505] px-2 py-1 rounded text-[#D9A441]">Day 1</span>
                  </div>
                  <div className="bg-[#111214] p-3 rounded-lg border border-[#151618] flex justify-between items-center">
                    <span className="font-bold">Project Expo</span>
                    <span className="text-xs bg-[#050505] px-2 py-1 rounded text-[#D9A441]">Day 2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D0E10] border border-[#111214] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-[#FF6A00]" />
                <h2 className="text-xl font-orbitron font-bold">YOUR SCHEDULE</h2>
              </div>
              <p className="text-[#A9A9A5] italic">Schedule will be generated closer to the event date.</p>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <div className="bg-[#0D0E10] border border-[#5C421D] rounded-2xl p-6 text-center cursor-pointer hover:bg-[#111214] transition-colors" onClick={() => navigate('/pass')}>
              <QrCode className="w-12 h-12 text-[#D9A441] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">DIGITAL PASS</h3>
              <p className="text-sm text-[#A9A9A5]">Tap to view your QR pass for entry</p>
            </div>

            <div className="bg-[#0D0E10] border border-[#111214] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bell className="text-[#FF6A00]" />
                <h3 className="font-bold">ANNOUNCEMENTS</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-[#FF6A00] pl-3">
                  <p className="text-sm font-bold">Welcome to JEVION!</p>
                  <p className="text-xs text-[#A9A9A5] mt-1">Join our WhatsApp group for updates.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0D0E10] border border-[#111214] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-[#D9A441]" />
                <h3 className="font-bold">RESULTS</h3>
              </div>
              <p className="text-sm text-[#A9A9A5]">Results will be published here after the events.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantPage;
