import React from 'react';
import { BusinessFormData } from '../../../../../types/business';
import PhonePrefixSelector from '../../../../Forms/PhonePrefixSelector';

interface ContactInfoProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  formData,
  updateFormData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      contact: {
        ...formData.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Contact Information</h2>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Email Address
        </label>
        <input
          type='email'
          name='email'
          value={formData.contact.email}
          onChange={handleChange}
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Phone Number
        </label>
        <div className='flex items-center justify-center gap-4 mt-4'>
          <PhonePrefixSelector
            onChange={(value) => {
              updateFormData({
                contact: {
                  ...formData.contact,
                  phone: `+${value?.phone} ${formData.contact.phone}`,
                },
              });
            }}
          />
          <input
            type='tel'
            name='phone'
            value={formData.contact.phone}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Website (Optional)
        </label>
        <input
          type='url'
          name='website'
          value={formData.contact.website}
          onChange={handleChange}
          placeholder='https://'
          className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
        />
      </div>
    </div>
  );
};

export default ContactInfo;
