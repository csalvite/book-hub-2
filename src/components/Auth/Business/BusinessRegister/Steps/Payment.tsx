import React from 'react';
import { BusinessFormData } from '../../../../../types/business';

interface PaymentProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const Payment: React.FC<PaymentProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      payment: {
        ...formData.payment,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Payment Information</h2>

      <div className='bg-blue-50 p-4 rounded-lg'>
        <p className='text-sm text-blue-800'>
          Your payment information is securely stored and encrypted. We use this
          information to process your earnings.
        </p>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Account Holder Name
        </label>
        <input
          type='text'
          name='accountHolder'
          value={formData.payment.accountHolder}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Account Number
        </label>
        <input
          type='text'
          name='accountNumber'
          value={formData.payment.accountNumber}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Routing Number
        </label>
        <input
          type='text'
          name='routingNumber'
          value={formData.payment.routingNumber}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
    </div>
  );
};

export default Payment;
