import React from 'react'
import TaskManager from '../components/TaskManager'

const TasksPage = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
                My Tasks
            </h1>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300">
                <TaskManager />
            </div>
        </div>
    )
}

export default TasksPage
