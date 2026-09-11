import { expect, test } from '@playwright/test';

/** 原站在 600–768px 平板宽度下首页文字竖排，这三个宽度是回归护栏。 */
const WIDTHS = [
  { name: 'phone', width: 375, height: 780, expectBottomTabs: true },
  { name: 'tablet', width: 680, height: 900, expectBottomTabs: true },
  { name: 'desktop', width: 1280, height: 900, expectBottomTabs: false },
] as const;

for (const size of WIDTHS) {
  test(`首页在 ${size.name} (${size.width}px) 不横向溢出`, async ({ page }) => {
    await page.setViewportSize({ width: size.width, height: size.height });
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1, name: '在真题里学雅思' })).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `${size.name} 出现了横向滚动条`).toBeLessThanOrEqual(0);

    // 顶栏必须是一行，不能被挤成竖排
    const header = page.locator('header').first();
    const box = await header.boundingBox();
    expect(box, '顶栏没有渲染').not.toBeNull();
    expect(box!.height, '顶栏高度异常，可能已折行').toBeLessThan(80);

    // 倒计时在所有宽度都必须可见
    await expect(page.getByText(/距考试/)).toBeVisible();

    const bottomTabs = page.getByRole('navigation', { name: '底部导航' });
    const desktopNav = page.getByRole('navigation', { name: '主导航' });
    if (size.expectBottomTabs) {
      await expect(bottomTabs).toBeVisible();
      await expect(desktopNav).toBeHidden();
    } else {
      await expect(bottomTabs).toBeHidden();
      await expect(desktopNav).toBeVisible();
    }

    await page.screenshot({
      path: `test-results/home-${size.name}-${size.width}.png`,
      fullPage: true,
    });
  });
}

test('面包屑只在二级页出现，首页不显示', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await expect(page.getByRole('navigation', { name: '面包屑' })).toHaveCount(0);

  await page.goto('/reading');
  await expect(page.getByRole('navigation', { name: '面包屑' })).toHaveText('首页 / 阅读');
});

test('底部 Tab 首次点击即可跳转', async ({ page }) => {
  // 原站 bug：底部导航首次点击常无响应
  await page.setViewportSize({ width: 375, height: 780 });
  await page.goto('/');
  await page.getByRole('navigation', { name: '底部导航' }).getByRole('link', { name: '阅读' }).click();
  await expect(page).toHaveURL(/\/reading$/);
});
