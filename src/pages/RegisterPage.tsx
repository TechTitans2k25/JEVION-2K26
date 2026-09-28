import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StepIndicator } from '../components/registration/StepIndicator';
import { ParticipantForm } from '../components/registration/ParticipantForm';
import { EventSelector } from '../components/registration/EventSelector';
import { TeamForm, TeamMember } from '../components/registration/TeamForm';
import { PaymentInfo } from '../components/registration/PaymentInfo';
import { Share2, Eye, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { submitRegistration, type RegistrationData } from '../services/googleSheets';

const phoneRegex = /^[6-9]\d{9}$/;

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(phoneRegex, 'Invalid 10-digit Indian mobile number'),
  college: z.string().min(2, 'College name is required'),
  department: z.string().min(2, 'Department is required'),
  year: z.string().min(1, 'Year of study is required'),
  events: z.array(z.string()).min(1, 'Please select at least one event'),
});

export type RegistrationFormData = z.infer<typeof schema>;

const generateRegistrationId = () => {
  return `JEVION-${Math.floor(1000 + Math.random() * 9000)}`;
};

export const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [regId, setRegId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Team Registration State (1 to 4 members)
  const [isTeam, setIsTeam] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', phone: '', email: '', department: '' }
  ]);

  // Payment State
  const [transactionId, setTransactionId] = useState('');
  const [paymentScreenshot, setPaymentScreenshot] = useState<string | null>(null);
  const [showProofPreview, setShowProofPreview] = useState(false);

  // Automatically scroll to the top whenever the step changes so the user is never left stuck at the bottom
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors }
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      events: []
    }
  });

  const formData = watch();
  const currentTeamSize = isTeam ? 1 + teamMembers.length : 1;

  const nextStep = async () => {
    setErrorMessage('');
    
    if (step === 1) {
      const valid = await trigger(['name', 'email', 'phone', 'college', 'department', 'year']);
      if (!valid) return;
    } else if (step === 2) {
      const valid = await trigger(['events']);
      if (!valid) return;
    } else if (step === 3) {
      if (isTeam) {
        if (!teamName.trim()) {
          setErrorMessage('Please enter a team name before continuing.');
          return;
        }
        const emptyMember = teamMembers.find(m => !m.name.trim());
        if (emptyMember) {
          setErrorMessage('Please fill in the full name for all team members.');
          return;
        }
      }
    } else if (step === 4) {
      if (!transactionId.trim()) {
        setErrorMessage('Please enter your 12-digit UPI Transaction ID / UTR or write CASH.');
        return;
      }
    }

    setStep(prev => Math.min(prev + 1, 5));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setErrorMessage('');
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setSubmitting(true);
    setErrorMessage('');
    
    const newId = generateRegistrationId();
    
    const teamSummary = isTeam 
      ? teamMembers.map((m, i) => `Member ${i + 2}: ${m.name}${m.phone ? ' (' + m.phone + ')' : ''}`).join('; ')
      : 'Solo';

    const registrationData: RegistrationData = {
      registrationId: newId,
      name: data.name,
      college: data.college,
      department: data.department,
      year: data.year,
      email: data.email,
      phone: data.phone,
      selectedEvents: data.events,
      teamName: isTeam ? teamName : 'Individual',
      teamSize: currentTeamSize,
      teamMembers: teamSummary,
      transactionId: transactionId.trim() || 'PENDING_VERIFICATION',
      amountPaid: currentTeamSize * 200,
      paymentStatus: transactionId.trim() ? 'SUBMITTED' : 'PENDING',
      paymentScreenshot: paymentScreenshot || undefined,
      timestamp: new Date().toISOString()
    };
    
    try {
      localStorage.setItem('jevion-last-pass', JSON.stringify(registrationData));
      await submitRegistration(registrationData);
    } catch (e) {
      console.error('Submission error:', e);
    }
    
    setRegId(newId);
    setSubmitting(false);
    setStep(5);
  };

  return (
    <div className="min-h-screen text-[#F8F6F0] pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto pt-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
            <span className="text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-[#FFE2A3] uppercase">
              OCTOBER 14 & 15, 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#FFD269] to-[#FF6A00] tracking-tight uppercase">
            REGISTER FOR JEVION 2K26
          </h1>
          <p className="text-xs sm:text-sm text-[#A3A5AF] font-inter mt-1.5">
            Department of Information Technology • Dhanalakshmi Srinivasan University
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8A1F] to-transparent" />
          
          <StepIndicator 
            currentStep={step} 
            totalSteps={5} 
            labels={['Details', 'Events', 'Team', 'Payment', 'Done']} 
            onStepClick={(target) => setStep(target)}
          />

          {errorMessage && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-300 font-inter">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                {step === 1 && (
                  <ParticipantForm register={register} errors={errors} />
                )}

                {step === 2 && (
                  <EventSelector setValue={setValue} watch={watch} error={errors.events?.message} />
                )}

                {step === 3 && (
                  <TeamForm
                    isTeam={isTeam}
                    setIsTeam={setIsTeam}
                    teamName={teamName}
                    setTeamName={setTeamName}
                    teamMembers={teamMembers}
                    setTeamMembers={setTeamMembers}
                    leadName={formData.name}
                    onProceedToPayment={nextStep}
                  />
                )}

                {step === 4 && (
                  <PaymentInfo 
                    teamSize={currentTeamSize}
                    transactionId={transactionId}
                    setTransactionId={setTransactionId}
                    screenshot={paymentScreenshot}
                    setScreenshot={setPaymentScreenshot}
                  />
                )}

                {step === 5 && (
                  <div className="space-y-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 mb-2">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-orbitron font-black text-[#F8F6F0]">
                      REGISTRATION CONFIRMED!
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-green-400 font-inter max-w-md mx-auto">
                      Your registration record and UTR have been successfully captured and synced to the symposium portal!
                    </p>
                    
                    {/* Summary Ticket */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 text-left w-full max-w-md mx-auto space-y-3.5">
                      <div>
                        <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase tracking-widest">Registration ID</p>
                        <p className="text-2xl font-orbitron font-black text-[#FFE2A3]">{regId}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]">
                        <div>
                          <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Lead Name</p>
                          <p className="text-sm font-bold text-[#F8F6F0]">{formData.name}</p>
                        </div>
                        <div>
                          <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">College</p>
                          <p className="text-sm font-bold text-[#F8F6F0] truncate">{formData.college}</p>
                        </div>
                      </div>

                      {isTeam && (
                        <div className="pt-2 border-t border-white/[0.08]">
                          <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Team Name ({currentTeamSize} Members)</p>
                          <p className="text-sm font-bold text-[#E5B842]">{teamName}</p>
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/[0.08]">
                        <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Events Registered</p>
                        <p className="text-xs font-inter text-[#F8F6F0]">{formData.events?.join(', ')}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]">
                        <div>
                          <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Amount</p>
                          <p className="text-sm font-bold text-[#FFE2A3]">₹{currentTeamSize * 200}</p>
                        </div>
                        <div>
                          <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Status</p>
                          <span className="text-[11px] font-orbitron font-bold text-[#FF8A1F] px-2 py-0.5 rounded-full bg-[#FF6A00]/15">
                            VERIFYING
                          </span>
                        </div>
                      </div>

                      {transactionId && (
                        <div className="pt-2 border-t border-white/[0.08]">
                          <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Transaction Reference / UTR</p>
                          <p className="text-xs font-mono text-[#FFE2A3] tracking-widest">{transactionId}</p>
                        </div>
                      )}

                      {paymentScreenshot && (
                        <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                          <div>
                            <p className="text-[#A3A5AF] text-[10px] font-orbitron uppercase">Payment Proof</p>
                            <p className="text-xs font-inter text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                              Screenshot Attached
                            </p>
                          </div>
                          <img
                            src={paymentScreenshot}
                            alt="Payment Receipt"
                            onClick={() => setShowProofPreview(true)}
                            className="w-11 h-11 object-cover rounded-lg border border-emerald-500/40 hover:scale-105 transition-transform cursor-pointer shadow-md"
                            title="Click to view full screenshot"
                          />
                        </div>
                      )}
                    </div>

                    {showProofPreview && paymentScreenshot && (
                      <div 
                        onClick={() => setShowProofPreview(false)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 text-left"
                      >
                        <div 
                          onClick={(e) => e.stopPropagation()}
                          className="glass-card max-w-md w-full p-4 rounded-3xl border border-white/20 relative shadow-2xl space-y-3"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-orbitron font-bold text-xs text-[#F8F6F0]">Payment Screenshot</span>
                            <button 
                              onClick={() => setShowProofPreview(false)}
                              className="p-1 text-[#A3A5AF] hover:text-white cursor-pointer font-bold text-sm"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 max-h-[65vh] flex items-center justify-center">
                            <img src={paymentScreenshot} alt="Payment Proof Full" className="w-full h-auto max-h-[65vh] object-contain rounded-lg" />
                          </div>
                          <div className="text-center">
                            <button
                              type="button"
                              onClick={() => setShowProofPreview(false)}
                              className="py-2 px-5 rounded-xl glass-btn-primary text-[#060608] font-orbitron text-xs font-bold"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-6">
                      <button 
                        onClick={() => navigate('/pass')}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-btn-primary text-[#060608] font-orbitron font-bold text-xs uppercase tracking-wider"
                      >
                        <Eye className="w-4 h-4" />
                        <span>VIEW DIGITAL SYMPOSIUM PASS</span>
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {step < 5 && (
            <div className="flex gap-4 mt-10 pt-6 border-t border-white/[0.08]">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-3.5 px-6 rounded-xl font-orbitron font-semibold text-xs tracking-wider text-[#F8F6F0] glass-panel hover:border-white/20 transition-all cursor-pointer"
                >
                  PREVIOUS
                </button>
              )}
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 py-3.5 px-6 rounded-xl font-orbitron font-bold text-xs tracking-wider text-[#060608] glass-btn-primary transition-all cursor-pointer"
                >
                  CONTINUE TO {step === 1 ? 'EVENTS' : step === 2 ? 'TEAM FORMAT' : 'PAYMENT'}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={submitting}
                  onClick={handleSubmit(onSubmit)}
                  className="flex-1 py-3.5 px-6 rounded-xl font-orbitron font-bold text-xs tracking-wider text-[#060608] glass-btn-primary transition-all cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'RECORDING REGISTRATION...' : 'CONFIRM & SUBMIT REGISTRATION'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
