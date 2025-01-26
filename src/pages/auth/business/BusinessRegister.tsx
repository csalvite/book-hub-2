import React from 'react';
import { useBusinessRegister } from '../../../hooks/useBusinessRegister';
import StepIndicator from '../../../components/Auth/Business/BusinessRegister/StepIndicator';
import { BusinessFormSteps } from '../../../components/Auth/Business/BusinessRegister/Steps';
import NavigationButtons from '../../../components/Auth/Business/BusinessRegister/NavigationButtons';
import { LoadingState } from '../../../components/LoadingState';
import { BusinessSuccess } from '../../../components/Auth/Business/BusinessSuccess';
import { BusinessSuccessResponse } from '../../../types/business';

const BusinessRegister: React.FC = () => {
  const {
    currentStep,
    goToNextStep,
    goToPreviousStep,
    formData,
    updateFormData,
    submitForm,
  } = useBusinessRegister();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [businessSuccessData, setBusinessSuccessData] =
    React.useState<BusinessSuccessResponse>();

  console.log('datos del registro de negocio', formData);

  const registerBusiness = async () => {
    try {
      setLoading(true);
      const response = await submitForm();
      setBusinessSuccessData(response);
      setSuccess(true);
    } catch (error) {
      setError(true);
      setSuccess(false);
      console.error('Error registering business:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log('businessSuccessData', businessSuccessData);

  if (success && businessSuccessData) {
    return (
      <div className='min-h-screen bg-gray-100 p-6'>
        <BusinessSuccess data={businessSuccessData} />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <StepIndicator currentStep={currentStep} />

        {loading ? (
          <LoadingState loading={loading} success={success} />
        ) : error ? (
          <p>Error al registrar el negocio</p>
        ) : (
          !success &&
          !error && (
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
                onSubmit={registerBusiness}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BusinessRegister;
