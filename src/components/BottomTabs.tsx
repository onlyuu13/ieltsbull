'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavIcon } from '@/components/NavIcon';
import { NAV_ITEMS, isActivePath } from '@/lib/nav';

/** 仅移动端显示的底部悬浮 Tab。桌面端隐藏，导航由顶栏承担。 */
export function BottomTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="底部导航"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden dark:border-neutral-800 dark:bg-neutral-950/95"
    >
      <ul className="mx-auto grid max-w-shell grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const active = isActivePath(item.href, pathname);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'flex min-w-0 flex-col items-center gap-1 py-2 text-[11px] font-medium transition',
                  active ? 'text-bull-amber' : 'text-bull-slate dark:text-neutral-400',
                ].join(' ')}
              >
                <NavIcon name={item.icon} />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
