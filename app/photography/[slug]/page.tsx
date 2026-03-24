import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FadeUp } from '@/components/animated';
import { getPhotoPost, photoPosts } from '@/lib/photo-posts';

export function generateStaticParams() {
  return photoPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PhotoPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPhotoPost(slug);

  if (!post) notFound();

  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              {post.location ? (
                <>
                  <span>•</span>
                  <span>{post.location}</span>
                </>
              ) : null}
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              {post.excerpt}
            </p>
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {post.images.map((image, index) => (
            <FadeUp delay={index * 0.05} key={image}>
              <div className="group relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-soft">
                <Image
                  src={image}
                  alt={`${post.title} image ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
