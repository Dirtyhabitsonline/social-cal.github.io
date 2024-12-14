import React from 'react';
import { Calendar, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { icon: Calendar, label: 'Events', path: '/' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm h-screen">
      <nav className="p-4 space-y-2">
        {links.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`
              flex items-center space-x-2 p-2 rounded-lg
              ${location.pathname === path
                ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}