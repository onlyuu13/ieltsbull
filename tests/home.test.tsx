import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';

describe('首页', () => {
  it('显示 slogan 和主 CTA', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1, name: '在真题里学雅思' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '开始今天的任务' })).toHaveAttribute('href', '/vocab');
  });

  it('四科入口齐全，只有阅读可点，其余标注即将上线', () => {
    render(<HomePage />);
    for (const name of ['听力', '阅读', '写作', '口语']) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
    expect(screen.getAllByText('即将上线')).toHaveLength(3);
    expect(screen.getByRole('link', { name: /阅读/ })).toHaveAttribute('href', '/reading');
  });
});
