import React from 'react';
import { Users, User, ShieldCheck, Plus, Trash2, ArrowRight } from 'lucide-react';

export interface TeamMember {
  name: string;
  phone: string;
  email: string;
  department: string;
}

interface TeamFormProps {
  isTeam: boolean;
  setIsTeam: (val: boolean) => void;
  teamName: string;
  setTeamName: (val: string) => void;
  teamMembers: TeamMember[];
  setTeamMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;
  leadName: string;
  onProceedToPayment?: () => void;
}

export const TeamForm: React.FC<TeamFormProps> = ({
  isTeam,
  setIsTeam,
  teamName,
  setTeamName,
  teamMembers,
  setTeamMembers,
  leadName
}) => {
  const handleAddMember = () => {
    if (teamMembers.length < 3) {
      setTeamMembers(prev => [
        ...prev,
        { name: '', phone: '', email: '', department: '' }
      ]);
    }
  };

  const handleRemoveMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    setTeamMembers(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const totalMembers = isTeam ? 1 + teamMembers.length : 1;

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-[#F8F6F0] mb-2">
          PARTICIPATION FORMAT
        </h3>
        <p className="text-xs sm:text-sm text-[#A3A5AF] font-inter">
          Choose whether you are registering individually or representing a squad (up to 4 members).
        </p>
      </div>

      {/* Mode Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => setIsTeam(false)}
          className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
            !isTeam
              ? 'glass-card border-[#FF6A00] bg-[#FF6A00]/[0.08] shadow-[0_0_25px_rgba(255,106,0,0.2)]'
              : 'glass-panel border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/20 flex items-center justify-center text-[#FF8A1F]">
              <User className="w-5 h-5" />
            </div>
            {!isTeam && (
              <span className="text-[10px] font-orbitron font-bold px-2 py-0.5 rounded-full bg-[#FF6A00] text-[#060608]">
                SELECTED
              </span>
            )}
          </div>
          <h4 className="font-orbitron font-bold text-base text-[#F8F6F0] mb-1">
            Solo Participant (1 Member)
          </h4>
          <p className="text-xs text-[#A3A5AF] font-inter">
            Individual pass. You can still form on-spot teams for multi-player events.
          </p>
          <div className="mt-3 text-xs font-orbitron text-[#FFE2A3]">Fee: ₹200</div>
        </button>

        <button
          type="button"
          onClick={() => {
            setIsTeam(true);
            if (teamMembers.length === 0) {
              setTeamMembers([{ name: '', phone: '', email: '', department: '' }]);
            }
          }}
          className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
            isTeam
              ? 'glass-card border-[#E5B842] bg-[#E5B842]/[0.08] shadow-[0_0_25px_rgba(229,184,66,0.2)]'
              : 'glass-panel border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5B842]/20 flex items-center justify-center text-[#FFE2A3]">
              <Users className="w-5 h-5" />
            </div>
            {isTeam && (
              <span className="text-[10px] font-orbitron font-bold px-2 py-0.5 rounded-full bg-[#E5B842] text-[#060608]">
                SELECTED
              </span>
            )}
          </div>
          <h4 className="font-orbitron font-bold text-base text-[#F8F6F0] mb-1">
            Team Registration (2 - 4 Members)
          </h4>
          <p className="text-xs text-[#A3A5AF] font-inter">
            Register your complete squad for Hackathon, IPL Auction, Treasure Hunt, etc.
          </p>
          <div className="mt-3 text-xs font-orbitron text-[#FFE2A3]">
            Fee: ₹{totalMembers * 200} (₹200 × {totalMembers} members)
          </div>
        </button>
      </div>

      {/* Team Details Inputs if isTeam is true */}
      {isTeam && (
        <div className="glass-card rounded-2xl p-5 sm:p-7 space-y-6 mt-6 border border-white/10">
          <div>
            <label className="block text-xs font-orbitron font-bold text-[#F8F6F0] uppercase tracking-wider mb-2">
              Team / Squad Name *
            </label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="e.g. CyberTitans, CodeNinjas"
              className="w-full px-4 py-3 rounded-xl glass-panel text-[#F8F6F0] border border-white/15 focus:border-[#FF6A00] focus:outline-none font-inter text-sm"
              required
            />
          </div>

          {/* Member 1 (Team Leader) Summary */}
          <div className="p-4 rounded-xl glass-panel border border-[#FF6A00]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A00]/20 flex items-center justify-center text-[#FF8A1F] text-xs font-orbitron font-bold">
                1
              </div>
              <div>
                <p className="font-orbitron font-bold text-xs sm:text-sm text-[#F8F6F0]">
                  {leadName || 'Team Leader'} (You)
                </p>
                <p className="text-[11px] text-[#A3A5AF] font-inter">Main Registrant & Primary Contact</p>
              </div>
            </div>
            <span className="text-[10px] font-orbitron font-semibold px-2 py-0.5 rounded-full bg-[#FF6A00]/20 text-[#FF8A1F]">
              LEAD
            </span>
          </div>

          {/* Additional Members */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-orbitron font-bold text-xs uppercase tracking-wider text-[#E5B842]">
                Additional Teammates ({teamMembers.length} of 3 added)
              </h4>
              {teamMembers.length < 3 && (
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:border-[#FF6A00]/50 text-xs font-orbitron text-[#FFE2A3] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#FF8A1F]" />
                  <span>Add Member</span>
                </button>
              )}
            </div>

            {teamMembers.map((member, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl glass-panel border border-white/10 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-orbitron font-bold text-[#FFE2A3]">
                      {idx + 2}
                    </span>
                    <span className="font-orbitron font-semibold text-xs text-[#F8F6F0]">
                      Teammate #{idx + 2}
                    </span>
                  </div>
                  {teamMembers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(idx)}
                      className="text-red-400 hover:text-red-300 p-1 rounded-md transition-colors"
                      title="Remove member"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-inter text-[#A3A5AF] mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => updateMember(idx, 'name', e.target.value)}
                      placeholder="e.g. Alex Kumar"
                      className="w-full px-3.5 py-2.5 rounded-lg glass-panel text-xs text-[#F8F6F0] border border-white/10 focus:border-[#FF6A00] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-inter text-[#A3A5AF] mb-1">Mobile / WhatsApp</label>
                    <input
                      type="tel"
                      value={member.phone}
                      onChange={(e) => updateMember(idx, 'phone', e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-lg glass-panel text-xs text-[#F8F6F0] border border-white/10 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-inter text-[#A3A5AF] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) => updateMember(idx, 'email', e.target.value)}
                      placeholder="e.g. member@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-lg glass-panel text-xs text-[#F8F6F0] border border-white/10 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-inter text-[#A3A5AF] mb-1">Department</label>
                    <input
                      type="text"
                      value={member.department}
                      onChange={(e) => updateMember(idx, 'department', e.target.value)}
                      placeholder="e.g. Information Technology"
                      className="w-full px-3.5 py-2.5 rounded-lg glass-panel text-xs text-[#F8F6F0] border border-white/10 focus:border-[#FF6A00] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center gap-2.5 text-xs text-[#FFE2A3] font-inter">
            <ShieldCheck className="w-4 h-4 text-[#E5B842] shrink-0" />
            <span>Squad pass permits all {totalMembers} members to participate across registered Day 1 & Day 2 events!</span>
          </div>

          {onProceedToPayment && (
            <button
              type="button"
              onClick={onProceedToPayment}
              className="w-full py-4 px-6 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-[1.01] transition-transform"
            >
              <span>PROCEED TO PAYMENT SCREEN (₹{totalMembers * 200})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {!isTeam && onProceedToPayment && (
        <button
          type="button"
          onClick={onProceedToPayment}
          className="w-full py-4 px-6 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl hover:scale-[1.01] transition-transform mt-6"
        >
          <span>PROCEED TO PAYMENT SCREEN (₹200)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default TeamForm;
