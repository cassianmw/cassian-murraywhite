'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HoverLift } from '@/components/animated';

export function ImageCard({
  title,
  image,
  href,
  tall = false,
}: {
  title: string;
  image: string;
  href: string;
  tall?: boolean;
}) {
  return (
    <HoverLift>
      <Link
        href={href}
        className={`group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900 shadow-soft ${
          tall ? 'min-h-[420px]' : 'min-h-[280px]'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes={tall ? '(max-width: 1024px) 100vw, 40vw' : '(max-width: 1280px) 50vw, 25vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
          <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
          <ChevronRight className="h-5 w-5 text-white/80 transition group-hover:translate-x-1" />
        </div>
      </Link>
    </HoverLift>
  );
}
