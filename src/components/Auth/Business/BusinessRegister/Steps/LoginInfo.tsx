import React from 'react';
import { BusinessFormData } from '../../../../../types/business';

interface LoginInfo {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const LoginInfo: React.FC<LoginInfo> = ({ formData, updateFormData }) => {
  const [repeatPassword, setRepeatPassword] = React.useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    updateFormData({
      businessInfo: {
        ...formData.businessInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Login Info</h2>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Owner Name
        </label>
        <input
          type='text'
          name='ownerName'
          value={formData.businessInfo.ownerName}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          value={formData.businessInfo.email}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input
          type='password'
          name='password'
          value={formData.businessInfo.password}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Repeat Password
        </label>
        <input
          type='password'
          name='repeatPassword'
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
    </div>
  );
};

export default LoginInfo;
