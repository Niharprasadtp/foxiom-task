# Task Management Dashboard

A professional, responsive Task Management Dashboard built with React, Vite, and Tailwind CSS.

## Features

- **API Integration**: Fetches initial tasks from JSONPlaceholder and maps them to a rich UI format.
- **Global State Management**: Powered by React Context API for seamless data flow.
- **Dashboard Stats**: Real-time overview of total, completed, pending, and high-priority tasks.
- **Task Operations**: Add, complete, and delete tasks with instant UI updates.
- **Filtering & Sorting**: Filter tasks by status and sort by creation date or priority.
- **Persistence**: LocalStorage integration ensures data remains after page refresh.
- **Dark Mode**: Premium dark mode support with a toggle button.
- **Responsive Design**: Fully optimized for both desktop and mobile screens.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State**: Context API + Hooks (useState, useMemo, useEffect)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Ensure `.env` exists in the root directory with:
   ```env
   VITE_API_URL=https://jsonplaceholder.typicode.com/todos
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Assumptions & Design Choices

- **Data Mapping**: Since the API only provides `title` and `completed`, I've mocked `description`, `priority`, and `createdAt` for a more realistic dashboard experience.
- **State Management**: Context API was chosen for its simplicity and effectiveness in managing global UI state and task data without the overhead of Redux for this scale.
- **Styling**: used a "clean and structured but not heavy" approach with custom color palettes and a glassmorphic header.
