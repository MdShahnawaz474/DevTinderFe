

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar= ({currentStep ,totalSteps}:(ProgressBarProps))=>{
    const percentage =  Math.round((currentStep/totalSteps)*100);
return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};