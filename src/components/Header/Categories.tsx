import React from 'react';

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Restaurants',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Beauty & Spa',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Health',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Home Services',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
];

const Categories: React.FC = () => {
  return (
    <div className="w-full max-w-4xl overflow-x-auto pb-4 px-4">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="flex-shrink-0">
            <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-lg overflow-hidden relative group cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-center font-medium px-2">{category.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;