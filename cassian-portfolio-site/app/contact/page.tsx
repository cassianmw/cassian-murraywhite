import { Mail, Instagram, Youtube } from 'lucide-react';
import { FadeUp } from '@/components/animated';
import { siteContent } from '@/lib/site-content';

export default function ContactPage() {
  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider">
        <FadeUp>
          <h1 className="text-4xl font-black uppercase md:text-6xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            {siteContent.contact.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href={`mailto:${siteContent.socials.email}`}
              className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <Mail className="h-6 w-6" />
              <h2 className="mt-4 text-xl font-bold">Email</h2>
              <p className="mt-2 text-zinc-400">{siteContent.socials.email}</p>
            </a>
            <a
              href={siteContent.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <Instagram className="h-6 w-6" />
              <h2 className="mt-4 text-xl font-bold">Instagram</h2>
              <p className="mt-2 text-zinc-400">Link your profile here</p>
            </a>
            <a
              href={siteContent.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <Youtube className="h-6 w-6" />
              <h2 className="mt-4 text-xl font-bold">YouTube</h2>
              <p className="mt-2 text-zinc-400">Connect your channel here</p>
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
