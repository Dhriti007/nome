
import React, { useEffect, useState } from 'react';
import { Moon, Sun, LaptopIcon } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  // Initialize theme based on system preference or localStorage
  useEffect(() => {
    // Check if user has a stored preference
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      // Use system preference
      setTheme('system');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (theme !== 'system') return;
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeMedia.addEventListener('change', handleSystemThemeChange);

    return () => {
      systemThemeMedia.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  // Handle theme change
  const handleThemeChange = (value: 'light' | 'dark' | 'system') => {
    if (!value) return; // Skip if no value (prevents deselection)
    
    setTheme(value);
    
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (value === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // System preference
      localStorage.removeItem('theme');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={value => value && handleThemeChange(value as 'light' | 'dark' | 'system')}
      className="border-4 border-neo-black dark:border-neo-dark-border bg-white/80 dark:bg-neo-dark-blue-bg/80 rounded-lg shadow-neo dark:shadow-neo-dark p-1 transition-all duration-300"
    >
      <ToggleGroupItem 
        value="light" 
        aria-label="Light mode"
        className="data-[state=on]:bg-neo-yellow data-[state=on]:text-neo-black data-[state=off]:hover:bg-gray-100 dark:data-[state=off]:hover:bg-neo-dark-blue-box/50 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <Sun className="h-5 w-5" />
      </ToggleGroupItem>
      
      <ToggleGroupItem 
        value="system" 
        aria-label="System preference"
        className="data-[state=on]:bg-neo-blue data-[state=on]:text-white data-[state=off]:hover:bg-gray-100 dark:data-[state=off]:hover:bg-neo-dark-blue-box/50 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <LaptopIcon className="h-5 w-5" />
      </ToggleGroupItem>
      
      <ToggleGroupItem 
        value="dark" 
        aria-label="Dark mode"
        className="data-[state=on]:bg-neo-dark-blue-deep data-[state=on]:text-white data-[state=off]:hover:bg-gray-100 dark:data-[state=off]:hover:bg-neo-dark-blue-box/50 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <Moon className="h-5 w-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ThemeToggle;
