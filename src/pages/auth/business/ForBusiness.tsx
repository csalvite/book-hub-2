import React from 'react';
import CallToAction from '../../../components/Business/CallToAction';
import Hero from '../../../components/Business/Hero';
import Pricing from '../../../components/Business/Pricing';
import Reviews from '../../../components/Business/Reviews';

const ForBusiness: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Pricing />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default ForBusiness;
