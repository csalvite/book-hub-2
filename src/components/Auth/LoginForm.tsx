import React, { useState } from 'react';
import InputField from './InputField';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 w-full'>
      <InputField
        type='email'
        placeholder='Email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<i className='fa-solid fa-envelope w-5 h-5 text-gray-400'></i>}
        required
      />
      <InputField
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<i className='fa-solid fa-lock w-5 h-5 text-gray-400'></i>}
        required
      />

      <div className='flex items-center justify-between'>
        <label className='flex items-center'>
          <input type='checkbox' className='w-4 h-4 rounded border-gray-300' />
          <span className='ml-2 text-sm text-gray-600'>Remember me</span>
        </label>
        <a
          href='/forgot-password'
          className='text-sm text-blue-600 hover:text-blue-800'
        >
          Forgot password?
        </a>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors'
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
