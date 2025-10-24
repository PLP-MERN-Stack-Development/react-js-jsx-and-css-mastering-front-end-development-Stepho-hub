import React, { useState, useEffect } from 'react';
import Button from './Button';

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  // Initialize state from localStorage or with empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
        Task Manager
      </h2>

      {/* Task input form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
                      transition-all duration-200 hover:border-blue-400"
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Add Task
          </Button>
        </div>
      </form>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
          className="flex-1 sm:flex-none transition-transform duration-200 hover:scale-105"
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
          className="flex-1 sm:flex-none transition-transform duration-200 hover:scale-105"
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
          className="flex-1 sm:flex-none transition-transform duration-200 hover:scale-105"
        >
          Completed
        </Button>
      </div>

      {/* Task list with smooth animations */}
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-8 animate-fade-in">
            No tasks found
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg
                         hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700
                         transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 
                           transition-colors duration-200 cursor-pointer"
                />
                <span
                  className={`transition-all duration-200 ${task.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-900 dark:text-white'
                    }`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete task"
                className="w-full sm:w-auto transition-all duration-200 hover:bg-red-700 active:scale-95"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Task stats with animation */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 transition-opacity duration-200">
        <p className="flex items-center justify-center sm:justify-start gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
          {tasks.filter((task) => !task.completed).length} tasks remaining
        </p>
      </div>
    </div>
  );
};

export default TaskManager; 