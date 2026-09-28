// ============================================================
// JEVION 2K26 — Core Type Definitions
// ============================================================

export type EventCategory = 'technical' | 'non-technical';
export type EventDay = 1 | 2;
export type EventStatus = 'upcoming' | 'live' | 'completed';
export type AnnouncementPriority = 'low' | 'medium' | 'high' | 'urgent';
export type ResultCategory = 'winner' | 'runner-up' | 'special-mention';
export type GraphicsQuality = 'auto' | 'ultra' | 'high' | 'medium' | 'low';
export type RegistrationStep = 'participant' | 'events' | 'team' | 'payment' | 'confirmation';

export interface EventCoordinator {
  role: string;
  name: string;
  phone: string;
  email?: string;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  description: string;
  category: EventCategory;
  day: EventDay;
  date: string;
  time: string | null;
  venue: string;
  icon: string;
  heroImage: string | null;
  teamSize: string | null;
  fee: string;
  rules: string[];
  rounds: Round[];
  judging: string[];
  eligibility: string | null;
  submission: string | null;
  contact: EventContact | null;
  coordinators?: EventCoordinator[];
  registrationOpen: boolean;
  order: number;
}

export interface Round {
  name: string;
  description: string;
  duration: string | null;
}

export interface EventContact {
  name: string;
  phone: string;
}

export interface ScheduleItem {
  id: string;
  eventId: string;
  day: EventDay;
  date: string;
  time: string | null;
  endTime: string | null;
  title: string;
  category: EventCategory;
  venue: string;
  status: EventStatus;
}

export interface Coordinator {
  id: string;
  name: string;
  phone: string;
  role: 'faculty' | 'student';
  title: string;
  image: string | null;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  date: string;
  priority: AnnouncementPriority;
  category: string;
  read: boolean;
}

export interface Result {
  id: string;
  eventId: string;
  eventName: string;
  category: ResultCategory;
  participantName: string;
  college: string;
  teamName: string | null;
  points: number | null;
  published: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface RuleSet {
  eventId: string;
  eventName: string;
  category: EventCategory;
  eligibility: string;
  teamSize: string;
  rounds: Round[];
  rules: string[];
  judging: string[];
  submission: string | null;
  restrictions: string[];
  contact: EventContact | null;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface Participant {
  id: string;
  registrationId: string;
  name: string;
  college: string;
  department: string;
  year: number;
  email: string;
  phone: string;
  events: string[];
  teamDetails: TeamMember[];
  paymentStatus: 'pending' | 'verified' | 'failed';
  transactionId: string | null;
  registeredAt: string;
}

export interface TeamMember {
  name: string;
  college: string;
  department: string;
  year: number;
  email: string;
  phone: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  organizedBy: string;
  department: string;
  university: string;
  association: string;
  day1Date: string;
  day2Date: string;
  registrationFee: string;
  venue: VenueInfo;
  registrationOpen: boolean;
  resultsPublished: boolean;
  socialLinks: SocialLinks;
  contactEmail: string | null;
}

export interface VenueInfo {
  name: string;
  floor: string;
  building: string;
  mapUrl: string | null;
  coordinates: { lat: number; lng: number } | null;
}

export interface SocialLinks {
  instagram: string | null;
  linkedin: string | null;
  youtube: string | null;
  whatsapp: string | null;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
  mobileNav: boolean;
  mobileMore: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  teamName: string;
  participantName: string;
  college: string;
  points: number;
  events: string[];
}

export interface SearchResult {
  title: string;
  description: string;
  category: string;
  path: string;
  type: 'event' | 'schedule' | 'rule' | 'faq' | 'announcement' | 'coordinator';
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  duration?: number;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}
