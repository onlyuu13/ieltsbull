import type { Metadata } from 'next';
import { UnderConstruction } from '@/components/UnderConstruction';

export const metadata: Metadata = { title: '错题本' };

export default function Page() {
  return <UnderConstruction title="错题本" />;
}
