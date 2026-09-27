import { Coordinator } from '../types';

export const coordinators: Coordinator[] = [
  {
    id: 'fac-1',
    name: 'Mrs. M. Sheeba',
    phone: '+91 9944481587',
    role: 'faculty',
    title: 'Faculty Coordinator',
    image: null
  },
  {
    id: 'fac-2',
    name: 'Mr. S. Sashikumar',
    phone: '+91 9629301892',
    role: 'faculty',
    title: 'Faculty Coordinator',
    image: null
  },
  {
    id: 'stud-1',
    name: 'Vishvas',
    phone: '+91 9360729933',
    role: 'student',
    title: 'Student Coordinator',
    image: null
  },
  {
    id: 'stud-2',
    name: 'Giravaran.C',
    phone: '+91 8056306369',
    role: 'student',
    title: 'Student Coordinator',
    image: null
  }
];

export function getCoordinatorsByRole(role: 'faculty' | 'student'): Coordinator[] {
  return coordinators.filter(c => c.role === role);
}
