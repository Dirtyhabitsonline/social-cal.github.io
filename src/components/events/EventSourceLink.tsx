import React from 'react';
import { Link } from 'lucide-react';

interface EventSourceLinkProps {
  url: string;
}

export function EventSourceLink({ url }: EventSourceLinkProps) {
  return (
    <div className="flex items-center text-gray-600 dark:text-gray-300">
      <Link className="w-4 h-4 mr-2" />
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 transition-colors"
      >
        Source
      </a>
    </div>
  );
}