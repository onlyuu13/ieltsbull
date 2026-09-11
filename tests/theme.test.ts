import { describe, expect, it } from 'vitest';
import { nextTheme, resolveTheme } from '@/lib/theme';

describe('resolveTheme', () => {
  it('用户显式选择优先于系统偏好', () => {
    expect(resolveTheme('light', true)).toBe('light');
    expect(resolveTheme('dark', false)).toBe('dark');
  });

  it('没有存储值时跟随系统', () => {
    expect(resolveTheme(null, true)).toBe('dark');
    expect(resolveTheme(null, false)).toBe('light');
    expect(resolveTheme(undefined, true)).toBe('dark');
  });

  it('存储值损坏时退回系统偏好而不是崩溃', () => {
    expect(resolveTheme('banana', true)).toBe('dark');
    expect(resolveTheme('', false)).toBe('light');
  });
});

describe('nextTheme', () => {
  it('在两个主题之间来回切换', () => {
    expect(nextTheme('light')).toBe('dark');
    expect(nextTheme('dark')).toBe('light');
  });
});
