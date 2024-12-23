import React from 'react';
import { BusinessFormData } from '../../../../../types/business';

interface ServicesInfoProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const ServicesInfo: React.FC<ServicesInfoProps> = ({
  formData,
  updateFormData,
}) => {
  const addService = () => {
    updateFormData({
      services: [...formData.services, { name: '', price: 0, duration: 30 }],
    });
  };

  const removeService = (index: number) => {
    const newServices = formData.services.filter((_, i) => i !== index);
    updateFormData({ services: newServices });
  };

  const updateService = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const newServices = formData.services.map((service, i) => {
      if (i === index) {
        return { ...service, [field]: value };
      }
      return service;
    });
    updateFormData({ services: newServices });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Services</h2>

      <div className='space-y-4'>
        {formData.services.map((service, index) => (
          <div key={index} className='p-4 border rounded-lg space-y-4'>
            <div className='flex justify-between items-start'>
              <div className='flex-1 space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Service Name
                  </label>
                  <input
                    type='text'
                    value={service.name}
                    onChange={(e) =>
                      updateService(index, 'name', e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Price ($)
                    </label>
                    <input
                      type='number'
                      value={service.price}
                      onChange={(e) =>
                        updateService(
                          index,
                          'price',
                          parseFloat(e.target.value)
                        )
                      }
                      min='0'
                      step='0.01'
                      className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700'>
                      Duration (min)
                    </label>
                    <input
                      type='number'
                      value={service.duration}
                      onChange={(e) =>
                        updateService(
                          index,
                          'duration',
                          parseInt(e.target.value)
                        )
                      }
                      min='0'
                      step='15'
                      className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500'
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeService(index)}
                className='ml-4 p-2 text-red-600 hover:text-red-800'
              >
                <i className='fa-solid fa-trash-can'></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type='button'
        onClick={addService}
        className='flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-800'
      >
        <i className='fa-solid fa-plus mr-2'></i>
        Add Service
      </button>
    </div>
  );
};

export default ServicesInfo;
