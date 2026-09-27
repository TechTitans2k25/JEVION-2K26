import { RuleSet } from '../types';

export const rules: RuleSet[] = [
  {
    eventId: 'tech-talk',
    eventName: 'Tech Talk (Paper Presentation)',
    category: 'technical',
    eligibility: 'Open to all UG/PG students.',
    teamSize: '1 to 2 members',
    rounds: [
      { name: 'Round 1', description: 'Abstract submission', duration: null },
      { name: 'Round 2', description: 'Final presentation', duration: '10 mins' }
    ],
    rules: [
      'Presentations should be in standard format.',
      'Time limit: 8 minutes presentation + 2 minutes Q&A.',
      'Plagiarism is strictly prohibited.'
    ],
    judging: ['Innovation', 'Presentation skills', 'Technical content', 'Q&A handling'],
    submission: 'Submit abstract via email before the deadline.',
    restrictions: ['No late entries allowed.'],
    contact: { name: 'Faculty Coordinator', phone: 'Contact info TBA' }
  },
  {
    eventId: 'erasex',
    eventName: 'EraseX (Debugging)',
    category: 'technical',
    eligibility: 'Open to all UG/PG students.',
    teamSize: '1 to 2 members',
    rounds: [
      { name: 'Round 1', description: 'Written test (MCQ on code snippets)', duration: '30 mins' },
      { name: 'Round 2', description: 'Hands-on debugging challenge', duration: '60 mins' }
    ],
    rules: [
      'Participants will be provided with buggy code snippets in C/C++/Java/Python.',
      'Use of internet is prohibited during the event.',
      'Earliest correct submission wins.'
    ],
    judging: ['Accuracy', 'Speed of execution'],
    submission: null,
    restrictions: ['No external devices allowed.'],
    contact: { name: 'Faculty Coordinator', phone: 'Contact info TBA' }
  }
];

export function getRulesByEvent(eventId: string): RuleSet | undefined {
  return rules.find(r => r.eventId === eventId);
}
