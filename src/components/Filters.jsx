import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSortBy } from '../store/taskSlice';
import { Filter, SortAsc } from 'lucide-react';

const Filters = () => {
  const dispatch = useDispatch();
  const { filter, sortBy } = useSelector((state) => state.tasks);

  const filterOptions = ['All', 'Completed', 'Pending'];
  const sortOptions = [
    { label: 'Date Created', value: 'createdAt' },
    { label: 'Priority', value: 'priority' },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
        <Filter className="w-4 h-4 text-gray-400 shrink-0" />
        <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => dispatch(setFilter(opt))}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                filter === opt
                  ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2 w-full sm:w-auto">
        <SortAsc className="w-4 h-4 text-gray-400 shrink-0" />
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-primary-500 w-full sm:w-auto"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              Sort by {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
