import React from 'react';
import { BusinessFormData } from '../../../../../types/business';

interface PhotosProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
}

const Photos: React.FC<PhotosProps> = ({ formData, updateFormData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Convert FileList to array of URLs
    const newPhotos = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    updateFormData({
      photos: [...formData.photos, ...newPhotos],
    });
  };

  const removePhoto = (index: number) => {
    const newPhotos = formData.photos.filter((_, i) => i !== index);
    updateFormData({ photos: newPhotos });
  };

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Business Photos</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {formData.photos.map((photo, index) => (
          <div key={index} className='relative group'>
            <img
              src={photo}
              alt={`Business photo ${index + 1}`}
              className='w-full h-32 object-cover rounded-lg'
            />
            <button
              onClick={() => removePhoto(index)}
              className='absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity'
            >
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
        ))}

        <label className='border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400'>
          <i className='fa-solid fa-upload text-gray-400 text-xl'></i>
          <span className='mt-2 text-sm text-gray-500'>Upload Photo</span>
          <input
            type='file'
            accept='image/*'
            multiple
            onChange={handleFileChange}
            className='hidden'
          />
        </label>
      </div>

      <p className='text-sm text-gray-500'>
        Upload up to 10 photos of your business. Include photos of your space,
        products, or services.
      </p>
    </div>
  );
};

export default Photos;
