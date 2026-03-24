import { Play } from 'lucide-react';
import { FadeUp } from '@/components/animated';
import { ImageCard } from '@/components/image-card';
import { SectionTitle } from '@/components/section-title';
import { siteContent } from '@/lib/site-content';

export default function YoutubePage() {
  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider">
        <FadeUp>
          <SectionTitle
            title="Video"
            subtitle="Training vlogs, race recaps, and cinematic storytelling."
          />
        </FadeUp>

        <FadeUp delay={0.08}>
          <a
            href={siteContent.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="mb-8 inline-flex items-center gap-2 border border-white bg-white px-8 py-4 font-bold uppercase tracking-wide text-black transition hover:bg-zinc-200"
          >
            <Play className="h-4 w-4" /> Visit Channel
          </a>
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.videos.videos.map((item, index) => (
            <FadeUp delay={index * 0.08} key={item.title}>
              <ImageCard title={item.title} image={item.image} href={item.href} />
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
