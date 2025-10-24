import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            try {
                const savedTheme = localStorage.getItem('theme')
                if (savedTheme) {
                    return savedTheme
                }
                // Check system preference
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return 'dark'
                }
            } catch (e) {
                console.error('Error accessing localStorage:', e)
            }
        }
        return 'light'
    })

    useEffect(() => {
        const root = window.document.documentElement
        const isDark = theme === 'dark'

        // Remove both classes first
        root.classList.remove('light', 'dark')
        // Add the current theme class
        root.classList.add(isDark ? 'dark' : 'light')

        // Update localStorage
        try {
            localStorage.setItem('theme', theme)
        } catch (e) {
            console.error('Error saving theme:', e)
        }

        // Optional: Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]')
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                'content',
                isDark ? '#111827' : '#ffffff'
            )
        }
    }, [theme])

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export default ThemeContext
