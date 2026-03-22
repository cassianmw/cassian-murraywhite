'use client';

import Link from 'next/link';
import { Youtube, Menu } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '@/lib/site-content';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-black tracking-wide md:text-2xl">
          {siteContent.brand}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteContent.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 p-2 transition hover:bg-white hover:text-black"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </nav>

        <button
          className="rounded-full border border-white/15 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="section-shell flex flex-col gap-4 py-4">
            {siteContent.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-zinc-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
