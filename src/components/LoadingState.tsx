import React from 'react';

interface LoadingStateProps {
  loading: boolean;
  success?: boolean;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  loading,
  success,
}) => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={`relative w-12 h-12 flex items-center justify-center transition-all duration-500 ${
          !loading && success !== undefined
            ? success
              ? 'bg-green-100'
              : 'bg-red-100'
            : ''
        } rounded-full`}
      >
        {loading ? (
          <i className='fas fa-spinner text-2xl text-blue-500 animate-spin' />
        ) : success !== undefined ? (
          success ? (
            <i className='fas fa-check text-2xl text-green-500 animate-bounce' />
          ) : (
            <i className='fas fa-xmark text-2xl text-red-500 animate-bounce' />
          )
        ) : null}
      </div>
    </div>
  );
};
