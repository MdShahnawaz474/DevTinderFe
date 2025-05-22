import React from 'react';
import { Calendar } from 'lucide-react';
import {FormSelect} from './FormSelect';
import {FormInput} from './FormInput';
import type { StepProps } from '../../types/SignupTypes';
import { StepHeader } from './StepHeader';

export const Step2PersonalDetails: React.FC<StepProps> = ({ formData, errors, onChange }) => {
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  return (
    <div className="space-y-5">
      <StepHeader 
        icon={Calendar}
        title="Personal Details"
        subtitle="Tell us a bit more about yourself"
      />

      <FormSelect
        label="Gender"
        value={formData.gender}
        onChange={(value) => onChange('gender', value)}
        options={genderOptions}
        placeholder="Select Gender"
        error={errors.gender}
      />

      <FormInput
        label="DOB"
        type="date"
        value={formData.age}
        onChange={(value) => onChange('age', value)}
        error={errors.age}
        required
      />
    </div>
  );
};