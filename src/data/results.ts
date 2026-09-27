import { Result } from '../types';

export const results: Result[] = [];

export function getResultsByEvent(eventId: string): Result[] {
  return results.filter(r => r.eventId === eventId && r.published);
}

export function getAllPublishedResults(): Result[] {
  return results.filter(r => r.published);
}
