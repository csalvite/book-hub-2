import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  'Basic Info',
  'Contact',
  'Address',
  'Services',
  'Schedule',
  'Photos',
  // 'Payment',
  'Terms',
];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className='flex justify-between items-center'>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={step} className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isCompleted
                  ? 'bg-green-500'
                  : isCurrent
                  ? 'bg-blue-500'
                  : 'bg-gray-200'
              } text-white`}
            >
              {isCompleted ? (
                <i className='fa-solid fa-circle-check'></i>
              ) : (
                <span>{stepNumber}</span>
              )}
            </div>
            <span className='text-xs mt-1'>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
