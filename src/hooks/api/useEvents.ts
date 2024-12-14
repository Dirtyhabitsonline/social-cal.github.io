import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/config';
import { fetchEvents } from '@/lib/api/events';

export function useEvents() {
  return useQuery({
    queryKey: [QUERY_KEYS.EVENTS],
    queryFn: fetchEvents,
  });
}