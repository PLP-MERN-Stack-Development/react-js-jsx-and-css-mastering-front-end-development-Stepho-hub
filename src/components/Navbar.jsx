import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {
    const { theme, toggleTheme, isDark } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
        `block py-2 transition-colors duration-200 ${isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
        }`

    return (
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="text-xl font-bold hover:text-blue-600 transition-colors duration-200">
                            Somtech Task Manager
                        </Link>
                        <div className="hidden md:flex items-center gap-4">
                            <NavLink to="/tasks" className={navLinkClass}>Tasks</NavLink>
                            <NavLink to="/posts" className={navLinkClass}>Posts</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant={isDark ? 'secondary' : 'primary'}
                            size="sm"
                            onClick={toggleTheme}
                            className="transition-all duration-200 hover:scale-105 active:scale-95"
                            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                        >
                            <span className="flex items-center gap-2">
                                {isDark ? (
                                    <>
                                        <span className="text-lg">🌞</span>
                                        <span className="hidden sm:inline">Light</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-lg">🌙</span>
                                        <span className="hidden sm:inline">Dark</span>
                                    </>
                                )}
                            </span>
                        </Button>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-3 space-y-2 border-t dark:border-gray-700">
                    <NavLink
                        to="/tasks"
                        className={navLinkClass}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tasks
                    </NavLink>
                    <NavLink
                        to="/posts"
                        className={navLinkClass}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Posts
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
