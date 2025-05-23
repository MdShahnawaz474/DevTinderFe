import React from 'react';
import { Camera } from 'lucide-react';
import {StepHeader} from './StepHeader';
import type { StepProps } from '../../types/Types';

export const Step3ProfilePhoto: React.FC<StepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-5">
      <StepHeader 
        icon={Camera}
        title="Profile Picture"
        subtitle="Add a profile picture (optional)"
      />

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Photo URL
        </label>
        <input
          type="url"
          value={formData.photoUrl}
          onChange={(e) => onChange('photoUrl', e.target.value)}
          className="w-full py-3 px-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://example.com/your-photo.jpg"
        />
        <p className="text-sm text-gray-400 mt-1">
          Enter a URL to your profile picture, or leave blank to skip
        </p>
      </div>

      {formData.photoUrl && (
        <div className="text-center">
          <img
            src={formData.photoUrl}
            alt="Profile preview"
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-600"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="bg-gray-700 rounded-lg p-5 border border-gray-600">
        <h4 className="font-semibold text-gray-100 mb-3">Review Your Information</h4>
        <div className="space-y-2 text-sm text-gray-300">
          <p><span className="font-medium text-gray-200">Name:</span> {formData.firstName} {formData.lastName}</p>
          <p><span className="font-medium text-gray-200">Username:</span> {formData.username}</p>
          <p><span className="font-medium text-gray-200">Email:</span> {formData.email}</p>
          <p><span className="font-medium text-gray-200">Gender:</span> {formData.gender}</p>
          <p><span className="font-medium text-gray-200">Age:</span> {formData.age}</p>
        </div>
      </div>
    </div>
  );
};