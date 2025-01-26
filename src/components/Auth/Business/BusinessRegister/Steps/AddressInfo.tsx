import React from 'react';
import { BusinessFormData } from '../../../../../types/business';
import { provincias } from '../../../../../utils/provincias';
import PhonePrefixSelector from '../../../../Forms/PhonePrefixSelector';

interface AddressInfoProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const AddressInfo: React.FC<AddressInfoProps> = ({
  formData,
  updateFormData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    updateFormData({
      address: {
        ...formData.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Business Address And Contact</h2>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Phone Number
        </label>
        <div className='flex items-center justify-center gap-4 mt-4'>
          <PhonePrefixSelector
            onChange={(value) => {
              updateFormData({
                address: {
                  ...formData.address,
                  phone: `+${value?.phone} ${formData.address.phone}`,
                },
              });
            }}
          />
          <input
            type='tel'
            name='phone'
            value={formData.address.phone}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Street Address
        </label>
        <input
          type='text'
          name='street'
          value={formData.address.street}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            City
          </label>
          <input
            type='text'
            name='city'
            value={formData.address.city}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            State
          </label>
          <select
            name='state'
            value={formData.address.state}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
          >
            <option value={''}>Select a state</option>
            {provincias.map((provincia) => {
              return (
                <option key={provincia} value={provincia}>
                  {provincia}
                </option>
              );
            })}
            {/* Add more states */}
          </select>
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          ZIP Code
        </label>
        <input
          type='text'
          name='zipCode'
          value={formData.address.zipCode}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
    </div>
  );
};

export default AddressInfo;
