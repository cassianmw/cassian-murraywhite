export const siteContent = {
  brand: 'CASSIAN MURRAY-WHITE',
  nav: [
    { label: 'Photography', href: '/photography' },
    { label: 'YouTube', href: '/youtube' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  socials: {
    youtube: 'https://youtube.com/@cassmw',
    instagram: 'https://instagram.com/',
    email: 'cassianmw@gmail.com',
  },
  hero: {
    title: 'RUN. CREATE. EXPLORE.',
    subtitle: 'Stories through motion and landscape.',
    buttonLabel: 'View Work',
    buttonHref: '/photography',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80',
  },
  photography: {
    title: 'Photography Portfolio',
    description: 'A collection of running, landscape, street, and lifestyle work.',
    categories: [
      {
        title: 'Running',
        href: '/photography',
        image:
          'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Landscapes',
        href: '/photography',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Street',
        href: '/photography',
        image:
          'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Lifestyle',
        href: '/photography',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  videos: {
    title: 'Latest Videos',
    subtitle: 'CassMW on YouTube',
    featured: {
      title: 'Chasing the Next Mile',
      subtitle: 'Training Vlog',
      href: 'https://youtube.com/@cassmw',
      image:
        'https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1600&q=80',
    },
    videos: [
      {
        title: 'Trail Run Vlog',
        href: 'https://youtube.com/@cassmw',
        image:
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Race Day Recap',
        href: 'https://youtube.com/@cassmw',
        image:
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Behind the Lens',
        href: 'https://youtube.com/@cassmw',
        image:
          'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  about: {
    title: 'About Me',
    tagline: 'Runner. Creator. Storyteller.',
    body: 'I create visual stories that connect movement, endurance, and outdoor landscapes. This site is built to showcase photography, film, and personal storytelling in a clean, cinematic format.',
    location: 'Edmonton, Alberta',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
  },
  contact: {
    title: 'Let’s Build Something Memorable',
    description:
      'Available for photography, brand work, content creation, athlete storytelling, and collaborations.',
  },
} as const;

export type SiteContent = typeof siteContent;
