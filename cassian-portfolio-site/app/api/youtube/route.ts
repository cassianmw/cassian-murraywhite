import { NextResponse } from 'next/server';
import { getLatestYoutubeVideos } from '@/lib/youtube';

export const revalidate = 3600;

export async function GET() {
  try {
    const videos = await getLatestYoutubeVideos(6);
    return NextResponse.json({ videos });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown server error',
      },
      { status: 500 },
    );
  }
}
