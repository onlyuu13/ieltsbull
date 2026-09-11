import { BullMark } from '@/components/BullMark';

export function UnderConstruction({ title, note }: { title: string; note?: string }) {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-neutral-300 px-6 py-14 text-center dark:border-neutral-700">
      <BullMark className="h-12 w-12 opacity-60" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm text-bull-slate dark:text-neutral-400">{note ?? '建设中，敬请期待。'}</p>
    </section>
  );
}
