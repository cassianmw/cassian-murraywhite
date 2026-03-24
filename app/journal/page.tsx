import Image from 'next/image';
import Link from 'next/link';
import { FadeUp } from '@/components/animated';
import { SectionTitle } from '@/components/section-title';
import { blogPosts } from '@/lib/blog-posts';

export default function JournalPage() {
  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider">
        <FadeUp>
          <SectionTitle
            title="Journal"
            subtitle="Writing on running, creativity, training, travel, and building this brand."
          />
        </FadeUp>

        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <FadeUp delay={index * 0.06} key={post.slug}>
              <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 shadow-soft">
                <Link href={`/journal/${post.slug}`} className="block">
                  <div className="relative min-h-[280px]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Link>

                <div className="p-6 md:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <Link href={`/journal/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-white transition hover:text-zinc-300">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-base leading-7 text-zinc-400">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/journal/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-wide text-white transition hover:text-zinc-300"
                  >
                    Read Post
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
