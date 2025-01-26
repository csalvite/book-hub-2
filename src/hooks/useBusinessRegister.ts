import { useState } from 'react';
import { BusinessFormData } from '../types/business';
import { createBusiness } from '../api/business';

const initialFormData: BusinessFormData = {
  businessInfo: {
    ownerName: '',
    name: '',
    type: 0,
    description: '',
    email: '',
    password: '',
  },
  address: {
    phone: '',
    street: '',
    city: '',
    state: '',
    country: 'España',
    latitude: 0,
    longitude: 0,
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

  const submitForm = async () => {
    console.log('Formulario enviado:', formData);

    // Aquí iría la lógica para enviar el formulario a un servidor
    const response = await createBusiness(formData);
    console.log('Respuesta del servidor:', response);
    if (!response) {
      throw new Error('Error al enviar el formulario');
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
    submitForm,
  };
};
