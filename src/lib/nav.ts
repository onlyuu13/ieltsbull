export type IconName = 'home' | 'vocab' | 'reading' | 'mistakes' | 'stats';

export interface NavItem {
  href: string;
  label: string;
  icon: IconName;
}

/** 底部 Tab（移动端）与顶栏导航（桌面端）共用同一份定义，避免两处走样。 */
export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: '首页', icon: 'home' },
  { href: '/vocab', label: '背单词', icon: 'vocab' },
  { href: '/reading', label: '阅读', icon: 'reading' },
  { href: '/mistakes', label: '错题', icon: 'mistakes' },
  { href: '/stats', label: '统计', icon: 'stats' },
] as const;

/** 顶栏面包屑用的路由标签表。 */
export const ROUTE_LABELS: Readonly<Record<string, string>> = {
  '/': '首页',
  '/vocab': '背单词',
  '/reading': '阅读',
  '/mistakes': '错题',
  '/stats': '统计',
  '/login': '登录',
};

/** 判断某个导航项在当前路径下是否高亮。根路由只在完全相等时高亮。 */
export function isActivePath(itemHref: string, pathname: string): boolean {
  if (itemHref === '/') return pathname === '/';
  return pathname === itemHref || pathname.startsWith(`${itemHref}/`);
}

/** 由当前路径生成面包屑，如 "/reading" → ["首页", "阅读"]。 */
export function breadcrumbFor(pathname: string): string[] {
  if (pathname === '/') return ['首页'];
  const label = ROUTE_LABELS[pathname];
  return label ? ['首页', label] : ['首页'];
}
