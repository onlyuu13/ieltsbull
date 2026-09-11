import Link from 'next/link';
import { BullMark } from '@/components/BullMark';

interface Subject {
  key: string;
  name: string;
  english: string;
  blurb: string;
  href?: string;
}

const SUBJECTS: readonly Subject[] = [
  { key: 'listening', name: '听力', english: 'Listening', blurb: 'Part 1–4 精听与答题' },
  { key: 'reading', name: '阅读', english: 'Reading', blurb: '逐句精读 + 八种题型作答', href: '/reading' },
  { key: 'writing', name: '写作', english: 'Writing', blurb: 'Task 1/2 限时写作与批改' },
  { key: 'speaking', name: '口语', english: 'Speaking', blurb: '题库、录音与评分' },
] as const;

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col items-start gap-5 rounded-2xl bg-bull-cream px-6 py-10 sm:px-10 dark:bg-neutral-900">
        <BullMark className="h-14 w-14" />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">在真题里学雅思</h1>
          <p className="max-w-prose text-sm leading-relaxed text-bull-slate sm:text-base dark:text-neutral-400">
            精读一篇、背完当天的词、做一套题、把错因记下来。每天一个闭环，分数自己会走上去。
          </p>
        </div>
        <Link
          href="/vocab"
          className="rounded-xl bg-bull-yellow px-5 py-3 text-sm font-semibold text-bull-ink transition hover:bg-bull-amber"
        >
          开始今天的任务
        </Link>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">四科入口</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUBJECTS.map((subject) => (
            <SubjectCard key={subject.key} subject={subject} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">最近学习</h2>
        <div className="rounded-2xl border border-dashed border-neutral-300 px-6 py-10 text-center dark:border-neutral-700">
          <p className="text-sm text-bull-slate dark:text-neutral-400">
            还没有学习记录。完成一次背词或精读后，这里会显示「继续上次」。
          </p>
        </div>
      </section>
    </div>
  );
}

function SubjectCard({ subject }: { subject: Subject }) {
  const inner = (
    <>
      <div className="flex min-w-0 items-center justify-between gap-2">
        <span className="truncate text-base font-semibold">{subject.name}</span>
        {subject.href ? null : (
          <span className="shrink-0 rounded-full bg-neutral-200 px-2 py-0.5 text-[11px] font-medium text-bull-slate dark:bg-neutral-800 dark:text-neutral-400">
            即将上线
          </span>
        )}
      </div>
      <span className="text-xs uppercase tracking-wide text-bull-slate dark:text-neutral-500">
        {subject.english}
      </span>
      <span className="text-sm text-bull-slate dark:text-neutral-400">{subject.blurb}</span>
    </>
  );

  const base =
    'flex min-w-0 flex-col gap-1.5 rounded-2xl border p-5 transition border-neutral-200 dark:border-neutral-800';

  if (!subject.href) {
    return (
      <div aria-disabled="true" className={`${base} opacity-60`}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={subject.href}
      className={`${base} hover:border-bull-yellow hover:bg-bull-cream dark:hover:border-bull-amber dark:hover:bg-neutral-900`}
    >
      {inner}
    </Link>
  );
}
