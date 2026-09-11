import { THEME_STORAGE_KEY } from '@/lib/theme';

/**
 * 在首屏绘制前同步设置 <html class="dark">，避免深色用户看到白闪。
 * 逻辑必须与 lib/theme.ts 的 resolveTheme 保持一致。
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var dark = stored === 'dark' ||
      (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
