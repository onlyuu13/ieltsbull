'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, isActivePath } from '@/lib/nav';

/** 桌面端顶栏即导航；移动端交给 BottomTabs。 */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="主导航" className="hidden shrink-0 items-center gap-1 md:flex">
      {NAV_ITEMS.map((item) => {
        const active = isActivePath(item.href, pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={[
              'rounded-lg px-3 py-2 text-sm font-medium transition',
              active
                ? 'bg-bull-cream text-bull-ink dark:bg-neutral-900 dark:text-white'
                : 'text-bull-slate hover:bg-bull-cream hover:text-bull-ink dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white',
            ].join(' ')}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
