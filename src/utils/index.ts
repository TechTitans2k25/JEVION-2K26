import type { SearchResult, AnalyticsEvent } from '../types';
import { events } from '../data/events';
import { faq } from '../data/faq';
import { announcements } from '../data/announcements';
import { coordinators } from '../data/coordinators';

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
  });
}

export function generateRegistrationId(): string {
  const prefix = 'JVX';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function generateShareMessage(eventName: string, eventSlug: string): string {
  const url = `${window.location.origin}/events/${eventSlug}`;
  return `Check out ${eventName} at JEVION 2K26 — National Level Technical Symposium!\n\n${url}`;
}

export async function shareContent(title: string, text: string, url: string): Promise<boolean> {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

export function shareToWhatsApp(text: string): void {
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
}

export function makePhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function makeWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/[+\s-]/g, '');
  const msgParam = message ? `&text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${cleanPhone}?${msgParam}`;
}

export function globalSearch(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  // Search events
  events.forEach(event => {
    if (
      event.name.toLowerCase().includes(q) ||
      event.shortTitle.toLowerCase().includes(q) ||
      event.description.toLowerCase().includes(q)
    ) {
      results.push({
        title: event.name,
        description: event.shortTitle,
        category: event.category,
        path: `/events/${event.slug}`,
        type: 'event',
      });
    }
  });

  // Search FAQ
  faq.forEach(item => {
    if (
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q)
    ) {
      results.push({
        title: item.question,
        description: item.answer.substring(0, 100),
        category: 'FAQ',
        path: '/faq',
        type: 'faq',
      });
    }
  });

  // Search announcements
  announcements.forEach(ann => {
    if (
      ann.title.toLowerCase().includes(q) ||
      ann.message.toLowerCase().includes(q)
    ) {
      results.push({
        title: ann.title,
        description: ann.message.substring(0, 100),
        category: 'Announcement',
        path: '/announcements',
        type: 'announcement',
      });
    }
  });

  // Search coordinators
  coordinators.forEach(coord => {
    if (coord.name.toLowerCase().includes(q)) {
      results.push({
        title: coord.name,
        description: coord.title,
        category: 'Coordinator',
        path: '/contact',
        type: 'coordinator',
      });
    }
  });

  return results.slice(0, 20);
}

// Analytics abstraction
export function trackEvent(event: AnalyticsEvent): void {
  // Future: send to analytics backend
  if (import.meta.env.DEV) {
    console.log('[Analytics]', event.name, event.properties);
  }
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function padNumber(num: number): string {
  return num.toString().padStart(2, '0');
}
