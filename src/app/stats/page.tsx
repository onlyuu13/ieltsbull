import type { Metadata } from 'next';
import { UnderConstruction } from '@/components/UnderConstruction';

export const metadata: Metadata = { title: '统计' };

export default function Page() {
  return <UnderConstruction title="统计" />;
}
