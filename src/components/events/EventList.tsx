import React from 'react';
import { useEvents } from '@/hooks/api/useEvents';
import { EventCard } from './EventCard';

export function EventList() {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading events</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}