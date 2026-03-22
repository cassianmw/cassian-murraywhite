import Image from 'next/image';
import { FadeUp } from '@/components/animated';
import { siteContent } from '@/lib/site-content';

export default function AboutPage() {
  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
        <FadeUp>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">About</p>
          <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">{siteContent.about.title}</h1>
          <p className="mt-4 text-2xl italic text-zinc-300">{siteContent.about.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            {siteContent.about.body}
          </p>
          <p className="mt-6 text-base font-semibold text-white">Based in {siteContent.about.location}</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
            <Image
              src={siteContent.about.image}
              alt="About portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
