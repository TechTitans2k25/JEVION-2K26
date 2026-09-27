import { Announcement } from '../types';

export const announcements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Registrations Open!',
    message: 'Registrations for JEVION 2K26 are now open. Register early to secure your spot.',
    date: '2026-09-01T10:00:00Z',
    priority: 'high',
    category: 'general',
    read: false
  },
  {
    id: 'ann-2',
    title: 'Event Details Updated',
    message: 'Rules and regulations for all technical and non-technical events have been updated. Please check the respective event pages.',
    date: '2026-09-10T14:30:00Z',
    priority: 'medium',
    category: 'events',
    read: false
  },
  {
    id: 'ann-3',
    title: 'Venue Information',
    message: 'All events will be held at the Academic Block, 6th Floor. Detailed venue map will be provided soon.',
    date: '2026-09-15T09:15:00Z',
    priority: 'low',
    category: 'venue',
    read: false
  }
];

export function getUnreadAnnouncementsCount(): number {
  return announcements.filter(a => !a.read).length;
}

export function markAllAsRead(): void {
  announcements.forEach(a => {
    a.read = true;
  });
}
