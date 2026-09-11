import { expect, test } from '@playwright/test';

test('主题切换持久化，刷新后不回弹', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  await expect(html).not.toHaveClass(/dark/);

  await page.getByRole('button', { name: '切换到深色主题' }).click();
  await expect(html).toHaveClass(/dark/);

  await page.reload();
  await expect(html).toHaveClass(/dark/);

  await page.getByRole('button', { name: '切换到浅色主题' }).click();
  await expect(html).not.toHaveClass(/dark/);
});

test('深色偏好的用户首屏直接是深色，不白闪', async ({ browser }) => {
  const context = await browser.newContext({ colorScheme: 'dark' });
  const page = await context.newPage();
  await page.goto('/');
  // 内联脚本在首屏绘制前执行，DOM 就绪时 class 已经在了
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.screenshot({ path: 'test-results/home-dark-1280.png', fullPage: true });
  await context.close();
});
