'use client';

import { usePathname } from 'next/navigation';
import { breadcrumbFor } from '@/lib/nav';

export function Breadcrumbs() {
  const pathname = usePathname();
  const trail = breadcrumbFor(pathname);

  // 只有一级时不渲染：首页的面包屑会和顶栏导航里的「首页」视觉重复。
  if (trail.length < 2) return null;

  return (
    <nav
      aria-label="面包屑"
      className="hidden min-w-0 truncate text-sm text-bull-slate sm:block dark:text-neutral-400"
    >
      {trail.join(' / ')}
    </nav>
  );
}
