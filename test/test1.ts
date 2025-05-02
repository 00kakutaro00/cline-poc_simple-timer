// @ts-check
const { test, expect } = require('@playwright/test');

test('初期状態のテスト', async ({ page }) => {
  // 1. ページにアクセスする
  await page.goto('http://0.0.0.0:8000/');

  // 2. タイマーの表示が「01:00」であることを確認する
  await expect(page.locator('text=01:00')).toBeVisible();

  // 3. スクリーンショットを撮る
  await page.screenshot({ path: 'test1.png' });
});
