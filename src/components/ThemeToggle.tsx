'use client';

import { useEffect, useState } from 'react';
import { THEME_STORAGE_KEY, nextTheme, resolveTheme, type ThemeChoice } from '@/lib/theme';

export function ThemeToggle() {
  // 初始渲染统一为 light，避免服务端/客户端 HTML 不一致；
  // 真实主题已由 <head> 内联脚本提前写到 <html class>，所以不会闪。
  const [theme, setTheme] = useState<ThemeChoice>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(resolveTheme(stored, prefersDark));
    setMounted(true);
  }, []);

  function toggle() {
    const value = nextTheme(theme);
    setTheme(value);
    window.localStorage.setItem(THEME_STORAGE_KEY, value);
    document.documentElement.classList.toggle('dark', value === 'dark');
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && theme === 'dark' ? '切换到浅色主题' : '切换到深色主题'}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-bull-ink transition hover:bg-bull-cream dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle className="dark:hidden" cx="12" cy="12" r="4" />
        <path
          className="dark:hidden"
          d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4"
        />
        <path className="hidden dark:block" d="M20 14.5A8 8 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  );
}
