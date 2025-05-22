import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StepHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="text-center mb-6">
      <Icon className="mx-auto h-8 w-10 text-blue-400 mb-3" />
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
    </div>
  );
};