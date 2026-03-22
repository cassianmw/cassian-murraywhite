# Cassian Portfolio Site

A cinematic, editable portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content fast

Most of the site text, links, and image URLs live in:

- `lib/site-content.ts`

That is the main file to edit for:

- site title
- nav links
- hero text
- photo categories
- about section
- contact links

## YouTube API setup

This project now includes:

- `app/api/youtube/route.ts` for a Vercel-friendly API endpoint
- `lib/youtube.ts` for server-side YouTube fetching logic
- dynamic homepage and `/youtube` page video loading

### 1. Get your YouTube channel ID

In YouTube Studio or your channel page source, copy your channel ID. It usually starts with `UC`.

### 2. Create a YouTube Data API key

Create a Google Cloud project, enable the YouTube Data API v3, and generate an API key.

### 3. Add local environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Then set:

```bash
YOUTUBE_API_KEY=your_real_key
YOUTUBE_CHANNEL_ID=your_real_channel_id
```

### 4. Test locally

```bash
npm run dev
```

Visit:

- `http://localhost:3000/`
- `http://localhost:3000/youtube`
- `http://localhost:3000/api/youtube`

## Deploy to Vercel

1. Push this folder to GitHub
2. Import the repo into Vercel
3. In Vercel Project Settings, add:
   - `YOUTUBE_API_KEY`
   - `YOUTUBE_CHANNEL_ID`
4. Redeploy

## Pages included

- `/` Home
- `/photography`
- `/youtube`
- `/about`
- `/contact`
- `/api/youtube`

## Notes

- Replace the placeholder Unsplash images with your own photos
- Replace Instagram and YouTube links with your real profiles
- The YouTube section reads your latest uploads automatically from your channel
- You can later connect a CMS like Sanity if you want visual editing without touching code
