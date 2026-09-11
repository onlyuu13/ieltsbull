import Link from 'next/link';
import { BullMark } from '@/components/BullMark';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { DesktopNav } from '@/components/DesktopNav';
import { ThemeToggle } from '@/components/ThemeToggle';

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="mx-auto flex h-14 max-w-shell items-center gap-2 px-4 sm:gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 rounded-lg">
          <BullMark className="h-8 w-8" />
          <span className="text-base font-semibold tracking-tight">雅思牛</span>
        </Link>

        <DesktopNav />

        {/* 这个弹性槽必须带 min-w-0，否则窄屏下会把兄弟元素挤成竖排（原站 600–768px 的 bug） */}
        <div className="min-w-0 flex-1">
          <Breadcrumbs />
        </div>

        {/* 倒计时是核心激励元素，窄屏也要保留，只收紧内边距 */}
        <span className="shrink-0 rounded-full bg-bull-cream px-2.5 py-1 text-[11px] font-medium text-bull-ink sm:px-3 sm:text-xs dark:bg-neutral-900 dark:text-neutral-300">
          距考试 <span className="tabular-nums">--</span> 天
        </span>

        <ThemeToggle />

        <Link
          href="/login"
          className="shrink-0 rounded-lg bg-bull-yellow px-3 py-2 text-sm font-semibold text-bull-ink transition hover:bg-bull-amber"
        >
          登录
        </Link>
      </div>
    </header>
  );
}
