import { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can participate in JEVION 2K26?',
    answer: 'Any student currently pursuing an undergraduate or postgraduate degree in a recognized college or university can participate.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What is the registration fee?',
    answer: 'The registration fee is ₹200 per participant. This gives you access to participate in multiple events.',
    category: 'Registration'
  },
  {
    id: 'faq-3',
    question: 'Where is the venue?',
    answer: 'The symposium is held at the Lecture Theatre, 6th Floor, Academic Block, Dhanalakshmi Srinivasan University.',
    category: 'Venue'
  },
  {
    id: 'faq-4',
    question: 'Can I participate in multiple events?',
    answer: 'Yes, a participant can register and take part in multiple events provided there are no timing clashes between them.',
    category: 'Events'
  },
  {
    id: 'faq-5',
    question: 'How do I register?',
    answer: 'You can register online through this website by visiting the Registration page, filling in your details, and completing the payment.',
    category: 'Registration'
  },
  {
    id: 'faq-6',
    question: 'Where can I find the rules for specific events?',
    answer: 'Rules for each event can be found on their respective event pages under the Events section or by visiting the Rules page.',
    category: 'Events'
  },
  {
    id: 'faq-7',
    question: 'How will I receive confirmation of my registration?',
    answer: 'After successful registration and payment, you will receive a confirmation email and SMS on your registered contact details.',
    category: 'Registration'
  },
  {
    id: 'faq-8',
    question: 'How will I get updates during the event?',
    answer: 'Check the Announcements section on the website and join our official WhatsApp group for real-time updates.',
    category: 'General'
  }
];

export function getFaqsByCategory(category: string): FAQItem[] {
  if (category === 'all') return faqs;
  return faqs.filter(faq => faq.category === category);
}

export function getFaqCategories(): string[] {
  const categories = new Set(faqs.map(faq => faq.category));
  return Array.from(categories);
}

export const faq = faqs;

