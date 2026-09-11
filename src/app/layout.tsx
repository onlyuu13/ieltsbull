import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BottomTabs } from '@/components/BottomTabs';
import { ThemeScript } from '@/components/ThemeScript';
import { TopBar } from '@/components/TopBar';

export const metadata: Metadata = {
  title: {
    default: '雅思牛 IELTSBull',
    template: '%s · 雅思牛',
  },
  description: '在真题里学雅思：精读、背词、作答、解析、错题本，一个闭环。',
};

export const viewport: Viewport = {
  themeColor: '#F5C542',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh">
        <TopBar />
        <main className="mx-auto w-full max-w-shell px-4 pb-28 pt-6 md:pb-12">{children}</main>
        <BottomTabs />
      </body>
    </html>
  );
}
