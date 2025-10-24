import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TasksPage from './pages/TasksPage'
import PostsPage from './pages/PostsPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-all duration-300">
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto w-full">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 transition-all duration-300">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Welcome to PLP Task Manager
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Use the navigation to view Tasks or Posts. Or go to{' '}
                  <Link
                    to="/tasks"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 underline"
                  >
                    Tasks
                  </Link>.
                </p>
              </div>
            </div>
          } />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App