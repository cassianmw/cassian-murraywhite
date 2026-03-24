import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FadeUp } from '@/components/animated';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="section-shell py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
            {post.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            {post.excerpt}
          </p>
        </FadeUp>

        <FadeUp delay={0.06}>
          <div className="relative mt-10 min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeUp>

        <div className="prose prose-invert mt-10 max-w-none">
          {post.content.map((paragraph, index) => (
            <FadeUp delay={0.08 + index * 0.03} key={index}>
              <p className="mb-6 text-lg leading-8 text-zinc-300">{paragraph}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
