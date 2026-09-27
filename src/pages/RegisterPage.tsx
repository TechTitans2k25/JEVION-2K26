import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StepIndicator } from '../components/registration/StepIndicator';
import { ParticipantForm } from '../components/registration/ParticipantForm';
import { EventSelector } from '../components/registration/EventSelector';
import { PaymentInfo } from '../components/registration/PaymentInfo';
import { Share2, Eye } from 'lucide-react';
import { submitRegistration, type RegistrationData } from '../services/googleSheets';

const phoneRegex = /^[6-9]\d{9}$/;

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(phoneRegex, 'Invalid Indian mobile number'),
  college: z.string().min(2, 'College name is required'),
  department: z.string().min(2, 'Department is required'),
  year: z.string().min(1, 'Year is required'),
  events: z.array(z.string()).min(1, 'Select at least one event'),
});

export type RegistrationFormData = z.infer<typeof schema>;

const generateRegistrationId = () => {
  return `JEVION-${Math.floor(1000 + Math.random() * 9000)}`;
};

export const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [regId, setRegId] = useState('');
  const navigate = useNavigate();

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

  const nextStep = async () => {
    let valid = false;
    if (step === 1) {
      valid = await trigger(['name', 'email', 'phone', 'college', 'department', 'year']);
    } else if (step === 2) {
      valid = await trigger(['events']);
    } else {
      valid = true;
    }

    if (valid) {
      setStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: RegistrationFormData) => {
    // Generate ID on final submit to move to confirmation
    const newId = generateRegistrationId();
    
    const registrationData: RegistrationData = {
      registrationId: newId,
      name: data.name,
      college: data.college,
      department: data.department,
      year: data.year,
      email: data.email,
      phone: data.phone,
      selectedEvents: data.events,
      paymentStatus: 'PENDING',
      timestamp: new Date().toISOString()
    };
    
    await submitRegistration(registrationData);
    
    setRegId(newId);
    setStep(5);
  };

  const formData = watch();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EA] pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-8 bg-gradient-to-r from-[#FF6A00] to-[#D9A441] bg-clip-text text-transparent uppercase">
          Register for JEVION 2K26
        </h1>

        <div className="bg-[#0D0E10] border border-[#111214] rounded-2xl p-6 md:p-10 shadow-2xl">
          <StepIndicator 
            currentStep={step} 
            totalSteps={5} 
            labels={['Details', 'Events', 'Team', 'Payment', 'Done']} 
          />

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <ParticipantForm register={register} errors={errors} />
                )}

                {step === 2 && (
                  <EventSelector setValue={setValue} watch={watch} error={errors.events?.message} />
                )}

                {step === 3 && (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-bold font-orbitron text-[#F5F2EA] mb-4">TEAM DETAILS</h3>
                    <p className="text-[#A9A9A5] text-lg">
                      Team details will be collected at the event venue.
                    </p>
                  </div>
                )}

                {step === 4 && (
                  <PaymentInfo />
                )}

                {step === 5 && (
                  <div className="space-y-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-4">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-orbitron font-bold text-[#F5F2EA]">REGISTRATION SUCCESSFUL</h2>
                    <p className="text-green-400 font-medium mb-6">Registration submitted to Google Sheets successfully!</p>
                    
                    <div className="bg-[#111214] p-6 rounded-xl border border-[#151618] inline-block text-left w-full max-w-md mx-auto">
                      <p className="text-[#A9A9A5] text-sm uppercase">Registration ID</p>
                      <p className="text-2xl font-bold font-orbitron text-[#D9A441] mb-4">{regId}</p>
                      
                      <p className="text-[#A9A9A5] text-sm uppercase">Name</p>
                      <p className="text-lg font-bold text-[#F5F2EA] mb-4">{formData.name}</p>
                      
                      <p className="text-[#A9A9A5] text-sm uppercase">College</p>
                      <p className="text-lg font-bold text-[#F5F2EA] mb-4">{formData.college}</p>
                      
                      <p className="text-[#A9A9A5] text-sm uppercase">Payment Status</p>
                      <p className="text-lg font-bold text-[#FF8A1F]">PENDING</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                      <button 
                        onClick={() => navigate('/pass')}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-[#FF6A00] hover:bg-[#FF8A1F] text-white font-bold rounded-lg transition-colors"
                      >
                        <Eye className="w-5 h-5" /> VIEW DIGITAL PASS
                      </button>
                      <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#151618] hover:bg-[#111214] text-[#F5F2EA] border border-[#5C421D] font-bold rounded-lg transition-colors">
                        <Share2 className="w-5 h-5" /> SHARE
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {step < 5 && (
            <div className="flex gap-4 mt-12">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-4 px-6 rounded-lg font-bold text-[#F5F2EA] bg-[#151618] border border-[#111214] hover:border-[#5C421D] transition-colors"
                >
                  BACK
                </button>
              )}
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 py-4 px-6 rounded-lg font-bold text-white bg-[#FF6A00] hover:bg-[#FF8A1F] transition-colors"
                >
                  NEXT
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="flex-1 py-4 px-6 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF6A00] to-[#D9A441] hover:opacity-90 transition-opacity"
                >
                  SUBMIT REGISTRATION
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
