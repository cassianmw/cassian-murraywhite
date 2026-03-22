import Image from 'next/image';
import { FadeUp } from '@/components/animated';
import { SectionTitle } from '@/components/section-title';
import { siteContent } from '@/lib/site-content';

export default function PhotographyPage() {
  return (
    <main className="section-shell py-10 md:py-14">
      <div className="section-divider">
        <FadeUp>
          <SectionTitle title="Photography" subtitle={siteContent.photography.description} />
        </FadeUp>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.photography.gallery.map((image, index) => (
            <FadeUp delay={index * 0.06} key={image}>
              <div className="group relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-soft">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
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
