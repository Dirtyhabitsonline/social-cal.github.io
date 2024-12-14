import React from 'react';
import { EventList } from '../components/events/EventList';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Events Dashboard</h1>
      </div>
      <EventList />
    </div>
  );
}