import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    slug: 'hackathon',
    name: 'Hackathon',
    shortTitle: '24-hour coding challenge',
    category: 'TECHNICAL',
    day: 1,
    description: 'A 24-hour hackathon to build innovative solutions for real-world problems.',
    venue: 'Lab 1',
    fee: '150',
    teamSize: '3-4',
    rules: ['Bring your own laptops.', 'Plagiarism will lead to disqualification.'],
    rounds: ['Idea Pitch', 'Prototype', 'Final Presentation'],
    judgingCriteria: ['Innovation', 'Execution', 'Impact'],
    coordinator: { name: 'Alice', phone: '1234567890' }
  },
  {
    id: '2',
    slug: 'treasure-hunt',
    name: 'Treasure Hunt',
    shortTitle: 'Find the hidden clues',
    category: 'NON-TECHNICAL',
    day: 2,
    description: 'An exciting treasure hunt around the campus.',
    venue: 'Main Ground',
    fee: '50',
    teamSize: '2',
    rules: ['Stay within campus limits.'],
    rounds: ['Prelims', 'Finals'],
    coordinator: { name: 'Bob', phone: '0987654321' }
  }
];

export const getEventBySlug = (slug: string) => events.find(e => e.slug === slug);
