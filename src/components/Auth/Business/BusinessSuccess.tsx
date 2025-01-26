import React from 'react';
import { LoadingState } from '../../LoadingState';
import { BusinessSuccessResponse } from '../../../types/business';

export const BusinessSuccess: React.FC<{ data: BusinessSuccessResponse }> = ({
  data,
}) => {
  return (
    <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
      <div className='bg-green-50 p-6 border-b border-green-100'>
        <div className='flex items-center gap-4'>
          <LoadingState loading={false} success={true} />
          <div>
            <h2 className='text-2xl font-bold text-green-800'>
              Business created successfully!
            </h2>
            <p className='text-green-600 mt-1'>
              Your business has been successfully registered on our platform.
            </p>
          </div>
        </div>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              <i className='fas fa-store mr-2 text-blue-500'></i>
              Business Information
            </h3>
            <div className='space-y-3'>
              <div>
                <p className='text-sm text-gray-500'>Business Name</p>
                <p className='font-medium'>{data.businessName}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Business ID</p>
                <p className='font-medium'>#{data.id}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Creation Date</p>
                <p className='font-medium'>
                  {new Date(data.createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
              <i className='fas fa-location-dot mr-2 text-blue-500'></i>
              Location
            </h3>
            <div className='space-y-3'>
              <div>
                <p className='text-sm text-gray-500'>Address</p>
                <p className='font-medium'>{data.address}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>City</p>
                <p className='font-medium'>{data.city}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>State</p>
                <p className='font-medium'>{data.state}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Postal Code</p>
                <p className='font-medium'>{data.zipCode}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Country</p>
                <p className='font-medium'>{data.country}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 pt-6 border-t border-gray-100'>
          <div className='flex justify-between items-center'>
            <div className='text-sm text-gray-500'>
              <i className='fas fa-circle-info mr-2'></i>
              Reference IDs: Type #{data.businessTypeId} | Schedule #
              {data.openingHoursId} | Location #{data.locationId}
            </div>
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
              onClick={() => (window.location.href = '/dashboard')}
            >
              <i className='fas fa-arrow-right mr-2'></i>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
