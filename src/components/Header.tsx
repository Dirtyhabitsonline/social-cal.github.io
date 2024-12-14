import React from 'react';
import { useTheme } from '../hooks/theme/useTheme';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const theme = useTheme();
  const { settings, updateSetting } = useSettings();

  const toggleTheme = () => {
    updateSetting('theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            AI Event Scout
          </h1>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}