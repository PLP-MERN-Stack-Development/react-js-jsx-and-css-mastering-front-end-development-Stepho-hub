import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            About
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Somtech Task Manager - A React task application built with modern web technologies.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-block"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tasks"
                                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-block"
                                >
                                    Tasks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/posts"
                                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-block"
                                >
                                    Posts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Connect
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/Stepho-hub" target="_blank" rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Somtech Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
