export type PhotoPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  category: string;
  location?: string;
  images: string[];
};

export const photoPosts: PhotoPost[] = [
  {
    slug: 'jasper-winter-run',
    title: 'Jasper Winter Run',
    date: '2026-03-20',
    excerpt: 'A cold-weather running and landscape session in Jasper.',
    coverImage:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    category: 'Running',
    location: 'Jasper, Alberta',
    images: [
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'downtown-after-dark',
    title: 'Downtown After Dark',
    date: '2026-03-10',
    excerpt: 'Street photography with cinematic contrast and movement.',
    coverImage:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
    category: 'Street',
    location: 'Edmonton, Alberta',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'ridge-hike-story',
    title: 'Ridge Hike Story',
    date: '2026-02-28',
    excerpt: 'Landscape frames from a long alpine day in the mountains.',
    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    category: 'Landscape',
    location: 'Kananaskis, Alberta',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
    ],
  },
];

export function getPhotoPost(slug: string) {
  return photoPosts.find((post) => post.slug === slug);
}
