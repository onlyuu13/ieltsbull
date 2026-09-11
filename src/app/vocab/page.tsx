import type { Metadata } from 'next';
import { UnderConstruction } from '@/components/UnderConstruction';

export const metadata: Metadata = { title: '背单词' };

export default function Page() {
  return <UnderConstruction title="背单词" />;
}
