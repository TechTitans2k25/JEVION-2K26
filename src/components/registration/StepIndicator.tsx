import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, labels }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#111214] z-0"></div>
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#FF6A00] z-0 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
        
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-[#FF6A00] border-[#FF6A00] text-white' 
                    : isCurrent 
                      ? 'bg-[#151618] border-[#FF6A00] text-[#FF6A00]' 
                      : 'bg-[#151618] border-[#111214] text-[#A9A9A5]'
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <span className={`absolute top-12 text-xs text-center w-20 -ml-5 hidden md:block ${isCurrent ? 'text-[#FF6A00]' : 'text-[#A9A9A5]'}`}>
                {labels[index]}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center md:hidden">
        <span className="text-[#FF6A00] font-bold text-sm tracking-widest uppercase">
          Step {currentStep} of {totalSteps}: {labels[currentStep - 1]}
        </span>
      </div>
    </div>
  );
};

export default StepIndicator;

