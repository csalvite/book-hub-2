import React from 'react';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import { BusinessFormData } from '../../../../../types/business';
import ServicesInfo from './ServicesInfo';
import Schedule from './Schedule';
import Photos from './Photos';
import Payment from './Payment';
import Terms from './Terms';

interface BusinessFormStepsProps {
  currentStep: number;
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

export const BusinessFormSteps: React.FC<BusinessFormStepsProps> = ({
  currentStep,
  formData,
  updateFormData,
}) => {
  const steps = {
    1: <BasicInfo formData={formData} updateFormData={updateFormData} />,
    2: <ContactInfo formData={formData} updateFormData={updateFormData} />,
    3: <AddressInfo formData={formData} updateFormData={updateFormData} />,
    4: <ServicesInfo formData={formData} updateFormData={updateFormData} />,
    5: <Schedule formData={formData} updateFormData={updateFormData} />,
    6: <Photos formData={formData} updateFormData={updateFormData} />,
    7: <Payment formData={formData} updateFormData={updateFormData} />,
    8: <Terms formData={formData} updateFormData={updateFormData} />,
  };

  return steps[currentStep as keyof typeof steps] || null;
};
