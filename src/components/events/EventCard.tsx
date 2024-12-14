import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '@/types/event';
import { formatDate } from '@/lib/utils/date';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formatDate(event.startDate)}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{event.description}</p>
      
      <div className="flex justify-between items-center">
        <a 
          href={event.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          View Source
        </a>
      </div>
    </div>
  );
}