import { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    src: '/images/gallery/placeholder-1.jpg',
    alt: 'JEVION Inauguration',
    category: 'inauguration',
    width: 800,
    height: 600
  },
  {
    id: 'gal-2',
    src: '/images/gallery/placeholder-2.jpg',
    alt: 'Tech Talk Participants',
    category: 'events',
    width: 800,
    height: 600
  },
  {
    id: 'gal-3',
    src: '/images/gallery/placeholder-3.jpg',
    alt: 'Valedictory Function',
    category: 'valedictory',
    width: 800,
    height: 600
  }
];

export function getGalleryCategories(): string[] {
  const categories = new Set(galleryItems.map(item => item.category));
  return Array.from(categories);
}

export function getGalleryByCategory(category: string): GalleryItem[] {
  if (category === 'all') return galleryItems;
  return galleryItems.filter(item => item.category === category);
}

export const gallery = galleryItems;

