export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-i-film-training',
    title: 'Why I Film Training',
    date: '2026-03-22',
    excerpt: 'Why I want running content to feel cinematic instead of disposable.',
    coverImage:
      'https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1600&q=80',
    category: 'Creative Process',
    content: [
      'I do not see training footage as throwaway content. The best clips hold atmosphere, routine, effort, and emotion in a way that race results alone cannot.',
      'That is part of why I want this site to work like a journal. I want a place where photo sets, videos, and written thoughts can live together instead of feeling scattered across platforms.',
      'Over time, this section can become an archive of races, edits, trips, and projects.',
    ],
  },
  {
    slug: 'building-a-creative-athlete-site',
    title: 'Building a Creative Athlete Site',
    date: '2026-03-18',
    excerpt: 'Turning a portfolio into something that feels alive and updateable.',
    coverImage:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    category: 'Website',
    content: [
      'A static portfolio looks polished, but it can feel frozen. I wanted something that works more like an editorial archive.',
      'The goal is simple: publish new photography work, connect YouTube videos, and add written stories without rebuilding the whole site every time.',
      'That is the direction this version is moving toward.',
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
