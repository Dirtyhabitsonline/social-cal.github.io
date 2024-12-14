import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6',
      'transition-colors duration-200',
      className
    )}>
      {children}
    </div>
  );
}