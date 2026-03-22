import Image from 'next/image';
import Link from 'next/link';
import { Play, Mail, Instagram, Youtube, Camera } from 'lucide-react';
import { FadeUp } from '@/components/animated';
import { ImageCard } from '@/components/image-card';
import { SectionTitle } from '@/components/section-title';
import { siteContent } from '@/lib/site-content';
import { getLatestYoutubeVideos } from '@/lib/youtube';

export default async function HomePage() {
  let latestVideos = [] as Awaited<ReturnType<typeof getLatestYoutubeVideos>>;

  try {
    latestVideos = await getLatestYoutubeVideos(3);
  } catch {
    latestVideos = [];
  }

  const featuredVideo = latestVideos[0];
  const sideVideos = latestVideos.slice(1, 3);

  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={siteContent.hero.image}
            alt="Running through mountain landscape"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="section-shell relative flex min-h-[78vh] items-center py-24">
          <div className="max-w-3xl">
            <FadeUp>
              <h1 className="text-balance text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
                {siteContent.hero.title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-5 max-w-xl text-xl italic text-zinc-200 md:text-2xl">
                {siteContent.hero.subtitle}
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link
                href={siteContent.hero.buttonHref}
                className="mt-8 inline-flex border border-white bg-black px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                {siteContent.hero.buttonLabel}
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 md:py-14">
        <div className="section-divider">
          <SectionTitle title={siteContent.photography.title} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.photography.categories.map((item, index) => (
              <FadeUp delay={index * 0.08} key={item.title}>
                <ImageCard title={item.title} image={item.image} href={item.href} />
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="section-divider mt-14">
          <SectionTitle title={siteContent.videos.title} subtitle={siteContent.videos.subtitle} />

          {featuredVideo ? (
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              <FadeUp>
                <a
                  href={featuredVideo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block min-h-[440px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-soft"
                >
                  <Image
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-zinc-200 backdrop-blur-sm">
                      <Play className="h-4 w-4" /> Latest Upload
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white md:text-4xl">{featuredVideo.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-300">
                        {featuredVideo.publishedAt
                          ? new Date(featuredVideo.publishedAt).toLocaleDateString()
                          : 'New video'}
                      </p>
                      <span className="mt-6 inline-flex border border-white bg-black px-7 py-4 text-base font-bold uppercase tracking-wide transition group-hover:bg-white group-hover:text-black">
                        Watch Now
                      </span>
                    </div>
                  </div>
                </a>
              </FadeUp>

              <div className="grid gap-4">
                {sideVideos.map((item, index) => (
                  <FadeUp delay={0.08 * (index + 1)} key={item.id}>
                    <ImageCard title={item.title} image={item.thumbnail} href={item.url} tall />
                  </FadeUp>
                ))}
              </div>
            </div>
          ) : (
            <FadeUp>
              <div className="rounded-[1.75rem] border border-dashed border-white/15 bg-zinc-950/70 p-8 text-zinc-400">
                Add your YouTube API key and channel ID to show your latest uploads here.
              </div>
            </FadeUp>
          )}
        </div>

        <div className="section-divider mt-14">
          <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-zinc-950 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-12">
            <FadeUp>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
                <Camera className="h-4 w-4" /> Creative Athlete Portfolio
              </div>
              <h2 className="text-4xl font-black uppercase md:text-5xl">{siteContent.about.title}</h2>
              <p className="mt-4 text-2xl italic text-zinc-300">{siteContent.about.tagline}</p>
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
                {siteContent.about.body}
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex border border-white bg-black px-8 py-4 text-base font-bold uppercase tracking-wide transition hover:bg-white hover:text-black"
              >
                Learn More
              </Link>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-soft">
                <Image
                  src={siteContent.about.image}
                  alt="Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="section-divider mt-14 pb-12">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 md:p-12">
            <FadeUp>
              <h2 className="text-3xl font-black uppercase md:text-5xl">{siteContent.contact.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                {siteContent.contact.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-8 flex flex-col gap-4 md:flex-row">
              <a
                href={`mailto:${siteContent.socials.email}`}
                className="inline-flex items-center justify-center gap-2 border border-white bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition hover:bg-zinc-200"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href={siteContent.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={siteContent.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                <Youtube className="h-4 w-4" /> YouTube
              </a>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}
