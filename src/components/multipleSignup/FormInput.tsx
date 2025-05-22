// components/FormInput.tsx
import React from 'react';
import type { LucideIcon } from 'lucide-react';


interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  icon?: LucideIcon;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  required = false
}) => {
  return (
    <div className="form-control">
      <label className="block text-gray-300 text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon size={18} className="text-gray-500" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full py-3 ${Icon ? 'pl-10' : 'pl-3'} pr-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};
