// ============================================================
// JEVION 2K26 — API Service Abstraction Layer
// ============================================================
// This layer abstracts data fetching so the frontend can switch
// from local data files to a real backend API without rewriting
// components. Currently uses local data imports.

import type { Event, ScheduleItem, Announcement, Result, FAQItem, RuleSet, GalleryItem, LeaderboardEntry, Participant } from '../types';
import { events, getEventBySlug } from '../data/events';
import { schedule } from '../data/schedule';
import { announcements } from '../data/announcements';
import { results } from '../data/results';
import { faq } from '../data/faq';
import { rules } from '../data/rules';
import { gallery } from '../data/gallery';

// Simulate network delay for development
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ==================== Events ====================

export async function fetchEvents(): Promise<Event[]> {
  await delay(100);
  return events;
}

export async function fetchEventBySlug(slug: string): Promise<Event | null> {
  await delay(100);
  return getEventBySlug(slug) || null;
}

// ==================== Schedule ====================

export async function fetchSchedule(): Promise<ScheduleItem[]> {
  await delay(100);
  return schedule;
}

// ==================== Announcements ====================

export async function fetchAnnouncements(): Promise<Announcement[]> {
  await delay(100);
  return announcements;
}

// ==================== Results ====================

export async function fetchResults(): Promise<Result[]> {
  await delay(100);
  return results;
}

// ==================== FAQ ====================

export async function fetchFAQ(): Promise<FAQItem[]> {
  await delay(100);
  return faq;
}

// ==================== Rules ====================

export async function fetchRules(): Promise<RuleSet[]> {
  await delay(100);
  return rules;
}

// ==================== Gallery ====================

export async function fetchGallery(): Promise<GalleryItem[]> {
  await delay(100);
  return gallery;
}

// ==================== Leaderboard ====================

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  await delay(100);
  // Mock leaderboard data
  return [
    { rank: 1, teamName: 'Team Alpha', participantName: 'Demo Participant', college: 'Demo College', points: 95, events: ['code-hack', 'hunt-iq'] },
    { rank: 2, teamName: 'Team Beta', participantName: 'Demo Participant 2', college: 'Demo College 2', points: 88, events: ['tech-talk'] },
    { rank: 3, teamName: 'Team Gamma', participantName: 'Demo Participant 3', college: 'Demo College 3', points: 82, events: ['erasex', 'code-hack'] },
  ];
}

// ==================== Registration ====================

export interface RegistrationPayload {
  name: string;
  college: string;
  department: string;
  year: number;
  email: string;
  phone: string;
  events: string[];
  teamMembers?: Array<{
    name: string;
    email: string;
    phone: string;
  }>;
}

export interface RegistrationResponse {
  success: boolean;
  registrationId: string;
  message: string;
}

export async function submitRegistration(payload: RegistrationPayload): Promise<RegistrationResponse> {
  await delay(500);
  // In production, this would POST to /api/register
  const registrationId = `JVX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  
  // Store in localStorage for demo
  const registrations = JSON.parse(localStorage.getItem('JEVION_registrations') || '[]');
  registrations.push({
    ...payload,
    registrationId,
    paymentStatus: 'pending',
    registeredAt: new Date().toISOString(),
  });
  localStorage.setItem('JEVION_registrations', JSON.stringify(registrations));

  return {
    success: true,
    registrationId,
    message: 'Registration submitted successfully. Payment verification is pending.',
  };
}

export async function fetchRegistration(id: string): Promise<Participant | null> {
  await delay(200);
  const registrations = JSON.parse(localStorage.getItem('JEVION_registrations') || '[]');
  const reg = registrations.find((r: Record<string, string>) => r.registrationId === id);
  if (!reg) return null;
  
  return {
    id: reg.registrationId,
    registrationId: reg.registrationId,
    name: reg.name,
    college: reg.college,
    department: reg.department,
    year: reg.year,
    email: reg.email,
    phone: reg.phone,
    events: reg.events,
    teamDetails: [],
    paymentStatus: reg.paymentStatus || 'pending',
    transactionId: null,
    registeredAt: reg.registeredAt,
  };
}
