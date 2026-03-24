import Link from 'next/link';
import { FadeUp } from '@/components/animated';
import { SectionTitle } from '@/components/section-title';
import { photoPosts } from '@/lib/photo-posts';
import { ImageCard } from '@/components/image-card';

export default function PhotographyPage() {
  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider">
        <FadeUp>
          <SectionTitle
            title="Photography Stories"
            subtitle="Collections, shoots, and visual stories from running, landscape, and street work."
          />
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photoPosts.map((post, index) => (
            <FadeUp delay={index * 0.06} key={post.slug}>
              <div className="space-y-3">
                <ImageCard title={post.title} image={post.coverImage} href={`/photography/${post.slug}`} />
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-sm text-zinc-400">{post.excerpt}</p>
                  <Link
                    href={`/photography/${post.slug}`}
                    className="mt-3 inline-flex text-sm font-semibold uppercase tracking-wide text-white transition hover:text-zinc-300"
                  >
                    View Story
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
