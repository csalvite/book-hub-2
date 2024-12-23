import { useState } from 'react';
import { BusinessFormData } from '../types/business';

const initialFormData: BusinessFormData = {
  businessInfo: {
    name: '',
    type: '',
    description: '',
  },
  contact: {
    email: '',
    phone: '',
    website: '',
  },
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  services: [],
  schedule: {
    weekdays: [],
    hours: {},
  },
  photos: [],
  payment: {
    accountHolder: '',
    accountNumber: '',
    routingNumber: '',
  },
  terms: false,
};

export const useBusinessRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BusinessFormData>(initialFormData);

  const goToNextStep = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const updateFormData = (stepData: Partial<BusinessFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  return {
    currentStep,
    formData,
    goToNextStep,
    goToPreviousStep,
    updateFormData,
  };
};
