

const API_URL = import.meta.env.VITE_API_URL;

export const fetchInitialTasks = async (limit = 10) => {
  try {
    const response = await fetch(`${API_URL}?_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const data = await response.json();

    return data.map((task) => ({
      id: task.id,
      title: task.title,
      description: `Mock description for task: ${task.title}. This is a detailed requirement for the task management assessment.`,
      status: task.completed ? 'Completed' : 'Pending',
      priority: getRandomPriority(),
      createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),
      dueDate: new Date(Date.now() + Math.floor(Math.random() * 1000000000)).toISOString().split('T')[0],
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

const getRandomPriority = () => {
  const priorities = ['Low', 'Medium', 'High'];
  return priorities[Math.floor(Math.random() * priorities.length)];
};
