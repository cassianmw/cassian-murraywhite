export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">{title}</h2>
      {subtitle ? <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p> : null}
    </div>
  );
}
