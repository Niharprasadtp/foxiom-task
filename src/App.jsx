import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInitialTasks, toggleDarkMode } from './store/taskSlice';
import StatsOverview from './components/StatsOverview';
import Filters from './components/Filters';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { LayoutDashboard, Plus, Sun, Moon, Github } from 'lucide-react';

const DashboardContent = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.tasks.isDarkMode);

  useEffect(() => {
    dispatch(getInitialTasks());
  }, [dispatch]);

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-gray-900 dark:text-white tracking-tight">Taskly</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://github.com/Niharprasadtp/foxiom-task"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsFormOpen(true)}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>New Task</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Welcome back! Manage your tasks.</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="sm:hidden flex items-center justify-center space-x-2 w-full py-3 bg-primary-600 text-white font-bold rounded-xl shadow-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>New Task</span>
          </button>
        </div>

        <StatsOverview />
        
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Tasks</h2>
          <Filters />
        </div>

        <TaskList />
      </main>

      <TaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default DashboardContent;
