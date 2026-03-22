export type YoutubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

type ChannelsResponse = {
  items?: Array<{
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
};

type PlaylistItemsResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: {
        default?: { url: string };
        medium?: { url: string };
        high?: { url: string };
        standard?: { url: string };
        maxres?: { url: string };
      };
      resourceId?: {
        videoId?: string;
      };
    };
    contentDetails?: {
      videoId?: string;
    };
  }>;
};

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

function pickThumbnail(
  thumbnails?: PlaylistItemsResponse['items'][number]['snippet']['thumbnails'],
) {
  return (
    thumbnails?.maxres?.url ||
    thumbnails?.standard?.url ||
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url ||
    ''
  );
}

async function youtubeFetch<T>(path: string, params: Record<string, string>, revalidate = 3600) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error('Missing YOUTUBE_API_KEY');
  }

  const searchParams = new URLSearchParams({ ...params, key: apiKey });
  const response = await fetch(`${YOUTUBE_API_BASE}${path}?${searchParams.toString()}`, {
    next: { revalidate },
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`YouTube API error ${response.status}: ${details}`);
  }

  return (await response.json()) as T;
}

export async function getLatestYoutubeVideos(limit = 3): Promise<YoutubeVideo[]> {
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!channelId) {
    throw new Error('Missing YOUTUBE_CHANNEL_ID');
  }

  const channelData = await youtubeFetch<ChannelsResponse>('/channels', {
    part: 'contentDetails',
    id: channelId,
  });

  const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    throw new Error('Could not find uploads playlist for this channel');
  }

  const playlistData = await youtubeFetch<PlaylistItemsResponse>('/playlistItems', {
    part: 'snippet,contentDetails',
    playlistId: uploadsPlaylistId,
    maxResults: String(limit),
  });

  return (playlistData.items || [])
    .map((item) => {
      const videoId = item.contentDetails?.videoId || item.snippet?.resourceId?.videoId;
      if (!videoId || !item.snippet?.title) return null;

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description || '',
        publishedAt: item.snippet.publishedAt || '',
        thumbnail: pickThumbnail(item.snippet.thumbnails),
        url: `https://www.youtube.com/watch?v=${videoId}`,
      } satisfies YoutubeVideo;
    })
    .filter((video): video is YoutubeVideo => Boolean(video));
}
