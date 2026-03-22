# Cassian Portfolio Site

A cinematic multi-page Next.js portfolio built for Vercel.

## Setup

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

## YouTube homepage API

This project includes a server-side route at `app/api/youtube/route.ts`.
It pulls your latest channel videos from the YouTube Data API and the homepage uses the same server-side helper to feature your newest uploads.

### 1. Get your YouTube API key

- Go to Google Cloud Console
- Create or select a project
- Enable the **YouTube Data API v3**
- Create an API key

### 2. Find your channel ID

Use your channel's ID value, not the `@handle`.

### 3. Add environment variables locally

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```bash
YOUTUBE_API_KEY=your_youtube_data_api_key
YOUTUBE_CHANNEL_ID=your_youtube_channel_id
```

### 4. Add environment variables in Vercel

In your Vercel project:

- open **Settings**
- open **Environment Variables**
- add `YOUTUBE_API_KEY`
- add `YOUTUBE_CHANNEL_ID`
- redeploy the project

### 5. Test it

When the site is running, visit:

- `/api/youtube` to test the API response
- `/` to confirm the homepage video section updates from your channel

## Files added for YouTube integration

- `app/api/youtube/route.ts`
- `lib/youtube.ts`
- `.env.example`

## Notes

- If the environment variables are missing, the homepage falls back to the placeholder video cards.
- The YouTube fetch is revalidated every hour.
