import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/taskSlice';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.tasks.searchQuery);

  return (
    <div className="relative w-full sm:max-w-xs transition-all duration-300 focus-within:sm:max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder="Search tasks..."
        className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-primary-500 shadow-sm transition-all"
      />
    </div>
  );
};

export default SearchBar;
