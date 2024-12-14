import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EventDetailProps {
  icon: LucideIcon;
  text: string;
}

export function EventDetail({ icon: Icon, text }: EventDetailProps) {
  return (
    <div className="flex items-center text-gray-600 dark:text-gray-300">
      <Icon className="w-4 h-4 mr-2" />
      <span>{text}</span>
    </div>
  );
}