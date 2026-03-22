import Link from 'next/link';
import { siteContent } from '@/lib/site-content';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteContent.brand}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/photography" className="hover:text-white">Photography</Link>
          <Link href="/youtube" className="hover:text-white">YouTube</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
