import React, { useState } from 'react';

const BusinessLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // por ahora que redirija a la home
    window.location.href = '/dashboard';
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      {/* Left side - Image */}
      <div className='hidden lg:block w-1/2 h-screen'>
        <img
          src='https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=1950&auto=format&fit=crop'
          alt='Mountains in the mist'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Right side - Login Form */}
      <div className='w-full lg:w-1/2 p-8 lg:p-24 bg-white'>
        <div className='max-w-md mx-auto'>
          <h2 className='text-3xl font-bold mb-2 text-gray-800'>
            Welcome back
          </h2>
          <p className='text-gray-600 mb-8'>
            Please enter your details to sign in
          </p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='relative'>
                <i className='fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5'></i>
                <input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='relative'>
                <i className='fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5'></i>
                <input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                  placeholder='Enter your password'
                  required
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <span className='ml-2 text-sm text-gray-600'>Remember me</span>
              </label>
              <a href='#' className='text-sm text-blue-600 hover:text-blue-800'>
                Forgot password?
              </a>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2'
            >
              Sign in
              <i className='fa-solid fa-arrow-right h-4 w-4'></i>
            </button>

            <p className='text-center text-sm text-gray-600'>
              Don't have an account?{' '}
              <a
                href='#'
                className='text-blue-600 hover:text-blue-800 font-medium'
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
