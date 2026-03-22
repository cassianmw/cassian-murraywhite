import { getLatestYoutubeVideos } from '@/lib/youtube';

export async function GET() {
  try {
    const videos = await getLatestYoutubeVideos(6);

    if (!process.env.YOUTUBE_API_KEY || !process.env.YOUTUBE_CHANNEL_ID) {
      return Response.json(
        {
          videos: [],
          configured: false,
          message: 'Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID.',
        },
        { status: 200 }
      );
    }

    return Response.json({ videos, configured: true });
  } catch (error) {
    return Response.json(
      {
        videos: [],
        configured: true,
        error: error instanceof Error ? error.message : 'Unknown server error',
      },
      { status: 500 }
    );
  }
}
