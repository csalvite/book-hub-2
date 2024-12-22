import React, { useState } from 'react';
import InputField from './InputField';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 w-full'>
      <InputField
        type='text'
        name='fullName'
        placeholder='Full Name'
        value={formData.fullName}
        onChange={handleChange}
        icon={<i className='fa-solid fa-user w-5 h-5 text-gray-400'></i>}
        required
      />
      <InputField
        type='email'
        name='email'
        placeholder='Email address'
        value={formData.email}
        onChange={handleChange}
        icon={<i className='fa-solid fa-envelope w-5 h-5 text-gray-400'></i>}
        required
      />
      <InputField
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        icon={<i className='fa-solid fa-lock w-5 h-5 text-gray-400'></i>}
        required
      />
      <InputField
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={formData.confirmPassword}
        onChange={handleChange}
        icon={<i className='fa-solid fa-lock w-5 h-5 text-gray-400'></i>}
        required
      />

      <div className='text-sm text-gray-600'>
        By registering, you agree to our{' '}
        <a href='/terms' className='text-blue-600 hover:text-blue-800'>
          Terms of Service
        </a>{' '}
        and{' '}
        <a href='/privacy' className='text-blue-600 hover:text-blue-800'>
          Privacy Policy
        </a>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors'
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
