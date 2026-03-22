export type YoutubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

type YoutubeSearchResponse = {
  items?: Array<{
    id?: { videoId?: string };
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: {
        default?: { url?: string };
        medium?: { url?: string };
        high?: { url?: string };
        standard?: { url?: string };
        maxres?: { url?: string };
      };
    };
  }>;
};

function getThumbnail(snippet?: YoutubeSearchResponse['items'][number]['snippet']) {
  return (
    snippet?.thumbnails?.maxres?.url ||
    snippet?.thumbnails?.standard?.url ||
    snippet?.thumbnails?.high?.url ||
    snippet?.thumbnails?.medium?.url ||
    snippet?.thumbnails?.default?.url ||
    ''
  );
}

export async function getLatestYoutubeVideos(maxResults = 3): Promise<YoutubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return [];
  }

  const params = new URLSearchParams({
    key: apiKey,
    channelId,
    part: 'snippet,id',
    order: 'date',
    type: 'video',
    maxResults: String(maxResults),
  });

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`YouTube API request failed: ${response.status} ${details}`);
  }

  const data = (await response.json()) as YoutubeSearchResponse;

  return (data.items || [])
    .filter((item) => item.id?.videoId)
    .map((item) => ({
      id: item.id!.videoId!,
      title: item.snippet?.title || 'Untitled video',
      description: item.snippet?.description || '',
      publishedAt: item.snippet?.publishedAt || '',
      thumbnail: getThumbnail(item.snippet),
      url: `https://www.youtube.com/watch?v=${item.id!.videoId!}`,
    }));
}
