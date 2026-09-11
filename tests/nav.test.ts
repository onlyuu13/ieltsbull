import { describe, expect, it } from 'vitest';
import { NAV_ITEMS, ROUTE_LABELS, breadcrumbFor, isActivePath } from '@/lib/nav';

describe('NAV_ITEMS', () => {
  it('恰好五个底部 Tab，且路径互不重复', () => {
    expect(NAV_ITEMS).toHaveLength(5);
    expect(new Set(NAV_ITEMS.map((i) => i.href)).size).toBe(5);
  });

  it('每个导航项都有面包屑标签', () => {
    for (const item of NAV_ITEMS) {
      expect(ROUTE_LABELS[item.href]).toBeTruthy();
    }
  });
});

describe('isActivePath', () => {
  it('根路由只在完全相等时高亮', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/reading')).toBe(false);
  });

  it('子路由让父导航项保持高亮', () => {
    expect(isActivePath('/reading', '/reading')).toBe(true);
    expect(isActivePath('/reading', '/reading/cam18-t1-p1')).toBe(true);
  });

  it('不把前缀相同的兄弟路由误判为子路由', () => {
    expect(isActivePath('/reading', '/reading-list')).toBe(false);
  });
});

describe('breadcrumbFor', () => {
  it('首页只有一级', () => {
    expect(breadcrumbFor('/')).toEqual(['首页']);
  });

  it('已知路由展开为两级', () => {
    expect(breadcrumbFor('/reading')).toEqual(['首页', '阅读']);
  });

  it('未知路由退回首页一级，不泄漏内部 ID', () => {
    expect(breadcrumbFor('/reading/cam18-t1-p1')).toEqual(['首页']);
  });
});
