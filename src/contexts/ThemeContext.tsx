import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check localStorage for saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode');
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        return saved;
      }
    }
    return 'light'; // Default to light for hanzo.industries
  });

  const [systemIsDark, setSystemIsDark] = useState<boolean>(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Compute if dark mode should be active
  const isDarkMode = mode === 'system' ? systemIsDark : mode === 'dark';

  // Save to localStorage when mode changes
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    root.classList.toggle('light', !isDarkMode);
    root.style.backgroundColor = isDarkMode ? '#000' : '#fff';
    root.style.colorScheme = isDarkMode ? 'dark' : 'light';

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkMode ? '#000000' : '#ffffff');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
