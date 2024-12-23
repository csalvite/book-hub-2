import React from 'react';
import { useBusinessRegister } from '../../../hooks/useBusinessRegister';
import StepIndicator from '../../../components/Auth/Business/BusinessRegister/StepIndicator';
import { BusinessFormSteps } from '../../../components/Auth/Business/BusinessRegister/Steps';
import NavigationButtons from '../../../components/Auth/Business/BusinessRegister/NavigationButtons';

const BusinessRegister: React.FC = () => {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
    formData,
    updateFormData,
  } = useBusinessRegister();

  console.log('datos del registro de negocio', formData);

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <StepIndicator currentStep={currentStep} />

        <div className='mt-8 bg-white p-8 rounded-lg shadow'>
          <BusinessFormSteps
            currentStep={currentStep}
            formData={formData}
            updateFormData={updateFormData}
          />

          <NavigationButtons
            currentStep={currentStep}
            onNext={goToNextStep}
            onBack={goToPreviousStep}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessRegister;
