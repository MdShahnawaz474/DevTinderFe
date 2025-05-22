import React from 'react';
import { User, Mail, Lock } from 'lucide-react';
import {FormInput} from './FormInput';
import { StepHeader } from './StepHeader';
import type { StepProps } from '../../types/Types';

export const Step1BasicInfo: React.FC<StepProps> = ({ formData, errors, onChange }) => {
  return (
    <div className="space-y-5">
      <StepHeader
        icon={User}
        title="Basic Information"
        subtitle="Let's start with your details"
      />

      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(value) => onChange('firstName', value)}
          placeholder="John"
          error={errors.firstName}
          required
        />
        
        <FormInput
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(value) => onChange('lastName', value)}
          placeholder="Doe"
          error={errors.lastName}
          required
        />
      </div>

    

      <FormInput
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(value) => onChange('email', value)}
        placeholder="your@email.com"
        error={errors.email}
        icon={Mail}
        required
      />

      <FormInput
        label="Password"
        type="password"
        value={formData.password}
        onChange={(value) => onChange('password', value)}
        placeholder="••••••••"
        error={errors.password}
        icon={Lock}
        required
      />
    </div>
  );
};
