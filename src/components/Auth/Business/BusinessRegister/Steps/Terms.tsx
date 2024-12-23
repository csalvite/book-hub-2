import React from 'react';
import { BusinessFormData } from '../../../../../types/business';

interface TermsProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const Terms: React.FC<TermsProps> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      terms: e.target.checked,
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Terms & Conditions</h2>

      <div className='prose prose-sm max-w-none'>
        <h3>Terms of Service</h3>
        <p>By using our platform, you agree to the following terms:</p>
        <ul>
          <li>
            You will provide accurate and truthful information about your
            business
          </li>
          <li>
            You will maintain up-to-date availability and pricing information
          </li>
          <li>You will respond to customer inquiries in a timely manner</li>
          <li>You will honor all confirmed bookings</li>
          <li>
            You will maintain appropriate licenses and insurance for your
            business
          </li>
        </ul>

        <h3 className='mt-6'>Privacy Policy</h3>
        <p>We take your privacy seriously. Your information will be used to:</p>
        <ul>
          <li>Process payments and bookings</li>
          <li>Communicate with customers</li>
          <li>Improve our services</li>
          <li>Comply with legal requirements</li>
        </ul>
      </div>

      <div className='mt-6'>
        <label className='flex items-start'>
          <input
            type='checkbox'
            checked={formData.terms}
            onChange={handleChange}
            className='mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
          />
          <span className='ml-2 text-sm text-gray-600'>
            I have read and agree to the Terms of Service and Privacy Policy. I
            understand that my personal information will be processed as
            described in the Privacy Policy.
          </span>
        </label>
      </div>
    </div>
  );
};

export default Terms;
