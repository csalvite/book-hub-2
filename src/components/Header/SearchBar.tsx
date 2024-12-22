import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/searchSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-2xl mb-12 px-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for services..."
          className="w-full px-12 py-4 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBar;