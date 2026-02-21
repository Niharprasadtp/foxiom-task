import React from 'react';
import { useSelector } from 'react-redux';
import { ListTodo, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const StatsOverview = () => {
  const tasks = useSelector((state) => state.tasks.items);

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'Completed').length,
    pending: tasks.filter((t) => t.status === 'Pending').length,
    highPriority: tasks.filter((t) => t.priority === 'High').length,
  };

  const items = [
    { label: 'Total Tasks', value: stats.total, icon: ListTodo, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Completed', value: stats.completed, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Pending', value: stats.pending, icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'High Priority', value: stats.highPriority, icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {items.map((item) => (
        <div key={item.label} className={`p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all hover:shadow-md`}>
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${item.bg} dark:bg-opacity-10`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
