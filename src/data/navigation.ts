import { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/', icon: 'home', mobileNav: true, mobileMore: false },
  { label: 'About', path: '/about', icon: 'info', mobileNav: false, mobileMore: true },
  { label: 'Events', path: '/events', icon: 'calendar', mobileNav: true, mobileMore: false },
  { label: 'Schedule', path: '/schedule', icon: 'clock', mobileNav: true, mobileMore: false },
  { label: 'Rules', path: '/rules', icon: 'book', mobileNav: false, mobileMore: true },
  { label: 'Register', path: '/register', icon: 'user-plus', mobileNav: true, mobileMore: false },
  { label: 'Gallery', path: '/gallery', icon: 'image', mobileNav: false, mobileMore: true },
  { label: 'Results', path: '/results', icon: 'award', mobileNav: false, mobileMore: true },
  { label: 'Contact', path: '/contact', icon: 'phone', mobileNav: false, mobileMore: true },
  { label: 'FAQ', path: '/faq', icon: 'help-circle', mobileNav: false, mobileMore: true },
  { label: 'Sponsors', path: '/sponsors', icon: 'star', mobileNav: false, mobileMore: true },
  { label: 'Leaderboard', path: '/leaderboard', icon: 'bar-chart', mobileNav: false, mobileMore: true },
  { label: 'Command Center', path: '/command-center', icon: 'terminal', mobileNav: false, mobileMore: false }
];

export const mobilePrimaryNav = navItems.filter(item => item.mobileNav);
export const mobileMoreNav = navItems.filter(item => item.mobileMore);
