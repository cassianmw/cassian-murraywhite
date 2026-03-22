import Image from 'next/image';
import { FadeUp } from '@/components/animated';
import { SectionTitle } from '@/components/section-title';
import { getLatestYoutubeVideos } from '@/lib/youtube';
import { siteContent } from '@/lib/site-content';

export default async function YoutubePage() {
  let latestVideos = [] as Awaited<ReturnType<typeof getLatestYoutubeVideos>>;

  try {
    latestVideos = await getLatestYoutubeVideos(9);
  } catch {
    latestVideos = [];
  }

  return (
    <main className="section-shell py-16">
      <FadeUp>
        <SectionTitle
          title="YouTube"
          subtitle="Latest uploads pulled from your channel automatically"
        />
      </FadeUp>

      {latestVideos.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestVideos.map((video, index) => (
            <FadeUp key={video.id} delay={index * 0.06}>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-xl font-semibold text-white">{video.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
                    {video.description || 'Watch the latest upload on the channel.'}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : 'Recently uploaded'}
                  </p>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      ) : (
        <FadeUp>
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-white/15 bg-zinc-950/70 p-8 text-zinc-400">
            No videos are showing yet. Add <code className="text-zinc-200">YOUTUBE_API_KEY</code> and{' '}
            <code className="text-zinc-200">YOUTUBE_CHANNEL_ID</code> to your local and Vercel environment variables.
          </div>
        </FadeUp>
      )}

      <FadeUp delay={0.1}>
        <a
          href={siteContent.socials.youtube}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex border border-white bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition hover:bg-zinc-200"
        >
          Visit Channel
        </a>
      </FadeUp>
    </main>
  );
}
