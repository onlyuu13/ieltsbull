export type ThemeChoice = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'ieltsbull-theme';

/**
 * 决定首屏应用哪个主题。
 * 用户显式选择过就用用户的；否则跟随系统。
 * 这个函数同时被内联防闪烁脚本和 ThemeToggle 复用，所以必须是纯函数。
 */
export function resolveTheme(stored: string | null | undefined, prefersDark: boolean): ThemeChoice {
  if (stored === 'light' || stored === 'dark') return stored;
  return prefersDark ? 'dark' : 'light';
}

export function nextTheme(current: ThemeChoice): ThemeChoice {
  return current === 'dark' ? 'light' : 'dark';
}
