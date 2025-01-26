import React from 'react';

interface NavigationButtonsProps {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  onNext,
  onBack,
  onSubmit,
}) => {
  return (
    <div className='mt-8 flex justify-between'>
      {currentStep > 1 && (
        <button
          onClick={onBack}
          className='px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
        >
          Back
        </button>
      )}
      <button
        onClick={currentStep === 7 ? onSubmit : onNext}
        className='ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
      >
        {currentStep === 7 ? 'Submit' : 'Next'}
      </button>
    </div>
  );
};

export default NavigationButtons;
