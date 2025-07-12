import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or default to light mode
    const savedTheme = localStorage.getItem('lexroot-theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('lexroot-theme', isDarkMode ? 'dark' : 'light');
    
    // Update CSS variables
    const root = document.documentElement;
    if (isDarkMode) {
      // Night mode colors - vintage dark theme
      root.style.setProperty('--bg-cream', '#1a1814'); // Dark charcoal
      root.style.setProperty('--bg-light', '#252420'); // Slightly lighter dark
      root.style.setProperty('--text-black', '#f5f2ed'); // Cream text
      root.style.setProperty('--text-dark', '#e8e5e0'); // Slightly darker cream
      root.style.setProperty('--text-gray', '#a8a5a0'); // Muted light gray
      root.style.setProperty('--accent-red', '#ff4444'); // Brighter red for contrast
      root.style.setProperty('--accent-hover', '#ff6666'); // Lighter red on hover
      root.style.setProperty('--border', '#3a3834'); // Dark border
      root.style.setProperty('--border-dark', '#4a4844'); // Darker border
      root.style.setProperty('--code-bg', '#0d0d0d'); // Very dark for code
      root.style.setProperty('--code-text', '#f8f8f2'); // Light code text
      root.style.setProperty('--shadow-subtle', '0 2px 4px rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--shadow-paper', '0 4px 6px rgba(0, 0, 0, 0.4)');
      root.style.setProperty('--bg-cream-rgb', '26, 24, 20'); // RGB for transparency
    } else {
      // Day mode colors - original vintage newspaper
      root.style.setProperty('--bg-cream', '#f5f2ed');
      root.style.setProperty('--bg-light', '#faf9f7');
      root.style.setProperty('--text-black', '#1a1a1a');
      root.style.setProperty('--text-dark', '#2c2c2c');
      root.style.setProperty('--text-gray', '#5a5a5a');
      root.style.setProperty('--accent-red', '#8B0000');
      root.style.setProperty('--accent-hover', '#660000');
      root.style.setProperty('--border', '#d4cfc7');
      root.style.setProperty('--border-dark', '#b8b2a8');
      root.style.setProperty('--code-bg', '#2d2d2d');
      root.style.setProperty('--code-text', '#f8f8f2');
      root.style.setProperty('--shadow-subtle', '0 2px 4px rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--shadow-paper', '0 4px 6px rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--bg-cream-rgb', '245, 242, 237'); // RGB for transparency
    }

    // Add class to body for additional styling if needed
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 