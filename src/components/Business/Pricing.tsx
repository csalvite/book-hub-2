import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    features: [
      'Up to 100 bookings/month',
      'Basic analytics',
      'Email support',
      'Customer management',
      'Mobile app access',
    ],
  },
  {
    name: 'Professional',
    price: 79,
    popular: true,
    features: [
      'Unlimited bookings',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
      'API access',
      'Team management',
    ],
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom integration',
      'SLA guarantee',
      'Advanced security',
      'Multi-location support',
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className='bg-gray-50 py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Simple, Transparent Pricing
          </h2>
          <p className='text-xl text-gray-600'>
            Choose the perfect plan for your business
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                  Most Popular
                </span>
              )}
              <h3 className='text-2xl font-bold text-gray-900 mt-4'>
                {plan.name}
              </h3>
              <p className='mt-4'>
                <span className='text-4xl font-bold'>${plan.price}</span>
                <span className='text-gray-600'>/month</span>
              </p>
              <ul className='mt-6 space-y-4'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center'>
                    <i className='fa-solid fa-check w-5 h-5 text-green-500 mr-3'></i>
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className='mt-8 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors'>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
