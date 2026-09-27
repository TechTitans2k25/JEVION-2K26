import { ScheduleItem } from '../types';

export const scheduleItems: ScheduleItem[] = [
  // Day 1
  {
    id: 'sch-d1-1',
    eventId: 'tech-talk',
    day: 1,
    date: '2026-10-01',
    time: null,
    endTime: null,
    title: 'Tech Talk (Paper Presentation)',
    category: 'technical',
    venue: 'Lecture Theatre, 6th Floor',
    status: 'upcoming'
  },
  {
    id: 'sch-d1-2',
    eventId: 'erasex',
    day: 1,
    date: '2026-10-01',
    time: null,
    endTime: null,
    title: 'EraseX (Debugging)',
    category: 'technical',
    venue: 'Computer Lab, 6th Floor',
    status: 'upcoming'
  },
  {
    id: 'sch-d1-3',
    eventId: 'itat-11',
    day: 1,
    date: '2026-10-01',
    time: null,
    endTime: null,
    title: 'Itat 11 (IPL Auction)',
    category: 'non-technical',
    venue: 'Seminar Hall',
    status: 'upcoming'
  },
  {
    id: 'sch-d1-4',
    eventId: 'insta-lens',
    day: 1,
    date: '2026-10-01',
    time: null,
    endTime: null,
    title: 'Insta Lens (Photography)',
    category: 'non-technical',
    venue: 'Campus',
    status: 'upcoming'
  },
  {
    id: 'sch-d1-5',
    eventId: 'think-and-link',
    day: 1,
    date: '2026-10-01',
    time: null,
    endTime: null,
    title: 'Think & Link (Connection)',
    category: 'non-technical',
    venue: 'Lecture Theatre, 6th Floor',
    status: 'upcoming'
  },

  // Day 2
  {
    id: 'sch-d2-1',
    eventId: 'code-hack',
    day: 2,
    date: '2026-10-15',
    time: null,
    endTime: null,
    title: 'Code Hack (Mini Hackathon)',
    category: 'technical',
    venue: 'Computer Lab, 6th Floor',
    status: 'upcoming'
  },
  {
    id: 'sch-d2-2',
    eventId: 'hunt-iq',
    day: 2,
    date: '2026-10-15',
    time: null,
    endTime: null,
    title: 'Hunt IQ (Tech Quiz)',
    category: 'technical',
    venue: 'Lecture Theatre, 6th Floor',
    status: 'upcoming'
  },
  {
    id: 'sch-d2-3',
    eventId: 'aurora-films',
    day: 2,
    date: '2026-10-15',
    time: null,
    endTime: null,
    title: 'Aurora Films (Short Film)',
    category: 'non-technical',
    venue: 'Main Auditorium',
    status: 'upcoming'
  },
  {
    id: 'sch-d2-4',
    eventId: 'nayakan',
    day: 2,
    date: '2026-10-15',
    time: null,
    endTime: null,
    title: 'Nayakan (Guess the Movie)',
    category: 'non-technical',
    venue: 'Seminar Hall',
    status: 'upcoming'
  },
  {
    id: 'sch-d2-5',
    eventId: 'secret-hunt',
    day: 2,
    date: '2026-10-15',
    time: null,
    endTime: null,
    title: 'Secret Hunt (Treasure Hunt)',
    category: 'non-technical',
    venue: 'Campus',
    status: 'upcoming'
  }
];

export function getScheduleByDay(day: 1 | 2): ScheduleItem[] {
  return scheduleItems.filter(item => item.day === day);
}

export const schedule = scheduleItems;

