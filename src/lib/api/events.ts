import { Event } from '@/types/event';
import { API_BASE_URL } from '@/lib/constants/config';

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch(`${API_BASE_URL}/events/`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
}