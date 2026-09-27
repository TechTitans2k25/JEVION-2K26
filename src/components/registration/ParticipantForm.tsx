import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { RegistrationFormData } from '../../pages/RegisterPage';

interface ParticipantFormProps {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
}

export const ParticipantForm: React.FC<ParticipantFormProps> = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A9A9A5]">Full Name *</label>
          <input
            {...register('name')}
            className={`w-full bg-[#111214] border ${errors.name ? 'border-red-500' : 'border-[#151618]'} rounded-lg p-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00] transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A9A9A5]">Email Address *</label>
          <input
            {...register('email')}
            type="email"
            className={`w-full bg-[#111214] border ${errors.email ? 'border-red-500' : 'border-[#151618]'} rounded-lg p-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00] transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A9A9A5]">Phone Number *</label>
          <input
            {...register('phone')}
            type="tel"
            className={`w-full bg-[#111214] border ${errors.phone ? 'border-red-500' : 'border-[#151618]'} rounded-lg p-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00] transition-colors`}
            placeholder="9876543210"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A9A9A5]">College Name *</label>
          <input
            {...register('college')}
            className={`w-full bg-[#111214] border ${errors.college ? 'border-red-500' : 'border-[#151618]'} rounded-lg p-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00] transition-colors`}
            placeholder="Engineering College"
          />
          {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A9A9A5]">Department *</label>
          <input
            {...register('department')}
            className={`w-full bg-[#111214] border ${errors.department ? 'border-red-500' : 'border-[#151618]'} rounded-lg p-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00] transition-colors`}
            placeholder="Computer Science"
          />
          {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#A9A9A5]">Year of Study *</label>
          <select
            {...register('year')}
            className={`w-full bg-[#111214] border ${errors.year ? 'border-red-500' : 'border-[#151618]'} rounded-lg p-4 text-[#F5F2EA] focus:outline-none focus:border-[#FF6A00] transition-colors appearance-none`}
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ParticipantForm;

