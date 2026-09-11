import type { Metadata } from 'next';
import { UnderConstruction } from '@/components/UnderConstruction';

export const metadata: Metadata = { title: '登录' };

export default function Page() {
  return <UnderConstruction title="登录" />;
}
