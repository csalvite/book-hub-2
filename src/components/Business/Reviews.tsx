import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Restaurant Owner',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content:
      'BookEasy has transformed how we handle reservations. Our no-show rate has dropped significantly, and our customers love the easy booking process.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Spa Manager',
    image:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content:
      'The analytics features have helped us optimize our scheduling and staffing. We ve seen a 40% increase in bookings since switching to BookEasy.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Fitness Studio Owner',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content:
      'Customer support is exceptional. They helped us migrate our existing booking system seamlessly. Our clients frequently compliment the user-friendly interface.',
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  return (
    <div className='bg-white py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Trusted by Business Owners
          </h2>
          <p className='text-xl text-gray-600'>
            See what our customers have to say about BookEasy
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {reviews.map((review) => (
            <div key={review.id} className='bg-gray-50 rounded-lg p-8'>
              <div className='flex items-center mb-4'>
                {[...Array(review.rating)].map((_, i) => (
                  <i
                    key={i}
                    className='fa-solid fa-star w-5 h-5 text-yellow-400 fill-current'
                  ></i>
                ))}
              </div>
              <p className='text-gray-600 mb-6'>{review.content}</p>
              <div className='flex items-center'>
                <img
                  src={review.image}
                  alt={review.name}
                  className='w-12 h-12 rounded-full'
                />
                <div className='ml-4'>
                  <h4 className='font-semibold text-gray-900'>{review.name}</h4>
                  <p className='text-gray-600'>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
