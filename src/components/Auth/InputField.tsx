import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ icon, ...props }) => {
  return (
    <div className='relative'>
      {icon && (
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
          {icon}
        </div>
      )}
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
          icon ? 'pl-10' : ''
        }`}
      />
    </div>
  );
};

export default InputField;
