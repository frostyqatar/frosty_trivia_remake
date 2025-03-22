import React, { createContext, useState, useContext, useEffect } from 'react';

// Define theme names
export type ThemeName = 'default' | 'fun' | 'halloween' | 'retro';

// Define context type
interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'default',
  setTheme: () => {},
});

// Hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get saved theme from localStorage or use default
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return (savedTheme as ThemeName) || 'default';
  });
  
  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('app-theme', currentTheme);
  }, [currentTheme]);
  
  // Function to set theme
  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
  };
  
  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 