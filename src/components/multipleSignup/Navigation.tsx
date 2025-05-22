import React from 'react';
import { ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isLoading: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onSignup: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  isLoading,
  onNext,
  onPrevious,
  onSignup
}) => {
  return (
    <div className="flex justify-between pt-6">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={onPrevious}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
      )}
      
      <div className="flex-1"></div>
      
      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          className="flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSignup}
          disabled={isLoading}
          className="flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
        >
          {isLoading ? (
            "Creating Account..."
          ) : (
            <>
              <UserPlus size={16} className="mr-2" />
              Create Account
            </>
          )}
        </button>
      )}
    </div>
  );
};
