import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchInitialTasks } from '../services/taskService';

export const getInitialTasks = createAsyncThunk(
  'tasks/getInitialTasks',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchInitialTasks();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: JSON.parse(localStorage.getItem('tasks')) || [],
  loading: false,
  error: null,
  filter: 'All',
  sortBy: 'createdAt',
  isDarkMode: localStorage.getItem('theme') === 'dark',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        id: Date.now(),
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };
      state.items.unshift(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    updateTaskStatus: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) {
        task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
      }
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInitialTasks.fulfilled, (state, action) => {
        state.loading = false;
        if (state.items.length === 0) {
          state.items = action.payload;
          localStorage.setItem('tasks', JSON.stringify(state.items));
        }
      })
      .addCase(getInitialTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { 
  addTask, 
  updateTaskStatus, 
  deleteTask, 
  setFilter, 
  setSortBy, 
  toggleDarkMode 
} = taskSlice.actions;

export default taskSlice.reducer;
