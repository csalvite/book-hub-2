import React from 'react';

const SocialLogin: React.FC = () => {
  return (
    <div className='space-y-4'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-white text-gray-500'>Or continue with</span>
        </div>
      </div>

      <button
        type='button'
        className='w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
      >
        <img
          src='https://www.google.com/favicon.ico'
          alt='Google'
          className='w-5 h-5'
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
